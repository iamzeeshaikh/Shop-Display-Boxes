/**
 * Stylesheet for the /sitemap.xml browser view (referenced by /sitemap.xsl).
 *
 * Kept as an external same-origin file because the site's Content-Security
 * Policy forbids inline styles but permits `style-src 'self'`. Search engines
 * never load this — it only affects how a human sees the sitemap.
 */
import type { APIRoute } from 'astro';

const CSS = `:root { color-scheme: light dark; }
* { box-sizing: border-box; }
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  margin: 0; padding: 2.5rem 1.25rem; color: #1a1a1a; background: #fafafa;
}
.wrap { max-width: 1100px; margin: 0 auto; }
h1 { font-size: 1.5rem; margin: 0 0 .25rem; }
p.lead { color: #555; margin: 0 0 1.5rem; }
.count { font-weight: 600; }
table {
  width: 100%; border-collapse: collapse; background: #fff;
  border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;
}
th, td { text-align: left; padding: .7rem 1rem; border-bottom: 1px solid #eee; font-size: .92rem; }
th { background: #f4f2f0; text-transform: uppercase; letter-spacing: .04em; font-size: .72rem; color: #6b6b6b; }
tr:last-child td { border-bottom: 0; }
tr:hover td { background: #faf7f5; }
a { color: #b4531f; text-decoration: none; word-break: break-all; }
a:hover { text-decoration: underline; }
td.date { white-space: nowrap; color: #666; }
@media (prefers-color-scheme: dark) {
  body { background: #141414; color: #eee; }
  p.lead { color: #aaa; }
  table { background: #1c1c1c; border-color: #333; }
  th { background: #232323; color: #999; }
  th, td { border-color: #2a2a2a; }
  tr:hover td { background: #242424; }
  a { color: #e08a4e; }
  td.date { color: #999; }
}
`;

export const GET: APIRoute = () =>
  new Response(CSS, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
