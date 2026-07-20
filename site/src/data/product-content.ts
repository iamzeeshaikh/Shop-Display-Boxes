/**
 * Product page content model.
 *
 * Each product supplies its own copy for every section. Nothing here is
 * generated from a template with the product name substituted in — the section
 * list is shared, the writing is not.
 *
 * Fields that would state a technical or commercial fact we cannot verify
 * (lead times, MOQ numbers, board weights for a specific job) accept the string
 * union `Unspecified` instead of a fabricated value.
 */

export type Unspecified =
  | 'Custom'
  | 'Depends on order specifications'
  | 'Available on request';

export interface SpecRow {
  label: string;
  value: string | Unspecified;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ContentSection {
  /** Rendered as an H2. */
  heading: string;
  /** Paragraphs of body copy. */
  body: string[];
  /** Optional bulleted points below the body. */
  points?: string[];
  /**
   * At most one contextual internal link per section, per the linking rules.
   * Rendered as a sentence following the body.
   */
  link?: { text: string; href: string; anchor: string };
}

export interface ImageAlt {
  /** Filename within src/assets/products/<slug>/. */
  file: string;
  /** Describes what the photograph shows — not the target keyword. */
  alt: string;
}

export interface ProductContent {
  slug: string;

  /** SEO. Targets: title 50–60 chars, description 120–130. */
  metaTitle: string;
  metaDescription: string;

  /** The single H1. Contains the primary keyword naturally. */
  h1: string;

  /** Two or three sentences under the H1. The commercial summary. */
  summary: string;

  /** Alt text per gallery image, authored rather than generated. */
  imageAlts: ImageAlt[];

  /** What this box style is actually for. */
  uses: string[];
  /** Industries that buy this style, as prose fragments. */
  industries: string[];

  /** The ordered body sections, each with its own heading and copy. */
  sections: ContentSection[];

  /** Specification table rows. */
  specs: SpecRow[];

  /** At least 10, unique to this product. */
  faqs: Faq[];

  /** Slugs of related products. Chosen for genuine relevance. */
  related: string[];

  /** ISO date of last content update. Drives sitemap lastmod. */
  updated: string;
}

/**
 * The visible pricing statement required on every product page, plus the
 * qualifier that keeps it honest. Rendered by the PriceNote component and
 * mirrored exactly in Offer schema.
 */
export const PRICING_STATEMENT =
  'Price starts from $0.30 per piece for large volume orders. Final pricing depends on size, material, printing, and quantity.';
