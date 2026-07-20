import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: the imagery across this site is genuine client work, as
 * confirmed by the owner. This page presents it by format and by the problem
 * each structure solves. It names no client and claims no outcome, because
 * neither written permission nor verified results have been supplied.
 */
const content: PageContent = {
  slug: 'portfolio',
  kind: 'commercial',

  metaTitle: 'Portfolio | Display Packaging Work Shown by Format',
  metaDescription:
    'Display packaging work organized by format and by the problem each structure solves, from counter units to floor stands.',

  h1: 'Portfolio',

  intro:
    'Work organized by what each structure had to solve rather than by client. Every image across this site is production work — these are the formats behind them.',

  sections: [
    {
      heading: 'How this is organized',
      body: [
        'By problem, not by client. A display holding glass candle jars and one holding lipsticks look different because they were solving different problems, and grouping by industry hides that.',
        'We are not naming clients or publishing project outcomes here. Naming a brand requires their written permission, and quoting a result requires figures we have not been given. The work is shown; the claims are not made.',
      ],
    },
    {
      heading: 'Counter and point-of-sale work',
      body: [
        'Small-footprint units built to earn contested space beside a register. The recurring constraint is that a retailer concedes very little counter area, so these grow upward through tiers rather than outward.',
        'Sightline is the second constraint: a shopper at a counter looks down at roughly forty-five degrees, so the product tier is angled forward rather than laid flat.',
      ],
    },
    {
      heading: 'Floor-standing units',
      body: [
        'Free-standing displays that carry a full promotion without going out of shape. The engineering is in the load path — corner posts and internal columns transferring shelf loads to the base rather than into glued bonds that creep.',
        'These also have to be assembled in store by someone with limited time, so component count and one-way-only locating tabs matter as much as the structure itself.',
      ],
    },
    {
      heading: 'Weight-critical work',
      body: [
        'Candle and glass-vessel displays where the base carries far more load per square inch than a display of that size suggests. This is where boxboard stops being viable and corrugated, often litho-laminated, takes over.',
        'The characteristic requirement is partitioning: glass against glass chips, and a chipped unit is unsellable.',
      ],
    },
    {
      heading: 'Barrier and food-contact work',
      body: [
        'Soap, bakery, and food displays where the product attacks its own packaging. Oils migrate into board and stain it permanently, and the coating decision governs both that and whether the pack stays recyclable.',
        'Direct food contact adds material compliance to the specification, which is settled before any structure is drawn.',
      ],
    },
    {
      heading: 'Shipper-displays and retail-ready formats',
      body: [
        'Structures doing two jobs: surviving palletized freight closed, then opening into something that merchandises. The perforation is where these succeed or fail — too strong and a store associate reaches for a knife, too weak and cases open under compression in transit.',
      ],
    },
    {
      heading: 'What is not on this page',
      body: [
        'Client names, order quantities, timelines, and commercial results. Those belong in case studies, and we are not publishing case studies until we have permission to name a client and verified figures to quote.',
      ],
      link: {
        text: 'The reasoning behind that is set out under',
        href: '/case-studies/',
        anchor: 'case studies',
      },
    },
  ],

  relatedProducts: [
    'counter-display-boxes',
    'cardboard-display-stands',
    'candle-display-boxes',
    'corrugated-display-boxes',
    'display-gift-boxes',
    'shelf-ready-display-boxes',
  ],

  relatedPages: [
    { label: 'Case studies', href: '/case-studies/' },
    { label: 'Customer reviews', href: '/customer-reviews/' },
    { label: 'How to choose retail display packaging', href: '/how-to-choose-retail-display-packaging/' },
    { label: 'About us', href: '/about-us/' },
  ],

  cta: {
    heading: 'Have a problem none of these match?',
    body: 'Most jobs start from a constraint rather than a format. Send the product and the constraint and we will work from there.',
  },

  updated: '2026-07-19',
};

export default content;
