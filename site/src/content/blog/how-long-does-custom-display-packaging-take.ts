import type { BlogPost } from '../../data/blog';

/**
 * Standard times match Merchant Center and the shipping policy: production
 * 5–7 business days after proof approval, delivery 5–7 business days in the
 * US and 7–10 business days to the UK, Canada and Australia.
 */
const post: BlogPost = {
  slug: 'how-long-does-custom-display-packaging-take',

  title: 'How Long Does Custom Display Packaging Take?',
  metaTitle: 'How Long Does Custom Display Packaging Take? | Timelines',
  metaDescription:
    'Production takes 5–7 business days after proof approval. What consumes time before that, which stage slips most often, and how to plan backward from an in-store date.',

  excerpt:
    'Production and delivery run to standard times. The variability sits earlier, in one stage that is not the one people plan around.',

  author: 'Shop Display Boxes',
  published: '2026-07-12',
  updated: '2026-07-12',
  tags: ['Ordering'],

  image: {
    productSlug: 'custom-display-boxes',
    file: 'custom-display-boxes-5.png',
    alt: 'Flat-packed custom display box shown before assembly beside the erected unit',
  },

  sections: [
    {
      heading: 'Our standard times, and where the real variation sits',
      body: [
        'Once you approve the proof, production takes 5–7 business days. Delivery then takes 5–7 business days in the US and 7–10 business days to the UK, Canada and Australia, and shipping to all four is free.',
        'Those figures start at proof approval, so the part that varies from job to job is everything before it. Knowing which of those stages consume time, which are within your control, and which one reliably slips lets you work backward from a date with confidence.',
      ],
    },
    {
      heading: 'The stages, and what each actually costs in time',
      body: [
        'A custom order runs through six stages. They are not equal in duration and, more importantly, they are not equal in variability.',
      ],
      subsections: [
        {
          heading: 'Specification and quote',
          body: [
            'Usually quick, and quicker still if the initial brief includes the product, a quantity, and where the display will sit. Most delay here is a round trip asking for information the first message did not contain.',
          ],
        },
        {
          heading: 'Dieline drawing',
          body: [
            'Depends on structural complexity and on whether we are waiting for a physical sample of your product. For anything with a cavity insert, the sample is the gating item — the drawing cannot be finished without it.',
          ],
        },
        {
          heading: 'Artwork',
          body: [
            'Entirely on your side, and this is the stage that slips. More on that below.',
          ],
        },
        {
          heading: 'Proofing',
          body: [
            'A digital proof is fast. A physical proof on the actual stock adds real days, including transit to you and back. It is almost always worth those days where color carries commercial weight, and it is a deliberate choice rather than an unavoidable delay.',
          ],
        },
        {
          heading: 'Production',
          body: [
            'The most predictable stage, and usually the one people assume is the long pole. Production takes 5–7 business days after proof approval: print, coat, die-cut, glue, and fold each take a known amount of time.',
          ],
        },
        {
          heading: 'Delivery',
          body: [
            'Delivery takes 5–7 business days in the US and 7–10 business days to the UK, Canada and Australia, and shipping to all four is free. If your order has to land by a fixed in-store date, tell us when you order so we can confirm it fits.',
          ],
        },
      ],
    },
    {
      heading: 'The stage that slips is artwork approval',
      body: [
        'Every other stage has one or two people making a decision. Artwork approval frequently involves a designer, a brand owner, a marketing lead, and sometimes a legal or regulatory reviewer — and they rarely respond simultaneously.',
        'A week budgeted for artwork approval routinely becomes three. It is not a production problem and no supplier can absorb it for you, which is exactly why it should carry the slack in your plan.',
      ],
    },
    {
      heading: 'Plan backward, not forward',
      body: [
        'Start from the in-store date. Subtract delivery, then production, then proofing, then artwork, then dieline approval. What remains is the date artwork actually has to be finished — and it is usually earlier than people assume.',
        'Doing this arithmetic early is the difference between a comfortable schedule and a compressed one where every decision becomes urgent.',
      ],
      link: {
        text: 'The full sequence and its two approval points is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'What genuinely speeds things up',
      body: [
        'Some of these are within your control and worth knowing before you need them.',
      ],
      points: [
        'Send a physical product sample with the first inquiry, not after the quote',
        'Choose digital printing where the run is short — it removes plate making',
        'Simplify structure: fewer components means fewer production stages',
        'Get artwork approvers lined up before the file exists, not after',
        'Accept a digital proof where color is not commercially critical',
      ],
    },
    {
      heading: 'Reorders are a different proposition',
      body: [
        'Once a dieline and proof are approved and on file, the development stages disappear. A repeat order against approved tooling is a print job, and the timeline reflects that.',
        'This is worth factoring into a first order. A smaller proving run followed by volume gets you a validated structure and a faster second cycle, which for a date-driven launch is often better than committing everything at once.',
      ],
    },
    {
      heading: 'If you have a fixed date, say so first',
      body: [
        'Tell us the in-store date when you request a quote rather than after specifications are agreed. If it is not achievable, that is far better established before you commit than afterward.',
        'Where a date is tight, there are usually trade-offs available — a simpler structure, a different print route, a digital proof instead of a physical one. Those are decisions worth making deliberately rather than discovering under pressure.',
      ],
    },
  ],

  related: [
    'how-to-order-display-boxes-in-bulk',
    'what-affects-custom-display-box-pricing',
    'how-to-prepare-artwork-for-display-box-printing',
  ],

  furtherReading: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Request a quote', href: '/request-a-quote/' },
    { label: 'Shipping information', href: '/shipping-information/' },
  ],
};

export default post;
