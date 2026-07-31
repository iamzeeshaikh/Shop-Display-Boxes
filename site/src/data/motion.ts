/**
 * Which pages are allowed to run scroll-driven motion.
 *
 * Motion is opt-in per URL rather than per layout, and the list is deliberately
 * short. Templated pages that exist at scale — the 25 product pages, 24
 * location pages, 16 industry pages, 20 blog posts, and every policy page —
 * stay static. They are the pages that carry the long-tail search traffic, they
 * are the pages a buyer lands on from a query, and their job is to load fast
 * and answer the question. Decoration there is a cost with no return.
 *
 * The reveal CSS and the fallback script are bundled per-page by Astro, so a
 * page that is not on this list ships none of it — not one byte.
 *
 * To opt another page in, add its slug here. Nothing else needs changing.
 */

/**
 * Root-level slugs (no leading or trailing slash) that render motion.
 *
 * Currently the three top-level commercial hubs:
 *   display-box-packaging ............ the overview all 25 product pages roll up to
 *   custom-display-box-manufacturer .. head-term commercial landing page
 *   wholesale-display-boxes .......... volume-buyer commercial landing page
 */
export const MOTION_PAGE_SLUGS: readonly string[] = [
  'display-box-packaging',
  'custom-display-box-manufacturer',
  'wholesale-display-boxes',
];

/** True when the given root-level slug should render the motion system. */
export function hasMotion(slug: string): boolean {
  return MOTION_PAGE_SLUGS.includes(slug);
}
