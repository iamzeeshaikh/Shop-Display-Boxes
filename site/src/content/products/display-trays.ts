import type { ProductContent } from '../../data/product-content';

/**
 * Intent: FORMAT — an open tray with no lid or front panel. Written around
 * what open presentation gains and costs, which is a genuinely different
 * decision from the closed-box formats.
 */
const content: ProductContent = {
  slug: 'display-trays',

  metaTitle: 'Display Trays | Open Retail Trays, Printed to Order',
  metaDescription:
    'Custom display trays for open product presentation. Low-wall and stacking trays in boxboard or corrugated, printed to order.',

  h1: 'Custom Display Trays',

  summary:
    'A display tray removes the barrier between a shopper and the product. There is no lid to open and no front panel to look past, which raises pick-up rates and, in the same move, gives up protection and stackability. That trade is the whole decision.',

  imageAlts: [
    {
      file: 'display-trays-1.png',
      alt: 'Printed cardboard display tray holding product units in a single open layer',
    },
    {
      file: 'display-trays-2.png',
      alt: 'Low-wall display tray shown from above with dividers separating the product',
    },
    {
      file: 'display-trays-3.png',
      alt: 'Corrugated display tray printed on the inner base and outer walls',
    },
    {
      file: 'display-trays-4.png',
      alt: 'Stacked display trays showing how the walls locate on the tray below',
    },
    {
      file: 'display-trays-5.png',
      alt: 'Display tray with an angled front wall lowering the front edge for easier reach',
    },
  ],

  uses: [
    'Open presentation where shoppers handle product before buying',
    'Bakery, produce, and loose confectionery at point of sale',
    'Multipack bundles presented as a single unit',
    'Stacking trays used to build a tiered display from identical parts',
    'Trays that double as the shelf-ready unit for a case of product',
  ],

  industries: [
    'Bakery and fresh food retail',
    'Confectionery and loose sweets',
    'Craft and handmade goods retail',
    'Hardware and small-parts retail',
  ],

  sections: [
    {
      heading: 'What an open format buys you',
      body: [
        'Anything a shopper can pick up without opening or reaching past something gets picked up more often. A tray puts the product at the top of the pack rather than behind a panel, and for impulse categories that difference is the reason to choose the format.',
        'It also makes restocking trivial. There is nothing to dismantle and nothing to reseal, so a tray gets topped up by whoever is passing rather than by whoever has time to rebuild a display.',
      ],
    },
    {
      heading: 'What it costs you',
      body: [
        'Open presentation gives up three things. Protection: dust, handling, and damage all reach the product directly. Stackability: a tray with an open top cannot carry another tray unless it is designed to. And tamper evidence, which rules the format out for categories that require it.',
        'None of these are fatal, but each has to be a deliberate acceptance rather than a discovery after the first run.',
      ],
      points: [
        'No barrier against dust or handling damage',
        'Nothing above the product line to carry a stacked load',
        'No tamper evidence — unsuitable where that is required',
        'Product itself becomes the visual, so its own packaging must carry the brand',
      ],
    },
    {
      heading: 'Wall height',
      body: [
        'Wall height is the main variable on a tray and it trades retention against access. Higher walls hold product securely and hide more of it. Lower walls show more and let units slide out when the tray is moved.',
        'A common resolution is an angled or stepped front wall — high at the sides and back for retention, cut down at the front for reach and visibility. It costs nothing beyond the die and solves most of the tension.',
      ],
    },
    {
      heading: 'Stacking trays',
      body: [
        'Trays designed to stack turn one tooling investment into a tiered display. The walls of the upper tray locate into or onto the tray below, usually through corner tabs or a returned lip.',
        'The constraint is that the load of every upper tray passes through the walls of the lowest one. Stacking three loaded trays is a structural decision, not a merchandising one, and generally means corrugated rather than boxboard.',
      ],
      link: {
        text: 'Where load starts to govern the board choice is covered on the',
        href: '/cardboard-vs-corrugated-display-boxes/',
        anchor: 'cardboard versus corrugated page',
      },
    },
    {
      heading: 'Printing the inside',
      body: [
        'On a tray the inner base is visible from the moment it goes on shelf, and increasingly visible as stock depletes. Leaving it as bare board means the display looks progressively more neglected through the day.',
        'Printing the inner base is inexpensive and does more for how a tray reads late in a shift than almost any other decision. It is the detail most often skipped on this format.',
      ],
    },
    {
      heading: 'Food contact',
      body: [
        'Trays are used heavily for bakery, confectionery, and produce, which brings food-contact requirements into scope. Direct contact with unwrapped food requires a food-grade board and a compliant coating, and greaseproof barriers where the product carries oil or fat.',
        'Tell us at quoting stage if the product touches the board directly. It changes the material specification, and it is not something that can be corrected after a run.',
      ],
      link: {
        text: 'Food-contact material requirements are set out on the',
        href: '/food-display-boxes/',
        anchor: 'food display boxes page',
      },
    },
    {
      heading: 'Trays as shelf-ready units',
      body: [
        'A tray is frequently the answer to a shelf-ready packaging requirement, because it already is what SRP asks for: a case that goes onto a shelf without unpacking. The addition is usually a shrink wrap or a lidded outer for transit, removed at the store.',
        'Where a retailer has issued an SRP specification, their identification and product-visibility requirements govern the tray dimensions, not your assortment.',
      ],
      link: {
        text: 'Compliance requirements for that format are on the',
        href: '/shelf-ready-display-boxes/',
        anchor: 'shelf-ready display boxes page',
      },
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard, E and B flute corrugated, food-grade board where required' },
    { label: 'Custom dimensions', value: 'Custom — built to your product and shelf depth' },
    { label: 'Board thickness', value: 'Typically 18 pt to 28 pt boxboard; flute grade where corrugated' },
    { label: 'Flute type', value: 'E or B flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital, flexo on corrugated' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Aqueous, varnish, gloss or matte lamination, greaseproof barriers' },
    { label: 'Finishes', value: 'Spot UV, foil stamping on boxboard trays' },
    { label: 'Add-ons', value: 'Angled front walls, stacking tabs, hand holes, shelf talkers' },
    { label: 'Inserts', value: 'Dividers, pads, fitment liners' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'When is a tray a better choice than a display box?',
      answer:
        'When pick-up rate matters more than protection. A tray removes the barrier between shopper and product, which lifts handling and impulse purchase. If the product needs protection from dust, needs tamper evidence, or needs to be stacked, a closed format is the right answer.',
    },
    {
      question: 'How high should the tray walls be?',
      answer:
        'It is a trade between retention and access. Higher walls hold product securely and hide more of it; lower walls show more and let units slide when the tray is moved. An angled front wall — high at the back and sides, cut down at the front — resolves most of it for the cost of a die.',
    },
    {
      question: 'Can display trays be stacked?',
      answer:
        'Only if designed for it, with corner tabs or a returned lip locating the upper tray onto the one below. Remember that the load of every upper tray passes through the walls of the lowest — stacking loaded trays usually means corrugated rather than boxboard.',
    },
    {
      question: 'Should I print the inside of the tray?',
      answer:
        'Yes. The inner base is visible from the moment the tray goes on shelf and becomes more visible as stock depletes. Bare board makes the display look progressively more neglected through a shift. It is inexpensive and the most commonly skipped detail on this format.',
    },
    {
      question: 'Can a tray hold unwrapped food?',
      answer:
        'With a food-grade board and a compliant coating, and a greaseproof barrier where the product carries oil or fat. Tell us at quoting stage if the product touches the board directly — it changes the material specification and cannot be corrected after a run.',
    },
    {
      question: 'Can a tray be used as shelf-ready packaging?',
      answer:
        'Frequently, because a tray already is what SRP asks for: a case that goes onto a shelf without unpacking. Usually a shrink wrap or lidded outer is added for transit and removed in store. Where the retailer has issued an SRP spec, their requirements govern the dimensions.',
    },
    {
      question: 'How do I stop product sliding around in the tray?',
      answer:
        'Dividers or a fitment liner. Dividers suit units of a consistent size; a die-cut liner suits irregular shapes. Either is cheaper than raising the walls, and neither costs you the visibility that a higher wall would.',
    },
    {
      question: 'Boxboard or corrugated for a tray?',
      answer:
        'Boxboard for light single-layer contents where print quality matters. Corrugated once the tray carries weight, has to stack, or has to survive transit loaded. The wall of a tray is doing more structural work than the wall of a closed box, so this decision arrives sooner than people expect.',
    },
    {
      question: 'What is the shallowest tray that still works?',
      answer:
        'Shallow enough that the product is the visible element and deep enough that it does not slide out in normal handling. Below roughly the height of the product base, a tray stops retaining anything and becomes a printed pad — which is sometimes the right answer, but it is a different product.',
    },
    {
      question: 'Do trays need a header card?',
      answer:
        'Rarely. The point of a tray is that the product itself is the display. A header adds height, cost, and something for a shopper to reach past — the opposite of what the format is for. On a floor placement seen from a distance, reconsider.',
    },
    {
      question: 'Can trays be die-cut with a window or handle?',
      answer:
        'Yes. Hand holes in the side walls are common on larger trays and make handling a loaded tray much easier for store staff. Windows are less relevant here, since an open tray already shows the product.',
    },
    {
      question: 'How does a tray differ from a flat display box?',
      answer:
        'A tray is open at the top with walls on all sides. A flat display box is a shallow closed format, usually with a lid or a front panel, designed to show thin product face-up. The tray prioritizes access; the flat box prioritizes presentation and protection.',
    },
  ],

  related: [
    'flat-display-boxes',
    'counter-display-boxes',
    'food-display-boxes',
    'shelf-ready-display-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
