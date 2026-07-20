import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'low-minimum-orders',
  kind: 'commercial',

  metaTitle: 'Low Minimum Orders | Small Runs of Custom Display Boxes',
  metaDescription:
    'Why low minimum orders work on display boxes, what a small run really costs per piece, and when it pays to move to volume.',

  h1: 'Low Minimum Orders',

  intro:
    'Short runs of custom display packaging are viable, and digital printing is the reason. What changes at low quantities is not whether you can order — it is what each piece costs, and why.',

  sections: [
    {
      heading: 'Why small runs are possible',
      body: [
        'Traditional offset printing makes plates for each job, and that setup has to be paid for regardless of how many units follow. Spread across fifty boxes it is prohibitive; across fifty thousand it disappears.',
        'Digital printing removes plates entirely. That single change is what makes a genuinely small run economic, and it is why low minimums are available now in a way they were not two decades ago.',
      ],
    },
    {
      heading: 'What a short run actually costs',
      body: [
        'Expect a higher price per piece, because the fixed costs that remain — dieline development, die tooling, press make-ready, setup and handling — are divided among fewer units.',
        'The practical consequence is that reducing quantity does not reduce total cost proportionally. Halving an order rarely halves the invoice, and at small quantities it may barely change it.',
      ],
      link: {
        text: 'The full breakdown of what drives price is in the guide to',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
    {
      heading: 'When a small run is the right decision',
      body: [
        'Testing a display before committing to volume is the strongest case. A structure that looks correct on screen can fail in a store for reasons nobody predicted — a footprint a retailer rejects, a sightline that hides the product, an assembly step staff will not perform.',
        'Finding that out across a hundred units is inexpensive. Finding it out across ten thousand is not.',
      ],
      points: [
        'Testing a structure before committing to volume',
        'Seasonal or limited-edition runs that will not repeat',
        'Multiple variants where each needs its own artwork',
        'New brands establishing whether retail placement works at all',
      ],
    },
    {
      heading: 'When to move to volume',
      body: [
        'Once the structure is proven and the artwork is settled, the per-piece saving from a longer run is usually substantial. If you are reordering the same specification repeatedly in small batches, you are paying the setup element each time.',
        'Consolidating several small reorders into one larger run is often the single largest saving available on an established display.',
      ],
    },
    {
      heading: 'Reorders are cheaper than first orders',
      body: [
        'Most of the cost and elapsed time on a first order sits in development: the dieline, the proof cycle, the approvals. Once those are approved and on file, a reorder is a print job.',
        'That means the economics of a second small run are better than the first, though still not as good as ordering the combined quantity once.',
      ],
      link: {
        text: 'How the two approval stages work is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
  ],

  faqs: [
    { question: 'What is your minimum order quantity?', answer: 'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.' },
    { question: 'Why is a small run more expensive per piece?', answer: 'Because fixed costs — dieline development, die tooling, press make-ready, setup — are divided among fewer units. Those costs exist whether you order fifty boxes or fifty thousand, so at low volumes each piece carries more of them.' },
    { question: 'If I halve my order, does the price halve?', answer: 'No, and this surprises people. Fixed setup costs do not scale down with quantity, so halving an order might reduce the total by much less than half. At small quantities the change can be marginal.' },
    { question: 'What makes short runs possible at all?', answer: 'Digital printing. Offset makes plates per job, and that setup is prohibitive across a small run. Digital removes plates entirely, which is what made genuinely small quantities economic.' },
    { question: 'Should I order a small run first to test?', answer: 'Often yes, particularly for a new structure. Displays fail in stores for reasons nobody predicts — a footprint the retailer rejects, a sightline that hides product, an assembly step staff skip. Learning that across a hundred units is cheap.' },
    { question: 'When should I switch to a larger run?', answer: 'Once the structure is proven and the artwork settled. If you are reordering the same specification in small batches repeatedly, you are paying the setup element each time — consolidating those into one run is usually the biggest saving available.' },
    { question: 'Are reorders cheaper than the first order?', answer: 'Yes. Most of the cost and time on a first order is development — dieline, proofing, approvals. Once those are on file a reorder is a print job. It is still not as economical as ordering the combined quantity at once.' },
    { question: 'Can I order different designs in one small run?', answer: 'On digital, yes, and versioning costs little because there are no plates per version. This makes short runs particularly suited to multi-variant ranges where offset would need separate plates for each design.' },
  ],

  relatedProducts: ['custom-display-boxes', 'counter-display-boxes', 'cardboard-display-boxes', 'display-gift-boxes'],

  relatedPages: [
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Minimum order quantity for display boxes', href: '/minimum-order-quantity-for-display-boxes/' },
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Request a sample', href: '/sample-request/' },
  ],

  cta: {
    heading: 'Testing a new display?',
    body: 'Send the specification and quantity you have in mind and we will tell you the real minimum for that job.',
  },

  updated: '2026-07-19',
};

export default content;
