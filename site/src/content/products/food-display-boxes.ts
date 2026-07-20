import type { ProductContent } from '../../data/product-content';

/** Intent: INDUSTRY. Governing constraint is food-contact compliance. */
const content: ProductContent = {
  slug: 'food-display-boxes',

  metaTitle: 'Food Display Boxes | Food-Grade Board & Coatings',
  metaDescription:
    'Food display boxes in food-grade board with compliant coatings and grease barriers, for direct and indirect food contact.',

  h1: 'Food Display Boxes',

  summary:
    'Food packaging divides sharply at one question: does the product touch the board? Direct contact brings material compliance, migration limits, and grease barriers into scope. Indirect contact — where the food is already wrapped — is a far simpler specification.',

  imageAlts: [
    { file: 'food-display-boxes-1.png', alt: 'Printed food display box holding wrapped snack items in rows' },
    { file: 'food-display-boxes-2.png', alt: 'Food display tray with a grease-resistant inner liner' },
    { file: 'food-display-boxes-3.png', alt: 'Counter display box holding individually wrapped confectionery' },
    { file: 'food-display-boxes-4.png', alt: 'Kraft food display box with a die-cut front opening' },
    { file: 'food-display-boxes-5.png', alt: 'Food display box shown open with dividers separating product rows' },
    { file: 'food-display-boxes-6.png', alt: 'Printed food display holding bagged snacks upright' },
    { file: 'food-display-boxes-7.png', alt: 'Food display box with a printed header panel above the product well' },
  ],

  uses: [
    'Wrapped snacks and confectionery in counter displays',
    'Bakery items in trays with grease-resistant liners',
    'Single-serve and impulse food at point of sale',
    'Multipack food assortments presented as one unit',
    'Shelf-ready cases for grocery and convenience supply',
  ],

  industries: [
    'Packaged snack and confectionery brands',
    'Bakery and patisserie retail',
    'Convenience and forecourt food suppliers',
    'Specialty and gourmet food producers',
  ],

  sections: [
    {
      heading: 'Direct against indirect contact',
      body: [
        'If the food touches the board, the board and every coating on it must be suitable for food contact, and that governs the whole material specification. If the food is already sealed in its own wrapper, the display is secondary packaging and the requirements relax considerably.',
        'State which applies when you request a quote. It is the single piece of information that most changes the specification, and it cannot be corrected after a run has been printed.',
      ],
      points: [
        'Direct contact — food-grade board, compliant coatings and inks',
        'Indirect contact — display is secondary packaging, standard board acceptable',
        'Partial wraps and open bakery items count as direct contact',
      ],
    },
    {
      heading: 'Grease and moisture barriers',
      body: [
        'Fats and oils migrate into uncoated board and produce translucent staining. On a bakery or fried product this happens within hours, and a greasy display looks unappetizing well before the product is unsellable.',
        'Greaseproof coatings and barrier boards resist it while remaining repulpable. Traditional plastic-based barriers work absolutely but take the pack out of the paper stream. Which is right depends on how greasy the product is and whether recyclability is specified.',
      ],
      link: {
        text: 'Barrier and coating options are set out under',
        href: '/finishes-and-add-ons/',
        anchor: 'finishes and add-ons',
      },
    },
    {
      heading: 'Recycled content and food contact',
      body: [
        'Recycled board carries a complication in direct food contact, because contaminants from the recovered fiber stream can migrate into food. Where recycled content is required alongside direct contact, the usual solution is a functional barrier layer between the recycled fibers and the product.',
        'For indirect contact — wrapped product — recycled board raises none of these questions and is the straightforward choice.',
      ],
    },
    {
      heading: 'Structures for food retail',
      body: [
        'Food moves fast and gets restocked constantly, so structures that refill easily outperform ones that present beautifully. An open tray or a low-front counter display is refilled in seconds; a closed box with a small opening is not.',
        'Shelf-ready formats dominate grocery supply, where the case opens and goes onto the shelf without unpacking. If you supply a chain, their specification governs.',
      ],
      link: {
        text: 'Compliance requirements for that format are on the',
        href: '/shelf-ready-display-boxes/',
        anchor: 'shelf-ready display boxes page',
      },
    },
    {
      heading: 'Labeling and regulatory copy',
      body: [
        'Food packaging carries mandatory information, and which of it belongs on a display rather than on the unit depends on whether the display is the pack a consumer takes away.',
        'We print the artwork you supply, including regulatory copy. Responsibility for its accuracy and for compliance in your market remains with you — we do not review artwork for regulatory compliance.',
      ],
    },
    {
      heading: 'Ambient conditions',
      body: [
        'Chilled and humid environments soften board and can delaminate coatings not specified for them. A display designed for an ambient shelf will not necessarily hold up in a chiller cabinet.',
        'If the display goes anywhere refrigerated or humid, say so at quoting stage. It changes the board and coating specification, not just the finish.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Food-grade folding boxboard, barrier board, E and B flute corrugated' },
    { label: 'Custom dimensions', value: 'Custom — built to your product and shelf format' },
    { label: 'Board thickness', value: 'Depends on order specifications' },
    { label: 'Flute type', value: 'E or B flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital, flexo on corrugated' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors; food-compliant ink systems' },
    { label: 'Coatings', value: 'Greaseproof and barrier coatings, aqueous; compliant grades for direct contact' },
    { label: 'Finishes', value: 'Limited on direct-contact packs — specified per job' },
    { label: 'Add-ons', value: 'Header cards, dispensing openings, tear perforations, windows' },
    { label: 'Inserts', value: 'Dividers, grease-resistant liners, base pads' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    { question: 'What is the difference between direct and indirect food contact?', answer: 'Direct means the food touches the board, which brings food-grade material, compliant coatings and inks, and migration limits into scope. Indirect means the food is already sealed in its own wrapper and the display is secondary packaging, with far simpler requirements.' },
    { question: 'Do bakery items count as direct contact?', answer: 'Almost always yes, since they are usually unwrapped or only partly wrapped. Partial wraps and paper bands leave exposed faces in contact with the board, so treat them as direct contact rather than assuming the wrap is sufficient.' },
    { question: 'How do I stop grease staining the display?', answer: 'A greaseproof coating or a barrier board. Fats migrate into uncoated board within hours on fried or buttery products. Repulpable greaseproof coatings resist it while keeping the pack recyclable; plastic-based barriers are more absolute but leave the paper stream.' },
    { question: 'Can I use recycled board for food packaging?', answer: 'Freely for wrapped product. For direct contact it is more complicated, because contaminants from the recovered fiber stream can migrate into food — the usual solution is a functional barrier layer between the recycled fibers and the product.' },
    { question: 'Which display structure works best for food retail?', answer: 'Whichever refills fastest. Food turns over quickly and gets restocked constantly, so an open tray or low-front counter display outperforms a closed box with a small opening, regardless of how much better the closed one photographs.' },
    { question: 'Will the display work in a chiller?', answer: 'Only if specified for it. Chilled and humid environments soften board and can delaminate coatings not designed for them. Tell us at quoting stage — it changes the board and coating specification, not just the finish.' },
    { question: 'Do you check that my labeling is compliant?', answer: 'No. We print the artwork you supply, including regulatory and ingredient copy, but responsibility for its accuracy and for compliance in your market stays with you. We do not review artwork for regulatory compliance.' },
    { question: 'What board should a food display use?', answer: 'Food-grade folding boxboard for counter formats, corrugated where the case ships and stacks. If the product touches the board, the grade is dictated by contact requirements rather than by structure, so start there.' },
    { question: 'Can food display boxes be printed inside?', answer: 'Yes, with compliant inks where there is direct contact. For wrapped product there is no restriction. Printing the inner base is worth doing on open trays, since it stays visible as stock depletes.' },
    { question: 'Do I need shelf-ready packaging for grocery?', answer: 'If the chain requires it, yes, and increasingly they do. Their specification governs the case dimensions, opening method, and how much product face must be visible. Design to the specification first and to your preferences second.' },
    { question: 'How do I stop the display looking empty as stock sells?', answer: 'A dispensing structure where units are drawn from a front opening keeps its appearance as stock depletes, unlike an open tray which visibly empties. For fast-moving impulse food this is usually worth the extra structural complexity.' },
    { question: 'Can you supply both the food packaging and the display?', answer: 'Yes, and designing them together avoids the common fit problem where the unit pack and the display cavity were dimensioned separately and never quite reconcile.' },
  ],

  related: ['display-trays', 'shelf-ready-display-boxes', 'counter-display-boxes', 'retail-display-boxes'],
  updated: '2026-07-19',
};

export default content;
