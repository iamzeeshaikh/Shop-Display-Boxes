import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'minimum-order-quantity-for-display-boxes',
  kind: 'guide',

  metaTitle: 'Minimum Order Quantity for Display Boxes | MOQ Guide',
  metaDescription:
    'Why display box minimum orders exist, what actually sets them, and how print route and structure change the smallest run.',

  h1: 'Minimum Order Quantity for Display Boxes',

  intro:
    'Minimums exist because of fixed costs, not arbitrary policy. Understanding what sets one tells you how to move it — and when it is not worth trying.',

  sections: [
    {
      heading: 'Where a minimum comes from',
      body: [
        'Every custom job carries costs that do not scale with quantity: drawing the dieline, cutting the die, making plates, and setting the press. Those exist whether you order two hundred boxes or twenty thousand.',
        'A minimum is the point below which those fixed costs make the per-piece price unreasonable rather than the point below which production is impossible. That distinction matters, because it means the minimum is a commercial threshold you can sometimes negotiate around rather than a technical wall.',
      ],
    },
    {
      heading: 'Print route moves it most',
      body: [
        'Offset printing makes plates per job. Spread across a small run, that setup dominates, which is why traditional minimums were high.',
        'Digital printing removes plates entirely. That single change is what made genuinely short runs viable, and it is the first thing to ask about if a quoted minimum is higher than you need.',
      ],
      link: {
        text: 'Where each print route wins is compared under',
        href: '/custom-printing-options/',
        anchor: 'custom printing options',
      },
    },
    {
      heading: 'Structure moves it too',
      body: [
        'A simple tray needs one die and one glue operation. A multi-tier display with cavity inserts and a separate header needs several dies, several operations, and more setup at each.',
        'Simplifying structure lowers the minimum as well as the unit price. If a minimum is blocking you, structure is worth revisiting before assuming the quantity is the only variable.',
      ],
    },
    {
      heading: 'Die tooling is the sticky part',
      body: [
        'Plates can be avoided with digital. Cutting dies generally cannot — a custom shape needs a physical die made, and that cost is real regardless of print route.',
        'This is why a custom structure has a meaningfully higher minimum than printing onto an existing die. It is also why the second order is so much cheaper: the die already exists.',
      ],
    },
    {
      heading: 'Ways to work under a minimum',
      body: [
        'Use an existing die where your product genuinely fits one, and put the customization into print rather than structure. Combine several designs into one run, since versioning on digital costs little. Or accept a higher per-piece price for a proving run and reorder at volume once the structure is validated.',
        'The last is usually the sensible route for a new display. Finding a structural problem across a hundred units costs far less than finding it across ten thousand.',
      ],
      link: {
        text: 'What a short run costs and when it is worth it is covered under',
        href: '/low-minimum-orders/',
        anchor: 'low minimum orders',
      },
    },
    {
      heading: 'When to order above the minimum',
      body: [
        'Once the structure is proven and the artwork settled, ordering close to the minimum repeatedly is expensive — you pay setup each time.',
        'Consolidating a year of small reorders into fewer larger runs is usually the single biggest saving available on an established display, provided you can store them.',
      ],
    },
    {
      heading: 'Our position on minimums',
      body: [
        'The minimum is 100 units across the range. Digital printing is what makes a run that short viable — it removes the plate setup that used to push minimums much higher.',
        'Below that, the honest answer is that setup costs make the per-piece price unreasonable rather than that production is impossible. Send the specification and we will show you what changes if you simplify the structure.',
      ],
    },
  ],

  tables: [
    {
      caption: 'What raises or lowers a minimum',
      headers: ['Factor', 'Effect on minimum', 'Can it be avoided?'],
      rows: [
        ['Offset plates', 'Raises', 'Yes — print digitally'],
        ['Custom cutting die', 'Raises', 'Only by using an existing die'],
        ['Multiple components', 'Raises', 'Yes — simplify the structure'],
        ['Foil or emboss tooling', 'Raises', 'Yes — omit or defer to a later run'],
        ['Litho-lamination', 'Raises', 'Yes — direct print instead'],
        ['Versioned artwork', 'Neutral on digital', 'Combine versions into one run'],
      ],
    },
  ],

  faqs: [
    { question: 'What is the minimum order for display boxes?', answer: 'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.' },
    { question: 'Why do minimums exist at all?', answer: 'Fixed costs. Dieline drawing, die cutting, plates, and press setup are incurred regardless of quantity. A minimum is the point below which those make the per-piece price unreasonable — not the point below which production is impossible.' },
    { question: 'What lowers a minimum most?', answer: 'Digital printing, because it removes plate setup entirely. That is the first thing to ask about if a quoted minimum is higher than you need. Simplifying the structure is the second lever.' },
    { question: 'Can I avoid die tooling costs?', answer: 'Only by using an existing die, which means fitting your product to a structure that already exists. A custom shape requires a physical die, and that cost is real regardless of print route.' },
    { question: 'Why is my second order so much cheaper?', answer: 'Because the die and the approved dieline already exist. Most of the cost and elapsed time on a first order is development, and a reorder against approved tooling is effectively a print job.' },
    { question: 'Should I order a small proving run first?', answer: 'For a new structure, usually yes. Finding a structural problem across a hundred units costs far less than across ten thousand, and the reorder economics are better than the first order anyway.' },
    { question: 'Can I combine several designs to reach a minimum?', answer: 'On digital, yes, and versioning costs little because there are no plates per version. It is a practical route for ranges with several SKUs that individually fall below a viable run.' },
    { question: 'Is ordering at the minimum repeatedly a good idea?', answer: 'Not once the structure is proven. You pay setup each time. Consolidating a year of small reorders into fewer larger runs is usually the biggest saving available on an established display, if you can store them.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'display-trays', 'cardboard-display-boxes'],

  relatedPages: [
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Wholesale display boxes', href: '/wholesale-display-boxes/' },
    { label: 'How to order display boxes in bulk', href: '/blog/how-to-order-display-boxes-in-bulk/' },
  ],

  cta: {
    heading: 'Blocked by a minimum?',
    body: 'Send the specification. We will tell you the real minimum for that job and what would change if the structure were simpler.',
  },

  updated: '2026-07-19',
};

export default content;
