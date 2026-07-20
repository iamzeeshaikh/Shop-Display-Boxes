import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'custom-box-sizes',
  kind: 'commercial',

  metaTitle: 'Custom Box Sizes | Built Around Your Actual Product',
  metaDescription:
    'How custom display box sizes are actually set, why internal dimensions matter, and how board thickness changes the numbers.',

  h1: 'Custom Box Sizes',

  intro:
    'Every box we make is sized to the product rather than chosen from a range of stock sizes. That sounds obvious and it is where most packaging problems actually originate.',

  sections: [
    {
      heading: 'Internal dimensions are the ones that matter',
      body: [
        'A box is specified by the space inside it, because that is what has to hold your product. External dimensions describe the box; internal dimensions describe whether it works.',
        'Supplying an external measurement without saying so is a common cause of a display that does not fit its assortment. Our drawings always state internal dimensions, and it is worth confirming which you are quoting when you send figures.',
      ],
    },
    {
      heading: 'Board thickness changes the numbers',
      body: [
        'On thin folding boxboard the difference between internal and external is small. On double-wall corrugated it is substantial — a display can lose most of an inch of internal width to its own walls.',
        'This is also why a dieline drawn for one caliper does not work at another. Changing board thickness after a dieline is approved changes the allowances and needs the drawing revisited.',
      ],
      link: {
        text: 'How board thickness varies by material is set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Tolerance around the product',
      body: [
        'A box sized exactly to the product will not accept it, because both the product and the box carry manufacturing variation. Too much tolerance and the product moves, which is what causes leaning, sliding, and damage.',
        'The right tolerance depends on the product, how it is loaded, and whether a shopper needs to remove one unit without disturbing the rest. It is set from a physical sample rather than calculated from a drawing.',
      ],
      points: [
        'Product variation, particularly on handmade or batch-made items',
        'Whether units are hand-loaded or machine-loaded',
        'Whether a shopper removes one unit at a time',
        'Whether the display is moved when full',
      ],
    },
    {
      heading: 'Sizing to the retailer, not only to the product',
      body: [
        'Where a retailer has given you a footprint, a shelf depth, or a planogram dimension, that constrains the box before the product does. It is a hard limit and it is worth establishing before anything is drawn.',
        'Where both constrain, the retailer usually wins and the assortment gets smaller, rather than the display growing past what will be accepted.',
      ],
    },
    {
      heading: 'Sizing affects freight more than people expect',
      body: [
        'Freight on display packaging is billed on volume. A box sized generously around its product uses more board, ships in a larger carton, and takes more pallet space — three costs from one decision.',
        'Where volumes are large, it is worth checking pallet fit at the dieline stage. Adjusting a dimension slightly to gain another unit per pallet layer is free then and impossible later.',
      ],
      link: {
        text: 'What drives freight cost is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Measuring your product properly',
      body: [
        'Measure at the widest point, which is frequently not the body. Caps, pumps, and closures are often wider than the container, and a wrap label adds thickness all around.',
        'For anything with an insert, send the product rather than the measurements. The dimensions that decide fit are the ones a spec sheet does not record.',
      ],
    },
  ],

  faqs: [
    { question: 'Should I give you internal or external dimensions?', answer: 'Tell us which you are quoting. Internal dimensions are what matter, because that is the space holding your product. Supplying an external measurement without saying so is a common cause of a display that does not fit its assortment.' },
    { question: 'Why is the difference between internal and external so large on some boxes?', answer: 'Board thickness. On thin boxboard the difference is minor; on double-wall corrugated a display can lose most of an inch of internal width to its own walls. It is also why a dieline drawn for one caliper does not work at another.' },
    { question: 'How much tolerance should there be around the product?', answer: 'Enough that it fits despite manufacturing variation in both product and box, little enough that it does not move. The right figure depends on the product and how it is handled, so we set it from a physical sample rather than a calculation.' },
    { question: 'What if the retailer footprint conflicts with my assortment?', answer: 'The retailer usually wins. A display that exceeds the agreed footprint does not get placed, so the assortment gets smaller rather than the display growing. Establish that constraint before anything is drawn.' },
    { question: 'Does box size really affect shipping cost?', answer: 'Substantially, because freight is billed on volume. A generously sized box uses more board, ships in a larger carton, and takes more pallet space — three costs from one sizing decision.' },
    { question: 'How should I measure my product?', answer: 'At the widest point, which is often not the body. Caps, pumps, and closures are frequently wider than the container, and a wrap label adds thickness all round. For anything with an insert, send the product instead.' },
    { question: 'Can I change the board after the dieline is approved?', answer: 'Not without revisiting the drawing. Board thickness changes the allowances, so a dieline drawn for one caliper will not fold correctly at another. Raise a board change before dieline approval rather than after.' },
    { question: 'Is there a minimum or maximum size you can produce?', answer: 'Limits depend on the structure and the production route rather than being a single figure. Send your dimensions and we will confirm whether they are achievable and what changes if they are not.' },
  ],

  relatedProducts: ['custom-display-boxes', 'cardboard-display-boxes', 'corrugated-display-boxes', 'flat-display-boxes'],

  relatedPages: [
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'How to calculate the right display box size', href: '/blog/how-to-calculate-the-right-display-box-size/' },
  ],

  cta: {
    heading: 'Send the product, not the measurements',
    body: 'For anything with an insert, the dimensions that decide fit are the ones a spec sheet does not record.',
  },

  updated: '2026-07-19',
};

export default content;
