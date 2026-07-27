/**
 * Stylesheet for /sitemap.xml.
 *
 * A raw XML sitemap is valid and search engines read it fine, but a browser
 * shows it as an unstyled tree. This XSLT transforms it into a readable table
 * when a person opens the sitemap directly. It is purely cosmetic and ignored
 * by crawlers — the underlying XML is unchanged.
 */
import type { APIRoute } from 'astro';

const XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Shop Display Boxes</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="stylesheet" href="/sitemap.css"/>
      </head>
      <body>
        <div class="wrap">
          <h1>Shop Display Boxes — Sitemap</h1>
          <p class="lead">
            <span class="count"><xsl:value-of select="count(s:urlset/s:url)"/></span> URLs.
            This page is a styled view of the XML sitemap search engines read.
          </p>
          <table>
            <thead>
              <tr><th>URL</th><th>Last modified</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td class="date"><xsl:value-of select="s:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;

export const GET: APIRoute = () =>
  new Response(XSL, { headers: { 'Content-Type': 'text/xsl; charset=utf-8' } });
