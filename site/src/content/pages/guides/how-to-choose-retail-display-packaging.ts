import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'how-to-choose-retail-display-packaging',
  kind: 'guide',

  metaTitle: 'How to Choose Retail Display Packaging | Decision Guide',
  metaDescription:
    'A decision sequence for retail display packaging: channel, placement, structure, material, and arrival, in the order that matters.',

  h1: 'How to Choose Retail Display Packaging',

  intro:
    'Five decisions, and the order matters more than any individual answer. Taken in sequence each one narrows the next. Taken out of order, you design something and then discover it cannot be placed.',

  sections: [
    {
      heading: 'One: which channel',
      body: [
        'Independents, chains, wholesale, and events behave completely differently. An independent will usually accept whatever fits their counter. A chain issues a specification and rejects anything that misses it.',
        'A programme that treats both the same ends up over-engineered for one and non-compliant for the other. Start here, because it determines how much latitude you have in everything that follows.',
      ],
    },
    {
      heading: 'Two: which placement',
      body: [
        'Counter, shelf, or floor. This sets the footprint you are allowed and the angle the shopper views from, and both constrain the structure absolutely.',
        'Get the actual numbers from the retailer rather than estimating. Footprint is the single most common reason a display is refused, and discovering it after design means starting again.',
      ],
      link: {
        text: 'The trade-offs between the two most-confused placements are set out in the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'counter versus floor guide',
      },
    },
    {
      heading: 'Three: open or enclosed',
      body: [
        'A tray removes the barrier between shopper and product, raising pick-up rates and losing protection, stackability, and tamper evidence. A box does the reverse.',
        'If the product is the visual — bakery, soap, confectionery — open usually wins. If the packaging carries the story or the product needs protecting, enclosed does.',
      ],
      link: {
        text: 'That comparison is worked through in',
        href: '/display-boxes-vs-display-trays/',
        anchor: 'display boxes versus display trays',
      },
    },
    {
      heading: 'Four: what holds the product',
      body: [
        'This is where display packaging differs most from ordinary cartons, and where the specification budget usually belongs. Cavity inserts hold tall or tip-prone units, partitions separate glass, risers lift back rows into the sightline.',
        'A display that holds product approximately is a display whose front row leans within a week, and a leaning row stops selling.',
      ],
    },
    {
      heading: 'Five: how it arrives',
      body: [
        'Flat-packed is cheapest to ship and needs store assembly. A shipper-display travels sealed and converts on arrival, removing a packing stage. Pre-assembled is most protective and by far the most expensive in freight.',
        'Freight here is billed on volume rather than weight, so this decision carries more cost than it appears to. Who assembles the display, and how much time they have, decides which is realistic.',
      ],
    },
    {
      heading: 'Then, and only then, the material',
      body: [
        'Material follows from the four decisions above plus the weight of a full assortment. It is not a starting point, and choosing it first is the most common way people end up with a display that does not suit its placement.',
      ],
      link: {
        text: 'The material decision sequence is set out in',
        href: '/best-material-for-display-boxes/',
        anchor: 'best material for display boxes',
      },
    },
    {
      heading: 'The questions to ask the retailer first',
      body: [
        'Available footprint, shelf depth and height as they measure them, whether the unit sits on shelf or floor, how it should arrive, and whether store staff may assemble anything.',
        'Those five answers are the boundaries of what is buildable. Asking early costs nothing; asking after a rejected submission costs a redesign.',
      ],
    },
  ],

  tables: [
    {
      caption: 'The decision sequence',
      headers: ['Step', 'Decision', 'What it constrains'],
      rows: [
        ['1', 'Channel', 'How prescriptive the requirements will be'],
        ['2', 'Placement', 'Footprint and viewing angle'],
        ['3', 'Open or enclosed', 'Pick-up rate against protection'],
        ['4', 'How product is held', 'Insert type and tolerance'],
        ['5', 'How it arrives', 'Freight cost and assembly burden'],
        ['6', 'Material', 'Follows from all of the above plus load'],
      ],
      note: 'Working out of order is the usual cause of a display that has to be redesigned. Material chosen first is the most frequent version of that mistake.',
    },
  ],

  faqs: [
    { question: 'Where should I start?', answer: 'With the channel, then the placement. Those determine how prescriptive the requirements are and what footprint you have. Everything else — structure, insert, material — is constrained by them rather than the other way round.' },
    { question: 'What should I ask the retailer before designing?', answer: 'Available footprint, shelf depth and height as they measure them, whether it sits on shelf or floor, how it should arrive, and whether staff may assemble it. Those five answers bound what is buildable.' },
    { question: 'Why is choosing material first a mistake?', answer: 'Because material follows from placement, structure, and load. Choosing it first means you have made a decision that the later constraints may contradict — and the later constraints are the ones that get the display refused.' },
    { question: 'Open tray or enclosed box?', answer: 'If the product is the visual — bakery, soap, confectionery — open usually wins on pick-up rate. If the packaging carries the story, or the product needs protection, stackability, or tamper evidence, enclosed does.' },
    { question: 'How much does the insert matter?', answer: 'On many displays, more than the box. It is what holds product where you placed it, and a display holding product loosely has a leaning front row within a week. It is usually where the specification budget belongs.' },
    { question: 'Does it matter how the display arrives?', answer: 'Considerably, both for freight and for whether it gets built. Freight is billed on volume, so flat-packing saves substantially — but only if whoever receives it can and will assemble it in the time they have.' },
    { question: 'Can one display work across all my channels?', answer: 'Rarely without compromise. Independents and chains impose different requirements. A common structure with different printed panels usually works better than one display stretched to satisfy everyone.' },
    { question: 'What is the most common mistake overall?', answer: 'Designing before establishing the retailer footprint. Footprint decides whether a display is placed at all, and finding it out after the design is finished means starting over rather than adjusting.' },
  ],

  relatedProducts: ['custom-display-boxes', 'retail-display-packaging', 'counter-display-boxes', 'cardboard-display-stands'],

  relatedPages: [
    { label: 'Display box packaging', href: '/display-box-packaging/' },
    { label: 'Retail packaging', href: '/retail-packaging/' },
    { label: 'Display packaging design guide', href: '/display-packaging-design-guide/' },
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
  ],

  cta: {
    heading: 'Start at step one',
    body: 'Tell us the channel and what the retailer has agreed. Those two answers eliminate most options immediately.',
  },

  updated: '2026-07-19',
};

export default content;
