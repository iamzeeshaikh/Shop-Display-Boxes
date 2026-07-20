import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'free-design-support',
  kind: 'commercial',

  metaTitle: 'Free Design Support | Structural and Artwork Checking',
  metaDescription:
    'Free structural and artwork support on display packaging: dielines, file checks, and advice on what will and will not work.',

  h1: 'Free Design Support',

  intro:
    'Structural design help and artwork checking are included rather than charged. A job specified properly goes right far more often, which is worth our time whether or not you order.',

  sections: [
    {
      heading: 'Structural design',
      body: [
        'We draw the dieline around your product, choose a structure suited to how the display will be used, and specify a board against the actual load rather than the product category.',
        'That includes telling you when the thing you asked for will not work — a board too light for glass, a window too large for a tall box, a structure that will not survive freight. Saying so before production is the useful version of design support.',
      ],
      link: {
        text: 'Dielines are drawn before you commit — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'Artwork checking',
      body: [
        'Send your file and we will check it against the dieline and the board before anything goes to press: bleed, safe area, resolution, color space, outlined fonts, and whether live copy crosses a crease.',
        'These are the four or five faults behind most reprints, and all of them are cheap to fix at file stage and expensive to fix afterward.',
      ],
      points: [
        'Bleed and safe area against the actual cut line',
        'Image resolution at final printed size',
        'Color space, and whether a brand color needs a spot ink',
        'Fonts outlined or embedded',
        'Live copy clear of every crease',
      ],
      link: {
        text: 'The full file requirements are listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'What this does not include',
      body: [
        'We are not a branding or graphic design studio. We do not create brand identities, write copy, produce illustration, or design artwork from scratch.',
        'What we do is make sure the artwork you have works on the structure being produced. If you need the artwork itself created, that is a designer’s job and we would rather say so than take it on badly.',
      ],
    },
    {
      heading: 'What we will not check',
      body: [
        'Regulatory compliance, in any market. We print exactly what you supply — including ingredient lists, warnings, safety marks, and claims — and we do not verify any of it against the rules where you sell.',
        'That is not a limitation of the support so much as a boundary worth being explicit about, because assuming a supplier is checking compliance is a costly assumption.',
      ],
    },
    {
      heading: 'When to involve us',
      body: [
        'Earlier than most people do. The cheapest moment to change a structure is before the dieline is approved, and the cheapest moment to fix artwork is before it is placed on a dieline that was drawn for a different board.',
        'If you are still choosing between formats, send the product and the placement rather than waiting until you have a design to check.',
      ],
    },
  ],

  faqs: [
    { question: 'Is design support really free?', answer: 'Structural design, dieline drawing, and artwork checking are included. A job specified properly goes right far more often, which makes it worth our time regardless of whether you place the order.' },
    { question: 'Will you design my artwork for me?', answer: 'No. We are not a branding or graphic design studio — we do not create identities, write copy, or produce illustration. We make sure the artwork you have works on the structure being produced. Creating it is a designer’s job.' },
    { question: 'What do you check on an artwork file?', answer: 'Bleed and safe area against the real cut line, image resolution at final printed size, color space and whether a brand color needs a spot ink, whether fonts are outlined, and whether live copy crosses a crease.' },
    { question: 'Do you check regulatory compliance?', answer: 'No, in any market. We print exactly what you supply including ingredient lists, warnings, and claims, and we do not verify any of it. Assuming a packaging supplier is checking compliance is a costly assumption, so we state it plainly.' },
    { question: 'When should I involve you?', answer: 'Earlier than most people do. The cheapest moment to change a structure is before dieline approval. If you are still choosing between formats, send the product and the placement rather than waiting until you have a design.' },
    { question: 'Will you tell me if my idea will not work?', answer: 'Yes, and that is the most useful part of it. A board too light for glass, a window too large for a tall box, a structure that will not survive freight — saying so before production rather than after is the point.' },
    { question: 'Can you work with my designer directly?', answer: 'Yes, and it usually goes better. Sending the dieline straight to whoever is placing artwork avoids the round trip where a design is built to a rectangle and then reconciled with the real structure.' },
    { question: 'Do I own the dieline you draw?', answer: 'Yes. It is supplied to you as a layered vector file and it is yours to use, including with another supplier — though a dieline drawn for our board specification may need checking against theirs.' },
  ],

  relatedPages: [
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Dieline templates', href: '/dieline-templates/' },
    { label: 'How ordering works', href: '/how-to-order/' },
  ],

  cta: {
    heading: 'Send what you have',
    body: 'A product, a rough idea, or a finished file — we will tell you what works and what does not before anything is committed.',
  },

  updated: '2026-07-19',
};

export default content;
