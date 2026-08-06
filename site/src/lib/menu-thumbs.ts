/**
 * Thumbnails for the header dropdown menus.
 *
 * Products carry their own gallery images. Industry and location pages do not,
 * so each borrows the image of a representative product it already references:
 * an industry uses its first `relatedProducts` entry, a state or city its first
 * `products` entry. The result is a map of href → thumbnail URL, memoized at
 * module scope so the transforms run once per build rather than per page.
 *
 * Any menu entry whose product image cannot be resolved is simply omitted — the
 * caller renders text only.
 */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import type { PageContent } from '../data/page-content';
import { PRODUCT_MENU } from '../data/navigation';
import { PUBLISHED_STATES, PUBLISHED_CITIES } from '../data/locations';

// '!**/._*' keeps macOS AppleDouble sidecars (exFAT drive) out of the glob —
// critical here because this glob is eager, so a sidecar would be imported as
// an image at build time and crash the build.
const pngs = import.meta.glob<{ default: ImageMetadata }>(
  ['../assets/products/**/*.png', '!**/._*'],
  { eager: true }
);
const industryContent = import.meta.glob<{ default: PageContent }>(
  '../content/pages/industries/*.ts',
  { eager: true }
);

/** Small optimized thumbnail for a product slug, or null if it has no image. */
async function productThumb(productSlug: string | undefined): Promise<string | null> {
  if (!productSlug) return null;
  const keys = Object.keys(pngs).filter((k) => k.includes(`/products/${productSlug}/`));
  if (keys.length === 0) return null;
  const key = keys.find((k) => k.endsWith('-1.png')) ?? keys.sort()[0];
  const img = await getImage({ src: pngs[key].default, width: 96, format: 'webp' });
  return img.src;
}

let cache: Record<string, string> | null = null;

/** Map of menu href → thumbnail URL, covering products, industries, locations. */
export async function menuThumbnails(): Promise<Record<string, string>> {
  if (cache) return cache;

  const map: Record<string, string> = {};
  const add = async (href: string, productSlug: string | undefined) => {
    const src = await productThumb(productSlug);
    if (src) map[href] = src;
  };

  // Products — their own hero image.
  for (const column of PRODUCT_MENU) {
    for (const link of column.links) {
      await add(link.href, link.href.replace(/\//g, ''));
    }
  }

  // Industries — the image of the first product the page recommends.
  for (const mod of Object.values(industryContent)) {
    const page = mod.default;
    await add(`/${page.slug}/`, page.relatedProducts?.[0]);
  }

  // Locations — the image of the first product tied to that market.
  for (const state of PUBLISHED_STATES) await add(`/${state.slug}/`, state.products?.[0]);
  for (const city of PUBLISHED_CITIES) await add(`/${city.slug}/`, city.products?.[0]);

  cache = map;
  return map;
}
