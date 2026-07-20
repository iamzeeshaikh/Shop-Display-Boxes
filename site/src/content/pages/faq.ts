import type { PageContent } from '../../data/page-content';

/**
 * Site-wide FAQ. Deliberately covers the cross-cutting questions — ordering,
 * artwork, materials, pricing, shipping — rather than repeating the
 * product-specific FAQs that live on each product page. Duplicating those here
 * would create competing pages for the same queries.
 */
const content: PageContent = {
  slug: 'faq',
  kind: 'commercial',

  metaTitle: 'FAQ | Custom Display Box Questions Answered Plainly',
  metaDescription:
    'Answers on ordering, dielines, artwork, materials, pricing, samples, and shipping for custom printed display packaging boxes.',

  h1: 'Frequently Asked Questions',

  intro:
    'General questions about ordering, artwork, materials, and pricing. Questions specific to a particular box style are answered on that product page, where the answers can be specific enough to be useful.',

  sections: [
    {
      heading: 'If your question is about a particular style',
      body: [
        'Each product page carries its own set of questions, answered for that structure — cavity tolerance on cosmetic displays, flute selection on corrugated, perforation strength on shelf-ready cases.',
        'Those answers are more specific than anything a general FAQ can be, so it is worth starting there if you already know the format you need.',
      ],
      link: {
        text: 'If you are not sure which format applies, start with',
        href: '/display-box-packaging/',
        anchor: 'the display packaging overview',
      },
    },
  ],

  faqs: [
    { question: 'What is your minimum order quantity?', answer: 'Minimum order is 100 units. Digital printing removes plate setup, which is what makes a run that short viable — expect a higher per-piece price at 100 than at volume, because fixed setup costs are spread across fewer pieces.' },
    { question: 'How much do custom display boxes cost?', answer: 'Product pages carry a starting price of $0.30 per piece for qualifying large-volume orders. That is a genuine starting point rather than a fixed rate: smaller runs, specialty board, added inserts, and premium finishes all price above it.' },
    { question: 'Why does a smaller order not cost proportionally less?', answer: 'Because setup costs — dieline, tooling, plates, press make-ready — are fixed and spread across the run. Halving a quantity does not halve the invoice, and at small volumes the change can be marginal.' },
    { question: 'Do you charge for dielines?', answer: 'No. We draw a dieline around your product before you commit to anything, supplied as a layered vector file with cut, crease, and bleed on separate layers. It is yours to keep.' },
    { question: 'What artwork format do you need?', answer: 'Print-ready vector — PDF, AI, or EPS — with fonts outlined or embedded, at 100% scale, placed images at 300 DPI at final size, and 3 mm bleed. Place artwork on the dieline we send rather than designing to a rectangle.' },
    { question: 'Can you design my artwork?', answer: 'No. We are not a branding or graphic design studio. We draw the structure, check your file against it, and print what you supply. Creating the artwork itself is a designer’s job and we would rather say so than do it badly.' },
    { question: 'Do you check that my labeling is compliant?', answer: 'No, in any market. We print exactly the artwork supplied including ingredient lists, warnings, safety marks, and claims. Responsibility for accuracy and regulatory compliance stays with you.' },
    { question: 'How do I know whether I need cardboard or corrugated?', answer: 'Load the display to its intended assortment, lift it by one edge, and watch the base. If it bows, you need corrugated. Repeat the test after several days loaded — paperboard fails gradually, so day-one results mislead.' },
    { question: 'Can I get a sample before ordering?', answer: 'Samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted alongside your job rather than listed as a flat fee. On a new structure it costs a fraction of a full run and is the only reliable way to find out that a product does not fit before the run is made.' },
    { question: 'How long does production take?', answer: 'Standard production is 5–7 business days after proof approval. That clock starts at approval, not at enquiry — the dieline and proof stages come first, and how fast they go depends partly on how quickly approvals come back from your side.' },
    { question: 'Where do you ship?', answer: 'To business addresses across all fifty US states. We do not maintain premises or collection points in individual states or cities — everything is shipped rather than collected.' },
    { question: 'How is freight calculated?', answer: 'On volume rather than weight. Display packaging is light and bulky, so you are effectively paying for the space a consignment occupies. This is why flat-packing changes the delivered cost so substantially.' },
    { question: 'What happens if the delivered goods do not match the proof?', answer: 'That is on us — production is checked against the approved proof at each stage precisely so it does not happen. If the approved proof itself contained an error, a reprint is a new job, which is why proof approval matters.' },
    { question: 'Are reorders cheaper than first orders?', answer: 'Yes. Development — dieline, proofing, approvals — dominates a first order. Once those are approved and on file, tooling is retained and a reorder is a print job rather than a new development.' },
    { question: 'Do you have customer reviews?', answer: 'Not yet, and we are not publishing any until we have verified ones from real customers. There are no star ratings anywhere on this site, and none in its structured data either.' },
    { question: 'Can I order boxes that are recyclable?', answer: 'Yes. The decision that matters most is the coating: uncoated and aqueous-coated board stays in the paper recycling stream, while a plastic film laminate takes it out in most municipalities. Tell us if recyclability is a requirement.' },
  ],

  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'What custom display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],

  cta: {
    heading: 'Question not answered here?',
    body: 'Send it with your product and quantity. Most questions about display packaging depend on those two.',
    buttonLabel: 'Get in touch',
    buttonHref: '/contact-us/',
  },

  updated: '2026-07-19',
};

export default content;
