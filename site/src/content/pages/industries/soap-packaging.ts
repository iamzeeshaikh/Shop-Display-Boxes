import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'soap-packaging',
  kind: 'industry',

  metaTitle: 'Soap Packaging | Display Boxes for Handmade Soap Bars',
  metaDescription:
    'Display packaging for soap makers: oil migration and barrier coatings, open presentation for scent, and market stall durability.',

  h1: 'Soap Display Packaging',

  intro:
    'Soap presents a problem most categories do not: the product actively degrades its own packaging. Oils migrate into board and stain it permanently, and the uncoated kraft look this market prefers is exactly the surface that stains fastest.',

  sections: [
    {
      heading: 'Oil migration',
      body: [
        'Soap is largely fats and oils, and paperboard absorbs them. The result is translucent staining that looks like water damage and does not come out, starting where a bar rests and spreading outward.',
        'Speed depends on formulation. High-superfat and freshly cured bars mark within days; harder, well-cured bars can take weeks. A display may hold stock for months, so design for the worst case in your range rather than the average.',
      ],
      link: {
        text: 'Barrier options and the removable liner approach are covered on the',
        href: '/soap-display-boxes/',
        anchor: 'soap display boxes page',
      },
    },
    {
      heading: 'The tension in this category',
      body: [
        'Handmade soap buyers respond to uncoated kraft and restrained printing — it reads as authentic. A film laminate would solve the staining entirely and would also undercut the positioning the packaging exists to support.',
        'The usual resolution is a replaceable die-cut liner in the base. The liner absorbs the staining and is swapped at restock, leaving the printed structure clean and uncoated where it shows.',
      ],
    },
    {
      heading: 'Shoppers pick soap up',
      body: [
        'Soap is bought partly by smell, so bars are handled and returned constantly. That argues for open presentation — a tray or low-front display rather than a closed box with a window.',
        'It also means the arrangement gets disturbed through a day of handling. Individual cavities or dividers keep it tidy in a way a single open well does not.',
      ],
    },
    {
      heading: 'Multi-scent ranges',
      body: [
        'Most soap makers sell a range, and shoppers compare across it. If scent names appear only on the bar wraps, a display holding eight varieties in one open well becomes mixed within a day and the comparison stops happening.',
        'Print scent identification on the display itself — on dividers or along the front panel — and give each variety its own column.',
      ],
    },
    {
      heading: 'Weight',
      body: [
        'A cured bar is denser than it looks. Folding boxboard handles small counter assortments; a display holding two or three dozen bars, or stacking them, wants E-flute corrugated underneath.',
        'The same gradual settling that affects other heavy categories applies here, just at lower magnitude — the base holds when first filled and sags over the following weeks.',
      ],
    },
    {
      heading: 'Displays that travel',
      body: [
        'Many soap makers sell at markets and craft fairs, where a display is erected and packed down repeatedly. That is a completely different requirement from a display placed once in a store.',
        'For that use, prioritize assembly speed and crease durability over finish. A structure that erects in one motion and folds flat without tearing will outlast a more elaborate one never designed to be handled repeatedly.',
      ],
    },
    {
      heading: 'Sustainability',
      body: [
        'This market notices packaging claims. Uncoated or aqueous-coated kraft keeps the display in the paper recycling stream and matches the positioning most soap brands are working with.',
        'Where a barrier is needed, greaseproof coatings developed for food packaging resist oils while remaining repulpable — worth testing against your own bars, since resistance is not absolute.',
      ],
      link: {
        text: 'Coating and recyclability combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
  ],

  faqs: [
    { question: 'Why is soap staining my display boxes?', answer: 'Oils in the soap are wicking into the board fibers. It appears as translucent marking that looks like water damage and does not come out, starting where a bar rests. Uncoated board in contact with unwrapped soap will always do this — it is a material property, not a defect.' },
    { question: 'How fast does staining appear?', answer: 'It depends on formulation. High-superfat and freshly cured bars can mark within days; harder, well-cured, low-oil bars may take weeks. Since a display can hold stock for months, design for the worst case in your range.' },
    { question: 'I want uncoated kraft but cannot accept staining. What are my options?', answer: 'A replaceable die-cut liner in the base. It absorbs the staining and gets swapped at restock, leaving the printed structure clean and uncoated where it shows. It costs very little and resolves the tension in this category.' },
    { question: 'Do wrapped bars still need a barrier?', answer: 'Usually not, if the wrap is complete and oil-tight. Partial wraps and paper bands leave exposed faces touching the board, so treat those as unwrapped for this purpose.' },
    { question: 'Should the display be open or closed?', answer: 'Open. Soap is bought partly by smell and shoppers pick bars up, so a tray or low-front display outperforms a closed box with a window. Use dividers so the arrangement stays tidy through a day of handling.' },
    { question: 'How do I present several scents so shoppers can compare?', answer: 'Divided cavities with each scent in its own column, and scent names printed on the display rather than only on the bar wraps. In one open well, eight varieties get mixed within a day and the comparison you designed for stops happening.' },
    { question: 'What board should a soap display use?', answer: 'Folding boxboard for small counter assortments. E-flute corrugated once it holds two or three dozen bars or stacks them, because cured soap is denser than it looks and the base will settle under sustained weight.' },
    { question: 'I sell at markets and pack the display down each time. Does that change the design?', answer: 'Considerably. Prioritize assembly speed and crease durability over finish. A display erecting in one motion and folding flat without tearing at the creases will outlast a more elaborate structure never designed for repeated handling.' },
    { question: 'Can you print the individual soap sleeves too?', answer: 'Yes, and designing sleeves and display together is worth doing so both come from the same dimensions. Reconciling them afterward is where fit problems usually originate.' },
  ],

  relatedProducts: ['soap-display-boxes', 'bath-bomb-display-boxes', 'display-trays', 'candle-display-boxes'],

  relatedPages: [
    { label: 'Candle packaging', href: '/candle-packaging/' },
    { label: 'Health and beauty display packaging', href: '/health-and-beauty-display-packaging/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
    { label: 'Sustainability options', href: '/sustainability/' },
  ],

  cta: {
    heading: 'Send a bar from your range',
    body: 'The oiliest formulation you sell is what the barrier has to cope with. We will test against that rather than an average.',
  },

  updated: '2026-07-19',
};

export default content;
