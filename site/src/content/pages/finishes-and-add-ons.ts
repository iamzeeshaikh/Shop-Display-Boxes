import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'finishes-and-add-ons',
  kind: 'commercial',

  metaTitle: 'Finishes and Add-Ons | Coatings, Foil & Windows',
  metaDescription:
    'Coatings, laminates, foil, embossing, windows, and inserts for display packaging, including what each does to recyclability.',

  h1: 'Finishes and Add-Ons',

  intro:
    'Finish is a durability decision as much as a visual one, and it is where recyclability is usually won or lost. This page covers what each option does in practice, including its downside.',

  sections: [
    {
      heading: 'Coatings and laminates',
      body: [
        'Gloss lamination is the most scuff-resistant option and lifts color saturation, which makes it the practical choice for displays that get restocked repeatedly. Matte reads as more considered but shows handling marks on dark solids. Soft-touch is the most distinctive in the hand and marks most easily of the three.',
        'Aqueous coatings and varnishes give lighter protection. Their advantage is that they keep the board in the paper recycling stream, where a plastic film laminate does not.',
      ],
      points: [
        'Gloss laminate — most durable, highest saturation, leaves paper stream',
        'Matte laminate — softer look, shows marks on dark areas, leaves paper stream',
        'Soft-touch — most distinctive feel, marks easily, leaves paper stream',
        'Aqueous or varnish — lighter protection, stays recyclable',
      ],
    },
    {
      heading: 'The recyclability trade-off',
      body: [
        'A film laminate bonds a plastic layer to the board, and in most municipalities that takes the pack out of kerbside paper recycling. It is the single decision that most affects whether a display is recyclable.',
        'Where a retailer specification or a brand commitment requires recyclability, an aqueous coating or varnish gives surface protection while keeping the board repulpable. Expect less scuff resistance in exchange.',
      ],
      link: {
        text: 'Material and coating combinations that stay recyclable are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'Foil, embossing, and spot UV',
      body: [
        'Foil stamping applies metallic or pigment foil under heat and pressure. Embossing and debossing raise or recess an area of board. Spot UV applies a high-gloss varnish to selected areas, which reads best against a matte background.',
        'All three work better on folding boxboard than on corrugated, because there is no flute underneath to crush and the impression stays crisp. On corrugated they are normally applied to a litho-laminated facing rather than direct.',
      ],
    },
    {
      heading: 'Windows',
      body: [
        'A die-cut opening with a film applied behind it. PET is the standard film and is recyclable in some streams. Paper-based window films exist where a single material stream is required, with lower clarity.',
        'Two practical points: the film must be applied flat and tensioned, because a wrinkled window makes the product behind it look poor; and a window crossing a crease will crack when the box is folded, so keep openings clear of fold lines.',
      ],
    },
    {
      heading: 'Structural add-ons',
      body: [
        'Header cards, hang tabs, tear strips, perforations, hand holes, and dispensing openings each add a die feature and sometimes a production stage.',
        'The ones that repay their cost most reliably are the functional ones — a tear perforation that lets a case open without a knife, a hand hole that makes a loaded display liftable, a reinforced hang tab that does not tear off a peg.',
      ],
    },
    {
      heading: 'Inserts',
      body: [
        'Inserts do the work of holding product in position, and on many displays they matter more than the outer box. Die-cut cavity inserts suit units that must stand upright, partitions suit glass and units that scuff each other, and risers lift back rows into the shopper’s sightline.',
        'Where a display has an insert, it is usually where the specification budget belongs. An elaborate outer with a poor insert is the wrong way round.',
      ],
      link: {
        text: 'How inserts are specified for a particular product is covered on the',
        href: '/custom-display-boxes/',
        anchor: 'custom display boxes page',
      },
    },
  ],

  tables: [
    {
      caption: 'Coating options compared',
      headers: ['Finish', 'Scuff resistance', 'Appearance', 'Stays recyclable'],
      rows: [
        ['Gloss lamination', 'Highest', 'Saturated, reflective', 'No'],
        ['Matte lamination', 'High', 'Soft, low sheen', 'No'],
        ['Soft-touch lamination', 'Moderate', 'Tactile, velvet feel', 'No'],
        ['UV varnish', 'Moderate', 'Glossy, thinner than laminate', 'Usually'],
        ['Aqueous coating', 'Light', 'Near-natural', 'Yes'],
        ['Uncoated', 'None', 'Natural, writable', 'Yes'],
      ],
      note: 'Recyclability depends on local municipal facilities as well as on the material. Where a retailer specification governs, follow their requirement rather than a general rule.',
    },
  ],

  faqs: [
    { question: 'Which finish lasts longest on a retail display?', answer: 'Gloss lamination. Displays fail through abrasion — hands reaching in, stock being replaced, cleaning around them — rather than through structural collapse. Spending on surface protection does more than a heavier board would.' },
    { question: 'Will lamination stop my packaging being recyclable?', answer: 'In most municipalities, yes. A film laminate bonds a plastic layer to the board and takes it out of kerbside paper recycling. Aqueous coating or varnish protects the surface while keeping it repulpable, at the cost of less scuff resistance.' },
    { question: 'Can I foil stamp onto corrugated?', answer: 'Not directly with good results — there is flute underneath to crush, so the impression loses definition. On corrugated, foil and embossing are normally applied to a litho-laminated facing instead.' },
    { question: 'Why does my window film wrinkle?', answer: 'It has not been applied flat and tensioned. It is one of the more common quality failures on windowed packaging, and it makes the product behind it look poor. Also keep windows clear of creases — film crossing a fold will crack.' },
    { question: 'Are paper-based windows a real option?', answer: 'They exist and they keep a pack in a single material stream, which matters where a specification requires it. Clarity is lower than PET film, so it is worth seeing a sample before committing if product visibility is the point of the window.' },
    { question: 'Which add-ons are actually worth paying for?', answer: 'The functional ones. A tear perforation that opens without a knife, a hand hole that makes a loaded display liftable, a reinforced hang tab that will not tear off a peg. Decorative features have a weaker case at most budgets.' },
    { question: 'Should I spend on the outer box or the insert?', answer: 'Usually the insert, especially where product has to be held in position. The insert does the protective and merchandising work; an elaborate outer around a poor insert gets the priorities backwards.' },
    { question: 'Does spot UV work on any background?', answer: 'It reads best against matte, where the contrast between coated and uncoated areas is visible. On a gloss background the effect is largely lost, which makes it an expensive addition with little to show for it.' },
  ],

  relatedProducts: ['custom-display-boxes', 'display-gift-boxes', 'cosmetic-display-boxes', 'cardboard-display-boxes'],

  relatedPages: [
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Sustainability options', href: '/sustainability/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
  ],

  cta: {
    heading: 'Choosing a finish?',
    body: 'Tell us where the display will sit and how long it needs to last. Finish is a durability decision before it is a visual one.',
  },

  updated: '2026-07-19',
};

export default content;
