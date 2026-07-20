/**
 * Paths excluded from XML sitemaps and served with `noindex, follow`.
 * Shared between astro.config.mjs (sitemap filter) and the BaseLayout robots
 * directive so the two can never drift apart.
 *
 * A trailing `*` marks a prefix match.
 */
export const NOINDEX_PATHS = [
  '/search/',
  '/thank-you/',
  '/quote-received/',
  '/sample-received/',
  '/dieline-received/',
  '/message-received/',
  '/preview/*',
  '/draft/*',
  '/api/*',
  '/404/',
];

/**
 * Location pages that could not be written with meaningful unique content.
 * Populated by the location content audit; entries here are noindex,follow and
 * excluded from sitemaps until their content is improved.
 * @type {string[]}
 */
export const THIN_LOCATION_PATHS = [];

/** @param {string} pathname */
export function isNoindex(pathname) {
  const all = [...NOINDEX_PATHS, ...THIN_LOCATION_PATHS];
  return all.some((p) =>
    p.endsWith('*') ? pathname.startsWith(p.slice(0, -1)) : pathname === p
  );
}
