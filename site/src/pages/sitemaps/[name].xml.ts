/**
 * Split sitemaps at /sitemaps/<name>.xml.
 *
 * Each contains only canonical, indexable, 200-status URLs. Noindex pages are
 * filtered out in sitemap-data.ts before they reach here.
 */
import type { APIRoute } from 'astro';
import { SITEMAP_NAMES, getSitemap, renderUrlset, type SitemapName } from '../../lib/sitemap-data';

export function getStaticPaths() {
  return SITEMAP_NAMES.filter((name) => getSitemap(name).length > 0).map((name) => ({
    params: { name },
  }));
}

export const GET: APIRoute = ({ params }) => {
  const entries = getSitemap(params.name as SitemapName);
  return new Response(renderUrlset(entries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
