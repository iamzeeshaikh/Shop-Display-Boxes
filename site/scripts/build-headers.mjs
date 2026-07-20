/**
 * Generates security headers with a hash-based Content Security Policy.
 *
 * Most static sites settle for `script-src 'self' 'unsafe-inline'`, which
 * defeats most of the point of having a CSP — any injected inline script would
 * execute. This site emits only a handful of distinct inline scripts and
 * styles, so instead of allowing all inline code we hash each one and allow
 * exactly those.
 *
 * The hashes are computed from the built output, so they cannot drift from
 * what is actually served: change a component's script and the hash changes
 * with it on the next build.
 *
 * Outputs:
 *   dist/_headers   — Netlify / Cloudflare Pages
 *   dist/vercel.json — Vercel (headers + redirects)
 *
 * Run: automatically as part of `npm run build`.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { REDIRECTS } from '../src/data/redirects.ts';

/**
 * Resolves the directory holding the built HTML.
 *
 * With a server adapter installed, Astro splits output into dist/client and
 * dist/server. Without one it writes straight to dist/. Both layouts are
 * supported so the QA scripts keep working whichever adapter is configured.
 */
function resolveOutDir(distRoot) {
  const client = path.join(distRoot, 'client');
  return existsSync(client) ? client : distRoot;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST_ROOT = path.join(root, 'dist');
const DIST = resolveOutDir(DIST_ROOT);

/**
 * Analytics hosts, allowed only so a configured GA4/GTM integration works.
 * With no analytics ID configured, nothing loads from them anyway — but the
 * policy has to permit them or enabling analytics later would silently break.
 */
const ANALYTICS = 'https://www.googletagmanager.com https://www.google-analytics.com';

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const sha256 = (s) => `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`;

async function main() {
  const files = await walk(DIST);
  const scriptHashes = new Set();
  const styleHashes = new Set();

  for (const file of files) {
    const html = await readFile(file, 'utf8');

    for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      // JSON-LD is data, not executable script, and needs no hash.
      if (/type="application\/ld\+json"/.test(m[0])) continue;
      if (m[1].trim()) scriptHashes.add(sha256(m[1]));
    }

    for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
      if (m[1].trim()) styleHashes.add(sha256(m[1]));
    }
  }

  const csp = [
    `default-src 'self'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    // Blocks this site being framed — clickjacking protection via CSP rather
    // than the legacy X-Frame-Options header.
    `frame-ancestors 'none'`,
    `object-src 'none'`,
    `script-src 'self' ${ANALYTICS} ${[...scriptHashes].join(' ')}`,
    `style-src 'self' ${[...styleHashes].join(' ')}`,
    // Fonts are self-hosted; no external font host is permitted.
    `font-src 'self'`,
    `img-src 'self' data: ${ANALYTICS}`,
    `connect-src 'self' ${ANALYTICS}`,
    `manifest-src 'self'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  const headers = {
    'Content-Security-Policy': csp,
    // Sent only over HTTPS. Do not enable preload until the domain is confirmed
    // to serve every subdomain over HTTPS — preload is hard to reverse.
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy':
      'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'X-Frame-Options': 'DENY',
  };

  // ── Netlify / Cloudflare Pages ─────────────────────────────────────────
  const lines = ['/*'];
  for (const [k, v] of Object.entries(headers)) lines.push(`  ${k}: ${v}`);

  // Hashed assets are immutable and can be cached indefinitely.
  lines.push('', '/_astro/*', '  Cache-Control: public, max-age=31536000, immutable');
  lines.push('', '/fonts/*', '  Cache-Control: public, max-age=31536000, immutable');
  // HTML must revalidate so content changes are picked up.
  lines.push('', '/*.html', '  Cache-Control: public, max-age=0, must-revalidate');

  await writeFile(path.join(DIST_ROOT, '_headers'), lines.join('\n') + '\n', 'utf8');

  // ── Netlify redirects ──────────────────────────────────────────────────
  const redirectLines = REDIRECTS.map((r) => `${r.from}  ${r.to}  ${r.status}`);
  await writeFile(path.join(DIST_ROOT, '_redirects'), redirectLines.join('\n') + '\n', 'utf8');

  // ── Vercel ─────────────────────────────────────────────────────────────
  const vercel = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    trailingSlash: true,
    cleanUrls: false,
    headers: [
      {
        source: '/(.*)',
        headers: Object.entries(headers).map(([key, value]) => ({ key, value })),
      },
      {
        source: '/_astro/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ],
    redirects: REDIRECTS.map((r) => ({
      source: r.from.replace(/\/$/, ''),
      destination: r.to,
      permanent: r.status === 301,
    })),
  };
  await writeFile(path.join(DIST_ROOT, 'vercel.json'), JSON.stringify(vercel, null, 2) + '\n', 'utf8');

  console.log(
    `headers: CSP built from ${scriptHashes.size} script hash(es) and ${styleHashes.size} style hash(es); ` +
      `${REDIRECTS.length} redirect(s) written`
  );
}

main().catch((e) => {
  console.error('build-headers failed:', e.message);
  process.exit(1);
});
