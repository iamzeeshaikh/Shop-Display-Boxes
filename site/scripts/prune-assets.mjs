/**
 * Removes unreferenced assets from the build output.
 *
 * Why this exists: the product galleries locate images with `import.meta.glob`,
 * and Vite emits every asset a glob matches, whether or not a page renders it.
 * The result is that the original source PNGs ship alongside the optimized
 * AVIF/WebP derivatives that actually get served — roughly 92 MB of files no
 * HTML document references.
 *
 * This script is deliberately conservative. It reads every emitted HTML, CSS,
 * JS, and XML file, collects every asset filename mentioned anywhere in them,
 * and deletes only files in _astro/ that appear in none of them. A file is
 * never removed on the assumption that it is unused — only on the evidence
 * that nothing references it.
 *
 * Run: automatically, as part of `npm run build`.
 */

import { readdir, readFile, stat, unlink } from 'node:fs/promises';
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
const DIST_ROOT = path.join(root, 'dist');
const DIST = resolveOutDir(DIST_ROOT);
const ASSETS = path.join(DIST, '_astro');

/** Extensions whose contents can reference an asset. */
const TEXT_EXT = new Set(['.html', '.css', '.js', '.xml', '.json', '.txt', '.webmanifest']);

async function walk(dir, out = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

async function main() {
  const all = await walk(DIST);

  // Build the set of filenames referenced by any text file in the output.
  const referenced = new Set();
  for (const file of all) {
    if (!TEXT_EXT.has(path.extname(file))) continue;
    const text = await readFile(file, 'utf8');
    for (const match of text.matchAll(/_astro\/([A-Za-z0-9._-]+)/g)) {
      referenced.add(match[1]);
    }
  }

  const assets = await walk(ASSETS);
  let removed = 0;
  let bytes = 0;
  const removedByExt = {};

  for (const file of assets) {
    const name = path.basename(file);
    if (referenced.has(name)) continue;
    const { size } = await stat(file);
    await unlink(file);
    removed++;
    bytes += size;
    const ext = path.extname(name).slice(1);
    removedByExt[ext] = (removedByExt[ext] || 0) + 1;
  }

  if (removed === 0) {
    console.log('prune: nothing to remove — every emitted asset is referenced.');
    return;
  }

  const detail = Object.entries(removedByExt)
    .map(([ext, n]) => `${n} ${ext}`)
    .join(', ');
  console.log(
    `prune: removed ${removed} unreferenced asset(s) (${detail}), ` +
      `freeing ${(bytes / 1024 / 1024).toFixed(1)} MB`
  );
}

main().catch((err) => {
  console.error('prune failed:', err.message);
  process.exit(1);
});
