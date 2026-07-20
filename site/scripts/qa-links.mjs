/**
 * Link and orphan audit over the built output.
 *
 * Checks:
 *   • every internal link resolves to a page that exists
 *   • no indexable page is orphaned (nothing links to it)
 *   • no link points at a redirect source
 *   • internal links do not pass through a redirect
 *   • external links carry rel="noopener" where they open a new tab
 *
 * The orphan check is the one that matters most: a page nothing links to is a
 * page users cannot reach, and a crawler will find it only from the sitemap.
 *
 * Run: npm run qa:links (after a build)
 */

import { readdir, readFile } from 'node:fs/promises';
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
const DIST = resolveOutDir(path.join(root, 'dist'));

/** Pages that legitimately have no inbound links. */
const ALLOWED_ORPHANS = new Set([
  '/', // the homepage is the entry point
  '/404/',
]);

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.name === 'index.html') out.push(full);
  }
  return out;
}

function toUrl(file) {
  const rel = path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('qa:links — no dist/. Run `npm run build` first.');
    process.exit(1);
  }

  const files = await walk(DIST);
  const pages = new Map(); // url -> { html, indexable }
  for (const f of files) {
    const html = await readFile(f, 'utf8');
    pages.set(toUrl(f), {
      html,
      indexable: !/name="robots" content="noindex/.test(html),
    });
  }

  const redirectSources = new Set(REDIRECTS.map((r) => r.from));
  const errors = [];
  const warnings = [];
  const inbound = new Map(); // url -> count of pages linking to it

  for (const [url, { html }] of pages) {
    const seenOnThisPage = new Set();

    for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)) {
      const tag = m[0];
      const href = m[1];

      // External links
      if (/^https?:\/\//i.test(href)) {
        if (/target="_blank"/.test(tag) && !/rel="[^"]*noopener/.test(tag)) {
          errors.push(`${url} — external link opens a new tab without rel="noopener": ${href}`);
        }
        continue;
      }

      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;

      const target = href.split('#')[0].split('?')[0];
      if (!target.startsWith('/')) continue;

      // Asset links are not pages.
      if (/\.[a-z0-9]{2,5}$/i.test(target)) continue;

      if (redirectSources.has(target)) {
        errors.push(`${url} — links through a redirect: ${target}`);
        continue;
      }

      if (!pages.has(target)) {
        errors.push(`${url} — broken internal link: ${target}`);
        continue;
      }

      // Count each destination once per source page.
      if (target !== url && !seenOnThisPage.has(target)) {
        seenOnThisPage.add(target);
        inbound.set(target, (inbound.get(target) ?? 0) + 1);
      }
    }
  }

  // ── Orphan check ─────────────────────────────────────────────────────────
  const orphans = [];
  for (const [url, { indexable }] of pages) {
    if (!indexable) continue;
    if (ALLOWED_ORPHANS.has(url)) continue;
    if ((inbound.get(url) ?? 0) === 0) orphans.push(url);
  }
  for (const o of orphans) errors.push(`orphan: nothing links to ${o}`);

  // ── Thin inbound linking (advisory) ──────────────────────────────────────
  for (const [url, { indexable }] of pages) {
    if (!indexable || ALLOWED_ORPHANS.has(url)) continue;
    const n = inbound.get(url) ?? 0;
    if (n === 1) warnings.push(`${url} has only 1 inbound link`);
  }

  console.log(`qa:links — ${pages.size} pages, ${inbound.size} link targets\n`);

  const top = [...inbound.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  console.log('Most-linked pages:');
  for (const [url, n] of top) console.log(`  ${String(n).padStart(3)}  ${url}`);
  console.log('');

  if (warnings.length) {
    console.log(`Advisory (${warnings.length}):`);
    for (const w of warnings.slice(0, 15)) console.log('  · ' + w);
    if (warnings.length > 15) console.log(`  · …and ${warnings.length - 15} more`);
    console.log('');
  }

  if (errors.length) {
    console.error(`FAILED — ${errors.length} error(s):`);
    for (const e of errors.slice(0, 40)) console.error('  ✗ ' + e);
    if (errors.length > 40) console.error(`  ✗ …and ${errors.length - 40} more`);
    process.exit(1);
  }

  console.log('✓ no broken links, no orphaned pages, no links through redirects');
}

main().catch((e) => {
  console.error('qa:links crashed:', e);
  process.exit(1);
});
