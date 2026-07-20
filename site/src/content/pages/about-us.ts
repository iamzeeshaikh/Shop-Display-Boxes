import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no company history, founding date, team size, factory,
 * capacity, certification, or client name appears here, because none has been
 * supplied. The page is written about how the work is done — which is verifiable
 * from the process itself — rather than about the company's biography.
 * When the owner supplies verified facts, add them; do not infer them.
 */
const content: PageContent = {
  slug: 'about-us',
  kind: 'commercial',

  metaTitle: 'About Shop Display Boxes | Our Approach to Packaging',
  metaDescription:
    'How we work on custom display packaging: dielines drawn first, boards specified against real load, honest advice on cost.',

  h1: 'About Shop Display Boxes',

  intro:
    'We make custom printed display boxes and retail display packaging for businesses across the United States. This page explains how we work, because that is more useful to you than a company biography.',

  sections: [
    {
      heading: 'We start from the product, not the catalog',
      body: [
        'Most display packaging problems are dimensional. A box sized approximately holds a product approximately, and a product held approximately leans, slides, or falls over by the end of the first week on a shelf.',
        'So every job starts with the actual product — a physical sample where an insert is involved — and a dieline drawn around it. That is why the dieline comes before the quote is accepted rather than after.',
      ],
    },
    {
      heading: 'We specify board against load, not against category',
      body: [
        'There is no rule that cosmetics use boxboard and food uses corrugated. What decides the board is the weight of a full assortment relative to the unsupported span of the base, and how the display travels before it arrives.',
        'Paperboard fails gradually under sustained weight rather than suddenly, which is why a display can pass a bench test and still bow after a week in a store. We specify for the sustained condition.',
      ],
      link: {
        text: 'The board options and where each stops working are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'We tell you when a cheaper option would do',
      body: [
        'If a lighter board, a simpler structure, or a different quantity break meets the same requirement for less money, we would rather say so at quoting stage than quote the more expensive route silently.',
        'The same applies in reverse. If the specification you have asked for will not survive the job — a board too light for glass, a structure that will not hold up in transit — we will say that before producing it rather than after.',
      ],
    },
    {
      heading: 'We do not guess at what we cannot verify',
      body: [
        'We print the artwork you supply, including regulatory, ingredient, and safety copy. We do not review artwork for compliance in your market, and we will say so rather than imply a check we are not performing.',
        'The same principle applies to specifications. Where a figure depends on your job — production time, minimum quantity, board weight — our pages say so instead of publishing a number that would not hold for every order.',
      ],
    },
    {
      heading: 'What we make',
      body: [
        'Counter displays, floor-standing units, shelf-ready cases, trays, mailers that convert to displays, and the industry-specific formats that come with their own constraints — glass weight for candles, oil migration for soap, food-contact coatings, warning-copy space for regulated categories.',
        'All of it is custom: printed to your artwork, sized to your product, and shipped to businesses across all fifty states.',
      ],
      link: {
        text: 'If you are not sure which format applies, start with the',
        href: '/how-to-choose-retail-display-packaging/',
        anchor: 'guide to choosing display packaging',
      },
    },
  ],

  faqs: [
    { question: 'Where are you based?', answer: 'Our location and contact details are being confirmed before publication and will appear on the contact page once verified. We supply and ship custom display packaging to businesses across all fifty states.' },
    { question: 'Do you have minimum order quantities?', answer: 'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.' },
    { question: 'Can you produce a display if I only have a rough idea?', answer: 'Yes, and that is how most jobs begin. Send the product, an approximate quantity, and where the display will sit. We propose a structure and a board and explain the reasoning rather than expecting you to specify it.' },
    { question: 'Do you draw dielines for free?', answer: 'Yes. We draw the dieline for your product before you commit to a run, supplied as a layered vector file with cut, crease, and bleed on separate layers.' },
    { question: 'Do you check that my labeling is compliant?', answer: 'No. We print the artwork you supply, including regulatory, ingredient, and safety copy, but responsibility for its accuracy and compliance in your market stays with you. We would rather state that plainly than imply a review we do not perform.' },
    { question: 'Can I get a sample before ordering?', answer: 'Samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted alongside your job rather than listed as a flat fee. On a new structure it costs a fraction of a full run and is the only reliable way to find out that a product does not fit before the run is made.' },
  ],

  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
    { label: 'Sustainability options', href: '/sustainability/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],

  cta: {
    heading: 'Start with your product',
    body: 'Send dimensions and a quantity, or send the product itself. We will come back with a structure, a board, and a price.',
  },

  updated: '2026-07-19',
};

export default content;
