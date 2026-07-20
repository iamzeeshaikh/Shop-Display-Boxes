import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'dieline-templates',
  kind: 'commercial',

  metaTitle: 'Dieline Templates | Standard Display Box Structures',
  metaDescription:
    'Standard dieline templates for common display box structures, how to use them correctly, and when a custom dieline is needed.',

  h1: 'Dieline Templates',

  intro:
    'Standard templates suit standard structures at standard sizes. Display packaging is usually neither, so this page covers when a template is genuinely the right route and when it will waste your time.',

  sections: [
    {
      heading: 'When a template works',
      body: [
        'If your product fits a common structure at a common size — a straight tuck carton, a shallow tray, a simple counter display — a template gets you designing immediately with no wait.',
        'It also helps when you are exploring layout before committing to a specification, since you can place artwork roughly and see how much room the panels actually give you.',
      ],
    },
    {
      heading: 'When it does not',
      body: [
        'Any display holding product in cavities needs a dieline drawn around that product. A template cannot know the cap flare on your bottle or the drop length of your earring, and those are the dimensions that decide whether the thing works.',
        'Templates are also drawn for a specific board caliper. Using one at a different thickness means the allowances are wrong, the folds do not sit where they should, and a tuck flap either buckles or will not hold.',
      ],
      points: [
        'Anything with a cavity insert — needs the real product',
        'Any structure at a non-standard size',
        'Any change of board caliper from what the template assumes',
        'Retailer-specified footprints, which rarely match a standard size',
      ],
    },
    {
      heading: 'Using a template correctly',
      body: [
        'Keep the layers intact. Cut, crease, and bleed are on separate layers for a reason: it is how a designer knows what folds versus what gets cut, and how we verify alignment before press.',
        'Work at 100% scale and never rescale the template to fit a page. A dieline scaled by even a few percent produces a box that does not match its own drawing.',
      ],
      link: {
        text: 'Full file requirements are listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'The custom route is free anyway',
      body: [
        'We draw a dieline around your product before you commit to anything, at no charge. Given that, the case for forcing a product into a standard template is weaker than it first appears.',
        'The honest advice is to use a template if you want to start sketching today, and to request a custom dieline in parallel so the artwork gets placed on something drawn for your actual product.',
      ],
      link: {
        text: 'Custom dielines are drawn before you order — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'Requesting a template',
      body: [
        'Tell us the structure and the approximate size and we will send the appropriate template with the board caliper it was drawn for clearly noted.',
        'If your requirement turns out not to match a standard structure, we will say so rather than sending something that will need reworking.',
      ],
    },
  ],

  faqs: [
    { question: 'When should I use a template rather than a custom dieline?', answer: 'When your product fits a common structure at a common size and you want to start designing immediately. For anything with a cavity insert, a non-standard size, or a retailer-specified footprint, a custom dieline is the right route.' },
    { question: 'Why can a template not work for cavity inserts?', answer: 'Because it cannot know your product. A cap flare, a tapered base, a wrap label, or the drop length of an earring are the dimensions that decide whether a cavity accepts the item, and no template accounts for them.' },
    { question: 'Does board thickness affect a template?', answer: 'Yes, and it is the most common mistake. Templates are drawn for a specific caliper. Used at a different thickness the allowances are wrong, folds sit incorrectly, and a tuck flap will either buckle or fail to hold.' },
    { question: 'Can I rescale a template to fit my product?', answer: 'No. A dieline scaled even a few percent produces a box that does not match its own drawing — the allowances, tuck tolerances, and crease positions do not scale proportionally with the panels.' },
    { question: 'What do I need to keep intact in the file?', answer: 'The layers. Cut, crease, and bleed are separated so a designer knows what folds versus what is cut, and so we can verify alignment before press. Flattening the file removes the information we check against.' },
    { question: 'If custom dielines are free, why use a template at all?', answer: 'Speed. A template lets you start sketching today. The sensible approach is to use one for early layout while requesting a custom dieline in parallel, then place final artwork on the drawing made for your actual product.' },
    { question: 'How do I get the right template?', answer: 'Tell us the structure and approximate size. We will send the appropriate template with its board caliper noted — or tell you if your requirement does not match a standard structure, rather than sending something that needs reworking.' },
    { question: 'Can I use your template with another printer?', answer: 'The file is yours. Be aware it is drawn for a specific board specification, so another supplier may need to adjust the allowances to their own stock before it produces correctly.' },
  ],

  relatedPages: [
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Free design support', href: '/free-design-support/' },
    { label: 'Custom box sizes', href: '/custom-box-sizes/' },
  ],

  cta: {
    heading: 'Not sure a template fits?',
    body: 'Send the product and the structure you have in mind. We will tell you whether a standard template covers it.',
  },

  updated: '2026-07-19',
};

export default content;
