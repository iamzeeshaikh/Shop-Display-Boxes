import type { ProductContent } from '../../data/product-content';

/**
 * Intent: PLACEMENT. The buyer is competing for a few square inches of counter
 * space next to a register. Written around footprint, sightlines, and the
 * retailer conversation — not around material (see corrugated/cardboard pages)
 * and not around unit assembly (see the CDU page).
 */
const content: ProductContent = {
  slug: 'counter-display-boxes',

  metaTitle: 'Counter Display Boxes | Custom Countertop Packaging',
  metaDescription:
    'Custom counter display boxes sized for tight checkout space. Small footprint, strong sightlines, printed to your artwork.',

  h1: 'Counter Display Boxes',

  summary:
    'Counter space is the most contested real estate in a store, and a retailer gives it up reluctantly. A counter display earns its place by taking a small footprint, presenting product at the angle a standing shopper actually sees, and needing no attention from staff once it is placed.',

  imageAlts: [
    {
      file: 'counter-display-boxes-1.png',
      alt: 'Printed counter display box holding rows of small retail cartons behind a low front panel',
    },
    {
      file: 'counter-display-boxes-2.png',
      alt: 'Compact counter display shown from a standing shopper’s eye level, product angled forward',
    },
    {
      file: 'counter-display-boxes-3.png',
      alt: 'Counter display box with a printed header card raised above the product well',
    },
  ],

  uses: [
    'Impulse purchases placed within arm’s reach of a register',
    'Trial and travel sizes alongside a full-price range',
    'Add-on items that pair with what the shopper is already buying',
    'Seasonal or limited-run lines that need a temporary home',
    'Single-SKU displays where the whole unit is one product',
  ],

  industries: [
    'Convenience and specialty food retail',
    'Pharmacy and health retail front-of-store',
    'Salon, spa, and barber retail counters',
    'Independent gift and homeware stores',
  ],

  sections: [
    {
      heading: 'The footprint conversation',
      body: [
        'Every counter display competes with a register, a card terminal, a bag stand, and whatever else the retailer already has. The buyer deciding whether to take your display is thinking about square inches, not about your brand.',
        'This changes how the display should be designed. A smaller base with a taller back panel occupies less counter and still carries the brand message. A wide, shallow display reads well in a photograph and gets refused in a store. Design for the footprint the retailer will actually accept, then work out how much product fits.',
      ],
      points: [
        'Base footprint is the number a retailer evaluates — keep it defensible',
        'Height is cheaper than width in counter terms',
        'A display that needs to be moved to use the counter will be moved off it',
      ],
    },
    {
      heading: 'Sightlines and angle',
      body: [
        'A shopper at a counter looks down at roughly forty-five degrees, not straight on. A display designed to look correct in a straight-on product render frequently presents the tops of the units in real use, which is the least informative face of most products.',
        'Angling the product tier forward, or stepping rows so each back row sits above the one in front, puts the printed face of the product into the shopper’s actual line of sight. This is the single change that most improves how a counter display performs, and it costs nothing but a fold.',
      ],
    },
    {
      heading: 'Structures that suit a counter',
      body: [
        'An open tray with a low front lip is the simplest and gives the easiest pick-up. A stepped or angled tier suits deeper assortments where back rows would otherwise be hidden. A dispenser structure, where units are drawn from a front opening, keeps the display looking full as stock depletes.',
        'The dispenser deserves particular attention for single-SKU lines. A tray that is half empty looks neglected; a dispenser that is half empty looks the same as when it was full, which matters when nobody is restocking it daily.',
      ],
      points: [
        'Open tray — simplest, easiest pick-up, shows depletion',
        'Stepped or angled tier — better sightlines for multi-row assortments',
        'Front-opening dispenser — holds its appearance as stock runs down',
        'Closed box with die-cut front — protects units, suits sealed product',
      ],
    },
    {
      heading: 'Header cards on a counter unit',
      body: [
        'Header cards work hard on a floor display, where a shopper sees them from across an aisle. On a counter, the shopper is already standing at the display, so the header does much less and adds height that the retailer may object to.',
        'Where a header still earns its place is behind a counter — on a back-bar shelf, or where the display sits below eye level and the header is the only part visible from the shop floor. Otherwise the printing budget is better spent on the front panel the shopper is actually looking at.',
      ],
    },
    {
      heading: 'Materials and durability',
      body: [
        'Folding boxboard covers most counter displays: it prints finely, creases cleanly, and is thin enough to keep the structure visually light. E-flute corrugated becomes the answer once the assortment is dense enough that a boxboard base would bow.',
        'Durability on a counter is mostly about abrasion, not load. The display is handled constantly, pushed aside, and wiped around. A laminate or a hard varnish is doing more work here than an upgrade in board weight would.',
      ],
      link: {
        text: 'Board options and where each one stops working are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Assembly and restocking',
      body: [
        'A counter display that needs assembly instructions will be assembled wrong or not at all. Auto-lock and crash-lock bottoms let a display be erected in one motion without tape or tools, which is what a store associate with thirty seconds will actually do.',
        'Restocking follows the same logic. If refilling the display means dismantling it, it will be left empty instead. An open top or a removable header is worth designing in from the start.',
      ],
      link: {
        text: 'What we need from you and how the process runs is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'Where a counter display is the wrong choice',
      body: [
        'Counter displays suit small, light, inexpensive units bought on impulse. They do not suit large assortments, heavy products, or anything a shopper needs time to consider — a counter is a place of transaction, not deliberation.',
        'If the assortment needs more than a shallow tray, the honest answer is a floor-standing unit or a shelf display rather than a counter display scaled up until the retailer refuses it.',
      ],
      link: {
        text: 'The trade-offs between the two placements are covered in the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'counter versus floor display comparison',
      },
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard (SBS, kraft-back), E-flute and F-flute corrugated' },
    { label: 'Custom dimensions', value: 'Custom — built around your unit and the agreed footprint' },
    { label: 'Board thickness', value: 'Typically 16 pt to 24 pt boxboard; specified per job' },
    { label: 'Flute type', value: 'E-flute or F-flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital for short runs, flexo on corrugated' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing on header panels' },
    { label: 'Add-ons', value: 'Header cards, dispenser openings, shelf talkers, tear strips' },
    { label: 'Inserts', value: 'Cavity inserts, stepped risers, dividers' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'How big should a counter display be?',
      answer:
        'Smaller than you would like. The retailer is weighing your display against the counter space it costs them, so the base footprint is the number that decides whether it gets placed. Gaining height is far easier than gaining width — build up rather than out, then work out how much product fits.',
    },
    {
      question: 'Why does my display look different in store than in the render?',
      answer:
        'Because a render is usually straight-on and a shopper looks down at roughly forty-five degrees. From that angle a flat tray presents the tops of the units rather than their printed faces. Angling the tier forward or stepping the rows fixes it, and costs nothing but a fold.',
    },
    {
      question: 'Do I need a header card on a counter display?',
      answer:
        'Usually not. A header earns its place on a floor unit seen from across an aisle. At a counter the shopper is already standing at the display, so the header adds height the retailer may object to without adding much. The exception is a display below eye level, where the header is the only part visible from the floor.',
    },
    {
      question: 'How do I stop the display looking empty as stock sells?',
      answer:
        'Use a dispenser structure where units are drawn from a front opening. A half-empty tray looks neglected; a half-empty dispenser looks the same as a full one. This matters most for single-SKU displays that nobody is restocking daily.',
    },
    {
      question: 'Should a counter display be boxboard or corrugated?',
      answer:
        'Boxboard for most of them — it prints better and keeps the structure visually light. Move to E-flute corrugated once the assortment is dense enough that a boxboard base would bow when full. The test is whether the base holds flat with the display loaded and lifted from one edge.',
    },
    {
      question: 'What makes a display easy for store staff to set up?',
      answer:
        'An auto-lock or crash-lock bottom that erects in one motion with no tape and no tools. If a display needs printed instructions, it will be built wrong or left in the stockroom. Assume the person assembling it has about thirty seconds and no particular interest in your brand.',
    },
    {
      question: 'Can a counter display hold more than one product?',
      answer:
        'Yes, though the practical limit is lower than most brands expect. Two or three SKUs in a stepped tier works. Beyond that the display gets wide, the retailer objects to the footprint, and each SKU gets too little frontage to register. At that point a shelf or floor unit is the honest answer.',
    },
    {
      question: 'What finish holds up best on a counter?',
      answer:
        'A laminate or a hard varnish. Counter displays fail through abrasion rather than load — they are handled constantly, pushed aside, and wiped around. Spending on surface protection does more here than spending on a heavier board.',
    },
    {
      question: 'Can the display ship flat and be assembled in store?',
      answer:
        'Yes, and for counter units it is usually the sensible route. Flat shipping cuts freight cost and volume considerably. Pair it with a lock-bottom structure so assembly stays a one-motion job.',
    },
    {
      question: 'How many units should a counter display hold?',
      answer:
        'Enough that it does not need restocking more often than the store will actually restock it, and few enough that it stays within the agreed footprint. In practice this is a conversation with the retailer about replenishment frequency rather than a number we can set for you.',
    },
    {
      question: 'Can you print on the inside of the tray?',
      answer:
        'Yes. On an open tray the inner base becomes visible as stock depletes, so printing it is a cheap way to keep the display looking intentional rather than showing bare board when it is half empty.',
    },
    {
      question: 'What do you need from me to quote a counter display?',
      answer:
        'The unit dimensions and weight, how many units you want the display to hold, and any footprint limit the retailer has given you. If you have artwork, send it; if you do not, we can draw the dieline first and you place artwork onto it afterward.',
    },
  ],

  related: [
    'cardboard-counter-display-units',
    'cosmetic-display-boxes',
    'display-trays',
    'cardboard-display-stands',
  ],

  updated: '2026-07-19',
};

export default content;
