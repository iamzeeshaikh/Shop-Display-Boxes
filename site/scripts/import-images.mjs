/**
 * Imports supplied product photography into src/assets/products/.
 *
 * The originals in ../Images/ are the archive of record and are never renamed,
 * moved, or written to by this script — it only reads them. Copies are given
 * descriptive, slug-based filenames so the delivered URLs are readable, then
 * Astro's asset pipeline generates AVIF/WebP derivatives at build time with
 * content hashes for immutable caching.
 *
 * Folders consolidated during the product audit (see src/data/products.ts) have
 * their images merged into the destination product's gallery, after that
 * product's own images, so the primary/LCP image is never displaced.
 *
 * Run: npm run images
 */

import { readdir, mkdir, copyFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from '../src/data/products.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.resolve(root, '..', 'Images');
const DEST = path.join(root, 'src', 'assets', 'products');

/** Sorts "name-2.png" before "name-10.png" instead of lexically. */
function naturalSort(a, b) {
  return a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' });
}

async function pngsIn(folder) {
  const dir = path.join(SOURCE, folder);
  if (!existsSync(dir)) {
    throw new Error(`Source folder missing: ${folder}`);
  }
  const files = (await readdir(dir)).filter((f) => /\.png$/i.test(f)).sort(naturalSort);
  return files.map((f) => path.join(dir, f));
}

async function main() {
  await mkdir(DEST, { recursive: true });

  const manifest = {};
  let copied = 0;
  let merged = 0;

  for (const product of PRODUCTS) {
    const outDir = path.join(DEST, product.slug);
    await mkdir(outDir, { recursive: true });

    const own = await pngsIn(product.sourceFolder);
    const extra = [];
    for (const folder of product.mergedFolders ?? []) {
      const files = await pngsIn(folder);
      extra.push(...files);
      merged += files.length;
    }

    const all = [...own, ...extra];
    const entries = [];

    for (const [i, src] of all.entries()) {
      const filename = `${product.slug}-${i + 1}.png`;
      const dest = path.join(outDir, filename);

      // Skip the copy when the destination is already current.
      let skip = false;
      if (existsSync(dest)) {
        const [a, b] = await Promise.all([stat(src), stat(dest)]);
        skip = a.size === b.size;
      }
      if (!skip) {
        await copyFile(src, dest);
        copied++;
      }

      entries.push({
        file: filename,
        /** Provenance, so any image can be traced back to what was supplied. */
        source: path.relative(SOURCE, src),
        mergedFrom: i >= own.length ? path.dirname(path.relative(SOURCE, src)) : null,
      });
    }

    manifest[product.slug] = entries;
  }

  await writeFile(
    path.join(DEST, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );

  const total = Object.values(manifest).reduce((n, e) => n + e.length, 0);
  console.log(
    `images: ${total} across ${PRODUCTS.length} products ` +
      `(${copied} copied, ${merged} merged from consolidated folders)`
  );

  const thin = Object.entries(manifest).filter(([, e]) => e.length < 3);
  if (thin.length) {
    console.warn(
      `\n  Note: ${thin.length} product(s) have fewer than 3 images:\n` +
        thin.map(([s, e]) => `    ${s} (${e.length})`).join('\n')
    );
  }
}

main().catch((err) => {
  console.error('image import failed:', err.message);
  process.exit(1);
});
