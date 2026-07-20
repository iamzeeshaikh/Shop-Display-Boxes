/**
 * Content integrity QA over the source data, not the build output.
 *
 * Catches the class of errors that produce a technically valid build with
 * broken content: a product in the registry with no content file, a blog post
 * whose `related` list names an article that does not exist, a page linking to
 * a root-level slug nothing generates, or a duplicate slug across page types.
 *
 * Run: npm run qa:content
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from '../src/data/products.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'src', 'content');

const errors = [];
const warnings = [];

async function listSlugs(dir, recursive = false) {
  const out = [];
  const full = path.join(SRC, dir);
  let entries;
  try {
    entries = await readdir(full, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (e.isDirectory() && recursive) {
      const nested = await listSlugs(path.join(dir, e.name), true);
      out.push(...nested);
    } else if (e.isFile() && e.name.endsWith('.ts')) {
      out.push({ slug: e.name.replace(/\.ts$/, ''), file: path.join(dir, e.name) });
    }
  }
  return out;
}

/** Extracts a single-quoted string array from a source file by field name. */
function extractArray(source, field) {
  const m = source.match(new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
}

/** Extracts every href: '/...' occurrence. */
function extractHrefs(source) {
  return [...source.matchAll(/href:\s*'(\/[^']*)'/g)].map((x) => x[1]);
}

async function main() {
  const productContent = await listSlugs('products');
  const pageContent = await listSlugs('pages', true);
  const blogContent = await listSlugs('blog');

  const productSlugs = new Set(productContent.map((p) => p.slug));
  const pageSlugs = new Set(pageContent.map((p) => p.slug));
  const blogSlugs = new Set(blogContent.map((p) => p.slug));

  // ── Every registered product has a content file ─────────────────────────
  for (const record of PRODUCTS) {
    if (!productSlugs.has(record.slug)) {
      errors.push(`product "${record.slug}" is in PRODUCTS but has no content file`);
    }
  }
  // ── ...and every content file is registered ─────────────────────────────
  const registered = new Set(PRODUCTS.map((p) => p.slug));
  for (const p of productContent) {
    if (!registered.has(p.slug)) {
      errors.push(`content/products/${p.slug}.ts exists but is not in PRODUCTS`);
    }
  }

  // ── No slug collisions across page types ────────────────────────────────
  const seen = new Map();
  for (const [type, set] of [
    ['product', productSlugs],
    ['page', pageSlugs],
  ]) {
    for (const slug of set) {
      if (seen.has(slug)) errors.push(`slug collision "${slug}": ${seen.get(slug)} and ${type}`);
      else seen.set(slug, type);
    }
  }

  // Every root-level slug that the site can generate.
  const rootSlugs = new Set([...productSlugs, ...pageSlugs]);

  // Static routes that exist as files rather than content entries.
  const STATIC_ROUTES = new Set(['/', '/blog/', '/locations/', '/404/']);

  // ── Internal links resolve ──────────────────────────────────────────────
  const allFiles = [
    ...productContent.map((p) => ({ ...p, dir: 'products' })),
    ...pageContent.map((p) => ({ ...p, dir: 'pages' })),
    ...blogContent.map((p) => ({ ...p, dir: 'blog' })),
  ];

  for (const entry of allFiles) {
    const source = await readFile(path.join(SRC, entry.file), 'utf8');

    for (const href of extractHrefs(source)) {
      if (STATIC_ROUTES.has(href)) continue;

      const blogMatch = href.match(/^\/blog\/([^/]+)\/$/);
      if (blogMatch) {
        if (!blogSlugs.has(blogMatch[1])) {
          errors.push(`${entry.file} links to missing article: ${href}`);
        }
        continue;
      }

      const rootMatch = href.match(/^\/([^/]+)\/$/);
      if (rootMatch) {
        if (!rootSlugs.has(rootMatch[1])) {
          errors.push(`${entry.file} links to missing page: ${href}`);
        }
        continue;
      }

      warnings.push(`${entry.file} has an unrecognized link shape: ${href}`);
    }

    // ── Related references resolve ────────────────────────────────────────
    if (entry.dir === 'blog') {
      for (const slug of extractArray(source, 'related')) {
        if (!blogSlugs.has(slug)) {
          errors.push(`${entry.file} related → missing article "${slug}"`);
        }
      }
    } else {
      for (const field of ['related', 'relatedProducts']) {
        for (const slug of extractArray(source, field)) {
          if (!productSlugs.has(slug)) {
            errors.push(`${entry.file} ${field} → missing product "${slug}"`);
          }
        }
      }
    }
  }

  console.log(
    `qa:content — ${PRODUCTS.length} products, ${pageSlugs.size} pages, ${blogSlugs.size} articles\n`
  );

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

  console.log('✓ all content references resolve');
}

main().catch((e) => {
  console.error('qa:content crashed:', e);
  process.exit(1);
});
