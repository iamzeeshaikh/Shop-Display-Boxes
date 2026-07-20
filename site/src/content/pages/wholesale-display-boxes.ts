import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'wholesale-display-boxes',
  kind: 'commercial',

  metaTitle: 'Wholesale Display Boxes | Bulk Orders and Reorders',
  metaDescription:
    'Wholesale display box supply: how volume pricing works, running one structure across several SKUs, and planning reorders.',

  h1: 'Wholesale Display Boxes',

  intro:
    'Buying display packaging at volume changes which decisions matter. Unit price falls as quantity rises, but the larger savings usually come from consolidating runs and reusing tooling rather than from negotiating the rate.',

  sections: [
    {
      heading: 'Where volume savings actually come from',
      body: [
        'Setup costs — dieline development, die tooling, plates, press make-ready — are fixed and spread across the run. That is why doubling a quantity rarely doubles the invoice, and why the per-piece price falls sharply as volume grows.',
        'Material and running cost scale more or less linearly, so beyond a certain quantity the curve flattens. Past that point, the savings come from how you organize orders rather than from ordering more.',
      ],
      link: {
        text: 'Each cost driver is broken down in the guide to',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
    {
      heading: 'Consolidate small repeat runs',
      body: [
        'The most common avoidable cost in wholesale buying is ordering the same specification in small batches through the year. Each run carries setup, so the same annual quantity split across four orders costs materially more than one.',
        'Where storage allows, consolidating is usually the single largest saving available on an established display.',
      ],
    },
    {
      heading: 'One structure across several SKUs',
      body: [
        'Distributors and multi-line brands frequently want one base structure serving a portfolio, with only artwork and inserts changing. That avoids re-developing a display for every product.',
        'It works where the SKUs are close enough in size that one insert holds them securely. Where they are not, separate tier inserts against a shared base is the middle route — forcing dissimilar products into one well produces a display that holds some and drops others.',
      ],
      link: {
        text: 'How this works for counter units is covered on the',
        href: '/cardboard-counter-display-units/',
        anchor: 'counter display units page',
      },
    },
    {
      heading: 'Reorders are print jobs',
      body: [
        'Once a dieline and proof are approved and on file, a repeat order does not repeat the development. Tooling is retained and maintained, so a reorder should be quoted and produced as a print run.',
        'That also means the economics improve after the first order, which is worth factoring into how you plan a first run — a smaller proving run followed by volume is often better than committing everything up front.',
      ],
    },
    {
      heading: 'Freight at volume',
      body: [
        'At wholesale quantities freight becomes a serious line item, and it is billed on volume rather than weight. Flat-packing and pallet fit matter more than at small scale.',
        'Adjusting a dimension slightly at dieline stage to gain another unit per pallet layer is free then and impossible afterward. At volume that adjustment repays itself on every shipment.',
      ],
      link: {
        text: 'What drives freight cost is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Planning for regulated or seasonal categories',
      body: [
        'Very long runs are riskier where artwork has a shelf life — seasonal ranges, or regulated categories where requirements change. A large run of superseded packaging is a write-off rather than a saving.',
        'Structures where the printed element updates independently, such as a separately printed sleeve or header, keep the tooling investment intact when only the copy has to change.',
      ],
    },
    {
      heading: 'Terms',
      body: [
        'Volume pricing tiers, payment terms, and any account arrangements are confirmed on quotation rather than published, because they depend on specification and quantity.',
        'Send the annual volume you expect rather than a single order quantity. The pricing conversation is different when it is about a programme rather than a run.',
      ],
    },
  ],

  faqs: [
    { question: 'How does volume pricing work?', answer: 'Setup costs — dieline, tooling, plates, make-ready — are fixed and spread across the run, so per-piece price falls sharply as quantity rises. Material and running cost scale roughly linearly, so the curve flattens beyond a certain volume.' },
    { question: 'What is the biggest saving available at wholesale?', answer: 'Usually consolidating small repeat runs. Ordering the same specification in four batches a year means paying setup four times. Where storage allows, one consolidated run is typically a larger saving than any rate negotiation.' },
    { question: 'Can one structure serve several products?', answer: 'Where the SKUs are close enough in size that one insert holds them securely, yes, and it avoids re-developing a display per product. Where they differ, separate tier inserts against a shared base is the workable middle route.' },
    { question: 'Are reorders cheaper?', answer: 'Yes. Development dominates a first order, and once the dieline and proof are approved and on file a repeat run is a print job. Tooling is retained and maintained, so the second order is a genuinely different proposition.' },
    { question: 'Should I commit my whole volume to one first order?', answer: 'Often not. A smaller proving run followed by volume lets you find structural problems across a hundred units rather than ten thousand, and the reorder economics are better than the first order anyway.' },
    { question: 'Does freight matter at wholesale volumes?', answer: 'Considerably, and it is billed on volume rather than weight. Flat-packing and pallet fit matter more at scale — a dimension adjusted at dieline stage to gain a unit per pallet layer repays itself on every shipment.' },
    { question: 'Is a very long run always cheaper?', answer: 'Not where artwork has a shelf life. Seasonal ranges and regulated categories can leave you with a write-off rather than a saving. Structures where a printed sleeve updates independently limit that exposure.' },
    { question: 'What information do you need to quote wholesale?', answer: 'The annual volume you expect rather than a single order quantity, plus the specification and how many SKUs it covers. The pricing conversation is different when it is about a programme rather than one run.' },
  ],

  relatedProducts: ['custom-display-boxes', 'retail-display-boxes', 'cardboard-counter-display-units', 'corrugated-display-boxes'],

  relatedPages: [
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Custom display box manufacturing', href: '/custom-display-box-manufacturer/' },
    { label: 'How to order display boxes in bulk', href: '/blog/how-to-order-display-boxes-in-bulk/' },
  ],

  cta: {
    heading: 'Planning an annual programme?',
    body: 'Send the yearly volume rather than a single order quantity. Consolidation usually saves more than the rate does.',
  },

  updated: '2026-07-19',
};

export default content;
