import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'custom-vs-stock-display-boxes',
  kind: 'guide',

  metaTitle: 'Custom vs Stock Display Boxes | Which One Is Right',
  metaDescription:
    'Custom against stock display boxes: fit, lead time, cost at different volumes, and when a stock size is genuinely enough.',

  h1: 'Custom vs Stock Display Boxes',

  intro:
    'Stock boxes are cheaper per unit and available immediately. Custom boxes fit. Which matters more depends almost entirely on what you are putting in them and how many you need.',

  sections: [
    {
      heading: 'What you gain from stock',
      body: [
        'No tooling, no dieline development, no proofing cycle, and immediate availability. For a business that needs boxes this week, that is decisive.',
        'Per-unit cost at low quantities is also lower, because you are sharing the tooling cost with everyone else who buys that size.',
      ],
    },
    {
      heading: 'What it costs you',
      body: [
        'Fit, and everything that follows from it. A stock box holds your product approximately. Approximate fit means the product moves, and product that moves leans, slides, scuffs, or falls over.',
        'On a display, that is not cosmetic. A front row that leans stops selling, and a shopper who has to straighten your product to see it usually does not bother.',
      ],
      points: [
        'Product moves in transit and in handling',
        'Wasted volume increases freight cost on every shipment',
        'Void space needs filling, which adds material and labor',
        'No control over structure, opening, or how product presents',
      ],
    },
    {
      heading: 'Where stock genuinely works',
      body: [
        'Simple regular-shaped products that happen to match a standard size closely. Outer shipping cartons, where fit matters less than protection. Very short runs where tooling cannot be justified at all.',
        'And early testing — using a stock box to check whether a display format sells before investing in tooling for it.',
      ],
    },
    {
      heading: 'Where custom is the only real option',
      body: [
        'Anything with a cavity insert. Anything sized to a retailer footprint. Anything where the product is irregular, tall and narrow, fragile, or heavy relative to its base.',
        'Also anything where the box is doing brand work — a stock box printed with your artwork is still a stock shape, and shape is a large part of what makes packaging look designed rather than bought.',
      ],
      link: {
        text: 'How custom sizing is set is covered under',
        href: '/custom-box-sizes/',
        anchor: 'custom box sizes',
      },
    },
    {
      heading: 'How the cost comparison changes with volume',
      body: [
        'At very low quantities, stock wins clearly — there is no tooling to amortize. As quantity rises, the custom tooling cost divides across more units while the per-unit advantage of stock stays roughly constant.',
        'Somewhere in between, custom becomes cheaper per unit as well as better fitting. Where that point falls depends on the structure and the print route, so it is worth asking rather than assuming.',
      ],
    },
    {
      heading: 'The hidden cost of a poor fit',
      body: [
        'Oversized boxes ship air. Freight on display packaging is billed on volume, so every shipment of a too-large box carries a cost that does not appear on the box invoice.',
        'Void fill adds material and packing labor. Damage from product moving adds replacements. These are real costs that often exceed the per-unit saving that made stock look attractive.',
      ],
    },
    {
      heading: 'The middle route',
      body: [
        'A custom insert inside a stock outer. The insert holds the product precisely while the outer stays a standard size, which avoids tooling the box while solving the fit problem.',
        'It does not give you a custom footprint or a distinctive shape, but where the issue is purely that the product moves, it is often the efficient answer.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Custom against stock display boxes',
      headers: ['', 'Stock', 'Custom'],
      rows: [
        ['Fit to product', 'Approximate', 'Exact'],
        ['Tooling cost', 'None', 'Yes, amortized across the run'],
        ['Availability', 'Immediate', 'After dieline and proof approval'],
        ['Unit cost at low volume', 'Lower', 'Higher'],
        ['Unit cost at volume', 'Higher', 'Lower'],
        ['Freight efficiency', 'Poorer — ships void space', 'Optimized to the product'],
        ['Retailer footprint control', 'None', 'Full'],
        ['Structural options', 'Fixed', 'Open'],
      ],
      note: 'The volume at which custom overtakes stock on unit cost depends on structure and print route. It is worth asking for both rather than assuming where the crossover falls.',
    },
  ],

  faqs: [
    { question: 'Is a stock box always cheaper?', answer: 'Per unit at low quantities, yes, because there is no tooling to amortize. As volume rises, custom tooling divides across more units and custom often becomes cheaper as well as better fitting. Where that crossover falls varies by job.' },
    { question: 'What is wrong with approximate fit?', answer: 'Product that can move will move — in transit and in handling. On a display that means leaning, sliding, and scuffing, and a leaning front row stops selling. It is a merchandising problem, not a cosmetic one.' },
    { question: 'When is stock genuinely the right choice?', answer: 'Simple regular products that closely match a standard size, outer shipping cartons where protection matters more than fit, very short runs that cannot justify tooling, and early testing before committing to a format.' },
    { question: 'Can I use a stock box with a custom insert?', answer: 'Yes, and it is often the efficient middle route. The insert holds the product precisely while the outer stays standard, avoiding box tooling. You do not get a custom footprint or a distinctive shape, but the fit problem is solved.' },
    { question: 'Does an oversized box really cost more to ship?', answer: 'Yes. Freight on display packaging is billed on volume rather than weight, so shipping air is a real cost incurred on every consignment — one that does not appear anywhere on the box invoice.' },
    { question: 'Can I print my branding on a stock box?', answer: 'Usually, yes. But a stock box printed with your artwork is still a stock shape, and shape is a large part of what makes packaging look designed rather than bought. Print does not disguise a generic structure.' },
    { question: 'How long does custom take compared to stock?', answer: 'Stock is immediate. Custom requires dieline drawing and approval, then proofing, before production begins. If you need boxes this week, stock is the answer regardless of the other trade-offs.' },
    { question: 'What if I need a retailer-specified footprint?', answer: 'Then custom is the only option. Retailer footprints rarely coincide with standard box sizes, and a display that exceeds the agreed footprint does not get placed however good it is.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'cardboard-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'Custom box sizes', href: '/custom-box-sizes/' },
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
  ],

  cta: {
    heading: 'Would a stock size actually fit?',
    body: 'Send the product dimensions and we will tell you honestly whether custom is worth it for your quantity.',
  },

  updated: '2026-07-19',
};

export default content;
