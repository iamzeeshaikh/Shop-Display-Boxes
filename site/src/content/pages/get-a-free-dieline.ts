import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'get-a-free-dieline',
  kind: 'commercial',

  metaTitle: 'Free Dielines | Drawn Around Your Product, No Charge',
  metaDescription:
    'Free dielines drawn around your product, supplied as layered vector files with cut, crease, and bleed on separate layers.',

  h1: 'Get a Free Dieline',

  intro:
    'A dieline is the flat drawing a box is cut and folded from. We draw one around your product before you commit to a run, and it is free — because a job specified from a real dieline goes right far more often than one specified from a guess.',

  sections: [
    {
      heading: 'What you receive',
      body: [
        'A layered vector file with cut lines, crease lines, and bleed on separate layers, at actual size. That separation matters: it is what lets a designer place artwork correctly and lets us verify what will be cut versus what will be folded.',
        'The dieline is drawn for a specific board caliper, because thickness changes the allowances. A dieline drawn for 18 pt board will not fold correctly at 24 pt.',
      ],
      points: [
        'Layered vector file — cut, crease, and bleed separated',
        'Drawn at actual size for a specified board caliper',
        'Internal dimensions verified against your product',
        'Yours to place artwork onto, or to hand to your designer',
      ],
    },
    {
      heading: 'Why we draw it before you order',
      body: [
        'Most packaging problems are dimensional, and they surface at exactly two moments: when the first sample arrives and the product does not fit, or when the full run arrives and it still does not fit. The first is inconvenient, the second is expensive.',
        'Drawing the dieline first moves that discovery to a point where correcting it costs nothing.',
      ],
    },
    {
      heading: 'Send the product, not the dimensions',
      body: [
        'For anything with an insert, a physical sample is worth far more than a measurement. Drawings and spec sheets consistently miss the details that decide fit — a cap flare, a tapered base, a wrap label adding a fraction of a millimeter all around.',
        'Where a product varies between batches, as handmade items usually do, send more than one so the tolerance can be set against the real variation rather than an idealized figure.',
      ],
    },
    {
      heading: 'If you already have a dieline',
      body: [
        'Send it and we will check it against the board and structure you have chosen. The most common issue is a dieline drawn for a different caliper, where the allowances no longer work.',
        'The second most common is live copy crossing a crease, which breaks when the box is erected. Both are cheap to fix at this stage and expensive to fix later.',
      ],
      link: {
        text: 'What we need from an artwork file is listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'Standard templates',
      body: [
        'For common structures at standard sizes, downloadable templates are available and may be quicker if your product fits one. A custom dieline is the right route when it does not, which for display packaging is most of the time.',
      ],
      link: {
        text: 'Standard structures are available on the',
        href: '/dieline-templates/',
        anchor: 'dieline templates page',
      },
    },
  ],

  faqs: [
    { question: 'Is the dieline really free?', answer: 'Yes. We draw it around your product before you commit to a run. A job specified from a real dieline goes right far more often than one specified from a guess, so it is worth our time regardless of whether you order.' },
    { question: 'What format do I get?', answer: 'A layered vector file at actual size, with cut, crease, and bleed on separate layers. That separation is what lets a designer place artwork correctly and lets us verify what will be cut against what will be folded.' },
    { question: 'Why do you need a physical sample?', answer: 'Because drawings miss what decides fit. A cap flare, a tapered base, or a wrap label adds a fraction of a millimeter that no spec sheet records, and an insert cut to the spec sheet will not accept the real product.' },
    { question: 'My product varies between batches. Does that matter?', answer: 'Considerably, and it is common with handmade items. Send several units so the tolerance is set against real variation rather than one idealized measurement — otherwise the insert fits some of your stock and not the rest.' },
    { question: 'Can I use the dieline with another printer?', answer: 'The file is yours. We would rather draw it and lose the job than have you commit to a structure that does not work, though a dieline drawn for our board specification may need checking against another supplier’s stock.' },
    { question: 'Can you check a dieline I already have?', answer: 'Yes. Send it as a layered vector file. The usual problems we find are a dieline drawn for a different board caliper, where allowances no longer work, and live copy crossing a crease.' },
    { question: 'How long does it take?', answer: 'It depends on the complexity of the structure and whether we are waiting on a physical sample. Send the product and we will tell you when to expect it rather than quoting a turnaround that would not hold for every job.' },
  ],

  relatedPages: [
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Dieline templates', href: '/dieline-templates/' },
    { label: 'Free design support', href: '/free-design-support/' },
    { label: 'How ordering works', href: '/how-to-order/' },
  ],

  cta: {
    heading: 'Send your product',
    body: 'We will draw the dieline around it and send it back before you commit to anything.',
    buttonLabel: 'Request a dieline',
  },

  updated: '2026-07-19',
};

export default content;
