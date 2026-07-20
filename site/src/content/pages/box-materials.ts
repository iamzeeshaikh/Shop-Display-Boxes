import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'box-materials',
  kind: 'commercial',

  metaTitle: 'Box Materials | Boxboard, Corrugated & Rigid Board',
  metaDescription:
    'Compare display box materials: folding boxboard, corrugated flutes, and rigid board, and see where each one stops working.',

  h1: 'Display Box Materials',

  intro:
    'Three material families cover almost all display packaging: folding boxboard, corrugated, and rigid board. Choosing between them is a load question first and an appearance question second — and the load question has a practical test.',

  sections: [
    {
      heading: 'The test that decides it',
      body: [
        'Load the display to its intended assortment, then lift it by one edge and watch the base. If the base bows, the front row will lean once it is in a store, and a leaning row stops selling.',
        'Do the same test again after the display has sat loaded for several days. Paperboard fails by creep — gradual deformation under sustained weight — not by sudden collapse, so a display that passes on day one can still fail in week two.',
      ],
    },
    {
      heading: 'Folding boxboard',
      body: [
        'A smooth, single-ply paperboard measured in points, where a point is one thousandth of an inch. Display work usually falls between 14 pt and 28 pt. It is the best printing surface in packaging and creases into the finest detail.',
        'It is the right choice for counter displays holding light units, for anything where print quality is doing commercial work, and for structures with intricate die-cut detail. It is the wrong choice for glass, for dense assortments, and for anything that ships loaded or gets stacked on a pallet.',
      ],
      points: [
        'SBS — bleached white throughout, best print surface, highest cost',
        'Kraft-back — white printing face, brown reverse, common compromise',
        'Recycled greyboard — lowest cost, warmer surface, visible fiber variation',
      ],
      link: {
        text: 'How boxboard behaves in a display structure is covered on the',
        href: '/cardboard-display-boxes/',
        anchor: 'cardboard display boxes page',
      },
    },
    {
      heading: 'Corrugated',
      body: [
        'A fluted medium glued between two liners. The flute is an arch, and it converts downward load into force spread sideways — which is the entire reason corrugated carries weight that flat board of the same thickness cannot.',
        'Flute height trades strength against print quality. Taller flutes give more stacking strength and cushioning; shorter flutes give a flatter surface that prints and creases more cleanly.',
      ],
      link: {
        text: 'Flute selection against real loads is set out on the',
        href: '/corrugated-display-boxes/',
        anchor: 'corrugated display boxes page',
      },
    },
    {
      heading: 'Litho-lamination',
      body: [
        'A sheet printed offset — with boxboard-grade detail and color control — then laminated onto corrugated. It gives carton print quality on a shipper-grade structure.',
        'It costs more and adds a production stage, so it is worth specifying where print quality is doing commercial work and not worth it on a plain bulk bin. It is the usual answer whenever someone wants corrugated strength without corrugated print.',
      ],
    },
    {
      heading: 'Rigid board',
      body: [
        'Thick, non-folding board, usually wrapped in a printed or fabric-faced sheet. It is what higher-value gift and presentation packaging is made from, and it gives the weight and lid behavior that folding board cannot.',
        'It ships assembled or as a two-piece rather than flat, so it costs considerably more in freight volume. Specify it where the recipient is expected to keep the box.',
      ],
    },
    {
      heading: 'Recycled content',
      body: [
        'Available across boxboard and corrugated, and standard rather than a premium option in most corrugated grades. Recycled board has a warmer, less uniform surface with visible fiber variation.',
        'For direct food contact it needs more care, because contaminants from the recovered fiber stream can migrate into food — the usual solution is a functional barrier layer between the recycled fibers and the product.',
      ],
      link: {
        text: 'Recyclability and coating combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
  ],

  tables: [
    {
      caption: 'Material families compared',
      headers: ['Material', 'Best for', 'Print quality', 'Load capacity', 'Ships flat'],
      rows: [
        ['Folding boxboard', 'Counter displays, light units, fine detail', 'Highest', 'Low', 'Yes'],
        ['E / F flute corrugated', 'Counter and shelf displays with weight', 'Good', 'Moderate', 'Yes'],
        ['B / C flute corrugated', 'Floor units, shippers, stacked loads', 'Moderate', 'High', 'Yes'],
        ['Double wall corrugated', 'Floor bins, heavy assortments', 'Moderate', 'Highest', 'Yes'],
        ['Litho-laminated', 'Brand-led displays needing strength', 'Highest', 'High', 'Yes'],
        ['Rigid board', 'Gift and presentation packaging', 'High', 'Moderate', 'No'],
      ],
      note: 'Load capacity is relative rather than absolute. Actual capacity depends on flute, liner grade, panel size, and how weight is distributed, so we specify against your product rather than from a table.',
    },
  ],

  faqs: [
    { question: 'Is cardboard the same as corrugated?', answer: 'Not in packaging terms. Cardboard usually means folding boxboard — a smooth single-ply stock. Corrugated has a fluted medium between two liners. They behave very differently under load and print quite differently.' },
    { question: 'How do I know if I need corrugated?', answer: 'Load the display to its intended assortment and lift it by one edge. If the base bows, you need corrugated. Repeat the test after several days loaded, because boxboard fails gradually rather than immediately.' },
    { question: 'What thickness of boxboard should I use?', answer: 'Roughly 14 pt to 18 pt for small counter displays and header cards, and 20 pt to 28 pt where panels are larger or the base carries weight. Heavier is not automatically better — very heavy board creases less cleanly and can crack through a laminate.' },
    { question: 'Can I get good printing on corrugated?', answer: 'Directly, yes for solid colors and type, but the flute telegraphs through the liner and shows as ribbing across large tonal areas. For photographic artwork on a corrugated structure, litho-lamination is the answer.' },
    { question: 'Is recycled board cheaper?', answer: 'Usually somewhat, and in corrugated it is largely standard rather than a premium choice. The trade-off is surface consistency: recycled stock is warmer and less uniform, which suits some brands and works against others.' },
    { question: 'What is the difference between rigid and folding board?', answer: 'Rigid board does not fold — it is cut and wrapped, and ships assembled. It gives weight and lid behavior that folding board cannot, at considerably more freight cost. Use it where the box is meant to be kept.' },
  ],

  relatedProducts: ['cardboard-display-boxes', 'corrugated-display-boxes', 'custom-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'Cardboard vs corrugated compared', href: '/cardboard-vs-corrugated-display-boxes/' },
    { label: 'Best material for display boxes', href: '/best-material-for-display-boxes/' },
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
  ],

  cta: {
    heading: 'Not sure which board your job needs?',
    body: 'Send the product and the assortment you want a display to hold. We will specify the board against the actual load rather than the category.',
  },

  updated: '2026-07-19',
};

export default content;
