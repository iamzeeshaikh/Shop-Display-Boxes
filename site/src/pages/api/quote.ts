/**
 * Form submission endpoint.
 *
 * Requires a server adapter — see README → "Connecting the forms". With the
 * site built as pure static output this route is not emitted, and the forms
 * will post to a URL that does not exist. That is deliberate and documented:
 * shipping a form that silently discards enquiries would be worse.
 *
 * Security posture:
 *   • every field revalidated server-side, independent of the browser
 *   • honeypot and submission-timing checks before any work is done
 *   • per-instance rate limiting
 *   • uploads checked by extension, size, and magic number
 *   • generic errors to the client, detailed reasons to the server log only
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import {
  validateQuote,
  checkHoneypot,
  checkTiming,
  checkRateLimit,
  validateUpload,
} from '../../lib/form-validation';
import { deliver } from '../../lib/form-delivery';

/** Generic response. Never reveals which check failed. */
function reject(status: number, message: string, errors: unknown[] = []) {
  return new Response(JSON.stringify({ ok: false, message, errors }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // ── Rate limit before doing any parsing work ──────────────────────────────
  const limited = checkRateLimit(clientAddress ?? 'unknown');
  if (limited) {
    console.warn(`[form] rejected: ${limited}`);
    return reject(429, 'Too many submissions. Please wait a moment and try again.');
  }

  /**
   * Bodies arrive as JSON. Multipart is still accepted for a no-JavaScript
   * submit, but the browser forms post JSON with the artwork base64-encoded:
   * parsing multipart in this runtime is unreliable and took the function down
   * with a 502 rather than returning a usable error.
   */
  const fields: Record<string, unknown> = {};
  const files: File[] = [];
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return reject(400, 'We could not read that submission. Please try again.');
    }

    for (const [key, value] of Object.entries(body)) {
      if (typeof value === 'string') fields[key] = value;
    }

    // Artwork travels as { artworkName, artworkType, artwork: base64 }.
    const encoded = typeof body.artwork === 'string' ? body.artwork : '';
    const name = typeof body.artworkName === 'string' ? body.artworkName : '';
    if (encoded && name) {
      try {
        const bytes = Buffer.from(encoded, 'base64');
        files.push(
          new File([new Uint8Array(bytes)], name, {
            type: typeof body.artworkType === 'string' ? body.artworkType : 'application/octet-stream',
          }),
        );
      } catch {
        return reject(422, 'That file could not be read. Please try a different file.');
      }
    }
    delete fields.artwork;
    delete fields.artworkName;
    delete fields.artworkType;
  } else {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return reject(400, 'We could not read that submission. Please try again.');
    }

    for (const [key, value] of form.entries()) {
      if (typeof value === 'string') fields[key] = value;
      else files.push(value as File);
    }
  }

  // ── Anti-automation. Return 200 on honeypot so bots learn nothing. ────────
  const honeypot = checkHoneypot(fields);
  if (honeypot) {
    console.warn(`[form] rejected: ${honeypot}`);
    return new Response(JSON.stringify({ ok: true, message: 'Thank you.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const timing = checkTiming(fields.startedAt);
  if (timing) {
    console.warn(`[form] rejected: ${timing}`);
    return reject(400, 'That submission could not be processed. Please try again.');
  }

  // ── Field validation ──────────────────────────────────────────────────────
  const result = validateQuote(fields);
  if (!result.ok) {
    return reject(422, 'Please check the highlighted fields.', result.errors);
  }

  // ── Uploads ───────────────────────────────────────────────────────────────
  // Vercel serverless rejects request bodies over ~4.5 MB before this runs, so
  // there is no point accepting more; 4 MB keeps a clean margin.
  const maxBytes = Number(process.env.UPLOAD_MAX_BYTES) || 4 * 1024 * 1024;
  const attachments: Array<{ filename: string; size: number; content: Buffer }> = [];
  for (const file of files) {
    if (!file || file.size === 0) continue;
    const check = await validateUpload(file, maxBytes);
    if (!check.ok) {
      console.warn(`[form] upload rejected: ${check.reason}`);
      return reject(422, 'That file could not be accepted. Please check the type and size.', [
        { field: 'artwork', message: 'Please upload a PDF, AI, EPS, PSD, PNG, JPG, or ZIP file.' },
      ]);
    }
    // Read the bytes so the file can actually be attached to the delivery email,
    // not merely named in the body.
    const content = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, size: file.size, content });
  }

  // ── Delivery ──────────────────────────────────────────────────────────────
  const delivery = await deliver({
    submission: result.data!,
    attachments,
    receivedAt: new Date().toISOString(),
  });

  if (!delivery.delivered) {
    // Log the reason; tell the visitor something true and useful.
    console.error(`[form] not delivered via ${delivery.adapter}: ${delivery.detail}`);
    if (delivery.adapter === 'console') {
      return new Response(
        JSON.stringify({
          ok: true,
          message: 'Thank you — your enquiry has been received.',
          note: 'Delivery is not configured on this environment.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    return reject(502, 'We could not send that just now. Please try again or email us directly.');
  }

  return new Response(
    JSON.stringify({ ok: true, message: 'Thank you — your enquiry has been received.' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
