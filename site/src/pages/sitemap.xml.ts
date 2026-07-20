/**
 * Sitemap index at exactly /sitemap.xml, as the brief requires.
 *
 * Only sub-sitemaps that actually contain URLs are referenced — an empty
 * sitemap in an index is a crawl error waiting to happen.
 */
import type { APIRoute } from 'astro';
import { SITEMAP_NAMES, getSitemap, xmlEscape } from '../lib/sitemap-data';
import { absolute } from '../lib/urls';

export const GET: APIRoute = () => {
  const present = SITEMAP_NAMES.filter((name) => getSitemap(name).length > 0);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${present
  .map((name) => `  <sitemap>\n    <loc>${xmlEscape(absolute('/') + `sitemaps/${name}.xml`)}</loc>\n  </sitemap>`)
  .join('\n')}
</sitemapindex>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
