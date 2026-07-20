/**
 * robots.txt
 *
 * Deliberately permissive. The common mistake is disallowing paths that carry
 * a noindex directive — a blocked page cannot be crawled, so the noindex is
 * never read, and the URL can still be indexed from external links. Anything
 * that must stay out of the index is served `noindex, follow` and left
 * crawlable, not blocked here.
 *
 * CSS, JS, images, and fonts are explicitly allowed so rendering-based
 * crawlers can see the page as a visitor does.
 */
import type { APIRoute } from 'astro';
import { absolute } from '../lib/urls';

export const GET: APIRoute = () => {
  const body = `# https://shopdisplayboxes.com/robots.txt

User-agent: *
Allow: /

# Assets required to render the page correctly.
Allow: /_astro/
Allow: /fonts/
Allow: /*.css$
Allow: /*.js$
Allow: /*.woff2$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.avif$

# Genuinely private or non-content routes. Pages that simply should not be
# indexed are served with a noindex directive instead of being blocked here,
# so that the directive can actually be read.
Disallow: /api/
Disallow: /search
Disallow: /*?

Sitemap: ${absolute('/')}sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
