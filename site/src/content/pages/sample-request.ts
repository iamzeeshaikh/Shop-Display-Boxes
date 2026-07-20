import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'sample-request',
  kind: 'commercial',

  metaTitle: 'Request a Sample | See the Real Box Before You Commit',
  metaDescription:
    'Request a physical sample of your display box, what a sample can and cannot tell you, and how sample terms are confirmed.',

  h1: 'Request a Sample',

  intro:
    'A sample is the cheapest way to find out that something does not work. A structure that looks right on screen can fail for reasons nobody predicted — and finding that out across one unit costs far less than across ten thousand.',

  sections: [
    {
      heading: 'What a sample tells you',
      body: [
        'Whether your product actually fits, whether the display holds its shape when loaded, whether a store associate can erect it without instructions, and how the print and finish look on the real board rather than on a screen.',
        'The fit test is the one that repays a sample most often. A cavity cut from a spec sheet frequently will not accept the real product, because a cap flare, a tapered base, or a wrap label adds a fraction of a millimeter the drawing did not record.',
      ],
      points: [
        'Does your actual product fit the cavity, with its cap and label',
        'Does the base hold flat when the display is fully loaded',
        'Can it be erected in one motion with no instructions',
        'How the color and finish look on the real substrate',
      ],
    },
    {
      heading: 'What a sample does not tell you',
      body: [
        'How the display behaves after a week under sustained load. Paperboard fails by creep rather than sudden collapse, so a base that holds when you fill it can bow days later.',
        'If load is a concern, keep the sample loaded and standing for longer than feels necessary before approving it. That is the test most people skip and most wish they had run.',
      ],
    },
    {
      heading: 'Plain samples and printed samples',
      body: [
        'A plain sample shows structure, fit, and assembly in unprinted board. It is quicker and cheaper, and it answers most structural questions.',
        'A printed sample shows color and finish on the real substrate, which a screen cannot. Where a brand color carries commercial weight, or where a laminate will change how the color reads, the printed version is what settles it.',
      ],
      link: {
        text: 'Why printed color differs from screen color is covered under',
        href: '/custom-printing-options/',
        anchor: 'custom printing options',
      },
    },
    {
      heading: 'Send us your product',
      body: [
        'For anything with an insert, send a physical unit rather than dimensions. Where the product varies between batches — as handmade items usually do — send several, so tolerance is set against real variation rather than one idealized measurement.',
        'The sample is only as useful as what it was built around.',
      ],
    },
    {
      heading: 'Sample terms',
      body: [
        'Samples are charged. The cost depends on the structure and on whether you need a plain sample or a printed one, so it is quoted alongside your job rather than published as a flat fee.',
        'It is worth the money on a new structure. A sample costs a fraction of a full run, and it is the only reliable way to find out that your product does not actually fit before several thousand boxes exist.',
      ],
    },
  ],

  faqs: [
    { question: 'Are samples free?', answer: 'No — samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted with your job rather than listed as a flat fee. On a new structure it costs a fraction of a full run.' },
    { question: 'What should I check on a sample?', answer: 'That your real product fits including cap and label, that the base holds flat when loaded, that it erects in one motion without instructions, and how color and finish look on the actual board rather than a screen.' },
    { question: 'What will a sample not show me?', answer: 'How it behaves after a week under sustained load. Paperboard fails by creep rather than sudden collapse, so a base that holds when filled can bow days later. Keep the sample loaded and standing before you approve it.' },
    { question: 'Plain or printed sample?', answer: 'Plain answers structural questions — fit, assembly, whether the base holds — more quickly and cheaply. Printed is what settles color, because a screen cannot show how ink looks on the real substrate under a laminate.' },
    { question: 'Do you need my product to make a sample?', answer: 'For anything with an insert, yes. A cavity cut from a spec sheet often will not accept the real item, because a cap flare or a wrap label adds a fraction of a millimeter the drawing did not record.' },
    { question: 'My product varies between batches. Does that matter?', answer: 'Considerably, and it is common with handmade goods. Send several units so the tolerance is set against real variation — otherwise the insert fits part of your stock and not the rest.' },
    { question: 'How long does a sample take?', answer: 'It depends on the structure and whether we are waiting on your product. We confirm the timing when you request one rather than publishing a turnaround that would not hold for every job.' },
    { question: 'Should I sample before every order?', answer: 'Before a first order of a new structure, almost always. On a reorder against an approved dieline and proof, generally not — the structure is already proven and nothing has changed.' },
  ],

  relatedPages: [
    { label: 'Request a quote', href: '/request-a-quote/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
  ],

  cta: {
    heading: 'Send your product',
    body: 'We will build the sample around the real thing rather than around a drawing of it.',
    buttonLabel: 'Request a sample',
    buttonHref: '/contact-us/',
  },

  updated: '2026-07-19',
};

export default content;
