/**
 * Customer reviews.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO ADD REAL REVIEWS
 * ─────────────────────────────────────────────────────────────────────────────
 * Paste them into REVIEWS below. Everything else is already wired:
 *
 *   • the review renders visibly on /customer-reviews/ and on the product page
 *     it relates to
 *   • Review schema is emitted for it
 *   • AggregateRating is computed from the real ratings and attached to the
 *     Product node, so star ratings become eligible in search results
 *
 * Nothing needs changing in the templates or the schema library.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THE ARRAY IS EMPTY
 * ─────────────────────────────────────────────────────────────────────────────
 * Rating markup is only emitted for reviews that are actually displayed on the
 * page. That is not a stylistic preference — Google's structured data policy
 * requires review markup to reflect genuine reviews visible to the user, and
 * sites that emit ratings without them risk a manual action that removes ALL
 * rich results for the domain, including the Product, Offer, FAQ, and
 * Breadcrumb markup already working across this site.
 *
 * So the trade is: invented ratings might show stars for a while, and if caught
 * cost every rich result the site has. Real ratings show stars permanently.
 *
 * The moment there are real reviews — from your inbox, Google Business, an
 * email thread, anywhere a customer actually said it — they go here and the
 * stars appear.
 */

export interface Review {
  /** Reviewer name as they gave it. Use a first name and initial if they prefer. */
  author: string;
  /** Their company, where they are happy to be named. Optional. */
  organization?: string;
  /**
   * 1–5, and only ever the rating the customer actually gave.
   * Optional: a review can be published as a testimonial without a rating.
   * Reviews with no rating are excluded from the aggregate, so an unrated
   * review can never quietly inflate or deflate the average.
   */
  rating?: number;
  /** ISO date the review was given. */
  date: string;
  /** The review text, published in full rather than excerpted to the good part. */
  body: string;
  /**
   * Product slug this review relates to, where it is about a specific job.
   * Reviews without a slug are treated as company-wide and are NOT attached to
   * any individual product's AggregateRating — a general review does not tell a
   * buyer anything about the specific box they are looking at.
   */
  productSlug?: string;
}

/**
 * Real, verified customer reviews. Empty until genuine ones exist.
 *
 * Do not add anything here that a customer did not actually write.
 */
export const REVIEWS: Review[] = [
  {
    author: 'Briana',
    organization: 'The Buckin’',
    // No rating supplied yet. Add one and stars become eligible in search —
    // aggregateRating cannot be emitted from an unrated review.
    date: '2026-07',
    body:
      'Can’t thank Jennifer with Shop Display Boxes enough for her help during the designing and ordering process of the boxes I needed for my business. They turned out amazing and have received several compliments. Such a great company to work with!',
  },
];

/** Reviews for a specific product. */
export function reviewsForProduct(slug: string): Review[] {
  return REVIEWS.filter((r) => r.productSlug === slug);
}

/** Every review, newest first, for the reviews page. */
export function allReviews(): Review[] {
  return [...REVIEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export interface Aggregate {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

/**
 * Computes an aggregate from real reviews, or null when there are none.
 *
 * Returning null is what keeps AggregateRating out of the schema while the
 * array is empty — the calling code cannot accidentally emit a rating that has
 * no reviews behind it.
 */
export function aggregateFor(reviews: Review[]): Aggregate | null {
  const rated = reviews.filter((r) => typeof r.rating === 'number');
  if (rated.length === 0) return null;
  const total = rated.reduce((sum, r) => sum + (r.rating as number), 0);
  return {
    ratingValue: (total / rated.length).toFixed(1),
    reviewCount: rated.length,
    bestRating: 5,
    worstRating: 1,
  };
}
