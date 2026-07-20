import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: this page targets a manufacturer query, but no facility,
 * machinery, capacity, workforce, or certification information has been
 * supplied and none is invented here. Rather than describe a factory we cannot
 * evidence, the page is written as what a buyer should establish about any
 * display box manufacturer — and states plainly that our own production
 * details are pending owner confirmation.
 */
const content: PageContent = {
  slug: 'custom-display-box-manufacturer',
  kind: 'commercial',

  metaTitle: 'Custom Display Box Manufacturer | What to Ask Before You Buy',
  metaDescription:
    'What to establish about any custom display box manufacturer before ordering, and what we can confirm about our own work.',

  h1: 'Custom Display Box Manufacturing',

  intro:
    'Choosing a display box manufacturer is mostly a question of what they will tell you before you order. This page sets out what is worth establishing about any supplier, including us.',

  sections: [
    {
      heading: 'What we can confirm',
      body: [
        'Shop Display Boxes produces custom printed display boxes and retail display packaging to order — drawn around your product, printed to your artwork, and shipped with delivery included to business addresses across all fifty states. Minimum order is 100 units and production runs 5–7 business days from proof approval.',
        'What we do not publish is a tour of equipment, capacity figures, or certification marks. Those get used as decoration on a lot of packaging sites, and a buyer cannot verify any of them. The questions below are worth more, and they work on us as well as on anyone else you are comparing.',
      ],
    },
    {
      heading: 'Ask whether the dieline comes first',
      body: [
        'A supplier who quotes from your dimensions without drawing anything is quoting against an assumption. Most packaging problems are dimensional, and they surface either when the first sample arrives or when the full run does.',
        'A dieline drawn around your actual product, before you commit, moves that discovery to the point where fixing it costs nothing.',
      ],
      link: {
        text: 'How that works here is set out under',
        href: '/get-a-free-dieline/',
        anchor: 'getting a free dieline',
      },
    },
    {
      heading: 'Ask what happens at each approval',
      body: [
        'Two approvals carry the risk on any packaging job: the dieline fixes the structure, the proof fixes color and content. A supplier should be able to tell you exactly what each one commits you to, and what changes after each one cost.',
        'If those stages are vague, the process is vague, and the disagreement happens after production instead of before it.',
      ],
      link: {
        text: 'The full sequence is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'Ask how board is specified',
      body: [
        'The useful answer is against load — the weight of a full assortment relative to the unsupported base span, and how the display travels. The unhelpful answer is by category, as though cosmetics always take boxboard and food always takes corrugated.',
        'Ask specifically what happens when the display sits loaded for a week. Paperboard fails by creep rather than sudden collapse, and a supplier who has not considered that is specifying for a bench test rather than a shop floor.',
      ],
    },
    {
      heading: 'Ask what they will not do',
      body: [
        'A supplier who claims to check regulatory compliance, guarantee delivery dates they do not control, or hold certifications they cannot produce is telling you something about how the rest of the relationship will go.',
        'We do not review artwork for compliance in any market, we do not publish transit times that have not been confirmed, and we do not display certification marks we cannot evidence.',
      ],
    },
    {
      heading: 'Ask about reorders',
      body: [
        'Most of the cost and elapsed time on a first order is development: dieline, proofing, approvals. Once those are approved and on file, a reorder should be a print job.',
        'Establish who keeps the tooling, whether it is maintained for reorders, and what a repeat run actually involves. A supplier that treats every reorder as a new development is charging you for the same work twice.',
      ],
    },
    {
      heading: 'Ask for a sample before volume',
      body: [
        'Any manufacturer should be willing to produce a sample before a full run of a new structure. What a sample reveals — whether your product genuinely fits, whether the base holds when loaded, whether store staff can erect it — is not visible on a screen.',
        'Keep it loaded and standing for longer than feels necessary. That is the test that predicts how the display behaves in a store.',
      ],
      link: {
        text: 'What a sample can and cannot tell you is covered under',
        href: '/sample-request/',
        anchor: 'requesting a sample',
      },
    },
  ],

  faqs: [
    { question: 'Do you manufacture the boxes yourselves?', answer: 'Details of production facilities, equipment, and capacity are pending confirmation by the site owner and are not published here. We produce custom display packaging to order and ship across all fifty states — the specifics of how will be stated once verified.' },
    { question: 'What should I ask any display box manufacturer?', answer: 'Whether a dieline is drawn before you commit, what each approval stage fixes, how board is specified, what they will not do, how reorders work, and whether you can have a sample first. The answers separate suppliers more than price does.' },
    { question: 'How should a manufacturer specify board?', answer: 'Against load — the weight of a full assortment relative to the unsupported base span, and how the display travels. Specifying by product category is a shortcut that produces displays which pass a bench test and bow in a store.' },
    { question: 'Why does the dieline matter so much?', answer: 'Because most packaging problems are dimensional, and they surface either when the first sample arrives or when the full run does. A dieline drawn around your real product moves that discovery to where fixing it is free.' },
    { question: 'What should a reorder cost compared to a first order?', answer: 'Less, and noticeably. Development — dieline, proofing, approvals — dominates a first order. Once those are on file a reorder should be a print job. A supplier treating each reorder as new development is charging twice for the same work.' },
    { question: 'Do you hold certifications?', answer: 'We are not publishing certification marks we cannot evidence. If your job requires certified stock, documented inspection, or a specific standard, raise it at quoting stage and we will confirm what can be evidenced for that job.' },
    { question: 'Can you guarantee a delivery date?', answer: 'We do not publish transit times or guarantees that have not been confirmed. If your order depends on a fixed in-store date, tell us when you request a quote and we will say whether it is achievable before you commit.' },
    { question: 'Do you offer low minimum orders?', answer: 'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.' },
  ],

  relatedProducts: ['custom-display-boxes', 'corrugated-display-boxes', 'cardboard-display-boxes', 'retail-display-boxes'],

  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
    { label: 'Wholesale display boxes', href: '/wholesale-display-boxes/' },
    { label: 'About us', href: '/about-us/' },
  ],

  cta: {
    heading: 'Comparing suppliers?',
    body: 'Send the same brief to each and compare what they ask you before quoting. That tells you more than the numbers do.',
  },

  updated: '2026-07-19',
};

export default content;
