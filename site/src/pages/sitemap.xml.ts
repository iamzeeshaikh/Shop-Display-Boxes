/**
 * Single sitemap at exactly /sitemap.xml.
 *
 * Every indexable URL on the site is listed directly in one <urlset> — there
 * is no sitemap index and no sub-sitemaps. Entries are gathered from each
 * content group (products, pages, industries, guides, blog, states, cities),
 * flattened, and de-duplicated so a URL cannot appear twice.
 */
import type { APIRoute } from 'astro';
import { SITEMAP_NAMES, getSitemap, renderUrlset, type SitemapEntry } from '../lib/sitemap-data';

export const GET: APIRoute = () => {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  for (const name of SITEMAP_NAMES) {
    for (const entry of getSitemap(name)) {
      if (seen.has(entry.loc)) continue;
      seen.add(entry.loc);
      entries.push(entry);
    }
  }

  return new Response(renderUrlset(entries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
