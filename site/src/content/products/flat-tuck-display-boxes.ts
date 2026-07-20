import type { ProductContent } from '../../data/product-content';

/**
 * Intent: STRUCTURE — the tuck-end closure itself. Written as a technical
 * specification page about closure engineering (straight vs reverse tuck, tuck
 * vs lock bottom, friction fit). Deliberately distinct from
 * /flat-display-boxes/, which is about shallow depth and presentation.
 */
const content: ProductContent = {
  slug: 'flat-tuck-display-boxes',

  metaTitle: 'Flat Tuck Display Boxes | Tuck-End Display Cartons',
  metaDescription:
    'Flat tuck display boxes with straight or reverse tuck ends. Closure engineering, friction fit, and when a lock bottom is better.',

  h1: 'Flat Tuck Display Boxes',

  summary:
    'A tuck end closes by folding a flap into the box body and holding it there by friction. No glue, no tape, and it opens and recloses. Which tuck you specify — and whether a tuck is the right closure at all — depends on how the box is filled, how it is displayed, and what it weighs.',

  imageAlts: [
    {
      file: 'flat-tuck-display-boxes-1.png',
      alt: 'Flat tuck display box shown with the top tuck flap partly open',
    },
    {
      file: 'flat-tuck-display-boxes-2.png',
      alt: 'Tuck-end display carton shown flat before folding, with the tuck flaps visible',
    },
    {
      file: 'flat-tuck-display-boxes-3.png',
      alt: 'Printed tuck-end box closed, showing the seam along the front panel',
    },
    {
      file: 'flat-tuck-display-boxes-4.png',
      alt: 'Row of flat tuck display boxes standing with front panels facing forward',
    },
  ],

  uses: [
    'Display cartons that must open and reclose without damage',
    'Products packed by hand where a glued closure would slow filling',
    'Retail cartons where the closed face carries the primary artwork',
    'Boxes that double as the display and the individual product pack',
    'Lines needing a low-cost closure with no adhesive in the specification',
  ],

  industries: [
    'Cosmetics and personal care cartons',
    'Supplements and small pharmacy lines',
    'Confectionery and small packaged food',
    'Stationery and small consumer goods',
  ],

  sections: [
    {
      heading: 'Straight tuck against reverse tuck',
      body: [
        'In a straight tuck, both the top and bottom flaps fold in from the same panel — usually the back. The front face stays clean and unbroken, which is why it is preferred where the front panel carries the main artwork.',
        'In a reverse tuck, the top flap folds in from the back and the bottom from the front, or the other way round. It uses less board and nests more efficiently on the press sheet, so it costs less, at the price of a visible flap edge on the front face.',
      ],
      points: [
        'Straight tuck — clean front face, slightly more board, better for display',
        'Reverse tuck — cheaper and more material-efficient, visible front flap edge',
        'Both hold by friction, both reclose, neither needs adhesive',
      ],
    },
    {
      heading: 'How the friction fit actually works',
      body: [
        'A tuck holds because the flap is very slightly wider than the opening it goes into, so it grips the inside of the panel. That tolerance is measured in fractions of a millimeter, and it is where tuck boxes succeed or fail.',
        'Too tight and the flap buckles when someone closes it, leaving a permanent crease on a face the shopper is looking at. Too loose and the box opens in a carton or on a shelf. The tolerance is a function of board caliper, so it must be re-checked whenever the board changes — a dieline drawn for 18 pt does not behave the same at 24 pt.',
      ],
    },
    {
      heading: 'Tuck locks and dust flaps',
      body: [
        'A plain tuck can be improved without moving to a glued closure. A slit lock — a small cut in the flap that catches the panel edge — adds noticeable resistance to accidental opening. A tongue-and-slot arrangement does the same more positively.',
        'Dust flaps on the side of the tuck close the gaps at each end, keeping contents in and dirt out. They cost almost nothing in board and are the most commonly omitted useful detail on a cheap tuck carton.',
      ],
    },
    {
      heading: 'When a tuck end is the wrong closure',
      body: [
        'Weight is the limit. A tuck bottom holds by friction alone, so the load is carried by the grip of a folded flap. Anything heavy enough to work that flap loose in handling needs a lock bottom or a glued base instead.',
        'The rough test is whether the box can be lifted by its sides, shaken gently, and stay closed with the intended contents in it. If the bottom flap starts to work open, specify a crash-lock or glued base and keep the tuck for the top only.',
      ],
      link: {
        text: 'Structural options for heavier display formats are covered on the',
        href: '/custom-display-boxes/',
        anchor: 'custom display boxes page',
      },
    },
    {
      heading: 'Board choice for tuck cartons',
      body: [
        'Tuck cartons want board that creases cleanly and springs back — good boxboard in the 16 pt to 24 pt range for most retail cartons. Board that is too heavy resists folding and buckles the flap; board that is too light does not hold the friction fit.',
        'Recycled board works but should be checked on a physical sample, because fiber variation affects crease consistency, and a tuck depends on every crease behaving the same way across a whole run.',
      ],
      link: {
        text: 'Board grades and calipers are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Printing across the tuck',
      body: [
        'Artwork crossing a tuck flap breaks when the box is closed, because the flap disappears into the box. Anything that must remain readable belongs on the panel faces, not on the flaps.',
        'The tuck flap itself is a useful surface for something else: a repeat of the brand mark, a batch area, or an opening instruction. It is seen only by whoever opens the box, which makes it the right place for content aimed at them rather than at a shopper.',
      ],
    },
    {
      heading: 'Filling and line speed',
      body: [
        'Tuck cartons are usually hand-filled or filled on a relatively simple line, because closing a tuck reliably at speed is harder than applying glue. If the line is automated and fast, a glued carton is generally the more robust specification.',
        'Where filling is by hand, the tuck is an advantage: no adhesive, no drying, and the box can be reopened to correct a packing error without being destroyed.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard (SBS, kraft-back), recycled board' },
    { label: 'Custom dimensions', value: 'Custom — tuck tolerance set against the chosen caliper' },
    { label: 'Board thickness', value: 'Typically 16 pt to 24 pt for reliable friction fit' },
    { label: 'Flute type', value: 'Not applicable — tuck ends are a boxboard structure' },
    { label: 'Printing methods', value: 'Offset litho, digital for short runs' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing on panel faces' },
    { label: 'Add-ons', value: 'Slit locks, tongue-and-slot closures, dust flaps, hang tabs, windows' },
    { label: 'Inserts', value: 'Platforms, dividers, shallow die-cut wells' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'What is a tuck end?',
      answer:
        'A closure where a flap folds into the box body and is held by friction rather than by glue or tape. It opens and recloses, which is why it is used for retail cartons that a shopper or a packer needs to open without destroying the box.',
    },
    {
      question: 'Straight tuck or reverse tuck — which should I choose?',
      answer:
        'Straight tuck where the front panel carries your main artwork, because both flaps fold in from the back and the front face stays unbroken. Reverse tuck where cost matters more: it uses less board and nests better on the sheet, at the price of a visible flap edge on the front.',
    },
    {
      question: 'Why does my tuck flap keep buckling?',
      answer:
        'The friction tolerance is too tight for the board. That tolerance is measured in fractions of a millimeter and depends on caliper, so a dieline drawn for 18 pt board will buckle at 24 pt. Whenever the board changes, the tuck tolerance has to be re-checked.',
    },
    {
      question: 'My boxes keep popping open in transit. What fixes it?',
      answer:
        'Either the tolerance is too loose, or the closure is being asked to carry more weight than friction can hold. Add a slit lock or a tongue-and-slot to increase resistance. If the bottom is the one opening, move to a crash-lock or glued base and keep the tuck for the top.',
    },
    {
      question: 'How heavy can the contents be?',
      answer:
        'Light enough that the box can be lifted by its sides and gently shaken without the bottom flap working loose. There is no universal figure because it depends on caliper, box size, and how the weight sits. That practical test is more reliable than any number we could publish.',
    },
    {
      question: 'What are dust flaps and do I need them?',
      answer:
        'Small side flaps on the tuck that close the gaps at each end of the closure. They keep contents in and dirt out, cost almost nothing in board, and are the most commonly omitted useful detail on a cheap tuck carton. For anything retail-facing, specify them.',
    },
    {
      question: 'Can artwork run across the tuck flap?',
      answer:
        'It can be printed there but it will not be visible — the flap folds into the box. Keep anything that must stay readable on the panel faces. The flap is a good place for a batch area, an opening instruction, or a brand repeat aimed at whoever opens the box.',
    },
    {
      question: 'What board thickness works best?',
      answer:
        'Usually 16 pt to 24 pt. Too heavy and the board resists folding and buckles the flap; too light and it will not hold the friction fit. The range is narrower than for most other structures because the closure depends on the board springing back.',
    },
    {
      question: 'Can I use recycled board for tuck cartons?',
      answer:
        'Yes, with a physical sample check first. Fiber variation in recycled board affects how consistently a crease behaves, and a tuck closure depends on every crease across a run behaving the same way. It is more sensitive to that variation than a glued structure.',
    },
    {
      question: 'Is a tuck carton suitable for a fast automated line?',
      answer:
        'Generally not. Closing a tuck reliably at speed is harder than applying glue, so high-speed automated lines usually specify a glued carton. Tuck ends suit hand filling or simpler lines, where being able to reopen a box to fix a packing error is an advantage.',
    },
    {
      question: 'How is this different from a flat display box?',
      answer:
        'This is a closure specification; that is a format. A flat display box is defined by shallow depth and face-up presentation. A flat tuck box is defined by tuck-end flaps. Many boxes are both, but the two describe different properties.',
    },
    {
      question: 'Can a tuck box have a window?',
      answer:
        'Yes, and it is common on retail cartons. The window is die-cut into a panel face and a film is applied behind it. Keep the window clear of the tuck area so the flap still folds cleanly — a window crossing a crease will crack the film.',
    },
  ],

  related: [
    'flat-display-boxes',
    'cardboard-display-boxes',
    'cosmetic-display-boxes',
    'custom-display-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
