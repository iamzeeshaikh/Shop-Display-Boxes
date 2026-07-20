import type { PageContent } from '../../../data/page-content';

/**
 * NOTE ON HONESTY: no invented price points, percentages, or savings figures
 * appear here. The only price stated is the verified $0.30 starting point, with
 * its qualifier. Everything else describes how cost behaves, not what it is.
 */
const content: PageContent = {
  slug: 'how-much-do-custom-display-boxes-cost',
  kind: 'guide',

  metaTitle: 'How Much Do Custom Display Boxes Cost? | Price Drivers',
  metaDescription:
    'What actually drives custom display box pricing, why small runs cost more per piece, and where the real savings are found.',

  h1: 'How Much Do Custom Display Boxes Cost?',

  intro:
    'Pricing starts from $0.30 per piece for qualifying large-volume orders. That is a genuine starting point rather than a typical price, and this guide explains what moves a quote away from it in either direction.',

  sections: [
    {
      heading: 'Quantity dominates everything',
      body: [
        'Setup costs are fixed: dieline development, die tooling, printing plates, press make-ready. They are incurred whether you order five hundred boxes or fifty thousand, and they are divided across the run.',
        'The practical consequence surprises people. Halving a quantity does not halve the invoice, and at small volumes it may barely change it. Conversely, doubling a modest run often adds far less than double the cost.',
      ],
    },
    {
      heading: 'Structural complexity is underestimated',
      body: [
        'This is the driver buyers most often miss. Every additional glue point, insert, die-cut window, or perforation adds a production step, and at most quantities steps cost more than material does.',
        'A structurally simple box in a slightly heavier board is frequently cheaper than a complicated box in a lighter one. If a quote comes back higher than expected, structure is usually where to look first.',
      ],
    },
    {
      heading: 'Board',
      body: [
        'Material cost scales with area and grade. Corrugated costs more than boxboard for the same footprint, double wall more than single, and litho-lamination adds both material and a production stage.',
        'It is real money, but it is usually a smaller lever than quantity or structure. Downgrading board to save cost tends to save less than expected and risks a display that fails under load — which costs far more.',
      ],
      link: {
        text: 'What each board can and cannot carry is set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Print route',
      body: [
        'Digital has no plate setup, which makes it cheaper on short runs and for versioned artwork. Offset carries plate cost but a lower running cost, so it overtakes digital as quantity grows.',
        'Where that crossover falls depends on box size, ink coverage, and finishing, so we compare both against your actual specification rather than applying a fixed threshold.',
      ],
      link: {
        text: 'The trade-offs between routes are compared under',
        href: '/custom-printing-options/',
        anchor: 'custom printing options',
      },
    },
    {
      heading: 'Finishing',
      body: [
        'Lamination, foil stamping, embossing, and spot UV each add a pass. Foil and embossing also need their own tooling, which behaves like setup — significant on a short run, minor across a long one.',
        'Spot colors add a plate each. Beyond three or four, a CMYK build plus one or two critical spot inks is usually more economical than specifying everything as spot.',
      ],
    },
    {
      heading: 'Freight is part of the delivered cost',
      body: [
        'Freight on display packaging is billed on volume rather than weight, so a bulky display costs more to ship than its weight suggests. Flat-packing changes this substantially.',
        'Pallet fit matters too. A design leaving significant unused pallet space carries that cost on every shipment, and adjusting a dimension at dieline stage to gain a unit per layer is free then and impossible later.',
      ],
    },
    {
      heading: 'Where the real savings usually are',
      body: [
        'Consolidating repeat runs, rather than negotiating rate. Ordering the same specification four times a year means paying setup four times.',
        'After that: simplifying structure, and getting the size right so you are not shipping air. Both usually save more than a board downgrade, and neither risks the display failing.',
      ],
      link: {
        text: 'How volume and consolidation interact is covered under',
        href: '/wholesale-display-boxes/',
        anchor: 'wholesale display boxes',
      },
    },
    {
      heading: 'Why we do not publish a price list',
      body: [
        'Because the same box in two different specifications can differ in price by a multiple, and a published table would be wrong for almost everybody who read it.',
        'The $0.30 figure is stated because it is a real qualifying floor for large-volume orders. Presenting it as a typical price would be misleading, so the product pages state the qualifier alongside it every time.',
      ],
    },
  ],

  tables: [
    {
      caption: 'What moves a display box quote',
      headers: ['Driver', 'Effect on price', 'Notes'],
      rows: [
        ['Quantity', 'Largest single lever', 'Fixed setup spread across the run'],
        ['Structural complexity', 'Large, often underestimated', 'Each added step costs more than material'],
        ['Board grade and wall', 'Moderate', 'Scales with area; smaller lever than expected'],
        ['Print route', 'Moderate', 'Digital wins short runs; offset wins volume'],
        ['Finishing', 'Moderate to large', 'Foil and emboss carry their own tooling'],
        ['Spot colors', 'Small per color', 'One plate each; adds up beyond three or four'],
        ['Size and pallet fit', 'Affects freight on every shipment', 'Free to optimize at dieline stage'],
      ],
      note: 'Effects are directional rather than quantified. We are not publishing percentages or savings figures that would not hold across different specifications.',
    },
  ],

  faqs: [
    { question: 'What does $0.30 per piece actually mean?', answer: 'It is a starting point for qualifying large-volume orders, not a typical price. Smaller runs, specialty board, added inserts, and premium finishes all price above it. Every product page states that qualifier alongside the figure.' },
    { question: 'If I halve my order, does the price halve?', answer: 'No. Setup costs — dieline, tooling, plates, make-ready — are fixed and do not scale down with quantity. At small volumes, halving an order can change the invoice surprisingly little.' },
    { question: 'What is the most underestimated cost driver?', answer: 'Structural complexity. Every extra glue point, insert, window, or perforation adds a production step, and at most quantities steps cost more than material. If a quote is higher than expected, look at structure before board.' },
    { question: 'Should I downgrade the board to save money?', answer: 'Usually not. It saves less than people expect and risks a display that bows or collapses under load, which costs far more than the saving. Simplifying structure or increasing quantity are better levers.' },
    { question: 'Digital or offset — which is cheaper?', answer: 'Digital on short runs and versioned artwork, because there are no plates. Offset overtakes it as quantity grows. Where the crossover falls depends on box size, ink coverage, and finishing, so we compare both on your job.' },
    { question: 'Does box size affect cost beyond material?', answer: 'Yes, through freight. Display packaging freight is billed on volume, so an oversized box costs more to ship on every consignment. Optimizing size and pallet fit at dieline stage is free; doing it later is impossible.' },
    { question: 'Where is the biggest saving on an established display?', answer: 'Consolidating repeat runs. Ordering the same specification four times a year means paying setup four times. Where storage allows, one consolidated run usually beats any rate negotiation.' },
    { question: 'Why will you not publish a price list?', answer: 'Because the same box in two specifications can differ in price by a multiple, so a published table would be wrong for almost everyone reading it. We quote against your actual specification instead.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'corrugated-display-boxes', 'cardboard-display-boxes'],

  relatedPages: [
    { label: 'Minimum order quantity for display boxes', href: '/minimum-order-quantity-for-display-boxes/' },
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
    { label: 'Wholesale display boxes', href: '/wholesale-display-boxes/' },
    { label: 'How to reduce the cost of custom display boxes', href: '/blog/how-to-reduce-the-cost-of-custom-display-boxes/' },
  ],

  cta: {
    heading: 'Want a real number?',
    body: 'Send the product, quantity, and where the display will sit. A quote against your specification is the only price that means anything.',
  },

  updated: '2026-07-19',
};

export default content;
