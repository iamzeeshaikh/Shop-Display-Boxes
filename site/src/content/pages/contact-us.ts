import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no phone number, email address, physical address, or opening
 * hours appears here because none has been supplied. The page routes visitors
 * through the forms, which work, and flags the missing details for the owner.
 * ContactPage schema is emitted without contact points until they are verified.
 */
const content: PageContent = {
  slug: 'contact-us',
  kind: 'commercial',

  metaTitle: 'Contact Us | Display Packaging Quotes and Enquiries',
  metaDescription:
    'Contact us about custom display boxes, samples, dielines, or an existing order. Send your details and we will come back to you.',

  h1: 'Contact Us',

  intro:
    'Whatever you need — a quote, a sample, a dieline, or help with an order already in progress — the fastest route is the form that matches it. Each one goes to the same place, but the right form asks the right questions.',

  sections: [
    {
      heading: 'Choose the right route',
      body: [
        'Quotes, samples, and dielines each need different information, which is why they have separate forms. Using the right one avoids a round trip asking for details the form would have collected.',
        'If your question does not fit any of them — a query about an order in progress, an invoice, or something else entirely — use the general contact form and say what it concerns.',
      ],
      points: [
        'Pricing for a specific job — use the quote form',
        'A physical sample before committing — use the sample request',
        'A dieline drawn for your product — use the dieline request',
        'Anything else — use the general contact form',
      ],
      link: {
        text: 'For pricing on a specific specification, go straight to the',
        href: '/request-a-quote/',
        anchor: 'quote form',
      },
    },
    {
      heading: 'What helps us respond usefully',
      body: [
        'The product and the quantity. Almost every question about display packaging depends on those two, and a reply without them tends to be a list of questions rather than an answer.',
        'If a retailer has given you a footprint, a planogram dimension, or a shelf-ready specification, include it. Those are hard constraints and they change what is worth suggesting.',
      ],
    },
    {
      heading: 'Contact details',
      body: [
        'Call (503) 358-0443 or email info@shopdisplayboxes.com. Our registered address is 1639 70th St, Brooklyn, NY 11204.',
        'Enquiries are handled 24/7. That is contact availability rather than a walk-in counter — the Brooklyn address is not a collection point, and production still runs to the stated 5–7 business day schedule from proof approval.',
      ],
    },
  ],

  faqs: [
    { question: 'How quickly will you reply?', answer: 'We aim to come back promptly. We are not publishing a guaranteed response time we have not committed to — if your enquiry is tied to a deadline, say so and we will tell you whether it is achievable.' },
    { question: 'Can I call instead of using a form?', answer: 'Yes — (503) 358-0443, and enquiries are handled 24/7. For anything involving dimensions or quantities, a form usually still gets you a faster and more accurate answer, because it captures the details we would otherwise have to ask for on a second call.' },
    { question: 'Do you have a showroom or trade counter?', answer: 'Our registered address is in Brooklyn, New York, but it is not a published showroom or collection point and we are not going to describe it as one. Orders are produced to specification and shipped to your business address.' },
    { question: 'What information should I include in a general enquiry?', answer: 'What the enquiry concerns, and if it relates to a job, the product and quantity. Those two answer most of the follow-up questions before they are asked.' },
    { question: 'Can I send artwork through the contact form?', answer: 'The quote and dieline forms accept artwork uploads with file type and size validation. For a general enquiry it is usually better to describe what you need first and send files once we know what is relevant.' },
    { question: 'What happens to the information I send?', answer: 'It is used to respond to your enquiry. Details of how it is handled and retained are set out in the privacy policy, which is linked from every form.' },
  ],

  relatedPages: [
    { label: 'Request a quote', href: '/request-a-quote/' },
    { label: 'Request a sample', href: '/sample-request/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'How ordering works', href: '/how-to-order/' },
  ],

  updated: '2026-07-19',
};

export default content;
