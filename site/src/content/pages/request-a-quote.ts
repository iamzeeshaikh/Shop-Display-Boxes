import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'request-a-quote',
  kind: 'commercial',
  metaTitle: 'Request a Quote | Custom Display Box Pricing and Specs',
  metaDescription:
    'Request a quote for custom display boxes. Send dimensions and quantity, or send the product and we size the box around it.',
  h1: 'Request a Quote',
  intro:
    'Tell us what you are packing and how many you need. If the specification is not settled yet, send what you have — most quotes start from a product and a rough quantity rather than a finished drawing.',
  sections: [
    {
      heading: 'What to send',
      body: [
        'The two things that move a quote furthest are the product dimensions and the quantity. Everything else can be decided later, and we will suggest options where you have not specified one.',
        'If you do not have dimensions, send the product itself or a photograph beside a ruler. We would rather size a box around the real thing than around a number that turns out to describe the item without its cap or its label.',
      ],
      points: [
        'Product dimensions, or the product itself',
        'Quantity, or a realistic range',
        'Where the display will sit — counter, shelf, or floor',
        'Any footprint limit a retailer has given you',
        'Artwork if you have it; if not, we draw the dieline first',
      ],
    },
    {
      heading: 'What comes back',
      body: [
        'A price against a specification, with the options that materially change it called out — usually board, finish, and quantity breaks. Where a cheaper route exists that meets the same requirement, we will say so rather than quote the more expensive one silently.',
        'If the specification you sent will not work — a board too light for the weight, a structure that will not survive the journey — we will tell you that before quoting rather than after producing it.',
      ],
    },
    {
      heading: 'On pricing',
      body: [
        'Quantity is the largest single driver, because setup costs are fixed and spread across the run. Structural complexity is the one most often underestimated: each extra glue point, insert, or die-cut opening adds a production stage, and stages cost more than material at most quantities.',
        'Product pages carry a starting price of $0.30 per piece for qualifying large-volume orders. That is a genuine starting point, not a fixed rate — smaller runs, specialty board, and premium finishes all price above it.',
      ],
      link: {
        text: 'Each cost driver is broken down in the guide to',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
  ],
  faqs: [
    { question: 'How quickly will I get a quote?', answer: 'We aim to come back promptly, but we do not publish a guaranteed turnaround time we have not committed to. If your quote is tied to a fixed deadline, say so when you send it and we will tell you whether it is achievable before you wait.' },
    { question: 'Can you quote without artwork?', answer: 'Yes. Artwork affects print cost but not structure, so a quote can be built from dimensions, quantity, board, and finish. We can draw the dieline first and you place artwork onto it afterward.' },
    { question: 'Do I need to know exactly what I want?', answer: 'No, and most people do not at this stage. Send the product, the quantity, and where the display will sit. We will propose a structure and a board, and explain why, rather than expecting you to specify it.' },
    { question: 'Is the quote binding?', answer: 'A quote is against the specification it describes. If the specification changes — different board, added insert, different quantity — the price changes with it. We will show which variables move the number so there are no surprises.' },
    { question: 'Will you tell me if a cheaper option exists?', answer: 'Yes. If a lighter board, a simpler structure, or a different quantity break meets the same requirement for less, we would rather say so at quoting stage than have you find out later.' },
    { question: 'What if my quantity is small?', answer: 'Small runs are quotable — digital printing removes plate setup, which is what makes short runs viable. Expect a higher per-piece price, because fixed setup costs are spread across fewer units.' },
  ],
  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Request a sample', href: '/sample-request/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
  ],
  updated: '2026-07-19',
};

export default content;
