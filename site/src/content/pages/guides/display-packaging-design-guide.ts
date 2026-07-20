import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'display-packaging-design-guide',
  kind: 'guide',

  metaTitle: 'Display Packaging Design Guide | Structure and Artwork',
  metaDescription:
    'Designing display packaging: sightlines, hierarchy on a small panel, designing on the dieline, and store assembly realities.',

  h1: 'Display Packaging Design Guide',

  intro:
    'Display packaging is designed under constraints that ordinary packaging does not face: it is viewed from above, from a distance, half-empty, and assembled by someone in a hurry. Designing for those conditions rather than for a render is most of the job.',

  sections: [
    {
      heading: 'Design for the angle it is actually seen from',
      body: [
        'A shopper at a counter looks down at roughly forty-five degrees. A shopper at a floor unit sees it first from down an aisle, at a distance, at a shallow angle.',
        'A display designed to look correct in a straight-on render frequently presents the tops of the units in real use, which is the least informative face of most products. Angling the tier forward, or stepping rows, puts the printed face into the actual line of sight — and costs nothing but a fold.',
      ],
    },
    {
      heading: 'Design for it half empty',
      body: [
        'Displays spend a large part of their life partly sold through, and a half-empty display that looks neglected stops selling well before it is actually empty.',
        'Print the inner base so bare board never shows. Consider a dispenser structure, where units draw from a front opening and the display looks the same at half stock as at full.',
      ],
    },
    {
      heading: 'Hierarchy on a small panel',
      body: [
        'Display panels are smaller than designers expect once bleed, safe area, and any mandated copy are deducted. Trying to fit a full brand story into that space produces something unreadable at the distance it is seen from.',
        'Decide what one thing the display must communicate at a glance, give that the space, and let everything else be secondary. On a header seen down an aisle, that is usually the brand and the offer, not ingredients.',
      ],
    },
    {
      heading: 'Design on the dieline, not on a rectangle',
      body: [
        'Panel proportions on a flat dieline rarely match what a designer assumes from a photograph of a finished box. Designing first and reconciling afterward is the single most common origin of a reprint.',
        'Get the dieline before artwork starts, keep its layers intact, and work at 100% scale.',
      ],
      link: {
        text: 'Dielines are drawn before you commit — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'Respect the creases',
      body: [
        'Text crossing a crease breaks when the box is erected, because the fold interrupts the letterforms. Images and background colors survive a crease; live copy does not.',
        'On tuck flaps, remember the flap disappears into the box — anything that must stay readable belongs on a panel face, and the flap is better used for an opening instruction or a batch area.',
      ],
      link: {
        text: 'Full file requirements are listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'Design for the person assembling it',
      body: [
        'Store staff have very little time and no briefing. A display needing an instruction sheet will be built wrong or left in the stockroom.',
        'Reduce component count, make each part fit only one way, and use locating tabs that refuse to engage when a panel is reversed. That shifts the work from the person to the die.',
      ],
    },
    {
      heading: 'Design for how it will be handled',
      body: [
        'Retail displays are pushed along shelves, reached into repeatedly, and wiped around. They fail through abrasion far more often than through structural collapse.',
        'A gloss laminate does more for how a display looks in week four than an upgrade in board weight would. If an uncoated look matters to the brand, plan a shorter campaign rather than hoping.',
      ],
    },
    {
      heading: 'Test with someone who has not seen it',
      body: [
        'The person who designed a structure cannot evaluate whether it is obvious. Hand a sample to someone with no context, say nothing, and watch what they do.',
        'Then load it and leave it standing for longer than feels necessary. Bowing and leaning appear over days, not minutes, and that is the failure that reaches stores.',
      ],
    },
  ],

  faqs: [
    { question: 'Why does my display look different in store than in the render?', answer: 'Because renders are straight-on and shoppers look down at roughly forty-five degrees at a counter, or at a shallow angle from down an aisle. Angling the product tier or stepping rows fixes it for the cost of a fold.' },
    { question: 'How do I stop a display looking neglected as it sells?', answer: 'Print the inner base so bare board never shows, and consider a dispenser structure where units draw from a front opening. A dispenser looks the same at half stock as at full, unlike a tray that visibly empties.' },
    { question: 'How much can I fit on a display panel?', answer: 'Less than you expect once bleed, safe area, and mandated copy are deducted. Decide the one thing the display must communicate at a glance, give that the space, and make everything else secondary.' },
    { question: 'Why should artwork be designed on the dieline?', answer: 'Because panel proportions on a flat dieline rarely match what a designer assumes from a photograph of a finished box. Designing first and reconciling afterward is the most common origin of a reprint.' },
    { question: 'Can artwork cross a crease?', answer: 'Images and background colors can. Live copy cannot — the fold interrupts the letterforms when the box is erected. On tuck flaps, remember the flap disappears into the box entirely.' },
    { question: 'How do I make a display easy to assemble?', answer: 'Fewer components, each fitting only one way, with locating tabs that refuse to engage when a panel is reversed. Assume the person building it has thirty seconds, no briefing, and no interest in your brand.' },
    { question: 'What finish should I design for?', answer: 'Gloss laminate for anything expected to last a campaign, because displays fail through abrasion rather than collapse. It does more for how a display looks in week four than a heavier board would.' },
    { question: 'How should I test a design before committing?', answer: 'Hand a sample to someone with no context and say nothing. Then load it and leave it standing for days. Bowing and leaning appear over time, and that is the failure mode that actually reaches stores.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'cardboard-display-stands', 'display-trays'],

  relatedPages: [
    { label: 'How to choose retail display packaging', href: '/how-to-choose-retail-display-packaging/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Display box size guide', href: '/display-box-size-guide/' },
    { label: 'How to design counter display packaging', href: '/blog/how-to-design-counter-display-packaging/' },
  ],

  cta: {
    heading: 'Designing something now?',
    body: 'Get the dieline before the artwork starts. It is free, and it prevents the most common cause of a reprint.',
  },

  updated: '2026-07-19',
};

export default content;
