import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'food-display-packaging',
  kind: 'industry',

  metaTitle: 'Food Display Packaging | Food-Grade Retail Displays',
  metaDescription:
    'Display packaging for food brands: direct and indirect food contact, grease barriers, chilled use, and shelf-ready rules.',

  h1: 'Food Display Packaging',

  intro:
    'Food packaging divides at one question before any other: does the product touch the board? Everything about the material specification follows from that answer, and it cannot be corrected after a run is printed.',

  sections: [
    {
      heading: 'Direct against indirect contact',
      body: [
        'If food touches the board, the board and every coating and ink on it must be suitable for food contact, and migration limits apply. If the food is sealed in its own wrapper, the display is secondary packaging and the requirements relax considerably.',
        'Partial wraps and paper bands count as direct contact, because exposed faces still touch the board. Bakery items are almost always direct contact for this reason.',
      ],
      points: [
        'Direct contact — food-grade board, compliant coatings and inks',
        'Indirect contact — display is secondary packaging, standard board acceptable',
        'Partial wraps and open bakery — treat as direct contact',
      ],
      link: {
        text: 'Material requirements for this are set out on the',
        href: '/food-display-boxes/',
        anchor: 'food display boxes page',
      },
    },
    {
      heading: 'Grease and moisture',
      body: [
        'Fats migrate into uncoated board and show as translucent staining. On a fried or buttery product it happens within hours, and a greasy display looks unappetizing well before the product itself is unsellable.',
        'Greaseproof coatings and barrier boards resist it while remaining repulpable. Plastic-based barriers work more absolutely but take the pack out of the paper recycling stream.',
      ],
    },
    {
      heading: 'Ambient, chilled, and humid conditions',
      body: [
        'A display specified for a dry ambient shelf will not necessarily survive a chiller. Cold and humid conditions soften board and can delaminate coatings not designed for them.',
        'If the display goes anywhere refrigerated, say so at quoting stage. It changes the board and the coating specification rather than just the finish.',
      ],
    },
    {
      heading: 'Turnover and restocking',
      body: [
        'Food moves faster than almost any other retail category, and gets restocked by whoever is on shift rather than by a merchandiser. That makes refill speed a more valuable property than presentation polish.',
        'An open tray or low-front display is refilled in seconds. A closed box with a small opening is not, and will be left partly empty instead.',
      ],
      link: {
        text: 'Open formats for fast-turnover product are covered on the',
        href: '/display-trays/',
        anchor: 'display trays page',
      },
    },
    {
      heading: 'Shelf-ready requirements in grocery',
      body: [
        'Grocery and convenience chains increasingly mandate shelf-ready packaging: cases that open in one action and go onto the shelf without unpacking. Where a chain has issued a specification, it governs the dimensions, the opening method, and how much product face must remain visible.',
        'Design to their specification first and to your preferences second. Non-compliant cases get unpacked by hand and the labor saving they exist to deliver disappears.',
      ],
      link: {
        text: 'The five compliance requirements are covered on the',
        href: '/shelf-ready-display-boxes/',
        anchor: 'shelf-ready display boxes page',
      },
    },
    {
      heading: 'Labeling responsibility',
      body: [
        'Food carries mandatory information, and which of it belongs on a display rather than on the unit depends on whether the display is the pack a consumer takes away.',
        'We print the artwork supplied, including regulatory and ingredient copy. We do not review artwork for compliance in your market — that responsibility stays with you.',
      ],
    },
    {
      heading: 'Sustainability',
      body: [
        'Recycled content is straightforward for wrapped product. For direct contact it needs a functional barrier between recovered fibers and the food, because contaminants from the recycled stream can otherwise migrate.',
        'Where a retailer requires single-stream disposal, keep the pack in one material: aqueous coatings and paper-based components rather than film laminates and plastic windows.',
      ],
    },
  ],

  faqs: [
    { question: 'Does my product count as direct food contact?', answer: 'If the food touches the board at any point, yes — including partial wraps and paper bands, where exposed faces still make contact. Bakery items almost always count. Tell us at quoting stage, because it determines the whole material specification.' },
    { question: 'How do I stop grease staining the display?', answer: 'A greaseproof coating or barrier board. Fats migrate into uncoated board within hours on fried or buttery products. Repulpable greaseproof coatings resist it while keeping the pack recyclable; plastic barriers are more absolute but leave the paper stream.' },
    { question: 'Will the display work in a chiller cabinet?', answer: 'Only if it is specified for one. Cold and humid conditions soften board and can delaminate coatings not designed for them. It changes the board and coating specification, so raise it before quoting rather than after.' },
    { question: 'Can I use recycled board for food packaging?', answer: 'Freely for wrapped product. For direct contact it needs a functional barrier between the recovered fibers and the food, because contaminants from the recycled stream can migrate otherwise.' },
    { question: 'Which display format suits fast-moving food?', answer: 'Whichever refills fastest — usually an open tray or low-front display. Food turns over faster than any other category and gets restocked by whoever is on shift, so a format that takes time to refill will be left partly empty.' },
    { question: 'Do I need shelf-ready packaging for grocery?', answer: 'If the chain requires it, and increasingly they do. Their specification governs case dimensions, opening method, and visible product face. Non-compliant cases get unpacked by hand, which removes the labor saving that made them mandate it.' },
    { question: 'Do you check that my food labeling is compliant?', answer: 'No. We print exactly the artwork you supply including ingredient and regulatory copy, but responsibility for accuracy and compliance in your market stays with you. We do not review artwork against food labeling regulations.' },
    { question: 'How do I keep a food display looking full as stock sells?', answer: 'A dispensing structure where units are drawn from a front opening keeps its appearance as stock depletes, unlike an open tray which visibly empties. For fast-moving impulse food that is usually worth the added structural complexity.' },
    { question: 'Can you supply both the food carton and the display?', answer: 'Yes, and designing them together avoids the common problem where the unit pack and the display cavity were dimensioned separately and never quite reconcile.' },
  ],

  relatedProducts: ['food-display-boxes', 'display-trays', 'shelf-ready-display-boxes', 'counter-display-boxes'],

  relatedPages: [
    { label: 'Bakery display packaging', href: '/bakery-display-packaging/' },
    { label: 'Confectionery display packaging', href: '/confectionery-display-packaging/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
  ],

  cta: {
    heading: 'Food or wrapped product?',
    body: 'Tell us whether the product touches the board and where the display will sit. Those two answers set the material specification.',
  },

  updated: '2026-07-19',
};

export default content;
