import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'how-many-products-should-a-counter-display-hold',

  title: 'How Many Products Should a Counter Display Hold?',
  metaTitle: 'How Many Products Should a Counter Display Box Hold?',
  metaDescription:
    'How to size counter display capacity against restocking reality, retailer footprint, and how it looks when half sold through.',

  excerpt:
    'Capacity is not a maximum you fill — it is a balance between how often the display gets restocked and how it looks when it is half empty.',

  author: 'Shop Display Boxes',
  published: '2026-07-11',
  updated: '2026-07-11',
  tags: ['Retail', 'Design'],

  image: {
    productSlug: 'cardboard-counter-display-units',
    file: 'cardboard-counter-display-units-3.png',
    alt: 'Printed counter display unit loaded with small retail cartons in rows',
  },

  sections: [
    {
      heading: 'The question behind the question',
      body: [
        'People usually ask this expecting a number. There is not one, because capacity is set by three constraints that vary per retailer and per product, and the binding one is rarely the display itself.',
        'What there is instead is a way of arriving at your number, which is more useful and takes about five minutes.',
      ],
    },
    {
      heading: 'Constraint one: the footprint you were given',
      body: [
        'This is almost always the binding constraint, and it comes from the retailer rather than from you. A counter display competes with a register, a card terminal, and everything else already there.',
        'Establish the footprint first. Everything about capacity is decided inside that number, and a display that exceeds it does not get placed regardless of how well it would have sold.',
      ],
      link: {
        text: 'How that negotiation works is covered on the',
        href: '/counter-display-boxes/',
        anchor: 'counter display boxes page',
      },
    },
    {
      heading: 'Constraint two: how often it will actually be restocked',
      body: [
        'Not how often it should be. A counter display is refilled by whoever is on shift, and in a busy store that may be irregular.',
        'If the display holds a day of stock and gets checked twice a week, it will spend most of its life empty. Capacity has to be matched to real replenishment behavior, and the honest source for that is the retailer, not an assumption.',
      ],
    },
    {
      heading: 'Constraint three: how it looks half sold',
      body: [
        'This is the one people forget, and it changes the answer more than the arithmetic does.',
        'A display spends a large proportion of its life partly sold through. A tray at half stock reads as picked-over and stops selling well before it is empty, which means the effective capacity is lower than the physical capacity.',
      ],
      subsections: [
        {
          heading: 'Structures that hide depletion',
          body: [
            'A dispenser, where units are drawn from a front opening, looks the same at half stock as at full. For single-SKU impulse lines this often justifies its extra structural complexity by itself.',
            'A stepped tier where the front row is always full also reads better than an open tray with visible gaps.',
          ],
        },
        {
          heading: 'Details that help regardless of structure',
          body: [
            'Print the inner base, so bare board never shows as stock depletes. Keep rows narrow enough that a gap in one is less conspicuous than a gap across a wide flat layout.',
          ],
        },
      ],
    },
    {
      heading: 'How many SKUs, not just how many units',
      body: [
        'A related question, and the answer here is firmer: three to five in practice. Beyond that each product gets too little frontage to register as a distinct item, and the display stops communicating anything.',
        'Give the leading seller more facings rather than splitting the display equally. Equal facings across a range is fair and sells less.',
      ],
    },
    {
      heading: 'Working out your number',
      body: [
        'Take the footprint the retailer conceded. Fit the maximum units into it that still leaves the display shoppable — a shopper must be able to take one without disturbing the rest.',
        'Then check that figure against replenishment: if it holds less than the restocking interval demands, either the footprint needs renegotiating, the display needs to grow upward through tiers, or the structure needs to hide depletion better.',
      ],
      points: [
        'Start from the retailer footprint, never from desired capacity',
        'Build upward through tiers before asking for more counter area',
        'Match capacity to real restocking frequency, not intended frequency',
        'Prefer a structure that looks full at half stock',
        'Three to five SKUs maximum, weighted toward the leading seller',
      ],
    },
    {
      heading: 'When the answer is that a counter display is wrong',
      body: [
        'If the arithmetic keeps producing a display too large for any footprint a retailer will concede, that is a signal rather than a problem to design around.',
        'A counter is a place of transaction, not deliberation. Assortments that need real capacity belong on a shelf or a floor unit, and scaling a counter display until it is refused wastes the tooling.',
      ],
      link: {
        text: 'The trade-offs between the two placements are set out in the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'counter versus floor comparison',
      },
    },
  ],

  related: [
    'how-to-design-counter-display-packaging',
    'display-packaging-mistakes-retail-brands-should-avoid',
    'what-are-display-boxes',
  ],

  furtherReading: [
    { label: 'Counter display boxes', href: '/counter-display-boxes/' },
    { label: 'Cardboard counter display units', href: '/cardboard-counter-display-units/' },
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
  ],
};

export default post;
