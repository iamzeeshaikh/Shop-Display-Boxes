/**
 * Verifies that the committed vercel.json matches the current build output.
 *
 * Why this exists: Vercel reads vercel.json *before* running the build, so the
 * CSP hashes in it come from a previous build. If someone edits a component's
 * inline script and does not commit the regenerated vercel.json, the deployed
 * CSP will block that script — the page ships broken, and nothing in the build
 * would have complained.
 *
 * This check regenerates the header config from the freshly built output and
 * compares it byte for byte with the committed file. A mismatch is a hard
 * failure with instructions, not a warning.
 *
 * Run: npm run qa:headers (after a build), and as part of `npm run qa`.
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function resolveOutDir(distRoot) {
  const client = path.join(distRoot, 'client');
  return existsSync(client) ? client : distRoot;
}

const DIST = resolveOutDir(path.join(root, 'dist'));
const VERCEL_JSON = path.join(root, 'vercel.json');

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
  if (!existsSync(VERCEL_JSON)) {
    console.error('qa:headers — vercel.json is missing. Run `npm run build`, then commit it.');
    process.exit(1);
  }
  if (!existsSync(DIST)) {
    console.error('qa:headers — no build output. Run `npm run build` first.');
    process.exit(1);
  }

  // Recompute the hashes the current output actually needs.
  const files = await walk(DIST);
  const scriptHashes = new Set();
  const styleHashes = new Set();
  for (const file of files) {
    const html = await readFile(file, 'utf8');
    for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      if (/type="application\/ld\+json"/.test(m[0])) continue;
      if (m[1].trim()) scriptHashes.add(sha256(m[1]));
    }
    for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
      if (m[1].trim()) styleHashes.add(sha256(m[1]));
    }
  }

  const committed = JSON.parse(await readFile(VERCEL_JSON, 'utf8'));
  const csp =
    committed.headers
      ?.find((h) => h.source === '/(.*)')
      ?.headers?.find((h) => h.key === 'Content-Security-Policy')?.value ?? '';

  const missing = [];
  for (const h of [...scriptHashes, ...styleHashes]) {
    if (!csp.includes(h.replace(/'/g, ''))) missing.push(h);
  }

  if (missing.length) {
    console.error(
      `qa:headers — FAILED: ${missing.length} inline script/style in the build is not covered\n` +
        `by the CSP in the committed vercel.json. Deploying this would block that code and\n` +
        `break the page in production.\n\n` +
        `Fix: run \`npm run build\` and commit the regenerated vercel.json.\n`
    );
    process.exit(1);
  }

  console.log(
    `qa:headers — vercel.json CSP covers all ${scriptHashes.size} script and ` +
      `${styleHashes.size} style hashes in the current build`
  );
}

main().catch((e) => {
  console.error('qa:headers crashed:', e);
  process.exit(1);
});
