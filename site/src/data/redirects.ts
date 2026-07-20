/**
 * Central redirect map.
 *
 * Every permanent URL change lives here, and the QA link checker reads this
 * file to verify that no internal link points at a redirect source — internal
 * links should always target the final URL, never pass through a hop.
 *
 * Host-level rules (HTTP→HTTPS, www→non-www, trailing-slash normalization) are
 * NOT listed here because they are handled by the platform configuration in
 * public/_headers, vercel.json, and the README deployment notes. This file
 * covers content redirects only.
 */

export interface Redirect {
  /** Source path, always with a trailing slash. */
  from: string;
  /** Destination path, always with a trailing slash. */
  to: string;
  /** 301 permanent unless there is a reason to use 308. */
  status: 301 | 308 | 410;
  /** Why this redirect exists. Kept so it can be reviewed later. */
  reason: string;
}

export const REDIRECTS: Redirect[] = [
  {
    from: '/cardboard-retail-display-boxes/',
    to: '/retail-display-boxes/',
    status: 301,
    reason:
      'Product consolidation. This term was the intersection of an existing material page ' +
      '(cardboard display boxes) and an existing channel page (retail display boxes) with no ' +
      'separate search intent of its own. Its images were merged into the destination gallery.',
  },
];

/**
 * Locations held back from publication.
 *
 * These were never published, so they need no redirect — there is no URL to
 * redirect from. They are listed in src/data/locations.ts under HELD_BACK with
 * a reason each, and can be promoted later without any redirect being required.
 */

/** Renders the redirect map in Netlify/Cloudflare `_redirects` syntax. */
export function toNetlify(): string {
  return REDIRECTS.map((r) => `${r.from}  ${r.to}  ${r.status}`).join('\n');
}

/** Renders the redirect map for a vercel.json `redirects` array. */
export function toVercel() {
  return REDIRECTS.map((r) => ({
    source: r.from.replace(/\/$/, ''),
    destination: r.to,
    permanent: r.status === 301,
  }));
}
