import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'display-box-size-guide',
  kind: 'guide',

  metaTitle: 'Display Box Size Guide | Measuring and Specifying Boxes',
  metaDescription:
    'How to measure your product and specify a display box: internal dimensions, tolerance, board thickness, and pallet fit rules.',

  h1: 'Display Box Size Guide',

  intro:
    'Most packaging failures are dimensional, and most dimensional failures come from measuring the wrong thing. This guide covers what to measure, what to specify, and what changes the numbers after you have specified them.',

  sections: [
    {
      heading: 'Measure at the widest point',
      body: [
        'Which is frequently not the body. Caps, pumps, sprayers, and closures are often wider than the container they sit on, and a wrap label adds thickness all the way around.',
        'A cavity cut to a body measurement will not accept the real unit. If the product has a cap, measure across the cap.',
      ],
    },
    {
      heading: 'Specify internal, not external',
      body: [
        'A box is defined by the space inside it, because that is what has to hold the product. External dimensions describe the box; internal dimensions describe whether it works.',
        'Always say which you are quoting. Supplying an external measurement without saying so is a common cause of a display that does not fit its assortment.',
      ],
      link: {
        text: 'How sizing is set on a custom job is covered under',
        href: '/custom-box-sizes/',
        anchor: 'custom box sizes',
      },
    },
    {
      heading: 'Board thickness changes the numbers',
      body: [
        'On thin boxboard the gap between internal and external is minor. On double-wall corrugated it is substantial — a display can lose most of an inch of internal width to its own walls.',
        'This is also why changing board after a dieline is approved means revisiting the drawing. The allowances were calculated for a specific caliper and do not transfer.',
      ],
    },
    {
      heading: 'Tolerance',
      body: [
        'A box sized exactly to the product will not accept it, because both carry manufacturing variation. Too much tolerance and the product moves, which causes leaning, sliding, and scuffing.',
        'The right figure depends on the product, how it is loaded, and whether a shopper needs to remove one unit without disturbing the rest. It is set from a physical sample rather than calculated.',
      ],
      points: [
        'Product variation, especially on handmade or batch-made items',
        'Hand-loading versus machine-loading',
        'Whether a shopper removes one unit at a time',
        'Whether the display is moved while full',
      ],
    },
    {
      heading: 'Size to the retailer as well as the product',
      body: [
        'Where a retailer has given a footprint, a shelf depth, or a planogram dimension, that constrains the display before the product does. It is a hard limit and worth establishing before anything is drawn.',
        'Where the two conflict, the retailer usually wins and the assortment shrinks — rather than the display growing past what will be accepted.',
      ],
    },
    {
      heading: 'Height on a counter is cheaper than width',
      body: [
        'Retailers evaluate counter displays largely on footprint. Growing upward through tiers costs you less negotiating capital than growing outward, and it suits the steep viewing angle at a counter anyway.',
        'A wide shallow display reads well in a photograph and gets refused in a store.',
      ],
    },
    {
      heading: 'Check pallet fit before approving the dieline',
      body: [
        'Freight on display packaging is billed on volume. A design that leaves significant unused pallet space carries that cost on every shipment for the life of the product.',
        'Adjusting a dimension slightly to gain another unit per pallet layer is free at dieline stage and impossible afterward. At volume it repays itself continuously.',
      ],
      link: {
        text: 'What drives freight cost is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
  ],

  tables: [
    {
      caption: 'What to send when requesting a size',
      headers: ['Item', 'Why it matters'],
      rows: [
        ['Product at its widest point', 'Caps and closures are often wider than the body'],
        ['Filled weight of one unit', 'Sets the board, not the dimensions'],
        ['Assortment the display must hold', 'Determines base span and total load'],
        ['Retailer footprint, if given', 'Hard constraint that overrides product-led sizing'],
        ['Whether shoppers remove one unit at a time', 'Affects cavity tolerance'],
        ['A physical sample, where there is an insert', 'Spec sheets omit what decides fit'],
      ],
    },
  ],

  faqs: [
    { question: 'Where should I measure my product?', answer: 'At its widest point, which is often not the body. Caps, pumps, and closures are frequently wider than the container, and a wrap label adds thickness all round. A cavity cut to a body measurement will not accept the real unit.' },
    { question: 'Should I give internal or external dimensions?', answer: 'Internal, and say which you are quoting. Internal is the space that has to hold your product. Supplying an external measurement without flagging it is a common cause of a display that does not fit its assortment.' },
    { question: 'How much does board thickness change the size?', answer: 'Minor on thin boxboard, substantial on double-wall corrugated — a display can lose most of an inch of internal width to its own walls. It is also why changing board after dieline approval means revisiting the drawing.' },
    { question: 'How much tolerance should there be?', answer: 'Enough that it fits despite variation in both product and box, little enough that the product does not move. The right figure depends on the item and how it is handled, so it is set from a physical sample rather than calculated.' },
    { question: 'What if the retailer footprint conflicts with my assortment?', answer: 'The retailer wins. A display exceeding the agreed footprint does not get placed, so the assortment shrinks rather than the display growing. Establish that constraint before anything is drawn.' },
    { question: 'Is it better to make a counter display taller or wider?', answer: 'Taller. Retailers evaluate counter displays largely on footprint, so growing upward costs less negotiating capital than growing outward — and it suits the steep viewing angle at a counter anyway.' },
    { question: 'Does pallet fit really matter?', answer: 'More than most people expect. Freight is billed on volume, so a design leaving unused pallet space carries that cost on every shipment. Adjusting a dimension at dieline stage to gain a unit per layer is free then and impossible later.' },
    { question: 'Why do you want the product rather than its dimensions?', answer: 'Because the dimensions that decide fit are the ones a spec sheet does not record — a cap flare, a tapered base, a label thickness, or batch-to-batch variation on handmade items.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'flat-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'Custom box sizes', href: '/custom-box-sizes/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'How to calculate the right display box size', href: '/blog/how-to-calculate-the-right-display-box-size/' },
    { label: 'Best material for display boxes', href: '/best-material-for-display-boxes/' },
  ],

  cta: {
    heading: 'Send the product itself',
    body: 'For anything with an insert, the measurements that decide fit are the ones no spec sheet records.',
  },

  updated: '2026-07-19',
};

export default content;
