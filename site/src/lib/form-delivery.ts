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
 * silently swallow inquiries while appearing to work: the log makes it obvious
 * that delivery is not configured yet.
 *
 * See README → "Connecting the forms".
 */

import nodemailer from 'nodemailer';

const LEAD_RECIPIENTS = ['shanimazhar82@gmail.com', 'dev@zeecustomboxes.com'] as const;
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
  attachments: Array<{ filename: string; size: number; content?: Buffer }>;
  receivedAt: string;
  /** Path of the page the form was sent from ("/" when unknown). */
  sourcePath?: string;
  /** Set when an anti-spam check tripped. The lead is still delivered, labelled. */
  spamReason?: string;
}

function env(key: string): string {
  // Runtime env first: Vercel holds the live values in process.env. A build-time
  // empty string in import.meta.env must not shadow them.
  return process.env?.[key] || (import.meta.env?.[key] as string) || '';
}

/** The intake script files a lead under this site only when the mail names it. */
const SITE_ORIGIN = 'https://shopdisplayboxes.com';
const SITE_HOST = 'shopdisplayboxes.com';

/**
 * Plain-text body. Values are inserted as text, never as HTML.
 *
 * Only fields the sender actually filled in are shown. A short inquiry (name,
 * email, phone, message) therefore does not carry a wall of empty box-spec
 * lines the way the full quote form does — each form reads as what it is.
 */
function renderBody(payload: DeliveryPayload): string {
  const s = payload.submission;
  const label = (t: string) => `${(t + ':').padEnd(14)}`;

  const lines = [
    `New ${s.formType} submission`,
    `Received: ${payload.receivedAt}`,
    `Submitted from: ${SITE_ORIGIN}${payload.sourcePath || '/'}`,
    ...(payload.spamReason ? [`Spam check: ${payload.spamReason}`] : []),
    '',
    `${label('Name')}${s.name}`,
    `${label('Email')}${s.email}`,
    `${label('Phone')}${s.phone || '—'}`,
  ];
  if (s.businessName) lines.push(`${label('Business')}${s.businessName}`);

  // Box specification — include only the fields with a value, so nothing that
  // was left blank appears as a dash.
  const spec: Array<[string, string]> = [
    ['Product', s.product],
    ['Dimensions', s.dimensions ? `${s.dimensions} (${s.unit})` : ''],
    ['Quantity', s.quantity != null ? String(s.quantity) : ''],
    ['Material', s.material],
    ['Printing', s.printing],
    ['Coating', s.coating],
    ['Finishing', s.finishing],
    ['Add-ons', s.addOns],
    ['Required by', s.requiredDate],
    ['Shipping ZIP', s.shippingZip],
  ].filter((pair): pair is [string, string] => Boolean(pair[1]));

  if (spec.length) {
    lines.push('');
    for (const [name, value] of spec) lines.push(`${label(name)}${value}`);
  }

  if (s.notes) lines.push('', 'Notes:', s.notes);

  if (payload.attachments.length) {
    lines.push('', 'Attachments:');
    for (const a of payload.attachments) {
      lines.push(`  ${a.filename} (${Math.round(a.size / 1024)} KB)`);
    }
  }

  return lines.join('\n');
}

export function activeAdapter(): AdapterName {
  const configured = env('FORM_ADAPTER').trim().toLowerCase();
  const known: AdapterName[] = ['resend', 'sendgrid', 'smtp', 'webhook'];
  if ((known as string[]).includes(configured)) return configured as AdapterName;
  // Unset, "console" or a typo: if SMTP credentials exist, send with them rather
  // than logging the lead and dropping it.
  if (env('SMTP_HOST') && env('SMTP_USER') && (env('SMTP_PASS') || env('SMTP_PASSWORD'))) return 'smtp';
  return 'console';
}

export async function deliver(payload: DeliveryPayload): Promise<DeliveryResult> {
  const adapter = activeAdapter();
  const from = env('FORM_FROM_EMAIL');
  const s = payload.submission;
  const subject = `${payload.spamReason ? '[Possible spam] ' : ''}Quote request — ${s.product || s.formType} — ${s.name}${
    s.businessName ? ` (${s.businessName})` : ''
  } — ${SITE_HOST}`.replace(/[\r\n]+/g, ' ');
  const text = renderBody(payload);

  switch (adapter) {
    case 'resend': {
      const key = env('RESEND_API_KEY');
      if (!key || !from) {
        return { delivered: false, adapter, detail: 'resend selected but not fully configured' };
      }
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [...LEAD_RECIPIENTS], subject, text, reply_to: payload.submission.email }),
      });
      return {
        delivered: res.ok,
        adapter,
        detail: res.ok ? undefined : `resend responded ${res.status}`,
      };
    }

    case 'sendgrid': {
      const key = env('SENDGRID_API_KEY');
      if (!key || !from) {
        return { delivered: false, adapter, detail: 'sendgrid selected but not fully configured' };
      }
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: LEAD_RECIPIENTS.map((email) => ({ email })) }],
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

      // Sender configuration remains environment-specific; recipients are fixed.
      const senderEmail = env('SMTP_FROM_EMAIL') || from || user;
      const senderName = env('SMTP_FROM_NAME') || '';
      const sender = senderName ? `"${senderName}" <${senderEmail}>` : senderEmail;

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
          to: [...LEAD_RECIPIENTS],
          subject,
          text,
          // Replies go to the customer, not to the mailbox that sent it.
          replyTo: payload.submission.email,
          // Attach the uploaded artwork itself, not just its name.
          attachments: payload.attachments
            .filter((a) => a.content)
            .map((a) => ({ filename: a.filename, content: a.content })),
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

/**
 * A free-form message sent through the SAME adapter, sender settings and lead
 * recipients as deliver(). Used by /api/order, so an order reaches exactly the
 * inboxes a quote request does. `to` defaults to the lead recipients; pass a
 * buyer address only for the courtesy copy of an order.
 */
export interface Message {
  to?: string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  attachments?: Array<{ filename: string; content: Buffer }>;
  /** Logged with the message when it cannot be delivered (webhook/console). */
  data?: unknown;
}

export async function sendMessage(msg: Message): Promise<DeliveryResult> {
  const adapter = activeAdapter();
  const from = env('FORM_FROM_EMAIL');
  const to = msg.to?.length ? msg.to : [...LEAD_RECIPIENTS];
  const subject = msg.subject.replace(/[\r\n]+/g, ' ');

  switch (adapter) {
    case 'resend': {
      const key = env('RESEND_API_KEY');
      if (!key || !from) return { delivered: false, adapter, detail: 'resend selected but not fully configured' };
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to,
          subject,
          text: msg.text,
          ...(msg.html ? { html: msg.html } : {}),
          ...(msg.replyTo ? { reply_to: msg.replyTo } : {}),
          ...(msg.attachments?.length
            ? { attachments: msg.attachments.map((a) => ({ filename: a.filename, content: a.content.toString('base64') })) }
            : {}),
        }),
      });
      return { delivered: res.ok, adapter, detail: res.ok ? undefined : `resend responded ${res.status}` };
    }

    case 'sendgrid': {
      const key = env('SENDGRID_API_KEY');
      if (!key || !from) return { delivered: false, adapter, detail: 'sendgrid selected but not fully configured' };
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: to.map((email) => ({ email })) }],
          from: { email: from },
          ...(msg.replyTo ? { reply_to: { email: msg.replyTo } } : {}),
          subject,
          content: [
            { type: 'text/plain', value: msg.text },
            ...(msg.html ? [{ type: 'text/html', value: msg.html }] : []),
          ],
          ...(msg.attachments?.length
            ? { attachments: msg.attachments.map((a) => ({ filename: a.filename, content: a.content.toString('base64') })) }
            : {}),
        }),
      });
      return { delivered: res.ok, adapter, detail: res.ok ? undefined : `sendgrid responded ${res.status}` };
    }

    case 'webhook': {
      const url = env('FORM_WEBHOOK_URL');
      if (!url) return { delivered: false, adapter, detail: 'webhook selected but FORM_WEBHOOK_URL unset' };
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, text: msg.text, replyTo: msg.replyTo, data: msg.data }),
      });
      return { delivered: res.ok, adapter, detail: res.ok ? undefined : `webhook responded ${res.status}` };
    }

    case 'smtp': {
      const host = env('SMTP_HOST');
      const port = Number(env('SMTP_PORT')) || 587;
      const user = env('SMTP_USER');
      const pass = env('SMTP_PASS') || env('SMTP_PASSWORD');
      if (!host || !user || !pass) {
        return { delivered: false, adapter, detail: 'smtp selected but SMTP_HOST, SMTP_USER, or SMTP_PASS is unset' };
      }
      const senderEmail = env('SMTP_FROM_EMAIL') || from || user;
      const senderName = env('SMTP_FROM_NAME') || '';
      const sender = senderName ? `"${senderName}" <${senderEmail}>` : senderEmail;
      try {
        const transport = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
          connectionTimeout: 10_000,
          greetingTimeout: 10_000,
          socketTimeout: 15_000,
        });
        await transport.sendMail({
          from: sender,
          to,
          subject,
          text: msg.text,
          ...(msg.html ? { html: msg.html } : {}),
          ...(msg.replyTo ? { replyTo: msg.replyTo } : {}),
          attachments: (msg.attachments ?? []).map((a) => ({ filename: a.filename, content: a.content })),
        });
        return { delivered: true, adapter };
      } catch (err) {
        return { delivered: false, adapter, detail: `smtp send failed: ${err instanceof Error ? err.message : String(err)}` };
      }
    }

    case 'console':
    default:
      console.log(`\n──── MESSAGE (delivery not configured) ────\n${subject}\n${msg.text}\n`);
      return { delivered: false, adapter: 'console', detail: 'FORM_ADAPTER not configured — message logged only' };
  }
}
