import type { PageContent } from '../../../data/page-content';

/**
 * NOTE ON HONESTY: cannabis packaging regulation is state-by-state, changes
 * frequently, and carries legal consequence. This page describes packaging
 * properties and structural options only. It gives no compliance guidance and
 * makes no claim that any structure is compliant anywhere.
 */
const content: PageContent = {
  slug: 'cannabis-display-packaging',
  kind: 'industry',

  metaTitle: 'Cannabis Display Packaging | Dispensary Retail Boxes',
  metaDescription:
    'Display packaging for cannabis retail: panel space for state-mandated copy, opaque requirements, and dispensary counter formats.',

  h1: 'Cannabis Display Packaging',

  intro:
    'Cannabis packaging carries more mandated content, and more variation between jurisdictions, than almost any other retail category. What follows covers packaging properties and structures — not compliance guidance, which has to come from your own advisers.',

  sections: [
    {
      heading: 'We do not advise on compliance',
      body: [
        'Requirements differ by state, change frequently, and carry legal consequence. Warning content, symbol size and placement, opacity, child resistance, and permitted imagery are all regulated, and all vary.',
        'We print exactly the artwork you supply and build the structure you specify. We do not review artwork against any jurisdiction, and nothing on this site should be read as confirmation that a design meets a requirement.',
      ],
    },
    {
      heading: 'Establish requirements before the dieline',
      body: [
        'Mandated warnings and symbols claim panel area before any brand design begins, and in several states the required proportions are large enough to reshape the whole layout.',
        'Get those requirements confirmed by your compliance adviser first. Designing a face and discovering the requirement afterward means cropping a design badly, and it is the most expensive sequence available.',
      ],
      link: {
        text: 'How mandated copy interacts with panel layout is also covered under',
        href: '/vape-display-packaging/',
        anchor: 'vape display packaging',
      },
    },
    {
      heading: 'Opacity and visibility',
      body: [
        'Several jurisdictions require that product is not visible through the packaging, which rules out the windows and open displays most retail categories rely on.',
        'Where that applies, the display has to sell without showing the product — printed representation, descriptive copy, and structure carry the whole job. It is a genuine design constraint, not a preference.',
      ],
    },
    {
      heading: 'Child-resistant closures',
      body: [
        'Where child-resistant packaging is required, that is a certified mechanical specification rather than a structural preference, and it usually involves a component beyond plain board.',
        'A paperboard display box does not confer child resistance. If your product requires it, the certified closure or container is a separate specification, and the display is built around it.',
      ],
    },
    {
      heading: 'Dispensary retail environments',
      body: [
        'Dispensary retail is typically counter-led and staff-mediated, with product often behind the counter rather than open on shelves. That changes what a display is doing: it may be presenting to staff and to a customer at a counter rather than competing in an aisle.',
        'Counter footprint is usually tight, and the viewing angle is steep. A narrow, stepped display generally earns space more easily than a wide flat one.',
      ],
      link: {
        text: 'Counter footprint and sightlines are covered on the',
        href: '/counter-display-boxes/',
        anchor: 'counter display boxes page',
      },
    },
    {
      heading: 'Materials',
      body: [
        'Folding boxboard handles most counter formats. Glass jars and heavier containers move the specification to E-flute corrugated, litho-laminated where print quality matters.',
        'Where opacity is required, board thickness and print coverage both contribute, and an uncoated light stock may not achieve it on its own.',
      ],
    },
    {
      heading: 'Reprints and changing rules',
      body: [
        'Regulations in this category change, sometimes with short notice, and packaging that was compliant last year may not be this year.',
        'That argues against very long runs and in favor of structures where the printed element can be updated independently — a sleeve or a separately printed panel rather than an entirely retooled unit.',
      ],
    },
  ],

  faqs: [
    { question: 'Can you tell me what my cannabis packaging needs to say?', answer: 'No. Requirements vary by state, change frequently, and carry legal consequence. We print exactly the artwork you supply and build the structure you specify, but we do not review artwork against any jurisdiction. That has to come from your compliance adviser.' },
    { question: 'When should I establish the regulatory requirements?', answer: 'Before the dieline is drawn. Mandated warnings and symbols claim panel area first, and in several states the required proportions reshape the whole layout. Designing the face first and discovering the requirement afterward is the expensive sequence.' },
    { question: 'My state requires the product not be visible. What are my options?', answer: 'The display has to sell without showing the product, so printed representation, descriptive copy, and structure carry the job that a window normally does. It rules out the open formats most retail categories rely on.' },
    { question: 'Does a cardboard box make packaging child-resistant?', answer: 'No. Child resistance is a certified mechanical specification, usually involving a component beyond plain board. If your product requires it, that closure or container is a separate specification and the display is built around it.' },
    { question: 'What footprint works in a dispensary?', answer: 'Narrow and stepped rather than wide and flat. Dispensary retail is typically counter-led with tight space and a steep viewing angle, so building up earns space more easily than building out.' },
    { question: 'What board should cannabis packaging use?', answer: 'Folding boxboard for most counter formats. Glass jars and heavier containers move it to E-flute corrugated, litho-laminated where print quality matters. Where opacity is required, board thickness and print coverage both contribute.' },
    { question: 'Should I order long runs to reduce cost?', answer: 'With caution in this category. Regulations change, sometimes at short notice, and packaging compliant last year may not be this year. Structures where the printed element updates independently — a sleeve or separate panel — reduce that exposure.' },
    { question: 'Can you produce packaging for any state?', answer: 'We produce to the specification and artwork you supply and ship across the United States. Whether that specification satisfies a particular state is a question for your compliance adviser, not something we assess or warrant.' },
    { question: 'Do you keep dielines for reorders?', answer: 'Yes. Once a dieline and proof are approved and on file, a reorder is a print job. That matters more here than elsewhere, because artwork updates driven by regulatory change are common and you do not want to retool for each one.' },
  ],

  relatedProducts: ['counter-display-boxes', 'custom-display-boxes', 'cardboard-display-boxes', 'display-gift-boxes'],

  relatedPages: [
    { label: 'Vape display packaging', href: '/vape-display-packaging/' },
    { label: 'Pharmaceutical display packaging', href: '/pharmaceutical-display-packaging/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Box materials', href: '/box-materials/' },
  ],

  cta: {
    heading: 'Have your requirements confirmed?',
    body: 'Send the mandated panel requirements along with your product and we will draw the dieline around both.',
  },

  updated: '2026-07-19',
};

export default content;
