/**
 * SEO metadata construction and validation.
 *
 * Every indexable page supplies a title and description through this module.
 * Editorial targets (titles 50–60 chars, descriptions 120–130) are checked at
 * build time and reported by `npm run qa:seo`, but they are advisory: a title
 * is allowed to fall outside the window when forcing it inside would produce
 * awkward wording. Duplicates, however, are hard failures.
 */

import { absolute, asset } from './urls';
import { isNoindex } from './indexation.mjs';
import { site } from '../data/business';

export type Robots = {
  index: boolean;
  follow: boolean;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxSnippet?: number;
};

export interface SeoInput {
  /** Canonical site-relative path, e.g. "/cosmetic-display-boxes/". */
  url: string;
  title: string;
  description: string;
  /** Site-relative path to the Open Graph image. */
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  /** ISO date; drives sitemap lastmod, never build time. */
  modified?: string;
  published?: string;
  /** Force noindex regardless of path rules (e.g. a thin location page). */
  noindex?: boolean;
}

export interface SeoResult {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  indexable: boolean;
  og: {
    title: string;
    description: string;
    url: string;
    type: string;
    image: string;
    imageAlt: string;
    siteName: string;
    locale: string;
  };
  twitter: { card: 'summary_large_image'; title: string; description: string; image: string };
  modified?: string;
  published?: string;
}

export const DEFAULT_OG_IMAGE = '/og/shop-display-boxes-og.png';

export const TITLE_MIN = 50;
export const TITLE_MAX = 60;
export const DESC_MIN = 120;
export const DESC_MAX = 130;

export function buildSeo(input: SeoInput): SeoResult {
  const canonical = absolute(input.url);
  const indexable = !(input.noindex || isNoindex(input.url));

  // noindex pages stay `follow` so equity still flows through their links.
  const robots = indexable
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, follow';

  const ogImage = asset(input.ogImage ?? DEFAULT_OG_IMAGE);

  return {
    title: input.title,
    description: input.description,
    canonical,
    robots,
    indexable,
    og: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: input.ogType ?? 'website',
      image: ogImage,
      imageAlt: input.ogImageAlt ?? `${site.name} — custom printed display packaging`,
      siteName: site.name,
      locale: site.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      image: ogImage,
    },
    modified: input.modified,
    published: input.published,
  };
}

/** Advisory length report used by the QA script. */
export function lengthReport(seo: { title: string; description: string; url?: string }) {
  const issues: string[] = [];
  const t = seo.title.length;
  const d = seo.description.length;
  if (t < TITLE_MIN || t > TITLE_MAX) issues.push(`title ${t} chars (target ${TITLE_MIN}–${TITLE_MAX})`);
  if (d < DESC_MIN || d > DESC_MAX) issues.push(`description ${d} chars (target ${DESC_MIN}–${DESC_MAX})`);
  return issues;
}

/**
 * Picks the first candidate whose length lands inside [min, max].
 *
 * Templated metadata (location pages, for example) produces different lengths
 * depending on how long a place name is, so a single formula cannot hold the
 * editorial window for every entry. Supply candidates from shortest to longest
 * and this selects one that fits; if none does, it returns the closest, because
 * a slightly-off title is better than a build failure on an advisory target.
 */
export function pickInRange(candidates: string[], min: number, max: number): string {
  const fit = candidates.find((c) => c.length >= min && c.length <= max);
  if (fit) return fit;
  return candidates.reduce((best, c) => {
    const dist = (x: string) => (x.length < min ? min - x.length : x.length - max);
    return dist(c) < dist(best) ? c : best;
  });
}
