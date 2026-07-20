import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'counter-display-boxes-vs-floor-display-boxes',
  kind: 'guide',

  metaTitle: 'Counter vs Floor Display Boxes | Which Placement Wins',
  metaDescription:
    'Counter against floor displays: footprint negotiation, stock capacity, cost per placement, and which one a retailer will accept.',

  h1: 'Counter vs Floor Display Boxes',

  intro:
    'These two placements are not variations of the same thing. They are negotiated differently, cost differently, hold different amounts of stock, and fail in different ways. Choosing between them is a commercial decision before it is a design one.',

  sections: [
    {
      heading: 'Which one you can actually get',
      body: [
        'Counter placements are far easier to win. The space is small, the commitment is low, and an independent retailer will often simply agree. Floor placements take real negotiation, usually involve a promotional agreement, and in chains may require a slot booked well in advance.',
        'This asymmetry matters more than any design consideration. A superb floor display you cannot get placed sells nothing.',
      ],
    },
    {
      heading: 'Permanence',
      body: [
        'Counter units tend to be semi-permanent — placed and left until they look tired. Floor units are almost always tied to a promotional window and removed at the end of it.',
        'That changes the economics. A counter display sells year-round from one placement; a floor display sells hard for a defined period and then stops. Comparing their unit costs without accounting for that is misleading.',
      ],
    },
    {
      heading: 'Stock capacity and restocking',
      body: [
        'A floor unit holds many times what a counter display does, which means it needs restocking far less often relative to its sales. A counter display holding twenty units in a busy store may empty daily.',
        'If nobody is reliably restocking, a counter display spends much of its life looking picked-over — which is why dispenser structures that hold their appearance as stock depletes matter so much in that format.',
      ],
      link: {
        text: 'Structures that stay looking full are covered on the',
        href: '/counter-display-boxes/',
        anchor: 'counter display boxes page',
      },
    },
    {
      heading: 'How each one fails',
      body: [
        'Counter displays fail by abrasion and by emptying. They get pushed aside, handled, and wiped around, and they look tired long before they break.',
        'Floor displays fail structurally. They carry their whole load through their own walls into the base, and a unit that racks or bows halfway through a promotion undermines everything on it. Different failure modes mean different specifications.',
      ],
      link: {
        text: 'Load paths on free-standing units are covered on the',
        href: '/cardboard-display-stands/',
        anchor: 'cardboard display stands page',
      },
    },
    {
      heading: 'Assembly',
      body: [
        'A counter display should erect in one motion. A floor unit frequently has several components, and it is the format most likely to be assembled incorrectly or abandoned in a stockroom.',
        'If you are supplying many stores at once, that difference is a real cost — either in field marketing labor or in displays that never get built.',
      ],
    },
    {
      heading: 'Cost',
      body: [
        'Per unit, a floor display costs substantially more: more board, more structure, more freight volume. Per placement it may still be better value, because it holds far more stock and commands more attention.',
        'The useful comparison is cost per unit of product sold through the display over its life, not cost per display. Those two figures can point in opposite directions.',
      ],
      link: {
        text: 'What drives cost in each format is broken down in the guide to',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
    {
      heading: 'A reasonable sequence',
      body: [
        'For most brands, build the counter format first. It is easier to place, sells year-round, costs less, and proves whether the product moves from a display at all.',
        'Treat the floor unit as a later, promotional investment once you know the product performs and you have a retailer relationship that will concede the space.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Counter against floor displays',
      headers: ['', 'Counter display', 'Floor display'],
      rows: [
        ['Ease of placement', 'High — small ask', 'Low — negotiated, often booked ahead'],
        ['Typical permanence', 'Semi-permanent', 'Promotional window'],
        ['Stock held', 'Low', 'High'],
        ['Restocking frequency', 'Often daily in busy stores', 'Less frequent relative to sales'],
        ['Typical material', 'Boxboard, E-flute', 'B/C flute, double wall'],
        ['Assembly', 'One motion', 'Multiple components'],
        ['Main failure mode', 'Looks worn, or empties', 'Racks or bows under load'],
        ['Cost per unit', 'Lower', 'Substantially higher'],
      ],
      note: 'Cost per placement and cost per unit sold can point in opposite directions from cost per display. Compare over the life of the placement rather than at purchase.',
    },
  ],

  faqs: [
    { question: 'Which should I build first?', answer: 'Usually the counter format. It is easier to place, sells year-round, costs less, and proves whether the product moves from a display at all. Treat the floor unit as a later promotional investment once that is established.' },
    { question: 'Why are floor displays harder to get placed?', answer: 'They take real floor space, usually involve a promotional agreement, and in chains may need a slot booked well in advance. A counter placement is a small ask that an independent retailer will often simply agree to.' },
    { question: 'Do floor displays sell more?', answer: 'They hold far more stock and command more attention, but they are usually tied to a promotional window rather than selling year-round. Comparing them to a permanent counter placement on unit cost alone is misleading.' },
    { question: 'How do the two fail differently?', answer: 'Counter displays fail by abrasion and by emptying — they look tired long before they break. Floor displays fail structurally, racking or bowing under sustained load. That difference drives completely different specifications.' },
    { question: 'What material does each need?', answer: 'Counter units are usually boxboard or E-flute corrugated. Floor units need B or C flute, often double wall, because they carry their entire load through their own walls into the base.' },
    { question: 'Why does assembly matter more on floor units?', answer: 'Because they have more components and are the format most likely to be built wrong or abandoned in a stockroom. If you are supplying many stores at once, that is a real cost in field labor or in displays never erected.' },
    { question: 'Can one design work as both?', answer: 'Not usefully. The footprint, load path, viewing angle, and assembly requirements are all different. A counter display scaled up is unstable, and a floor display scaled down is over-engineered and too expensive.' },
    { question: 'How should I compare their costs?', answer: 'By cost per unit of product sold through the display over its life, not by cost per display. A floor unit costs substantially more to make and may still be better value per placement — or considerably worse.' },
  ],

  relatedProducts: ['counter-display-boxes', 'cardboard-display-stands', 'cardboard-counter-display-units', 'retail-display-boxes'],

  relatedPages: [
    { label: 'Pop-up vs counter display boxes', href: '/pop-up-vs-counter-display-boxes/' },
    { label: 'How to choose retail display packaging', href: '/how-to-choose-retail-display-packaging/' },
    { label: 'Retail packaging', href: '/retail-packaging/' },
    { label: 'How many products should a counter display hold?', href: '/blog/how-many-products-should-a-counter-display-hold/' },
  ],

  cta: {
    heading: 'Know which placement you can get?',
    body: 'Tell us what the retailer has agreed to and we will design inside that rather than around it.',
  },

  updated: '2026-07-19',
};

export default content;
