/**
 * Product photo lookup for the Showroom templates.
 *
 * Every photo on the site comes from the supplied product photography
 * (Images/ → src/assets/products/ via `npm run images`). Files are named
 * `<slug>-<n>.png`, so a photo is addressed as (product slug, number).
 */
import type { ImageMetadata } from 'astro';

// '!**/._*' keeps macOS AppleDouble sidecars out of the glob.
const modules = import.meta.glob<{ default: ImageMetadata }>([
  '../assets/products/**/*.png',
  '!**/._*',
]);

export interface PhotoRef {
  slug: string;
  n: number;
}

/** Load one product photo. Throws on a bad reference so a typo fails the build. */
export async function photo(slug: string, n = 1): Promise<ImageMetadata> {
  const key = `../assets/products/${slug}/${slug}-${n}.png`;
  const load = modules[key];
  if (!load) throw new Error(`photos: no image ${slug}-${n}.png — run \`npm run images\``);
  return (await load()).default;
}

export const photoOf = (ref: PhotoRef) => photo(ref.slug, ref.n);
