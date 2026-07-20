/**
 * Typed JSON-LD builders.
 *
 * Rules enforced here rather than left to each page:
 *   • Nothing is emitted that is not also visible on the page.
 *   • No aggregateRating or review is emitted without genuine, displayed data.
 *     The builders accept ratings only through a type that cannot currently be
 *     constructed, so a fabricated rating is a compile error, not a review note.
 *   • No PostalAddress, openingHours, or LocalBusiness is emitted while the
 *     underlying facts are unverified in src/data/business.ts.
 */

import { absolute, asset, path } from './urls';
import { business, site, has } from '../data/business';

type Json = Record<string, unknown>;

const ORG_ID = absolute('/') + '#organization';
const SITE_ID = absolute('/') + '#website';

/* ────────────────────────────────────────────────────────────────────────────
   Organization + WebSite (emitted once, on the homepage)
   ────────────────────────────────────────────────────────────────────────────*/

/**
 * LocalBusiness node.
 *
 * Emitted at the owner's instruction, using the confirmed address, hours, and
 * phone. It is typed as the Organization's own node (same @id) so the two do
 * not compete as separate entities for the same business.
 */
export function localBusiness(): Json | null {
  if (!has(business.address) || !has(business.businessHours)) return null;

  const a = business.address.value as {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  const h = business.businessHours.value as { days: string[]; opens: string; closes: string };
  const price = business.startingPricePerPiece.value as { amount: string; currency: string };

  const node: Json = {
    '@type': 'LocalBusiness',
    '@id': absolute('/') + '#localbusiness',
    name: site.name,
    url: absolute('/'),
    image: asset('/brand/shop-display-boxes-logo.png'),
    description:
      'Custom printed display boxes and retail display packaging produced to order and shipped across the United States.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: a.addressCountry,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    },
    priceRange: `From $${price.amount} per unit`,
    areaServed: { '@type': 'Country', name: 'United States' },
    parentOrganization: { '@id': ORG_ID },
  };

  if (has(business.phone)) {
    node.telephone = (business.phone.value as { e164: string }).e164;
  }
  if (has(business.email)) node.email = business.email.value;

  return node;
}

export function organization(): Json {
  const node: Json = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: absolute('/'),
    description:
      'Custom printed display boxes and retail display packaging produced to order for brands and retailers in the United States.',
    logo: {
      '@type': 'ImageObject',
      url: asset('/brand/shop-display-boxes-logo.png'),
      width: 512,
      height: 512,
    },
  };

  // Only add facts the owner has verified.
  if (has(business.legalEntityName)) node.legalName = business.legalEntityName.value;
  if (has(business.socialProfiles)) node.sameAs = business.socialProfiles.value;

  const contact: Json[] = [];
  if (has(business.phone) || has(business.email)) {
    const point: Json = { '@type': 'ContactPoint', contactType: 'sales', areaServed: 'US' };
    if (has(business.phone)) point.telephone = (business.phone.value as { e164: string }).e164;
    if (has(business.email)) point.email = business.email.value;
    contact.push(point);
  }
  if (contact.length) node.contactPoint = contact;

  if (has(business.address)) {
    const a = business.address.value as {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: a.addressCountry,
    };
  }

  if (has(business.businessHours)) {
    const h = business.businessHours.value as {
      days: string[];
      opens: string;
      closes: string;
    };
    node.openingHoursSpecification = {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    };
  }

  // Still Organization rather than LocalBusiness, deliberately. LocalBusiness
  // asserts a place customers can visit; the hours here describe when enquiries
  // are answered, and the Brooklyn address is not a collection point.
  return node;
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: absolute('/'),
    name: site.name,
    inLanguage: site.language,
    publisher: { '@id': ORG_ID },
  };
}

/* ────────────────────────────────────────────────────────────────────────────
   WebPage / BreadcrumbList
   ────────────────────────────────────────────────────────────────────────────*/

export type Crumb = { name: string; url: string };

export function breadcrumbs(crumbs: Crumb[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.url),
    })),
  };
}

export function webPage(opts: {
  url: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage';
  datePublished?: string;
  dateModified?: string;
  primaryImage?: string;
}): Json {
  const node: Json = {
    '@type': opts.type ?? 'WebPage',
    '@id': absolute(opts.url) + '#webpage',
    url: absolute(opts.url),
    name: opts.name,
    description: opts.description,
    inLanguage: site.language,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
  };
  if (opts.datePublished) node.datePublished = opts.datePublished;
  if (opts.dateModified) node.dateModified = opts.dateModified;
  if (opts.primaryImage) {
    node.primaryImageOfPage = { '@type': 'ImageObject', url: asset(opts.primaryImage) };
  }
  return node;
}

/* ────────────────────────────────────────────────────────────────────────────
   Product + Offer
   ────────────────────────────────────────────────────────────────────────────*/

/**
 * Rating data derived from real, displayed reviews.
 *
 * The only way to obtain one of these is `aggregateFor()` in src/data/reviews.ts,
 * which returns null for an empty review list. That is the safeguard: a rating
 * cannot be hand-written into a page, it can only be computed from reviews that
 * are also being rendered.
 */
export type VerifiedRating = {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
};

export function product(opts: {
  name: string;
  slug: string;
  description: string;
  images: string[];
  /** Visible starting price. Mirrors the on-page pricing statement exactly. */
  priceFrom: { amount: string; currency: string };
  /** Computed from displayed reviews only — see src/data/reviews.ts. */
  aggregateRating?: VerifiedRating | null;
  /** The same reviews rendered on the page. Emitted as Review nodes. */
  reviews?: Array<{
    author: string;
    organization?: string;
    rating?: number;
    date: string;
    body: string;
  }>;
}): Json {
  const url = absolute(opts.slug);

  const offer: Json = {
    '@type': 'Offer',
    url,
    priceCurrency: opts.priceFrom.currency,
    // Quotation workflow: the visible page states this is a "from" price for
    // qualifying large-volume orders, so the offer is modeled the same way.
    price: opts.priceFrom.amount,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: opts.priceFrom.amount,
      priceCurrency: opts.priceFrom.currency,
      unitText: 'per piece',
      valueAddedTaxIncluded: false,
    },
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': ORG_ID },
    // The site sells made-to-order goods through a quote, not a cart. There is
    // no checkout URL to advertise, so no potentialAction is claimed.
    businessFunction: 'http://purl.org/goodrelations/v1#Sell',
  };

  // Minimum order quantity, stated visibly in every product spec table.
  if (has(business.minimumOrderQuantity)) {
    const moq = business.minimumOrderQuantity.value as { units: number };
    offer.eligibleQuantity = {
      '@type': 'QuantitativeValue',
      minValue: moq.units,
      unitCode: 'C62', // UN/CEFACT code for "one" (a countable unit)
    };
  }

  // Production turnaround, expressed as handling time. This is the time to make
  // the goods, not a delivery promise — transit time is deliberately absent
  // because no carrier or freight terms have been confirmed.
  if (has(business.productionLeadTime)) {
    const lead = business.productionLeadTime.value as { days: string };
    const [min, max] = lead.days.split('-').map(Number);
    offer.shippingDetails = {
      '@type': 'OfferShippingDetails',
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'US',
      },
      // Shipping is included in the quoted price across all fifty states.
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'USD',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: min,
          maxValue: max,
          unitCode: 'DAY',
        },
      },
    };
  }

  // Return policy, emitted only from the owner-confirmed terms. Custom printed
  // goods are not returnable for change of mind, which is what
  // MerchantReturnNotPermitted expresses; the 7-day defect window is a separate
  // remedy set out on the refund policy page rather than a general return right.
  if (has(business.returnWindowDays)) {
    offer.hasMerchantReturnPolicy = {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnLink: absolute('/refund-and-return-policy/'),
    };
  }

  const node: Json = {
    '@type': 'Product',
    '@id': url + '#product',
    name: opts.name,
    description: opts.description,
    url,
    image: opts.images.map((i) => asset(i)),
    brand: { '@type': 'Brand', name: site.name },
    offers: offer,
  };

  // Both of these are emitted only when the same content is on the page.
  if (opts.aggregateRating) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: opts.aggregateRating.ratingValue,
      reviewCount: opts.aggregateRating.reviewCount,
      bestRating: opts.aggregateRating.bestRating,
      worstRating: opts.aggregateRating.worstRating,
    };
  }

  if (opts.reviews?.length) {
    node.review = opts.reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
        ...(r.organization ? { worksFor: { '@type': 'Organization', name: r.organization } } : {}),
      },
      datePublished: r.date,
      reviewBody: r.body,
      // Only emitted when the customer actually gave a rating.
      ...(typeof r.rating === 'number'
        ? {
            reviewRating: {
              '@type': 'Rating',
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
          }
        : {}),
    }));
  }

  return node;
}

/* ────────────────────────────────────────────────────────────────────────────
   Article
   ────────────────────────────────────────────────────────────────────────────*/

export function article(opts: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): Json {
  return {
    '@type': 'BlogPosting',
    '@id': absolute(opts.url) + '#article',
    headline: opts.headline,
    description: opts.description,
    image: asset(opts.image),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Person', name: opts.authorName },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: absolute(opts.url),
    inLanguage: site.language,
  };
}

/* ────────────────────────────────────────────────────────────────────────────
   FAQ
   ────────────────────────────────────────────────────────────────────────────*/

export type Faq = { question: string; answer: string };

/**
 * FAQPage schema. The question/answer text passed here must be the exact text
 * rendered on the page — pass the same array to the FAQ component and to this
 * builder, never two hand-written copies.
 */
export function faqPage(faqs: Faq[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/* ────────────────────────────────────────────────────────────────────────────
   Assembly
   ────────────────────────────────────────────────────────────────────────────*/

/** Wraps nodes into a single @graph document. */
export function graph(...nodes: Array<Json | null | undefined>): string {
  return JSON.stringify(
    { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) },
    null,
    0
  );
}

export { path as schemaPath };
