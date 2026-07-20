import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'best-material-for-display-boxes',
  kind: 'guide',

  metaTitle: 'Best Material for Display Boxes | How to Choose Board',
  metaDescription:
    'There is no single best material for display boxes. A decision sequence for choosing board against load, print, and transit.',

  h1: 'Best Material for Display Boxes',

  intro:
    'There is no best material, only a best match. The useful question is not which board is superior but which constraint on your job is binding — and that is answerable in a fixed order.',

  sections: [
    {
      heading: 'Step one: what does it have to carry?',
      body: [
        'Weigh a filled unit and multiply by the assortment. Then look at the unsupported span of the base underneath that weight. Those two numbers decide more than anything else on the specification.',
        'The practical test: load the display, lift it by one edge, watch the base. Then leave it loaded for several days and look again — paperboard fails by creep rather than sudden collapse, so a day-one result misleads.',
      ],
    },
    {
      heading: 'Step two: how does it travel?',
      body: [
        'A display that ships flat and is erected in store faces very different demands from one shipped assembled or pre-loaded. A display that gets stacked on a pallet is carrying everything above it, and that compression figure — not the product weight — sets the board.',
        'If it travels loaded through a distribution network, corrugated is effectively decided for you.',
      ],
    },
    {
      heading: 'Step three: what is the print doing?',
      body: [
        'If print quality is doing commercial work — a brand-led display competing in a crowded aisle — boxboard or litho-lamination is the answer. If the display is a bulk bin where legibility is enough, direct-printed corrugated is fine and cheaper.',
        'Printing directly onto corrugated shows flute telegraphing across large tonal areas. That is physics rather than a print fault, and it is the reason litho-lamination exists.',
      ],
      link: {
        text: 'How the two boards compare directly is set out in the',
        href: '/cardboard-vs-corrugated-display-boxes/',
        anchor: 'cardboard versus corrugated guide',
      },
    },
    {
      heading: 'Step four: does anything attack the board?',
      body: [
        'Oils migrate into paperboard and stain it permanently — soap, bakery, fried food, and oily pet treats all do this. Moisture softens board and can delaminate coatings not designed for it.',
        'Where either applies, the coating decision comes before the board decision, and food contact adds material compliance on top.',
      ],
    },
    {
      heading: 'Step five: does it need to stay recyclable?',
      body: [
        'This is decided almost entirely by the coating rather than the board. Uncoated and aqueous-coated board stays in the paper stream; a plastic film laminate takes it out in most municipalities.',
        'If a retailer specification or a brand commitment requires recyclability, settle this before choosing a finish, not after.',
      ],
      link: {
        text: 'Coating and recyclability combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'What not to do',
      body: [
        'Do not choose by category. There is no rule that cosmetics take boxboard and food takes corrugated — a cosmetics display holding glass droppers needs corrugated, and a food display holding wrapped snacks does not.',
        'Do not copy a competitor display without knowing what it holds. Two displays can look identical and need completely different board.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Decision sequence',
      headers: ['Step', 'Question', 'What it decides'],
      rows: [
        ['1', 'Filled weight against unsupported base span', 'Boxboard or corrugated'],
        ['2', 'How it travels, and whether stacked', 'Flute and wall'],
        ['3', 'What the print is doing commercially', 'Direct print or litho-lamination'],
        ['4', 'Oils, moisture, or food contact', 'Coating and barrier, and material grade'],
        ['5', 'Recyclability requirement', 'Coating type — laminate or aqueous'],
      ],
      note: 'Work the steps in order. Later steps constrain the finish rather than the structure, so settling them first tends to produce a specification that fails at step one.',
    },
  ],

  faqs: [
    { question: 'What is the best material for a display box?', answer: 'There is no single best — only a best match. The question is which constraint on your job is binding: load, transit, print quality, product attack on the board, or recyclability. Work those in order.' },
    { question: 'How do I know if boxboard is strong enough?', answer: 'Load the display to its intended assortment, lift by one edge, and watch the base. Then leave it loaded for several days and look again. Boxboard fails by creep, so a display can pass on day one and fail in week two.' },
    { question: 'What sets the board on something that ships stacked?', answer: 'Pallet compression rather than product weight. The bottom case carries everything above it, and that is the figure the flute and wall are specified against — not what is inside the box.' },
    { question: 'When is litho-lamination worth it?', answer: 'When print quality is doing commercial work on a structure that needs corrugated strength — a brand-led display in a competitive aisle. Not worth it on a bulk bin where legibility is enough.' },
    { question: 'Does the product ever damage the packaging?', answer: 'Frequently. Oils from soap, bakery, fried food, and pet treats migrate into board and stain it permanently. Where that applies, the coating decision comes before the board decision.' },
    { question: 'What decides whether packaging is recyclable?', answer: 'The coating, far more than the board or its recycled content. Uncoated and aqueous-coated board stays in the paper stream; a plastic film laminate removes it in most municipalities.' },
    { question: 'Can I choose material by product category?', answer: 'No, and it is a common error. A cosmetics display holding glass droppers needs corrugated; a food display holding wrapped snacks does not. Material follows load and transit, not category.' },
    { question: 'Can I copy what a competitor uses?', answer: 'Only if you know what their display holds. Two displays can look identical and need completely different board, because the weight sitting on the base is invisible from a photograph.' },
  ],

  relatedProducts: ['cardboard-display-boxes', 'corrugated-display-boxes', 'custom-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Cardboard vs corrugated display boxes', href: '/cardboard-vs-corrugated-display-boxes/' },
    { label: 'Cardboard thickness guide for display boxes', href: '/blog/cardboard-thickness-guide-for-display-boxes/' },
    { label: 'Sustainability options', href: '/sustainability/' },
  ],

  cta: {
    heading: 'Work step one first',
    body: 'Send a filled unit weight and the assortment size. That single figure eliminates most of the options immediately.',
  },

  updated: '2026-07-19',
};

export default content;
