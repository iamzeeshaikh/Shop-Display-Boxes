import type { PageContent } from '../../data/page-content';

/**
 * Shipping facts set by the owner 2026-10-29: free to the US, UK, Canada and
 * Australia; production 5–7 business days; transit 5–7 business days in the
 * US and 7–10 to the other three (same numbers as src/data/order.ts, the Offer
 * schema and the Merchant feed). No carrier names or freight rates appear.
 */
const content: PageContent = {
  slug: 'shipping-information',
  kind: 'commercial',

  metaTitle: 'Shipping Information | Display Packaging Delivery in USA',
  metaDescription:
    'Free shipping to the US, UK, Canada and Australia, delivery times, and what drives freight cost on display packaging.',

  h1: 'Shipping Information',

  intro:
    'Shipping is free to the United States, the United Kingdom, Canada and Australia. What follows is what actually affects cost and risk in getting it there — freight on this product is charged on volume far more than on weight, which is why box sizing shows up in your price.',

  sections: [
    {
      heading: 'Volume, not weight',
      body: [
        'Paperboard is light and displays are bulky, so freight is almost always billed on the space a consignment occupies rather than what it weighs. A pallet of assembled displays is mostly air, and you pay for the air.',
        'This is why flat-packing matters commercially rather than just practically. A display that ships flat and erects in store can cost a fraction of the freight of the same display shipped assembled.',
      ],
      points: [
        'Flat-packed — lowest freight volume, needs store assembly',
        'Shipper-display — travels sealed, converts on arrival, no separate pack stage',
        'Pre-assembled — most protective, highest freight cost by a wide margin',
      ],
    },
    {
      heading: 'Palletization',
      body: [
        'How a flat-packed display fits a pallet footprint affects cost more than most people expect. A design that leaves significant unused pallet space carries the cost of that space on every shipment.',
        'Where volumes are large enough to matter, it is worth checking pallet fit at the dieline stage. Adjusting a dimension slightly to gain another unit per layer is free at that point and impossible later.',
      ],
    },
    {
      heading: 'Protecting displays in transit',
      body: [
        'A display that arrives crushed does not get replaced — it gets discarded and the retail placement is lost. Transit protection is therefore a design input rather than packaging added at dispatch.',
        'Pop-up structures are the most vulnerable, because a crushed corner can compromise the mechanism rather than just marking the board. Glass-carrying displays need partitioning whether or not they ship loaded.',
      ],
      link: {
        text: 'Where a display travels loaded and converts in store, see the',
        href: '/display-mailer-boxes/',
        anchor: 'display mailer boxes page',
      },
    },
    {
      heading: 'Shipping loaded displays',
      body: [
        'Shipping a display already filled removes a packing stage and means store staff do not have to load anything. It also means the structure has to survive freight with weight inside it, which usually raises the board specification.',
        'For glass and fragile assortments, shipping the display flat and the product separately is often both safer and cheaper, at the cost of in-store assembly.',
      ],
    },
    {
      heading: 'What is included, and what is not',
      body: [
        'Shipping is free on every order to the United States, the United Kingdom, Canada and Australia, whether you buy the online 100-box pack or a quoted run. There is no separate freight line to settle afterward.',
        'Production takes 5–7 business days after proof approval. Delivery then takes 5–7 business days within the US and 7–10 business days to the UK, Canada and Australia. Any import duties or taxes charged by the destination country are the buyer’s responsibility.',
        'If your order is tied to a fixed in-store date, say so when you request a quote. We will tell you whether it is achievable before you commit rather than after.',
      ],
    },
    {
      heading: 'Planning backward from an in-store date',
      body: [
        'Work backward through delivery, production, proof approval, and dieline approval. That gives the date artwork actually has to be finished, which is usually earlier than people assume.',
        'The stage that slips most often is artwork approval, because it involves the most people. Build slack there rather than assuming production can absorb a delay.',
      ],
      link: {
        text: 'The full sequence and its two approval points are set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
  ],

  faqs: [
    { question: 'Do you ship to all fifty states?', answer: 'Yes, free, to addresses across the United States, and also to the United Kingdom, Canada and Australia. Our registered address is in Brooklyn, New York, but it is not a collection point — everything is produced to order and shipped to you.' },
    { question: 'How is freight calculated on display packaging?', answer: 'Almost always on volume rather than weight. Paperboard is light and displays are bulky, so you are effectively paying for the space a consignment occupies. This is why flat-packing changes the economics so substantially.' },
    { question: 'If shipping is free, why does flat-packing matter?', answer: 'Because freight is billed on volume and that cost sits inside your quoted price. A display drawn tightly around its product and shipped flat costs less to move, and that shows up as a better price rather than as a separate freight line.' },
    { question: 'How long will delivery take?', answer: 'Production is 5–7 business days after proof approval. Delivery then takes 5–7 business days in the US and 7–10 business days to the UK, Canada and Australia. If you have a fixed in-store date, tell us when you order and we will confirm whether it is achievable.' },
    { question: 'Can displays ship already loaded with product?', answer: 'Yes, and it removes a packing stage. It also means the structure carries product weight through freight, which usually raises the board specification. For glass and fragile items, shipping flat with product separate is often safer and cheaper.' },
    { question: 'What happens if a display arrives damaged?', answer: 'Report it within 14 days of delivery with photographs and we replace the damaged boxes free or refund them, at our shipping cost. The more useful point is prevention: damaged displays are usually discarded rather than replaced, and the placement is lost — which is why transit protection is designed in rather than added at dispatch.' },
    { question: 'Does pallet fit really affect my cost?', answer: 'More than most people expect. A design leaving significant unused pallet space carries that cost on every shipment. Adjusting a dimension slightly at dieline stage to gain a unit per layer is free then and impossible afterward.' },
    { question: 'When should I place an order for a seasonal deadline?', answer: 'Work backward from the in-store date through delivery, production, proof approval, and dieline approval. Build slack at artwork approval — it involves the most people and slips most often.' },
  ],

  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Shipping policy', href: '/shipping-policy/' },
    { label: 'Locations we ship to', href: '/locations/' },
    { label: 'Request a quote', href: '/request-a-quote/' },
  ],

  cta: {
    heading: 'Working to a deadline?',
    body: 'Send the in-store date with your enquiry. We will tell you whether it is achievable before you commit to anything.',
  },

  updated: '2026-10-29',
};

export default content;
