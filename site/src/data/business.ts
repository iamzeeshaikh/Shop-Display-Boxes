/**
 * Central business configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LAUNCH BLOCKER POLICY
 * ─────────────────────────────────────────────────────────────────────────────
 * No business fact in this file may be invented. Every value that has NOT been
 * supplied by the site owner is typed as `Unverified` and carries `verified:
 * false`. Components must call `resolve()` before rendering a fact; unverified
 * facts render as nothing (or an honest fallback) rather than as a placeholder
 * that could be mistaken for real information.
 *
 * `npm run qa:business` fails the build report while any `required: true` fact
 * is still unverified. See README → "Before launch".
 */

export type Fact<T> =
  | { verified: true; value: T }
  | { verified: false; required: boolean; note: string; value?: undefined };

/** Marks a fact the owner still needs to supply. */
function unverified(note: string, required = true): Fact<never> {
  return { verified: false, required, note };
}

/** Marks a fact confirmed by the owner or by a primary source. */
function verified<T>(value: T): Fact<T> {
  return { verified: true, value };
}

/** Returns the value if verified, otherwise the fallback (default: undefined). */
export function resolve<T>(fact: Fact<T>): T | undefined;
export function resolve<T>(fact: Fact<T>, fallback: T): T;
export function resolve<T>(fact: Fact<T>, fallback?: T): T | undefined {
  return fact.verified ? fact.value : fallback;
}

/** True when the fact can be safely rendered to visitors. */
export function has<T>(fact: Fact<T>): fact is { verified: true; value: T } {
  return fact.verified;
}

export const site = {
  /** Canonical origin: HTTPS, non-www, no trailing slash. */
  origin: 'https://shopdisplayboxes.com',
  /** Trading name as used in visible copy and <title> suffixes. */
  name: 'Shop Display Boxes',
  language: 'en-US',
  locale: 'en_US',
  country: 'US',
} as const;

export const business = {
  /**
   * Trading name is taken from the domain and is safe to display.
   * The registered legal entity is a separate fact and is NOT known.
   */
  tradingName: verified('Shop Display Boxes'),

  /** Confirmed by the owner 2026-07-20. */
  legalEntityName: verified('Shop Display Boxes'),
  legalEntityRegistration: unverified(
    'Company/EIN registration number, if the owner wants it published in Terms.',
    false
  ),

  /**
   * Supplied by the owner 2026-07-20.
   * NOTE: the 503 area code is Oregon while the postal address is Brooklyn, NY.
   * That is plausible for a ported or VOIP number, but worth re-confirming —
   * it is rendered on every page.
   */
  phone: verified({ e164: '+15033580443', display: '(503) 358-0443' }),
  email: verified('info@shopdisplayboxes.com'),
  supportEmail: unverified('Artwork/dieline inbox, if separate from sales.', false),
  /**
   * No separate privacy inbox; data-subject requests go to the main address.
   * Recorded as verified so the privacy policy can state a real contact route.
   */
  privacyEmail: verified('info@shopdisplayboxes.com'),

  /**
   * Supplied by the owner 2026-07-20.
   *
   * This is emitted as PostalAddress on the Organization node. It is NOT used
   * to emit LocalBusiness schema: LocalBusiness asserts a place customers can
   * visit during opening hours, and neither premises type nor hours have been
   * confirmed. Upgrade only if this is a staffed location open to visitors.
   */
  address: verified({
    streetAddress: '1639 70th St',
    addressLocality: 'Brooklyn',
    addressRegion: 'NY',
    postalCode: '11204',
    addressCountry: 'US',
    /** Rendered as a single line in the footer and on the contact page. */
    display: '1639 70th St, Brooklyn, NY 11204, USA',
  }),
  /** Confirmed by the owner 2026-07-20: enquiries handled around the clock. */
  businessHours: verified({
    alwaysOpen: true,
    /** schema.org openingHoursSpecification for a 24/7 operation. */
    days: [
      'https://schema.org/Monday',
      'https://schema.org/Tuesday',
      'https://schema.org/Wednesday',
      'https://schema.org/Thursday',
      'https://schema.org/Friday',
      'https://schema.org/Saturday',
      'https://schema.org/Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
    short: '24/7',
    statement:
      'Enquiries are handled 24/7. Note that this is contact availability rather than a walk-in counter — the Brooklyn address is not a collection point, and production still runs to the stated 5–7 business day schedule.',
  }),

  /** Supplied by the owner 2026-07-20. */
  returnWindowDays: verified({
    days: 7,
    statement:
      'Custom printed packaging is made to your artwork and specification, so it cannot be resold and is not returnable for change of mind. Manufacturing defects and orders that do not match the approved specification are a different matter: report them within 7 days of delivery, with photographs, and we will replace or refund.',
  }),
  refundTerms: verified({
    statement:
      'Where goods are defective or do not match the approved proof and dieline, we replace the affected units or refund them. Goods that match what was approved are not returnable, which is why the dieline and proof approvals exist and why a physical proof is worth taking on anything where colour carries commercial weight.',
  }),
  /** Supplied by the owner 2026-07-20. */
  shippingTerms: verified({
    freeShipping: true,
    coverage: 'All 50 US states',
    statement:
      'Shipping is included in the quoted price to business addresses across all fifty states. Transit time is not included in the production lead time and is not guaranteed — if your order depends on a fixed in-store date, say so at quoting stage.',
  }),
  /** Supplied by the owner 2026-07-20. */
  productionLeadTime: verified({
    days: '5-7',
    /** Short form for spec tables. */
    short: '5–7 business days',
    /** Long form for body copy and FAQs. */
    statement:
      'Standard production time is 5–7 business days after artwork and proof approval. The clock starts at approval, not at enquiry — dieline and proof stages come first and depend partly on how quickly approvals come back.',
  }),

  /** Commercial terms referenced on product and commercial pages. */
  /** Supplied by the owner 2026-07-20. */
  minimumOrderQuantity: verified({
    units: 100,
    short: '100 units',
    statement:
      'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.',
  }),
  /**
   * Supplied by the owner 2026-07-20: samples are paid for by the customer.
   *
   * NOTE: whether the sample charge is credited against a subsequent order was
   * not stated, so no credit is promised anywhere. If it is credited, that is a
   * genuine selling point worth adding — update this statement.
   */
  samplePolicy: verified({
    paid: true,
    short: 'Charged — quoted with your job',
    statement:
      'Samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted alongside your job rather than listed as a flat fee. A sample on a new structure costs a fraction of a full run and is the only reliable way to find out that a product does not fit before the run is made.',
  }),

  /**
   * Verified commercial fact supplied in the project brief.
   * Rendered visibly on every product page, and mirrored in Offer schema.
   */
  startingPricePerPiece: verified({
    amount: '0.30',
    currency: 'USD',
    statement:
      'Price starts from $0.30 per piece for large volume orders. Final pricing depends on size, material, printing, and quantity.',
    qualifier:
      'The $0.30 figure is a starting point for qualifying large-volume orders, not a fixed price for every order. Smaller runs, complex structures, specialty board, and premium finishes all price higher.',
  }),

  socialProfiles: unverified(
    'Public social profile URLs for Organization sameAs. Omitted from schema until supplied.',
    false
  ),
} as const;

/**
 * Reads a public env var. Guarded so this module can also be imported by the
 * QA scripts, which run in plain Node where `import.meta.env` does not exist.
 */
function publicEnv(key: string): string {
  const viteEnv = (import.meta as { env?: Record<string, string> }).env;
  return viteEnv?.[key] ?? globalThis.process?.env?.[key] ?? '';
}

/** Analytics IDs. Integrations load ONLY when a real ID is present in env. */
export const analytics = {
  ga4MeasurementId: publicEnv('PUBLIC_GA4_MEASUREMENT_ID'),
  gtmContainerId: publicEnv('PUBLIC_GTM_CONTAINER_ID'),
  googleSiteVerification: publicEnv('PUBLIC_GOOGLE_SITE_VERIFICATION'),
  googleAdsConversionId: publicEnv('PUBLIC_GOOGLE_ADS_CONVERSION_ID'),
} as const;

/** Every fact the owner must supply before launch, for the QA report. */
export function unverifiedFacts(): Array<{ key: string; required: boolean; note: string }> {
  const out: Array<{ key: string; required: boolean; note: string }> = [];
  for (const [key, fact] of Object.entries(business)) {
    if (fact && typeof fact === 'object' && 'verified' in fact && !fact.verified) {
      out.push({ key, required: fact.required, note: fact.note });
    }
  }
  return out;
}
