/**
 * URL normalization.
 *
 * Every URL the site emits — internal links, canonicals, sitemap entries,
 * breadcrumbs, Open Graph, JSON-LD — passes through here. The rules are:
 *
 *   • HTTPS
 *   • non-www
 *   • lowercase path
 *   • always a trailing slash
 *   • no `.html`, no query strings, no fragments in canonical output
 *
 * Anything that cannot satisfy those rules throws at build time rather than
 * shipping a subtly wrong URL.
 */

import { site } from '../data/business';

export const ORIGIN = site.origin; // https://shopdisplayboxes.com

/**
 * Normalizes a site-relative path to the canonical form: `/some-page/`.
 * Throws on absolute URLs to other origins and on obviously malformed input.
 */
export function path(input: string): string {
  if (!input) throw new Error('path(): empty path');

  let p = input.trim();

  // Reject accidental absolute URLs — use `absolute()` for those.
  if (/^https?:\/\//i.test(p)) {
    if (!p.toLowerCase().startsWith(ORIGIN + '/') && p.toLowerCase() !== ORIGIN) {
      throw new Error(`path(): expected a site-relative path, got "${input}"`);
    }
    p = p.slice(ORIGIN.length) || '/';
  }

  if (!p.startsWith('/')) p = '/' + p;

  // Canonical URLs never carry a query or fragment.
  const dirty = p.match(/[?#]/);
  if (dirty) {
    throw new Error(`path(): query strings and fragments are not canonical ("${input}")`);
  }

  if (/\.html?$/i.test(p)) {
    throw new Error(`path(): .html extensions are not used on this site ("${input}")`);
  }

  p = p.toLowerCase();
  p = p.replace(/\/{2,}/g, '/'); // collapse duplicate slashes
  if (!p.endsWith('/')) p += '/';

  return p;
}

/** Absolute canonical URL for a site-relative path. */
export function absolute(input: string): string {
  return ORIGIN + path(input);
}

/**
 * Builds an in-page anchor link. Fragments are legal in hrefs, just not in
 * canonicals — this is the one sanctioned way to produce one.
 */
export function anchor(input: string, fragment: string): string {
  return path(input) + '#' + fragment.replace(/^#/, '');
}

/** Converts a display string into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Absolute URL for a static asset (image, PDF, font).
 *
 * Assets are files, not pages: they must NOT receive the trailing slash that
 * `path()` enforces, or the URL 404s. Use this for every og:image, JSON-LD
 * image, and download link.
 */
export function asset(input: string): string {
  if (!input) throw new Error('asset(): empty path');
  if (/^https?:\/\//i.test(input)) return input;
  const p = input.startsWith('/') ? input : '/' + input;
  if (p.endsWith('/')) {
    throw new Error(`asset(): "${input}" ends in a slash — that is a page path, not a file`);
  }
  return ORIGIN + p.replace(/\/{2,}/g, '/');
}

/** True when a path is at the site root (one segment) — used to assert product URLs. */
export function isRootLevel(p: string): boolean {
  const norm = path(p);
  return norm.split('/').filter(Boolean).length === 1;
}
