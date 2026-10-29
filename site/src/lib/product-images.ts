/**
 * The delivered image URLs for a product: the first four gallery photos as
 * 1200px WebP. The Product JSON-LD, the Open Graph tag and the Merchant feed all
 * call this, so the feed's image_link is the exact file the product page uses.
 */
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// '!**/._*' keeps macOS AppleDouble sidecars (exFAT drive) out of the glob.
const imageModules = import.meta.glob<{ default: ImageMetadata }>([
  '../assets/products/**/*.png',
  '!**/._*',
]);

export async function productImages(slug: string, files: Array<{ file: string }>, count = 4): Promise<string[]> {
  return Promise.all(
    files.slice(0, count).map(async (entry) => {
      const load = imageModules[`../assets/products/${slug}/${entry.file}`];
      if (!load) throw new Error(`product-images: missing ${slug}/${entry.file} — run \`npm run images\``);
      const optimized = await getImage({ src: (await load()).default, width: 1200, format: 'webp' });
      return optimized.src;
    })
  );
}
