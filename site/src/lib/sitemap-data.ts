/**
 * Sitemap source data.
 *
 * Built by hand rather than with @astrojs/sitemap for two reasons the brief
 * requires and that integration cannot do:
 *
 *   1. The index must live at exactly /sitemap.xml. The integration emits
 *      sitemap-index.xml.
 *   2. `lastmod` must reflect when content actually changed. The integration
 *      stamps build time on every URL, which tells a crawler nothing and
 *      trains it to ignore the signal.
 *
 * Every entry here carries a date from its own content file. Pages with no
 * meaningful date (the hub, the homepage) omit lastmod entirely rather than
 * inventing one — an absent lastmod is honest, a fabricated one is not.
 */

import { PRODUCTS } from '../data/products';
import { PUBLISHED_STATES, PUBLISHED_CITIES } from '../data/locations';
import type { ProductContent } from '../data/product-content';
import type { PageContent } from '../data/page-content';
import type { BlogPost } from '../data/blog';
import { isNoindex } from './indexation.mjs';
import { absolute } from './urls';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  /** Image URLs for the image sitemap extension. */
  images?: string[];
}

export type SitemapName =
  | 'products'
  | 'pages'
  | 'industries'
  | 'guides'
  | 'blog'
  | 'states'
  | 'cities';

const productContent = import.meta.glob<{ default: ProductContent }>(
  '../content/products/*.ts',
  { eager: true }
);
const pageContent = import.meta.glob<{ default: PageContent }>('../content/pages/**/*.ts', {
  eager: true,
});
const blogContent = import.meta.glob<{ default: BlogPost }>('../content/blog/*.ts', {
  eager: true,
});

/** Drops anything that is noindex — a noindex URL must never enter a sitemap. */
function indexableOnly(entries: SitemapEntry[]): SitemapEntry[] {
  return entries.filter((e) => {
    const pathname = new URL(e.loc).pathname;
    return !isNoindex(pathname);
  });
}

export function getSitemap(name: SitemapName): SitemapEntry[] {
  switch (name) {
    case 'products':
      return indexableOnly(
        PRODUCTS.flatMap((record) => {
          const mod = productContent[`../content/products/${record.slug}.ts`];
          if (!mod) return [];
          return [{ loc: absolute(`/${record.slug}/`), lastmod: mod.default.updated }];
        })
      );

    case 'pages':
      return indexableOnly(
        Object.entries(pageContent)
          .filter(([file]) => !file.includes('/industries/') && !file.includes('/guides/'))
          .map(([, mod]) => ({
            loc: absolute(`/${mod.default.slug}/`),
            lastmod: mod.default.updated,
          }))
          .concat([{ loc: absolute('/') }, { loc: absolute('/blog/') }, { loc: absolute('/locations/') }])
      );

    case 'industries':
      return indexableOnly(
        Object.entries(pageContent)
          .filter(([file]) => file.includes('/industries/'))
          .map(([, mod]) => ({
            loc: absolute(`/${mod.default.slug}/`),
            lastmod: mod.default.updated,
          }))
      );

    case 'guides':
      return indexableOnly(
        Object.entries(pageContent)
          .filter(([file]) => file.includes('/guides/'))
          .map(([, mod]) => ({
            loc: absolute(`/${mod.default.slug}/`),
            lastmod: mod.default.updated,
          }))
      );

    case 'blog':
      return indexableOnly(
        Object.values(blogContent).map((mod) => ({
          loc: absolute(`/blog/${mod.default.slug}/`),
          lastmod: mod.default.updated,
        }))
      );

    case 'states':
      // Location pages carry no per-page date, so lastmod is omitted rather
      // than stamped with a build time that would be meaningless.
      return indexableOnly(PUBLISHED_STATES.map((s) => ({ loc: absolute(`/${s.slug}/`) })));

    case 'cities':
      return indexableOnly(PUBLISHED_CITIES.map((c) => ({ loc: absolute(`/${c.slug}/`) })));
  }
}

export const SITEMAP_NAMES: SitemapName[] = [
  'products',
  'pages',
  'industries',
  'guides',
  'blog',
  'states',
  'cities',
];

/** Escapes text for inclusion in XML. */
export function xmlEscape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const parts = [`    <loc>${xmlEscape(e.loc)}</loc>`];
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
      for (const img of e.images ?? []) {
        parts.push(`    <image:image><image:loc>${xmlEscape(img)}</image:loc></image:image>`);
      }
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}
