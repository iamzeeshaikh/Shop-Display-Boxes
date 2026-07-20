/**
 * Content model for every non-product root-level page: commercial pages,
 * industry pages, buyer guides, and policy pages.
 *
 * Products have their own richer model in product-content.ts because they carry
 * galleries, spec tables, and Offer schema. Everything else shares this one.
 *
 * The `kind` discriminator drives which schema types are emitted and which
 * layout variant renders, so a guide and a policy page do not have to look
 * identical just because they share a data shape.
 */

import type { Faq, ContentSection } from './product-content';

export type PageKind = 'commercial' | 'industry' | 'guide' | 'policy' | 'utility';

export interface ComparisonTable {
  caption: string;
  /** Column headers. The first column is the row label column. */
  headers: string[];
  rows: Array<string[]>;
  /** Optional note rendered under the table. */
  note?: string;
}

export interface PageContent {
  slug: string;
  kind: PageKind;

  metaTitle: string;
  metaDescription: string;

  /** The single H1. */
  h1: string;
  /** Short intro under the H1. */
  intro: string;

  /** Ordered body sections. */
  sections: ContentSection[];

  /** Optional comparison tables, rendered after the sections that reference them. */
  tables?: ComparisonTable[];

  /** Industry pages require at least 8; guides and commercial pages are free. */
  faqs?: Faq[];

  /** Product slugs recommended from this page. */
  relatedProducts?: string[];
  /** Other content pages worth linking. */
  relatedPages?: Array<{ label: string; href: string }>;

  /**
   * Renders the real reviews from src/data/reviews.ts on this page, with
   * Review schema. Used by /customer-reviews/. Renders nothing when there are
   * no reviews, so the page cannot show an empty reviews block.
   */
  showReviews?: boolean;

  /** Call-to-action shown at the foot of the page. */
  cta?: { heading: string; body: string; buttonLabel?: string; buttonHref?: string };

  /**
   * Set true where the page states policy terms that depend on facts the owner
   * has not yet verified. Renders a visible notice rather than inventing terms.
   */
  awaitingOwnerFacts?: boolean;

  updated: string;
}

export type { Faq, ContentSection };
