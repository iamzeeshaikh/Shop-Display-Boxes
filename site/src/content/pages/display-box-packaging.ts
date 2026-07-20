import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'display-box-packaging',
  kind: 'commercial',

  metaTitle: 'Display Box Packaging | Formats, Materials & Uses',
  metaDescription:
    'An overview of display box packaging: the main formats, what each is for, and how to narrow the choice to one structure.',

  h1: 'Display Box Packaging',

  intro:
    'Display box packaging covers a wide range of structures doing quite different jobs. This page is an overview of what exists and how to narrow it down, with links to the detail on each.',

  sections: [
    {
      heading: 'What counts as display packaging',
      body: [
        'Any packaging designed to present product at the point of sale rather than only to contain or transport it. That includes counter units, floor stands, shelf-ready cases, trays, and boxes with windows or open fronts.',
        'The defining property is that the packaging is doing merchandising work. A plain shipping carton contains product; a display box sells it.',
      ],
    },
    {
      heading: 'Narrowing by placement',
      body: [
        'Placement is the first and most useful filter, because it sets the footprint you are allowed and the angle the shopper views from.',
        'Counter units compete for a few square inches beside a register. Shelf displays fit a fixed depth and height, often governed by a planogram. Floor units hold the most stock and take the most negotiation.',
      ],
      points: [
        'Counter — smallest footprint, steep viewing angle, easiest to place',
        'Shelf — planogram constrained, often shelf-ready requirements',
        'Floor — most stock, most negotiation, usually promotional',
      ],
      link: {
        text: 'The two most commonly confused placements are compared in the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'counter versus floor guide',
      },
    },
    {
      heading: 'Narrowing by material',
      body: [
        'Folding boxboard prints best and suits light units. Corrugated carries weight and survives transit. Rigid board gives the weight and lid behavior that gift and presentation packaging depends on.',
        'The test is practical rather than categorical: load the display to its intended assortment, lift it by one edge, and see whether the base bows — then repeat after several days, because paperboard fails gradually.',
      ],
      link: {
        text: 'Board options and where each stops working are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Narrowing by how the product is held',
      body: [
        'This is where display packaging differs most from ordinary cartons. Cavity inserts hold tall or tip-prone units upright, partitions separate glass and units that scuff, and stepped risers lift back rows into the shopper’s sightline.',
        'On many displays the insert matters more than the outer box, and it is where the specification budget belongs.',
      ],
    },
    {
      heading: 'Narrowing by how it arrives',
      body: [
        'Flat-packed is cheapest to ship and needs store assembly. A shipper-display travels sealed and converts on arrival, removing a packing stage. Pre-assembled is most protective and by far the most expensive in freight.',
        'Freight on this product is billed on volume rather than weight, so this decision has more cost impact than it appears to.',
      ],
      link: {
        text: 'Structures that ship and then merchandise are covered on the',
        href: '/display-mailer-boxes/',
        anchor: 'display mailer boxes page',
      },
    },
    {
      heading: 'If you are scoping a whole programme',
      body: [
        'Most brands eventually need more than one format — a counter unit for independents, a shelf format for chains, something free-standing for promotions. Deciding how those fit together is a different problem from choosing one box.',
      ],
      link: {
        text: 'Programme-level planning is covered on the',
        href: '/retail-display-packaging/',
        anchor: 'retail display packaging page',
      },
    },
  ],

  faqs: [
    { question: 'What makes packaging a display box rather than a carton?', answer: 'It is doing merchandising work rather than only containing or transporting product. A plain shipping carton contains; a display box presents at the point of sale, whether through an open front, a window, or a structure built to be seen.' },
    { question: 'Where should I start when choosing a format?', answer: 'Placement, because it sets the footprint you are allowed and the viewing angle. Counter, shelf, or floor constrains everything downstream, and a display designed without a placement in mind usually suits none of them.' },
    { question: 'How do I decide between boxboard and corrugated?', answer: 'Load the display to its intended assortment and lift it by one edge. If the base bows, you need corrugated. Repeat after several days loaded — paperboard fails by creep, so a display can pass on day one and fail in week two.' },
    { question: 'Does the insert matter more than the box?', answer: 'On many displays, yes. The insert does the work of holding product where you placed it, and a display that holds product loosely leans within a week. It is usually where the specification budget is best spent.' },
    { question: 'Should the display ship flat or assembled?', answer: 'Flat for most retail work, since freight is billed on volume and an assembled display is mostly air. Pair it with a lock-bottom structure that erects in one motion. Ship assembled only where store assembly is impractical.' },
    { question: 'What is a shipper-display?', answer: 'A structure that travels as a sealed case and converts into a retail display on arrival, usually by tearing away a perforated section. It removes a separate packing stage and means store staff do not assemble anything.' },
    { question: 'Do I need more than one display format?', answer: 'Most brands eventually do — a counter unit for independents, a shelf format for chains, something free-standing for promotions. How those fit together is a programme decision rather than a single-box one.' },
    { question: 'What is the most common mistake in choosing display packaging?', answer: 'Designing the display before establishing the retailer footprint. Footprint is the constraint that decides whether a display gets placed at all, and discovering it after design means starting again.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'retail-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'How to choose retail display packaging', href: '/how-to-choose-retail-display-packaging/' },
    { label: 'Retail display packaging', href: '/retail-display-packaging/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
  ],

  cta: {
    heading: 'Still narrowing it down?',
    body: 'Send the product and where you want it to sit. Those two answers eliminate most of the options immediately.',
  },

  updated: '2026-07-19',
};

export default content;
