import type { ProductContent } from '../../data/product-content';

/**
 * Intent: COMPLIANCE. The buyer has been handed an SRP specification by a
 * grocery or pharmacy chain and needs to meet it. Written around the retailer's
 * five requirements, which is a genuinely different job from the other pages.
 */
const content: ProductContent = {
  slug: 'shelf-ready-display-boxes',

  metaTitle: 'Shelf-Ready Display Boxes | SRP & Retail-Ready Packaging',
  metaDescription:
    'Shelf-ready display boxes built to retailer SRP specifications, covering opening, shelving, identification, and disposal.',

  h1: 'Shelf-Ready Display Boxes',

  summary:
    'Shelf-ready packaging exists to remove store labor. A case arrives, an operator opens it in one action, and it goes onto the shelf as a display without anything being unpacked. Retailers specify it tightly because the labor saving is the whole point, and a case that fails the specification gets unpacked by hand.',

  imageAlts: [
    {
      file: 'shelf-ready-display-boxes-1.png',
      alt: 'Shelf-ready case with the top removed, holding product upright in rows on a shelf',
    },
    {
      file: 'shelf-ready-display-boxes-2.png',
      alt: 'Retail-ready packaging shown with the perforated section partly torn away',
    },
    {
      file: 'shelf-ready-display-boxes-3.png',
      alt: 'Shelf-ready tray printed on the front panel with product visible above the wall',
    },
    {
      file: 'shelf-ready-display-boxes-4.png',
      alt: 'Two shelf-ready cases stacked, showing the closed transit form and the opened display form',
    },
  ],

  uses: [
    'Grocery and pharmacy supply where the chain mandates SRP',
    'High-turnover lines replenished daily by store staff',
    'Cases that must go from pallet to shelf without a stockroom stage',
    'Own-label and branded lines sharing a common shelf format',
    'Categories where facing consistency across a shelf is enforced',
  ],

  industries: [
    'Packaged grocery and ambient food suppliers',
    'Pharmacy and OTC health suppliers',
    'Household and cleaning product manufacturers',
    'Beverage suppliers into multiple retail formats',
  ],

  sections: [
    {
      heading: 'The five requirements',
      body: [
        'Most retailer SRP specifications are built on the same five principles, usually stated in roughly these terms: easy to open, easy to shelf, easy to identify, easy to shop, and easy to dispose of. Each is a testable property rather than a design preference.',
        'Read the specification you have been issued before designing anything. Chains differ in the detail — on perforation type, on how much product face must be visible, on whether a case may be opened with a knife — and those details are where a submission passes or fails.',
      ],
      points: [
        'Easy open — one action, generally without a blade',
        'Easy shelf — fits the shelf depth and height as the retailer measures them',
        'Easy identify — product and variant readable from the front of the case',
        'Easy shop — the shopper can take a unit without disturbing the rest',
        'Easy dispose — flat-packs down, single material stream where possible',
      ],
    },
    {
      heading: 'Getting the opening right',
      body: [
        'The perforation is the single detail that decides whether SRP works in practice. Too strong and the operator reaches for a knife, which defeats the labor saving and frequently damages the product beneath. Too weak and cases open in transit or under pallet compression.',
        'Perforation design is a function of board grade, flute, and the length of the tear. It is also the thing most worth testing physically before a run — a perforation that behaves correctly on a bench sample and fails after a week under a stacked pallet is a common and expensive discovery.',
      ],
    },
    {
      heading: 'Front panel height',
      body: [
        'How much of the case wall remains after opening decides both retention and visibility. A high remaining wall holds product securely and hides it; a low wall shows the product and lets units fall forward as the case empties.',
        'Retailer specifications frequently dictate this directly, expressed as a proportion of product height that must remain visible. Where it is not specified, the workable range keeps enough wall to retain the back rows while leaving the product face readable from a standing shopper’s position.',
      ],
    },
    {
      heading: 'Board and transit strength',
      body: [
        'SRP cases have a harder structural job than either a plain shipper or a plain display, because they have to do both. They travel stacked on a pallet through a distribution network, then hold their shape as an open tray for the life of the facing.',
        'That normally means corrugated, with the flute and wall chosen against stack height rather than against shelf load. The case at the bottom of a full pallet is carrying everything above it, and that is the load that sets the specification.',
      ],
      link: {
        text: 'Flute and wall selection against compression is covered on the',
        href: '/corrugated-display-boxes/',
        anchor: 'corrugated display boxes page',
      },
    },
    {
      heading: 'Printing for identification',
      body: [
        'The identification requirement is functional, not promotional. A store operator moving quickly needs to read the product and variant from the case front while it is still on a pallet, and again once it is on the shelf.',
        'That argues for large, high-contrast variant identification over detailed brand artwork, particularly for ranges where several variants share a design. Distinguishing variants clearly is the most common weakness in SRP artwork and the one that generates the most picking errors.',
      ],
      link: {
        text: 'Print processes available on corrugated are compared in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Disposal and material streams',
      body: [
        'The disposal requirement is about what happens at the back of the store. A case that flat-packs down quickly and goes into a single recycling stream costs the retailer less to handle than one requiring separation.',
        'This is where mixed materials count against you. A plastic window, a laminated finish, or an adhesive label of a different material each moves the case out of a clean paper stream. Where a specification calls for kerbside or single-stream recyclability, an aqueous coating and paper-based components keep it there.',
      ],
      link: {
        text: 'Recyclable material and coating combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'Testing before submission',
      body: [
        'Most chains will want to see a physical sample, and some run a formal assessment against their specification. Submitting an untested case is the slowest route, because a failure means a redesign and a new submission window.',
        'The tests worth running yourself first are the practical ones: open it the way a store operator would, load it and put it on a shelf, and stack it under representative weight for longer than feels necessary.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Single-wall and double-wall corrugated, white or kraft top liner' },
    { label: 'Custom dimensions', value: 'Custom — built to the retailer’s shelf specification' },
    { label: 'Board thickness', value: 'Depends on order specifications — set by stack height' },
    { label: 'Flute type', value: 'B, C, or E flute; double wall where pallet compression requires it' },
    { label: 'Printing methods', value: 'Flexo direct print, litho-lamination, digital for short runs' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, high-contrast variant identification' },
    { label: 'Coatings', value: 'Aqueous or varnish where single-stream recyclability is specified' },
    { label: 'Finishes', value: 'Generally minimal — specifications often restrict laminates' },
    { label: 'Add-ons', value: 'Tear perforations, finger holes, dust flaps, stacking features' },
    { label: 'Inserts', value: 'Partitions, pads, retention flaps' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'What is shelf-ready packaging?',
      answer:
        'A case that arrives at a store, opens in one action, and goes onto the shelf as a display without the product being unpacked. It is also called retail-ready packaging or SRP. The purpose is removing store labor, which is why retailers specify it tightly.',
    },
    {
      question: 'What are the five SRP requirements?',
      answer:
        'Most specifications are built on the same five: easy to open, easy to shelf, easy to identify, easy to shop, and easy to dispose of. Each is a testable property. The detail differs between chains, so read the specification you were issued before designing anything.',
    },
    {
      question: 'Why does the perforation matter so much?',
      answer:
        'It is what decides whether the labor saving actually happens. Too strong and the operator uses a knife, which defeats the point and often cuts the product underneath. Too weak and cases open under pallet compression in transit. It is the detail most worth testing physically before a run.',
    },
    {
      question: 'How high should the front wall be after opening?',
      answer:
        'High enough to retain the back rows, low enough that the product face reads from a standing position. Many retailer specifications dictate this directly as a proportion of product height that must stay visible — if yours does, that figure governs.',
    },
    {
      question: 'What board should an SRP case use?',
      answer:
        'Corrugated, with the flute and wall chosen against stack height rather than shelf load. The case at the bottom of a full pallet carries everything above it, and that compression figure sets the specification — not the weight of the product inside the case.',
    },
    {
      question: 'Can shelf-ready packaging be laminated?',
      answer:
        'Often not, because laminates work against the disposal requirement by taking the case out of a clean paper stream. Where a specification calls for single-stream recyclability, use an aqueous coating or varnish and keep windows and labels paper-based.',
    },
    {
      question: 'How should variants be distinguished on the artwork?',
      answer:
        'With large, high-contrast identification rather than subtle differences in brand artwork. Store operators read the case quickly, on a pallet and again on a shelf. Poor variant distinction is the most common weakness in SRP artwork and the biggest source of picking errors.',
    },
    {
      question: 'Will the retailer test the packaging before accepting it?',
      answer:
        'Many chains will, and some run a formal assessment against their published specification. Submitting untested is the slowest route, because a failure means a redesign and a new submission window. Run the practical tests yourself first.',
    },
    {
      question: 'What tests should I run before submitting?',
      answer:
        'Open it the way a store operator actually would, under time pressure and without a blade. Load it and place it on a representative shelf. Then stack it under realistic pallet weight for longer than feels necessary — perforation failures show up over time, not immediately.',
    },
    {
      question: 'Can one case design work across several retailers?',
      answer:
        'Sometimes, but chains differ on perforation type, visible product proportion, and shelf dimensions. Where volumes justify it, a common structure with retailer-specific artwork is usually more workable than one case attempting to satisfy every specification at once.',
    },
    {
      question: 'Is a display tray the same as shelf-ready packaging?',
      answer:
        'A tray can serve as SRP and often does, usually with a shrink wrap or lidded outer for transit. The difference is that SRP is defined by a retailer specification, while a tray is a structure. A tray meeting the specification is SRP; one that does not, is not.',
    },
    {
      question: 'Does SRP cost more than plain cases?',
      answer:
        'Usually somewhat more per case, because the structure does two jobs and the board is specified against pallet compression. The retailer is trading that against store labor, which is why they mandate it. Whether it nets out in your favor depends on your commercial terms with them.',
    },
  ],

  related: [
    'retail-display-boxes',
    'corrugated-display-boxes',
    'display-trays',
    'display-mailer-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
