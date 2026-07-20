/**
 * SEO QA over the built output.
 *
 * Hard failures (exit 1): duplicate titles, duplicate descriptions, missing or
 * multiple H1s, missing canonical, canonical not matching the page's own URL,
 * internal links without a trailing slash, images missing alt or dimensions,
 * invalid JSON-LD, and any placeholder text left in the output.
 *
 * Advisory (reported, does not fail): title and description length outside the
 * editorial target. Length targets are guidance — a title is allowed to sit
 * outside the window rather than be forced into awkward wording.
 *
 * Run: npm run qa:seo (after a build)
 */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
const ORIGIN = 'https://shopdisplayboxes.com';

const TITLE_MIN = 50, TITLE_MAX = 60;
const DESC_MIN = 120, DESC_MAX = 130;

const PLACEHOLDER = /lorem ipsum|TODO|FIXME|XXX|PLACEHOLDER|\[insert|TBD\b/i;

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.name === 'index.html') out.push(full);
  }
  return out;
}

const errors = [];
const warnings = [];

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1] : '';
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('qa:seo — no dist/. Run `npm run build` first.');
    process.exit(1);
  }

  const files = await walk(DIST);
  const titles = new Map();
  const descs = new Map();
  const h1s = new Map();

  for (const file of files) {
    const relDir = path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
    const url = relDir === '' ? '/' : `/${relDir}/`;
    const html = await readFile(file, 'utf8');

    const isNoindex = /name="robots" content="noindex/.test(html);

    const title = pick(html, /<title>(.*?)<\/title>/s);
    const desc = pick(html, /name="description" content="([^"]*)"/);
    const canonical = pick(html, /rel="canonical" href="([^"]*)"/);
    const h1Matches = html.match(/<h1[\s>]/g) || [];
    const h1Text = pick(html, /<h1[^>]*>(.*?)<\/h1>/s).replace(/<[^>]+>/g, '').trim();

    // ── Hard checks ────────────────────────────────────────────────────────
    if (!title) errors.push(`${url} — missing <title>`);
    if (!desc) errors.push(`${url} — missing meta description`);
    if (!canonical) errors.push(`${url} — missing canonical`);

    const expected = ORIGIN + url;
    if (canonical && canonical !== expected) {
      errors.push(`${url} — canonical is "${canonical}", expected "${expected}"`);
    }

    if (h1Matches.length === 0) errors.push(`${url} — no H1`);
    if (h1Matches.length > 1) errors.push(`${url} — ${h1Matches.length} H1s (must be exactly 1)`);

    // Check visible text only. Scanning raw HTML gives false positives — the
    // legitimate `placeholder=` attribute on form inputs matches /PLACEHOLDER/i.
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ');
    const hit = visibleText.match(PLACEHOLDER);
    if (hit) {
      errors.push(`${url} — placeholder text in visible copy: "${hit[0]}"`);
    }

    // Duplicates are only meaningful among indexable pages.
    if (!isNoindex) {
      if (title) {
        if (titles.has(title)) errors.push(`duplicate title: ${url} and ${titles.get(title)}`);
        else titles.set(title, url);
      }
      if (desc) {
        if (descs.has(desc)) errors.push(`duplicate description: ${url} and ${descs.get(desc)}`);
        else descs.set(desc, url);
      }
      if (h1Text) {
        if (h1s.has(h1Text)) errors.push(`duplicate H1 "${h1Text}": ${url} and ${h1s.get(h1Text)}`);
        else h1s.set(h1Text, url);
      }
    }

    // Internal links must be absolute-path, trailing-slash, no .html.
    for (const m of html.matchAll(/<a\s[^>]*href="(\/[^"#?]*)"/g)) {
      const href = m[1];
      if (/\.html?$/.test(href)) errors.push(`${url} — link with .html extension: ${href}`);
      else if (!href.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(href)) {
        errors.push(`${url} — internal link missing trailing slash: ${href}`);
      }
      if (href !== href.toLowerCase()) {
        errors.push(`${url} — internal link not lowercase: ${href}`);
      }
    }

    // Images: alt attribute must be present (may be empty for decorative);
    // width/height must be present to prevent layout shift.
    for (const m of html.matchAll(/<img\s([^>]*)>/g)) {
      const attrs = m[1];
      if (!/\balt\b/.test(attrs)) errors.push(`${url} — <img> without alt attribute`);
      if (!/\bwidth=/.test(attrs) || !/\bheight=/.test(attrs)) {
        errors.push(`${url} — <img> without width/height`);
      }
    }

    // JSON-LD must parse.
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(m[1]);
      } catch (e) {
        errors.push(`${url} — invalid JSON-LD: ${e.message}`);
      }
    }

    // ── Advisory ───────────────────────────────────────────────────────────
    if (title && (title.length < TITLE_MIN || title.length > TITLE_MAX)) {
      warnings.push(`${url} — title ${title.length} chars (target ${TITLE_MIN}–${TITLE_MAX})`);
    }
    if (desc && (desc.length < DESC_MIN || desc.length > DESC_MAX)) {
      warnings.push(`${url} — description ${desc.length} chars (target ${DESC_MIN}–${DESC_MAX})`);
    }
  }

  console.log(`qa:seo — checked ${files.length} page(s)\n`);

  if (warnings.length) {
    console.log(`Advisory (${warnings.length}):`);
    for (const w of warnings) console.log('  · ' + w);
    console.log('');
  }

  if (errors.length) {
    console.error(`FAILED — ${errors.length} error(s):`);
    for (const e of errors) console.error('  ✗ ' + e);
    process.exit(1);
  }

  console.log('✓ no errors');
}

main().catch((e) => {
  console.error('qa:seo crashed:', e);
  process.exit(1);
});
