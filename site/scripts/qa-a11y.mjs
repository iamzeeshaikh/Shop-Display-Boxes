/**
 * Accessibility and CSP-integrity checks over the built output.
 *
 * This is a static structural audit, not a substitute for testing with real
 * assistive technology. It catches the mechanical failures — missing labels,
 * broken heading order, unlabelled controls — that are objectively checkable
 * from the HTML. It cannot tell you whether the page makes sense to a screen
 * reader user, and the accessibility page says so.
 *
 * It also verifies that every inline script in the output is covered by a hash
 * in the generated CSP, because a missed hash means a broken page in
 * production rather than a warning.
 *
 * Run: npm run qa:a11y (after a build)
 */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
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

const errors = [];
const warnings = [];

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.name === 'index.html') out.push(full);
  }
  return out;
}

const sha256 = (s) => `sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}`;

async function main() {
  if (!existsSync(DIST)) {
    console.error('qa:a11y — no dist/. Run `npm run build` first.');
    process.exit(1);
  }

  const files = await walk(DIST);
  const csp = existsSync(path.join(DIST, '_headers'))
    ? await readFile(path.join(DIST, '_headers'), 'utf8')
    : '';

  for (const file of files) {
    const url = '/' + path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
    const page = url === '/' ? '/' : url + '/';
    const html = await readFile(file, 'utf8');

    // ── Document structure ─────────────────────────────────────────────────
    if (!/<html[^>]+lang="/.test(html)) errors.push(`${page} — <html> has no lang attribute`);
    if (!/class="skip-link"/.test(html)) errors.push(`${page} — no skip-to-content link`);
    if (!/<main[\s>]/.test(html)) errors.push(`${page} — no <main> landmark`);
    if (!/<h1[\s>]/.test(html)) errors.push(`${page} — no H1`);

    // ── Heading order ──────────────────────────────────────────────────────
    const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        warnings.push(`${page} — heading jumps from h${levels[i - 1]} to h${levels[i]}`);
        break;
      }
    }

    // ── Images ─────────────────────────────────────────────────────────────
    for (const m of html.matchAll(/<img\s([^>]*)>/g)) {
      const attrs = m[1];
      if (!/\balt\b/.test(attrs)) errors.push(`${page} — <img> without alt`);
      if (!/\bwidth=/.test(attrs) || !/\bheight=/.test(attrs)) {
        errors.push(`${page} — <img> without width/height (layout shift risk)`);
      }
    }

    // ── Form controls must be labelled ─────────────────────────────────────
    for (const m of html.matchAll(/<(input|select|textarea)\s([^>]*)>/g)) {
      const [, tag, attrs] = m;
      if (/type="(hidden|submit|button)"/.test(attrs)) continue;
      const id = attrs.match(/\bid="([^"]+)"/)?.[1];
      const labelled =
        /aria-label=/.test(attrs) ||
        /aria-labelledby=/.test(attrs) ||
        (id && new RegExp(`<label[^>]*\\bfor="${id}"`).test(html));
      if (!labelled) errors.push(`${page} — <${tag}> without an associated label`);
    }

    // ── Buttons and links need an accessible name ──────────────────────────
    for (const m of html.matchAll(/<button\s?([^>]*)>([\s\S]*?)<\/button>/g)) {
      const [, attrs, inner] = m;
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text && !/aria-label=/.test(attrs)) {
        errors.push(`${page} — <button> with no accessible name`);
      }
    }

    // ── External links opening a new tab ───────────────────────────────────
    for (const m of html.matchAll(/<a\s([^>]*target="_blank"[^>]*)>/g)) {
      if (!/rel="[^"]*noopener/.test(m[1])) {
        errors.push(`${page} — target="_blank" without rel="noopener"`);
      }
    }

    // ── Tables need header cells ───────────────────────────────────────────
    for (const m of html.matchAll(/<table[\s>][\s\S]*?<\/table>/g)) {
      if (!/<th[\s>]/.test(m[0])) warnings.push(`${page} — <table> without any <th>`);
    }

    // ── CSP covers every inline script ─────────────────────────────────────
    if (csp) {
      for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
        if (/type="application\/ld\+json"/.test(m[0])) continue;
        if (!m[1].trim()) continue;
        if (!csp.includes(sha256(m[1]))) {
          errors.push(`${page} — inline script not covered by a CSP hash (page would break)`);
        }
      }
    }
  }

  console.log(`qa:a11y — checked ${files.length} page(s)\n`);

  if (warnings.length) {
    const unique = [...new Set(warnings)];
    console.log(`Advisory (${unique.length}):`);
    for (const w of unique.slice(0, 12)) console.log('  · ' + w);
    if (unique.length > 12) console.log(`  · …and ${unique.length - 12} more`);
    console.log('');
  }

  if (errors.length) {
    const unique = [...new Set(errors)];
    console.error(`FAILED — ${unique.length} unique error(s):`);
    for (const e of unique.slice(0, 25)) console.error('  ✗ ' + e);
    if (unique.length > 25) console.error(`  ✗ …and ${unique.length - 25} more`);
    process.exit(1);
  }

  console.log('✓ structure, labels, images, and CSP hashes all check out');
  console.log('  Note: this is a static audit. It does not replace testing with assistive');
  console.log('  technology, and /accessibility/ states that no such audit has been done.');
}

main().catch((e) => {
  console.error('qa:a11y crashed:', e);
  process.exit(1);
});
