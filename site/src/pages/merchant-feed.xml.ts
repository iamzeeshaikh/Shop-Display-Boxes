/**
 * Google Merchant feed, built from the same product content and the same
 * src/data/order.ts constants as the product pages, their Offer JSON-LD, the
 * checkout and /api/order: one item per product page (except FEED_EXCLUDED),
 * 100 display boxes for $60.00, free shipping to the US, UK, Canada and
 * Australia with handling and transit times, defective-only returns. Image
 * links are the same 1200px WebP files the product JSON-LD lists.
 */
export const prerender = true;

import type { APIRoute } from 'astro';
import { PRODUCTS } from '../data/products';
import type { ProductContent } from '../data/product-content';
import { productImages } from '../lib/product-images';
import { SITE, BRAND, PACK_QTY, PACK_PRICE_TEXT, UNIT_PRICE_TEXT, SHIPPING, FEED_EXCLUDED, feedId } from '../data/order';

const x = (s: unknown) =>
  String(s ?? '').replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c] as string);

const contentModules = import.meta.glob<{ default: ProductContent }>('../content/products/*.ts', { eager: true });

export const GET: APIRoute = async () => {
  const records = PRODUCTS.filter((p) => !FEED_EXCLUDED.has(p.slug));
  const items = await Promise.all(
    records.map(async (p) => {
      const content = contentModules[`../content/products/${p.slug}.ts`]?.default;
      if (!content) throw new Error(`merchant-feed: no content file for ${p.slug}`);
      const imgs = (await productImages(p.slug, content.imageAlts)).map((src) => SITE + encodeURI(src));
      return `  <item>
    <g:id>${x(feedId(p.slug))}</g:id>
    <title>${x(`${p.name}, Pack of ${PACK_QTY}`)}</title>
    <description>${x(`${content.metaDescription} Sold online in packs of ${PACK_QTY} boxes ($${UNIT_PRICE_TEXT} each), printed full color to your artwork after you approve a proof.`)}</description>
    <link>${SITE}/${x(p.slug)}/</link>
    <g:image_link>${x(imgs[0])}</g:image_link>${imgs
      .slice(1)
      .map((u) => `\n    <g:additional_image_link>${x(u)}</g:additional_image_link>`)
      .join('')}
    <g:availability>in_stock</g:availability>
    <g:condition>new</g:condition>
    <g:price>${PACK_PRICE_TEXT} USD</g:price>
    <g:multipack>${PACK_QTY}</g:multipack>
    <g:brand>${x(BRAND)}</g:brand>
    <g:identifier_exists>no</g:identifier_exists>
    <g:mpn>${x(p.slug)}</g:mpn>
    <g:product_type>${x(`Display Boxes > ${p.group.replace(/^By /, '').replace(/^./, (c) => c.toUpperCase())}`)}</g:product_type>
${SHIPPING.destinations
  .map(
    (d) =>
      `    <g:shipping><g:country>${d.code}</g:country><g:service>Free shipping</g:service><g:price>0.00 USD</g:price><g:min_transit_time>${d.transitMin}</g:min_transit_time><g:max_transit_time>${d.transitMax}</g:max_transit_time></g:shipping>`
  )
  .join('\n')}
    <g:min_handling_time>${SHIPPING.handlingDaysMin}</g:min_handling_time>
    <g:max_handling_time>${SHIPPING.handlingDaysMax}</g:max_handling_time>
  </item>`;
    })
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${x(BRAND)}</title>
  <link>${SITE}/</link>
  <description>Custom printed display boxes, sold online in packs of ${PACK_QTY}.</description>
${items.join('\n')}
</channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
