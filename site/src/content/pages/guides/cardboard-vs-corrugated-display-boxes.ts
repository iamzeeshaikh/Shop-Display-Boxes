import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'cardboard-vs-corrugated-display-boxes',
  kind: 'guide',

  metaTitle: 'Cardboard vs Corrugated Display Boxes | Which to Use',
  metaDescription:
    'Cardboard against corrugated for display boxes: print quality, load capacity, and the practical test that decides between them.',

  h1: 'Cardboard vs Corrugated Display Boxes',

  intro:
    'These two materials are confused constantly, including by people buying them. They behave differently enough that choosing the wrong one produces a display that either looks worse than it should or collapses before the promotion ends.',

  sections: [
    {
      heading: 'They are not the same material',
      body: [
        'Cardboard, in packaging terms, means folding boxboard: a smooth single-ply paperboard measured in points, where a point is one thousandth of an inch. It is what retail cartons are made from.',
        'Corrugated is three layers — an outer liner, an inner liner, and a fluted medium glued between them. The flute is an arch, and it converts downward load into force spread sideways. That arch is the whole reason corrugated carries weight that flat board of the same thickness cannot.',
      ],
    },
    {
      heading: 'The test that actually decides it',
      body: [
        'Load the display to its intended assortment. Lift it by one edge and watch the base. If the base bows, the front row will lean once it is in a store, and a leaning row stops selling.',
        'Then repeat the test after the display has sat loaded for several days. This is the part people skip, and it is the part that matters — paperboard fails by creep, gradual deformation under sustained weight, rather than by sudden collapse. A display can pass on day one and fail in week two.',
      ],
    },
    {
      heading: 'Where cardboard wins',
      body: [
        'Print quality, decisively. There is no flute underneath to telegraph through the liner, so gradients stay smooth and fine type stays sharp. It also creases more cleanly, which matters on intricate die-cut structures.',
        'It takes every finishing process well — foil, embossing, spot UV — because there is no flute to crush under the impression. And it is thinner, which keeps a counter display visually light rather than bulky.',
      ],
    },
    {
      heading: 'Where corrugated wins',
      body: [
        'Anything involving weight, stacking, or transit. Glass units, dense liquids, bulk assortments, and anything that ships loaded or gets stacked on a pallet.',
        'It also cushions, which cardboard does not, and it is the only sensible option for a display that has to survive a distribution center before it reaches a shop floor.',
      ],
    },
    {
      heading: 'The option most people miss',
      body: [
        'Litho-lamination gets you both. A sheet is printed offset — with the detail and color control of boxboard — and then laminated onto corrugated board.',
        'The result prints like a carton and carries like a shipper. It costs more and adds a production stage, so it is worth specifying where print quality is doing commercial work and not worth it on a plain bulk bin.',
      ],
      link: {
        text: 'Both materials and the lamination route are covered in more detail on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'A common and expensive mistake',
      body: [
        'Specifying boxboard because a competitor display used it, without checking what that competitor was holding. A display holding plastic tubes and one holding glass jars can look identical and need completely different board.',
        'The material follows the load, not the category and not the appearance.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Cardboard against corrugated, at a glance',
      headers: ['', 'Folding boxboard', 'Corrugated'],
      rows: [
        ['Structure', 'Single ply, unfluted', 'Two liners with a fluted medium between'],
        ['Print quality', 'Highest — no flute telegraphing', 'Good direct; highest via litho-lamination'],
        ['Load capacity', 'Low; fails by creep over time', 'Moderate to high depending on flute and wall'],
        ['Crease quality', 'Clean, holds fine detail', 'Softer; risk of crushing the flute'],
        ['Foil and embossing', 'Excellent', 'Only on a litho-laminated facing'],
        ['Cushioning', 'None', 'Yes, increasing with flute height'],
        ['Survives palletized transit', 'Poorly', 'Yes, when specified for stack height'],
        ['Typical use', 'Counter displays, light units', 'Floor units, shippers, glass, bulk'],
      ],
      note: 'Load capacity is relative. Actual capacity depends on flute, liner grade, panel size, and how weight is distributed, so we specify against your product rather than from a table.',
    },
  ],

  faqs: [
    { question: 'Is cardboard just thin corrugated?', answer: 'No. Cardboard here means folding boxboard, a smooth single-ply stock with no flute at all. Corrugated has a fluted medium glued between two liners. The flute is an arch that carries load, which is the entire structural difference.' },
    { question: 'How do I decide between them?', answer: 'Load the display to its intended assortment, lift it by one edge, and watch the base. If it bows, choose corrugated. Then repeat after several days loaded, because boxboard fails gradually rather than immediately.' },
    { question: 'Why does my corrugated print look ribbed?', answer: 'The flute is telegraphing through the liner. It shows most across large flat tonal areas and gradients, and it is a physical property of printing onto fluted board rather than a print fault. Litho-lamination avoids it.' },
    { question: 'Can I get carton-quality print on a strong structure?', answer: 'Through litho-lamination — an offset-printed sheet laminated onto corrugated. It costs more and adds a production stage, but it is the standard answer when a display needs both print quality and load capacity.' },
    { question: 'Will boxboard hold glass?', answer: 'Not reliably at typical display calipers. Glass loads a base far more than plastic of the same size, and boxboard settles under sustained weight even when it holds at first fill. E-flute corrugated is the practical minimum.' },
    { question: 'Is corrugated always more expensive?', answer: 'Not necessarily per unit, but a litho-laminated corrugated display costs more than plain boxboard because of the extra production stage. Plain flexo-printed corrugated can be cheaper than a laminated boxboard display.' },
    { question: 'Which is more recyclable?', answer: 'Both are recyclable uncoated, and corrugated typically carries high recycled content as standard. What removes either from the paper stream is a plastic film laminate, not the choice between the two boards.' },
    { question: 'Can I use boxboard for a floor-standing display?', answer: 'Not for the structure. Floor units carry their whole load through their own walls into the base, which boxboard will not sustain. Boxboard appears on floor displays only as a printed header or a laminated facing.' },
  ],

  relatedProducts: ['cardboard-display-boxes', 'corrugated-display-boxes', 'custom-display-boxes', 'cardboard-display-stands'],

  relatedPages: [
    { label: 'Best material for display boxes', href: '/best-material-for-display-boxes/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Corrugated flute types for retail displays', href: '/blog/corrugated-flute-types-for-retail-displays/' },
    { label: 'How product weight affects display box material', href: '/blog/how-product-weight-affects-display-box-material/' },
  ],

  cta: {
    heading: 'Not sure which your job needs?',
    body: 'Send the product and the assortment the display has to hold. We specify against the actual load rather than the category.',
  },

  updated: '2026-07-19',
};

export default content;
