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

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reject(400, 'We could not read that submission. Please try again.');
  }

  const fields: Record<string, unknown> = {};
  const files: File[] = [];
  for (const [key, value] of form.entries()) {
    if (typeof value === 'string') fields[key] = value;
    else files.push(value as File);
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
  const maxBytes = Number(process.env.UPLOAD_MAX_BYTES) || 15 * 1024 * 1024;
  const attachments: Array<{ filename: string; size: number }> = [];
  for (const file of files) {
    if (!file || file.size === 0) continue;
    const check = await validateUpload(file, maxBytes);
    if (!check.ok) {
      console.warn(`[form] upload rejected: ${check.reason}`);
      return reject(422, 'That file could not be accepted. Please check the type and size.', [
        { field: 'artwork', message: 'Please upload a PDF, AI, EPS, PSD, PNG, JPG, or ZIP file.' },
      ]);
    }
    attachments.push({ filename: file.name, size: file.size });
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
