/**
 * Form delivery adapters.
 *
 * No delivery credentials were supplied for this project, so no adapter is
 * hardwired. The adapter is chosen at runtime from FORM_ADAPTER, and every
 * credential comes from the environment — there are no keys in this repository
 * and none in the build output.
 *
 * With FORM_ADAPTER unset or set to "console", submissions are logged to the
 * server log and nothing is sent. That is the default so the site cannot
 * silently swallow enquiries while appearing to work: the log makes it obvious
 * that delivery is not configured yet.
 *
 * See README → "Connecting the forms".
 */

import nodemailer from 'nodemailer';
import type { QuoteSubmission } from './form-validation';

export type AdapterName = 'console' | 'resend' | 'sendgrid' | 'smtp' | 'webhook';

export interface DeliveryResult {
  delivered: boolean;
  adapter: AdapterName;
  /** Logged server-side. Never returned to the visitor. */
  detail?: string;
}

export interface DeliveryPayload {
  submission: QuoteSubmission;
  attachments: Array<{ filename: string; size: number }>;
  receivedAt: string;
}

function env(key: string): string {
  // import.meta.env is populated at build; process.env at runtime on the server.
  return (import.meta.env?.[key] as string) ?? process.env?.[key] ?? '';
}

/** Plain-text body. Values are inserted as text, never as HTML. */
function renderBody(payload: DeliveryPayload): string {
  const s = payload.submission;
  const lines = [
    `New ${s.formType} submission`,
    `Received: ${payload.receivedAt}`,
    '',
    `Name:          ${s.name}`,
    `Business:      ${s.businessName || '—'}`,
    `Email:         ${s.email}`,
    `Phone:         ${s.phone || '—'}`,
    '',
    `Product:       ${s.product || '—'}`,
    `Dimensions:    ${s.dimensions || '—'} (${s.unit})`,
    `Quantity:      ${s.quantity ?? '—'}`,
    `Material:      ${s.material || '—'}`,
    `Printing:      ${s.printing || '—'}`,
    `Coating:       ${s.coating || '—'}`,
    `Finishing:     ${s.finishing || '—'}`,
    `Add-ons:       ${s.addOns || '—'}`,
    `Required by:   ${s.requiredDate || '—'}`,
    `Shipping ZIP:  ${s.shippingZip || '—'}`,
    '',
    'Notes:',
    s.notes || '—',
  ];

  if (payload.attachments.length) {
    lines.push('', 'Attachments:');
    for (const a of payload.attachments) {
      lines.push(`  ${a.filename} (${Math.round(a.size / 1024)} KB)`);
    }
  }

  return lines.join('\n');
}

export function activeAdapter(): AdapterName {
  const configured = env('FORM_ADAPTER').toLowerCase();
  const known: AdapterName[] = ['console', 'resend', 'sendgrid', 'smtp', 'webhook'];
  return (known as string[]).includes(configured) ? (configured as AdapterName) : 'console';
}

export async function deliver(payload: DeliveryPayload): Promise<DeliveryResult> {
  const adapter = activeAdapter();
  const to = env('FORM_TO_EMAIL');
  const from = env('FORM_FROM_EMAIL');
  const subject = `${payload.submission.formType}: ${payload.submission.name}${
    payload.submission.businessName ? ` — ${payload.submission.businessName}` : ''
  }`;
  const text = renderBody(payload);

  switch (adapter) {
    case 'resend': {
      const key = env('RESEND_API_KEY');
      if (!key || !to || !from) {
        return { delivered: false, adapter, detail: 'resend selected but not fully configured' };
      }
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [to], subject, text, reply_to: payload.submission.email }),
      });
      return {
        delivered: res.ok,
        adapter,
        detail: res.ok ? undefined : `resend responded ${res.status}`,
      };
    }

    case 'sendgrid': {
      const key = env('SENDGRID_API_KEY');
      if (!key || !to || !from) {
        return { delivered: false, adapter, detail: 'sendgrid selected but not fully configured' };
      }
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from },
          reply_to: { email: payload.submission.email },
          subject,
          content: [{ type: 'text/plain', value: text }],
        }),
      });
      return {
        delivered: res.ok,
        adapter,
        detail: res.ok ? undefined : `sendgrid responded ${res.status}`,
      };
    }

    case 'webhook': {
      const url = env('FORM_WEBHOOK_URL');
      if (!url) {
        return { delivered: false, adapter, detail: 'webhook selected but FORM_WEBHOOK_URL unset' };
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return {
        delivered: res.ok,
        adapter,
        detail: res.ok ? undefined : `webhook responded ${res.status}`,
      };
    }

    case 'smtp': {
      const host = env('SMTP_HOST');
      const port = Number(env('SMTP_PORT')) || 587;
      const user = env('SMTP_USER');
      // SMTP_PASS is the documented name; SMTP_PASSWORD accepted as an alias.
      const pass = env('SMTP_PASS') || env('SMTP_PASSWORD');

      if (!host || !user || !pass) {
        return {
          delivered: false,
          adapter,
          detail: 'smtp selected but SMTP_HOST, SMTP_USER, or SMTP_PASS is unset',
        };
      }

      // Recipient and sender, with the FORM_* names as fallbacks.
      const recipient = env('SMTP_TO') || to;
      const senderEmail = env('SMTP_FROM_EMAIL') || from || user;
      const senderName = env('SMTP_FROM_NAME') || '';
      const sender = senderName ? `"${senderName}" <${senderEmail}>` : senderEmail;

      if (!recipient) {
        return { delivered: false, adapter, detail: 'smtp selected but SMTP_TO is unset' };
      }

      try {
        const transport = nodemailer.createTransport({
          host,
          port,
          // 587 uses STARTTLS (secure:false then upgrade); 465 is implicit TLS.
          secure: port === 465,
          auth: { user, pass },
          // Serverless functions are short-lived; fail fast rather than hold
          // the request open until the platform timeout.
          connectionTimeout: 10_000,
          greetingTimeout: 10_000,
          socketTimeout: 15_000,
        });

        await transport.sendMail({
          from: sender,
          to: recipient,
          subject,
          text,
          // Replies go to the customer, not to the mailbox that sent it.
          replyTo: payload.submission.email,
        });

        return { delivered: true, adapter };
      } catch (err) {
        // Detail is logged server-side only — SMTP errors can echo credentials.
        return {
          delivered: false,
          adapter,
          detail: `smtp send failed: ${err instanceof Error ? err.message : String(err)}`,
        };
      }
    }

    case 'console':
    default:
      console.log(
        '\n──── FORM SUBMISSION (delivery not configured) ────\n' +
          text +
          '\n───────────────────────────────────────────────────\n'
      );
      return {
        delivered: false,
        adapter: 'console',
        detail: 'FORM_ADAPTER not configured — submission logged only',
      };
  }
}
