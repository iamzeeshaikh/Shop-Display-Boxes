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
  phone: verified({ e164: '+15034614788', display: '(503) 461-4788' }),
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
  /** Confirmed by the owner 2026-07-20: inquiries handled around the clock. */
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
      'Inquiries are handled 24/7. Note that this is contact availability rather than a walk-in counter — the Brooklyn address is not a collection point, and production still runs to the stated 5–7 business day schedule.',
  }),

  /** Supplied by the owner 2026-07-20; window changed to 14 days 2026-10-29. */
  returnWindowDays: verified({
    days: 14,
    statement:
      'Custom printed packaging is made to your artwork and specification, so it cannot be resold and is not returnable for change of mind. Damaged or defective orders, and orders that do not match the approved specification, are a different matter: report them within 14 days of delivery, with photographs, and we will replace them free or refund them, and we pay the shipping.',
  }),
  refundTerms: verified({
    statement:
      'Where goods are defective or do not match the approved proof and dieline, we replace the affected units or refund them. Goods that match what was approved are not returnable, which is why the dieline and proof approvals exist and why a physical proof is worth taking on anything where color carries commercial weight.',
  }),
  /** Supplied by the owner 2026-07-20; countries and transit times added 2026-10-29. */
  shippingTerms: verified({
    freeShipping: true,
    coverage: 'United States, United Kingdom, Canada and Australia',
    statement:
      'Shipping is free to the United States, the United Kingdom, Canada and Australia. Production takes 5–7 business days after proof approval; delivery then takes 5–7 business days in the US and 7–10 business days to the UK, Canada and Australia.',
  }),
  /** Supplied by the owner 2026-07-20. */
  productionLeadTime: verified({
    days: '5-7',
    /** Short form for spec tables. */
    short: '5–7 business days',
    /** Long form for body copy and FAQs. */
    statement:
      'Standard production time is 5–7 business days after artwork and proof approval. The clock starts at approval, not at inquiry — dieline and proof stages come first and depend partly on how quickly approvals come back.',
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
   * Online pack price, set by the owner 2026-10-29. The numbers themselves live
   * in src/data/order.ts (PACK_QTY, PACK_PRICE); this is the visible wording.
   */
  packPrice: verified({
    amount: '60.00',
    currency: 'USD',
    statement:
      'Online, 100 display boxes cost $60.00 ($0.60 each), with free shipping to the US, UK, Canada and Australia.',
    qualifier:
      'That pack price covers a standard box in any of our styles, printed full color to your artwork on one side. Larger runs, custom sizes, specialty board, inserts and premium finishes are quoted against your specification.',
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
  ga4MeasurementId: publicEnv('PUBLIC_GA4_MEASUREMENT_ID') || 'G-LBYLH6MBQQ',
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
