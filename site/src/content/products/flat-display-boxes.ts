import type { ProductContent } from '../../data/product-content';

/**
 * Intent: FORMAT — shallow, low-profile display for thin goods presented
 * face-up. Deliberately distinct from /flat-tuck-display-boxes/, which is about
 * the tuck-end closure structure. This page is about depth and presentation
 * plane; that page is about how the box closes.
 */
const content: ProductContent = {
  slug: 'flat-display-boxes',

  metaTitle: 'Flat Display Boxes | Shallow Boxes for Thin Products',
  metaDescription:
    'Flat display boxes for thin products presented face-up. Shallow depth, full-face visibility, and inserts that stop items sliding.',

  h1: 'Flat Display Boxes',

  summary:
    'Flat products have one good side and it faces up. A shallow display box keeps that face pointed at the shopper instead of hidden edge-on in a deep well, which is the whole reason to give up depth and the stock capacity that comes with it.',

  imageAlts: [
    {
      file: 'flat-display-boxes-1.png',
      alt: 'Shallow flat display box holding thin products laid out face-up in a single layer',
    },
    {
      file: 'flat-display-boxes-2.png',
      alt: 'Flat display box shown open with a low wall around a single layer of product',
    },
    {
      file: 'flat-display-boxes-3.png',
      alt: 'Printed flat display box with divider inserts separating each item',
    },
    {
      file: 'flat-display-boxes-4.png',
      alt: 'Flat display box viewed at an angle, showing the shallow profile against the product',
    },
  ],

  uses: [
    'Sheet goods, cards, and printed matter presented face-up',
    'Thin electronics accessories such as cables and adapters',
    'Flat cosmetics — palettes, compacts, sheet masks',
    'Confectionery bars and thin packaged snacks',
    'Sample and swatch sets where the whole range must be visible at once',
  ],

  industries: [
    'Stationery and paper goods',
    'Consumer electronics accessories',
    'Beauty, for palettes and sheet products',
    'Craft and hobby supplies',
  ],

  sections: [
    {
      heading: 'Why depth is the enemy here',
      body: [
        'A deep box holding thin product presents the shopper with a stack of edges. Whatever design work went into the product face is invisible, and the shopper has to lift an item out to see what it is.',
        'A flat box solves this by holding one layer, or a small number, with the printed face pointing up. The cost is stock capacity: a display that holds twelve items instead of sixty needs restocking five times as often. That trade is the decision this format asks you to make.',
      ],
    },
    {
      heading: 'How shallow is too shallow',
      body: [
        'The working limit is set by retention. Walls need to be tall enough that product does not slide out when the box is tilted or moved, which in practice means at least the thickness of the product plus a margin.',
        'Below that the box stops retaining anything and becomes a printed pad — sometimes the right answer, but a different product with different handling behavior. If items are sliding out in transit, the answer is usually an insert rather than a taller wall, because raising the wall gives back the visibility you paid for.',
      ],
      points: [
        'Wall height at least product thickness plus a retention margin',
        'Inserts rather than taller walls where items slide',
        'Angled or stepped front wall where reach matters more than retention',
      ],
    },
    {
      heading: 'Inserts for flat product',
      body: [
        'Flat items slide and overlap, and overlapping product looks disorganized within a day of going on shelf. A die-cut insert with shallow wells keeps each item in position without adding height.',
        'For sets where the arrangement is part of the presentation — a swatch set or a sample collection — the insert is doing the merchandising, not the box. It is worth spending the tooling there rather than on structural complexity elsewhere.',
      ],
    },
    {
      heading: 'Board and rigidity',
      body: [
        'A wide, shallow panel is the hardest thing to keep flat in paperboard. A base that is much wider than it is deep will bow under its own contents, and bowing is far more visible on a flat display than on a tall one because the product sits directly on it.',
        'Two fixes work: step up the caliper, or add structure — a returned edge, a doubled base, or a full-area insert that stiffens the panel. The insert route is usually cheaper and often already needed for retention.',
      ],
      link: {
        text: 'Board grades and where each stops working are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Printing the base',
      body: [
        'On a flat display the base is visible around and between the product, and it becomes more visible as stock depletes. Bare board reads as unfinished in a way it does not in a deep box, where the base is barely seen.',
        'Printing the inner base is inexpensive and is the detail that most affects how a flat display looks when it is half sold through. It is also where a brand can put copy that the product itself has no room for.',
      ],
      link: {
        text: 'Print routes and where each is worth the setup are compared in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Lidded and windowed variants',
      body: [
        'A flat box can be left open, given a clear window lid, or closed with a printed lid. Open gives the best access and the least protection. A window keeps the face-up presentation while protecting the product, at the cost of a plastic component that complicates recycling.',
        'A closed printed lid protects fully but throws away the reason for choosing a flat format in the first place, unless the display is opened and the lid removed at the store.',
      ],
    },
    {
      heading: 'Shipping flat product',
      body: [
        'Flat displays are efficient to ship but vulnerable to crushing across their wide unsupported span. A stacked pallet loads the center of that span, which is exactly where a shallow box has least resistance.',
        'Where the display ships loaded, the practical protections are an outer case, interleaving, or an insert that transfers load to the walls rather than letting it rest on the base.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard, E-flute corrugated for wider spans' },
    { label: 'Custom dimensions', value: 'Custom — depth set by product thickness plus retention margin' },
    { label: 'Board thickness', value: 'Typically 18 pt to 28 pt; heavier on wide unsupported bases' },
    { label: 'Flute type', value: 'E-flute or F-flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital for short runs' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing' },
    { label: 'Add-ons', value: 'Window lids, printed lids, hang tabs, angled front walls' },
    { label: 'Inserts', value: 'Shallow die-cut wells, dividers, full-area stiffening platforms' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'What counts as a flat display box?',
      answer:
        'A shallow box holding one layer of product, or a small number, with the printed face pointing up rather than edge-on. The defining property is depth relative to the product, not the outline of the box.',
    },
    {
      question: 'How shallow can the box be?',
      answer:
        'The wall needs to be at least the product thickness plus a retention margin, or items slide out when the display is tilted or moved. Below that the box stops retaining anything and becomes a printed pad — a legitimate product, but a different one.',
    },
    {
      question: 'My product keeps sliding around. Should I raise the walls?',
      answer:
        'Usually not — raising the wall gives back the visibility you chose this format for. A die-cut insert with shallow wells holds each item in position without adding height, and generally costs less than the extra board would.',
    },
    {
      question: 'Why does the base of my flat display bow?',
      answer:
        'A wide, shallow panel is the hardest shape to keep flat in paperboard, and it bows under its own contents. It shows more here than on a tall display because the product sits directly on the base. Fix it with a stiffening insert or a doubled base rather than only stepping up caliper.',
    },
    {
      question: 'Should I print the inside of the box?',
      answer:
        'Yes. On a flat display the base is visible around and between the product from the moment it goes on shelf, and more so as stock sells. Bare board reads as unfinished here in a way it does not in a deep box.',
    },
    {
      question: 'Is a flat display box the same as a display tray?',
      answer:
        'They overlap. A tray is defined by being open-topped with walls all round; a flat box is defined by shallow depth and face-up presentation, and may have a lid or window. A shallow open tray is effectively both.',
    },
    {
      question: 'How does this differ from a flat tuck display box?',
      answer:
        'This page is about depth and presentation plane. A flat tuck box is defined by its closure — tuck-end flaps — and is a structural specification rather than a format one. A flat tuck box is usually also a flat display box, but not every flat display box is tucked.',
    },
    {
      question: 'Can I add a window to a flat display box?',
      answer:
        'Yes, and it keeps face-up presentation while protecting the product. The trade-off is a plastic component that complicates recycling and adds a production stage. Paper-based window films exist where a specification requires a single material stream.',
    },
    {
      question: 'How much stock will a flat display hold?',
      answer:
        'Considerably less than a deep box of the same footprint — often a fifth as much. That is the cost of the format. Factor the restocking frequency into the decision, because a display that empties five times faster needs someone to refill it five times as often.',
    },
    {
      question: 'Will a flat display survive shipping loaded?',
      answer:
        'It is the format most vulnerable to crushing, because a stacked pallet loads the center of a wide unsupported span. If it ships loaded, plan on an outer case, interleaving, or an insert that transfers load into the walls instead of the base.',
    },
    {
      question: 'Boxboard or corrugated for a flat display?',
      answer:
        'Boxboard for most, since print quality matters and the loads are light. Move to E-flute once the base span gets wide enough that bowing becomes the governing problem — corrugated resists that far better at a similar thickness.',
    },
    {
      question: 'Can the front wall be lower than the sides?',
      answer:
        'Yes, and it is often the right call. An angled or stepped front wall keeps retention at the back and sides while improving reach and visibility at the front, for no more than the cost of a different die.',
    },
  ],

  related: [
    'flat-tuck-display-boxes',
    'display-trays',
    'earring-display-cards',
    'cardboard-display-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
