import type { BlogPost } from '../../data/blog';

/**
 * Angle: reading a quote you have already received, line by line. Kept
 * deliberately distinct from /how-much-do-custom-display-boxes-cost/ (the
 * commercial reference page) and from the cost-reduction article, which is
 * about levers rather than interpretation.
 */
const post: BlogPost = {
  slug: 'what-affects-custom-display-box-pricing',

  title: 'What Affects Custom Display Box Pricing?',
  metaTitle: 'What Affects Custom Display Box Pricing? | Read a Quote',
  metaDescription:
    'How to read a display box quote line by line, which figures are fixed, which scale with quantity, and what is worth asking.',

  excerpt:
    'If you are holding a quote and trying to work out why it says what it says, this walks through what each element represents and which parts move.',

  author: 'Shop Display Boxes',
  published: '2026-07-04',
  updated: '2026-07-04',
  tags: ['Costs', 'Ordering'],

  image: {
    productSlug: 'custom-display-boxes',
    file: 'custom-display-boxes-7.png',
    alt: 'Set of custom display boxes in kraft and white board finishes',
  },

  sections: [
    {
      heading: 'The two kinds of cost on any quote',
      body: [
        'Everything on a packaging quote is either fixed or variable, and telling them apart explains most of what looks strange about the numbers.',
        'Fixed costs — dieline development, cutting dies, printing plates, press make-ready — are incurred once regardless of how many boxes follow. Variable costs — board, ink, running time, finishing passes — scale with quantity.',
        'This is why the per-piece price falls sharply as quantity rises and then flattens: you are diluting the fixed portion until it stops being significant, after which only the variable portion remains.',
      ],
    },
    {
      heading: 'Why halving the quantity barely halves the price',
      body: [
        'Because the fixed portion does not move. On a small run it may be the majority of the total, so cutting the quantity in half removes half of the smaller part of the cost and none of the larger part.',
        'If a reduced quantity comes back at a price that seems disproportionate, this is almost always why — not a supplier declining to sharpen a pencil.',
      ],
    },
    {
      heading: 'What tooling actually covers',
      body: [
        'A cutting die is a physical object made for your structure. It exists after the job and is retained for reorders, which is why a second order against the same dieline is a fundamentally different proposition from the first.',
        'Printing plates are similarly physical, and are made per color per job on offset. This is why each additional spot ink adds cost, and why digital printing — which uses no plates — changes the economics of short runs so completely.',
      ],
      link: {
        text: 'Where each print route wins is compared in',
        href: '/blog/cmyk-vs-pantone-printing-for-display-boxes/',
        anchor: 'CMYK versus Pantone printing',
      },
    },
    {
      heading: 'The line item people underestimate',
      body: [
        'Structural complexity. Each additional glue point, insert, die-cut window, or perforation is a production step, and at most quantities steps cost more than material does.',
        'If a quote is higher than expected, structure is usually the place to look before board. A simpler box in a slightly heavier board is frequently cheaper than a complicated box in a lighter one.',
      ],
    },
    {
      heading: 'What board contributes',
      body: [
        'Material cost scales with area and grade — corrugated above boxboard, double wall above single, litho-lamination adding both material and a production stage.',
        'It is real money and it is usually a smaller lever than people assume. Downgrading board typically saves less than expected and risks a display that bows under load, which costs far more than the saving.',
      ],
    },
    {
      heading: 'Finishing and why it varies so much',
      body: [
        'Lamination adds a pass. Foil stamping and embossing add a pass and their own tooling, which behaves like setup — significant on a short run, minor across a long one.',
        'This is why finishing can look disproportionately expensive on a small order and almost incidental on a large one. The same specification produces very different per-piece figures at different volumes.',
      ],
    },
    {
      heading: 'What is not on the quote but is on the invoice',
      body: [
        'Freight, usually. Display packaging freight is billed on volume rather than weight, so a bulky display costs more to ship than its weight suggests, and an oversized box carries that penalty on every consignment.',
        'Ask how the quoted goods will be shipped and whether the design flat-packs efficiently. A dimension adjusted at dieline stage to improve pallet fit is free then and repays itself continuously afterward.',
      ],
      link: {
        text: 'What drives freight on this product is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Reading a quantity break table',
      body: [
        'Quantity breaks show the fixed portion diluting. The gap between the first two tiers is usually large; between the last two, small.',
        'That shape tells you where the useful decision is. Moving from a very small run to a moderate one often changes the per-piece price substantially; moving from large to very large frequently does not, and the storage cost of the extra stock may exceed the saving.',
      ],
    },
    {
      heading: 'Questions worth asking about any quote',
      body: [
        'These get you further than asking for a discount.',
      ],
      points: [
        'Which parts of this are fixed and which scale with quantity?',
        'What would a simpler structure save, and what would it cost me functionally?',
        'Is digital or offset cheaper at this quantity, and where does that flip?',
        'What does a reorder against this tooling look like?',
        'Does this design flat-pack and palletize efficiently?',
      ],
    },
    {
      heading: 'On the starting price',
      body: [
        'Our product pages state that pricing starts from $0.30 per piece for qualifying large-volume orders. That is a genuine floor for a qualifying specification, not a typical price.',
        'Any supplier quoting a headline per-piece figure is describing one point on a curve. The useful question is always what the number is for your structure at your quantity.',
      ],
    },
  ],

  related: [
    'how-to-reduce-the-cost-of-custom-display-boxes',
    'how-to-order-display-boxes-in-bulk',
    'how-long-does-custom-display-packaging-take',
  ],

  furtherReading: [
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Minimum order quantity for display boxes', href: '/minimum-order-quantity-for-display-boxes/' },
    { label: 'Request a quote', href: '/request-a-quote/' },
  ],
};

export default post;
