import type { PageContent } from '../../../data/page-content';

/**
 * NOTE ON HONESTY: nicotine product packaging is regulated and requirements vary
 * by jurisdiction. This page covers packaging properties only and gives no
 * compliance guidance.
 */
const content: PageContent = {
  slug: 'vape-display-packaging',
  kind: 'industry',

  metaTitle: 'Vape Display Packaging | Counter Units for Vape Retail',
  metaDescription:
    'Display packaging for vape retail: warning copy panel space, device and e-liquid stability, and crowded counter footprints.',

  h1: 'Vape Display Packaging',

  intro:
    'Vape retail packs a lot of mandated content onto small panels, in shops where counter space is already contested by hardware, accessories, and e-liquid. Panel planning and footprint are the two constraints that shape everything.',

  sections: [
    {
      heading: 'Warning copy is not negotiable panel space',
      body: [
        'Nicotine-containing products carry mandatory health warnings, and in many jurisdictions the content, size, and placement are specified. That area is unavailable for brand design.',
        'Confirm the requirement before the dieline is drawn. Designing the face first and cropping it later to make room is the most common and most expensive sequence in this category.',
      ],
    },
    {
      heading: 'We do not advise on compliance',
      body: [
        'Requirements differ by jurisdiction and change. We print exactly the artwork supplied, including warnings and any age-restriction statements, and we build the structure specified.',
        'We do not review artwork against the rules of any market, and nothing here should be read as confirmation that a design meets a requirement.',
      ],
    },
    {
      heading: 'Small units with awkward proportions',
      body: [
        'E-liquid bottles are narrow with a child-resistant cap often wider than the body, giving a high center of gravity on a small footprint. Devices and pods vary widely in shape across a range.',
        'Cavity inserts sized to the body with clearance for the cap flare hold bottles upright. Measure from a physical sample — the cap is usually the widest point and the dimension most often omitted from a spec sheet.',
      ],
      link: {
        text: 'Structures built around that constraint are covered on the',
        href: '/e-juice-display-boxes/',
        anchor: 'e-juice display boxes page',
      },
    },
    {
      heading: 'Flavor and variant identification',
      body: [
        'This category sells on flavor and strength, and shoppers compare across a range. If those details appear only on the bottle labels, a display holding a dozen variants forces the shopper to pick up each one.',
        'Printing flavor and strength identification on the display — on dividers or along the front panel — is the single change that most improves how a multi-variant display performs.',
      ],
    },
    {
      heading: 'Counter footprint',
      body: [
        'Vape counters carry hardware, accessories, coils, and e-liquid, all competing for the same space. A wide display holding a full range is frequently refused.',
        'A narrow stepped unit that grows upward rather than outward generally earns placement more easily, and the steep counter viewing angle favors tiers anyway.',
      ],
      link: {
        text: 'How footprint gets negotiated is covered on the',
        href: '/counter-display-boxes/',
        anchor: 'counter display boxes page',
      },
    },
    {
      heading: 'Leaks and residue',
      body: [
        'E-liquid leaks. Caps get opened by curious shoppers and not always replaced properly, and residue collects in the base of the display.',
        'A coated or laminated inner surface prevents that soaking into the board, and a replaceable base pad means a leak marks something disposable instead of the printed structure. Design for it rather than hoping.',
      ],
    },
    {
      heading: 'Reprints and regulatory change',
      body: [
        'Requirements in this category change, and packaging compliant when printed may need updating. That argues against very long runs and in favor of structures where the printed element can be replaced independently.',
        'A separately printed sleeve or header keeps the structural tooling intact when only the copy has to change.',
      ],
    },
  ],

  faqs: [
    { question: 'Do you advise on vape packaging compliance?', answer: 'No. Requirements differ by jurisdiction and change. We print exactly the artwork supplied including warnings and age-restriction statements, and build the structure specified, but we do not review artwork against any market rules.' },
    { question: 'How much panel space will the warning take?', answer: 'It depends on your jurisdiction, and in many the requirement is expressed as a proportion of the panel. Confirm it before the dieline is drawn — designing the face first and cropping it afterward is the expensive sequence here.' },
    { question: 'Why do e-liquid bottles tip over in displays?', answer: 'They are narrow with a child-resistant cap often wider than the body, giving a high center of gravity on a small footprint. Cavity inserts sized to the body with clearance for the cap flare hold them upright.' },
    { question: 'What dimension gets missed most often?', answer: 'The cap. It is usually the widest point of the unit and the one most often left off a spec sheet, so a cavity cut to the bottle body alone will not accept the bottle. Send a physical sample instead of dimensions.' },
    { question: 'How do I make a multi-flavor range shoppable?', answer: 'Print flavor and strength identification on the display itself, on dividers or along the front panel. Without it a shopper has to lift each bottle to read what it is, and most will not work through a dozen.' },
    { question: 'What footprint works on a vape counter?', answer: 'Narrow and stepped rather than wide. Vape counters already carry hardware, accessories, and coils competing for space, so a display that grows upward earns placement more easily than one that spreads out.' },
    { question: 'E-liquid has leaked into my displays. What prevents it?', answer: 'A coated or laminated inner surface stops it soaking into the board, plus a replaceable base pad so a leak marks something disposable rather than the printed structure. Leaks are routine in this category — design for them.' },
    { question: 'Should I order long runs to reduce unit cost?', answer: 'Cautiously. Requirements change, and packaging compliant when printed may need updating. A separately printed sleeve or header lets you replace copy without retooling the structure, which limits the exposure.' },
    { question: 'Can the display hold devices and e-liquid together?', answer: 'Yes, usually with separate tiers or differently sized cavities, since devices and bottles have very different proportions. Send a sample of each format rather than sizing everything to the largest item.' },
  ],

  relatedProducts: ['e-juice-display-boxes', 'counter-display-boxes', 'custom-display-boxes', 'cardboard-counter-display-units'],

  relatedPages: [
    { label: 'Cannabis display packaging', href: '/cannabis-display-packaging/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Counter display boxes', href: '/counter-display-boxes/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
  ],

  cta: {
    heading: 'Have your warning requirements confirmed?',
    body: 'Send them with a bottle from your range. The panel layout gets planned around the mandated area first.',
  },

  updated: '2026-07-19',
};

export default content;
