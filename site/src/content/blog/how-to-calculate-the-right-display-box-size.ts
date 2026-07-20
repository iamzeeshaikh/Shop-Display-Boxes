import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'how-to-calculate-the-right-display-box-size',

  title: 'How to Calculate the Right Display Box Size',
  metaTitle: 'How to Calculate the Right Display Box Size | Method',
  metaDescription:
    'A working method for sizing a display box: measure the widest point, add tolerance, work outward, and check the pallet fit.',

  excerpt:
    'Sizing works outward from the product, not inward from a box. Doing it in that order removes most of the mistakes before they reach a dieline.',

  author: 'Shop Display Boxes',
  published: '2026-07-01',
  updated: '2026-07-01',
  tags: ['Design', 'Ordering'],

  image: {
    productSlug: 'flat-display-boxes',
    file: 'flat-display-boxes-3.png',
    alt: 'Printed flat display box with divider inserts separating each item',
  },

  sections: [
    {
      heading: 'Step one: measure the widest point',
      body: [
        'Not the body. Caps, pumps, sprayers, and closures are frequently wider than the container they sit on, and a wrap label adds thickness all the way around.',
        'A cavity cut to a body measurement will not accept the real unit. Measure across whatever is actually widest, including any label, and record height to the top of the closure rather than the top of the container.',
      ],
    },
    {
      heading: 'Step two: account for variation',
      body: [
        'Both your product and the box carry manufacturing variation. Handmade and batch-made items vary noticeably — soap bars, bath bombs, and craft products can differ measurably between batches.',
        'Measure several units rather than one, and size against the largest. An insert sized to an average fits roughly half your stock.',
      ],
    },
    {
      heading: 'Step three: add tolerance deliberately',
      body: [
        'Tolerance is not slack, it is a decision. Too little and the unit will not go in; too much and it moves, which causes leaning, sliding, and scuffing.',
        'The right figure depends on how the display is used, and it is worth thinking through rather than defaulting.',
      ],
      points: [
        'Machine-loaded product needs more tolerance than hand-loaded',
        'A shopper removing one unit at a time needs enough room to grip it',
        'A display that gets moved while full needs units held more firmly',
        'Fragile units need clearance so they never touch each other',
      ],
    },
    {
      heading: 'Step four: multiply out to the assortment',
      body: [
        'Decide how many units across and how many deep, then add the internal structure between them — divider thicknesses, partition walls, or riser steps all consume internal space.',
        'This is the point where an assortment that seemed reasonable becomes a display wider than any retailer will accept. Better to discover it here than after a dieline exists.',
      ],
    },
    {
      heading: 'Step five: check it against the footprint you were given',
      body: [
        'If the retailer has specified a footprint, it overrides everything above. A display exceeding it does not get placed, however well it holds product.',
        'Where the two conflict, reduce the assortment or build upward through tiers. Height is cheaper than width in counter terms, and it suits the viewing angle better anyway.',
      ],
      link: {
        text: 'How capacity and footprint trade against each other is worked through in',
        href: '/blog/how-many-products-should-a-counter-display-hold/',
        anchor: 'how many products a counter display should hold',
      },
    },
    {
      heading: 'Step six: convert internal to external',
      body: [
        'Everything above is internal dimensions — the space that has to hold your product. External dimensions are internal plus the board.',
        'On thin boxboard the difference is minor. On double-wall corrugated it is substantial: a display can lose most of an inch of internal width to its own walls. Always state which you are quoting when you send figures, because assuming the wrong one is a common cause of a display that does not fit.',
      ],
    },
    {
      heading: 'Step seven: check pallet fit before approving',
      body: [
        'Freight on display packaging is billed on volume, so a design leaving unused pallet space carries that cost on every shipment for the life of the product.',
        'Adjusting a dimension slightly to gain another unit per pallet layer is free while the dieline is being drawn and impossible once approved. On any significant volume it is the highest-return check in the process.',
      ],
    },
    {
      heading: 'Why we ask for the product rather than the numbers',
      body: [
        'Because the dimensions that decide fit are the ones a spec sheet does not record — a cap flare, a tapered base, a label thickness, batch-to-batch variation.',
        'For anything with an insert, send the physical unit. The measurements above are a good way to scope a display and a poor way to cut a cavity.',
      ],
      link: {
        text: 'The full sizing reference is in the',
        href: '/display-box-size-guide/',
        anchor: 'display box size guide',
      },
    },
  ],

  related: [
    'how-many-products-should-a-counter-display-hold',
    'display-packaging-mistakes-retail-brands-should-avoid',
    'how-product-weight-affects-display-box-material',
  ],

  furtherReading: [
    { label: 'Custom box sizes', href: '/custom-box-sizes/' },
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
  ],
};

export default post;
