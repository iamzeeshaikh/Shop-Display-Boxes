import type { ProductContent } from '../../data/product-content';

/**
 * Intent: MATERIAL. The buyer has a weight, stacking, or transit problem that
 * folding boxboard cannot solve. The whole page is written around load and
 * flute selection — deliberately not about placement or industry, which are
 * covered by the counter, stand, and industry pages.
 */
const content: ProductContent = {
  slug: 'corrugated-display-boxes',

  metaTitle: 'Corrugated Display Boxes | Fluted Board for Heavy Loads',
  metaDescription:
    'Corrugated display boxes in B, C, E, and F flute for heavier retail loads. Litho-lamination for print on a stronger board.',

  h1: 'Corrugated Display Boxes',

  summary:
    'Corrugated display boxes exist for one reason: load. When a display has to carry weight, hold its shape through a stacked pallet, or survive freight without an outer carton, the fluted layer between the liners is what does that work. This page covers choosing the flute and the wall for the job.',

  imageAlts: [
    {
      file: 'corrugated-display-boxes-1.png',
      alt: 'Two printed corrugated display trays, one open and one with the front panel folded down, on a pale surface',
    },
    {
      file: 'corrugated-display-boxes-2.png',
      alt: 'Corrugated display box with the fluted edge visible along the cut front panel',
    },
    {
      file: 'corrugated-display-boxes-3.png',
      alt: 'Printed corrugated counter display holding stacked retail cartons',
    },
    {
      file: 'corrugated-display-boxes-4.png',
      alt: 'Corrugated display tray shown flat before assembly, showing score lines and glue tabs',
    },
    {
      file: 'corrugated-display-boxes-5.png',
      alt: 'Assembled corrugated display with a printed header panel above the product well',
    },
    {
      file: 'corrugated-display-boxes-6.png',
      alt: 'Close view of a corrugated display corner showing the double-wall construction',
    },
    {
      file: 'corrugated-display-boxes-7.png',
      alt: 'Corrugated display box printed in full color on a white top liner',
    },
    {
      file: 'corrugated-display-boxes-8.png',
      alt: 'Kraft corrugated display tray holding upright product cartons in two rows',
    },
    {
      file: 'corrugated-display-boxes-9.png',
      alt: 'Corrugated shipper display shown closed for transit and open for retail',
    },
  ],

  uses: [
    'Displays holding glass, cans, jars, or other dense units',
    'Shipper-displays that travel loaded and open on the shop floor',
    'Promotional units that must survive a stacked pallet in a distribution center',
    'Bulk bin displays where a shopper reaches in from above',
    'Any display where a boxboard base would bow under the assortment',
  ],

  industries: [
    'Beverage and canned goods brands shipping into grocery',
    'Household and cleaning products with dense units',
    'Pet food and treat brands using bulk floor bins',
    'Hardware and automotive lines with heavy small parts',
  ],

  sections: [
    {
      heading: 'What the flute actually does',
      body: [
        'Corrugated board is three parts: an outer liner, an inner liner, and a fluted medium glued between them. The flute is an arch, and like any arch it converts a load pressing down into force spread sideways. That is the entire reason corrugated carries weight that flat board of the same thickness cannot.',
        'Two properties follow from flute size. Taller flutes give more stacking strength and cushioning. Shorter flutes give a flatter, smoother surface that prints better and folds into finer detail. Every flute choice is a trade between those two, and picking one means deciding which matters more for your unit.',
      ],
      points: [
        'Taller flute — more stacking strength, more cushioning, coarser print surface',
        'Shorter flute — finer print detail, cleaner creases, less load capacity',
        'Double wall — two fluted layers for the heaviest displays and floor bins',
      ],
    },
    {
      heading: 'Choosing a flute',
      body: [
        'E-flute is the usual starting point for retail displays. It is thin enough to crease cleanly and print sharply, while adding real rigidity over boxboard. F-flute is thinner again and suits smaller displays where the board should not look bulky.',
        'B-flute and C-flute step up for weight and for units that need cushioning. C-flute is the common shipping-carton flute and shows in a display as a visibly ribbed surface. Where a display needs C-flute strength and E-flute print quality, the answer is usually litho-lamination rather than a compromise flute.',
      ],
    },
    {
      heading: 'Printing on corrugated',
      body: [
        'Printing directly onto corrugated with flexo is efficient and suits solid colors, line work, and type. What it does not do well is fine photographic detail, because the flute underneath telegraphs through the liner as faint ribbing across large tonal areas.',
        'Litho-lamination solves this. A sheet is printed offset — the same process used for boxboard, with the same detail and color control — and then laminated onto the corrugated. The result prints like a carton and carries like a shipper. It costs more and adds a production stage, which is why it is worth specifying only where print quality is doing commercial work.',
      ],
      link: {
        text: 'The trade-offs between print processes are set out in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Corrugated against folding boxboard',
      body: [
        'Boxboard is smoother, thinner, cheaper per unit area, and prints beautifully — it is the right answer for a counter display holding light units. Corrugated is thicker, stronger under compression, and more forgiving in transit.',
        'The practical test is what happens to the base when the display is fully loaded and lifted by one edge. If the base bows, the assortment leans, and a leaning display stops selling. That is the point at which the extra cost of corrugated stops being optional.',
      ],
      link: {
        text: 'A side-by-side breakdown of the two boards is on the',
        href: '/cardboard-vs-corrugated-display-boxes/',
        anchor: 'cardboard versus corrugated comparison',
      },
    },
    {
      heading: 'Shipper-displays',
      body: [
        'A shipper-display travels as a sealed case and converts into a retail display on arrival, usually by removing a perforated lid or folding down a front panel. It removes a pack stage and means store staff do not have to build anything.',
        'The design constraint is that one structure has to do two jobs. It needs closed-case strength for the journey and an opened form that presents product properly. Getting the perforation right is most of that work: too weak and it opens in transit, too strong and it tears raggedly when a store associate opens it by hand.',
      ],
      points: [
        'Perforated tear-away lids sized for hand opening without a knife',
        'Fold-down front panels that become the display face',
        'Internal partitions that stop units shifting in transit',
        'Printed inner faces, visible only once the display is opened',
      ],
    },
    {
      heading: 'Sizing and structural design',
      body: [
        'Corrugated has real thickness, so inside and outside dimensions diverge in a way they barely do on thin boxboard. A double-wall display can lose most of an inch of internal width to its own walls. Dimensions are always specified as internal on our drawings, because the internal space is what has to fit your product.',
        'Grain direction matters too. Flutes running vertically in a wall panel carry far more compression than flutes running horizontally. On a floor-standing unit that difference decides whether the display is still square at the end of a promotion.',
      ],
      link: {
        text: 'How to measure and specify a display so it fits the first time is covered in the',
        href: '/display-box-size-guide/',
        anchor: 'display box size guide',
      },
    },
    {
      heading: 'Sustainability',
      body: [
        'Corrugated is among the most widely recycled packaging materials in the United States, and recycled content is standard rather than a premium option in most corrugated grades.',
        'The thing that compromises recyclability is what goes on top of the board. A gloss plastic laminate, a wax coating, or a heavy plastic window all move the pack out of the paper stream. Where a retailer specification requires kerbside recyclability, an aqueous coating and a paper-based window keep it there.',
      ],
      link: {
        text: 'Recyclable coating and board combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'Quality checks on corrugated runs',
      body: [
        'Corrugated is checked differently from boxboard because the failure modes differ. Print registration matters, but so does whether the board has been crushed at the crease, whether the glue lap has taken, and whether the assembled unit sits square.',
        'A loaded assembly check before the run completes is the most useful single test: the display is erected, filled to its intended assortment, and left standing. Bowing, leaning, and racking show up there rather than in a store.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Single-wall and double-wall corrugated, kraft or white top liner, litho-laminated board' },
    { label: 'Custom dimensions', value: 'Custom — specified as internal dimensions' },
    { label: 'Board thickness', value: 'Depends on order specifications — set by flute and wall' },
    { label: 'Flute type', value: 'F, E, B, C single wall; BC and EB double wall' },
    { label: 'Printing methods', value: 'Flexo direct print, litho-lamination, digital for short runs' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, single-color flexo on kraft' },
    { label: 'Coatings', value: 'Aqueous, varnish, gloss or matte lamination on litho-laminated stock' },
    { label: 'Finishes', value: 'Spot UV and foil available on litho-laminated board' },
    { label: 'Add-ons', value: 'Header panels, tear-away perforations, hand holes, shelf talkers' },
    { label: 'Inserts', value: 'Corrugated partitions, pads, risers, fitment trays' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'Which flute should I choose for a retail display?',
      answer:
        'E-flute suits most counter and shelf displays — it is rigid enough for typical retail loads and creases cleanly for a tidy finish. Move to B or C flute when the assortment is heavy or the display must survive a stacked pallet. Use F-flute where the board should look thin, and double wall for floor bins and large free-standing units.',
    },
    {
      question: 'Why does my print look ribbed on corrugated?',
      answer:
        'That is the flute telegraphing through the liner. It is a physical consequence of printing onto a fluted board and shows most across large flat tonal areas and gradients. If the artwork depends on smooth photographic imagery, litho-lamination avoids it by printing the sheet before it is laminated to the board.',
    },
    {
      question: 'What is litho-lamination and when is it worth it?',
      answer:
        'A sheet is printed offset, then glued onto corrugated board. You get carton-grade print on a shipper-grade structure. It adds cost and a production stage, so it is worth specifying when print quality is doing commercial work — a brand-led display in a competitive aisle — and not worth it for a plain bulk bin.',
    },
    {
      question: 'Can a corrugated display be shipped already loaded?',
      answer:
        'That is what a shipper-display is for. It travels as a sealed case and converts to a display on arrival by tearing away a perforated lid or folding down a front panel. It removes a packing stage and means store staff do not assemble anything. The perforation strength is the detail that decides whether it works.',
    },
    {
      question: 'How much weight can a corrugated display hold?',
      answer:
        'There is no single figure, because it depends on flute, wall, liner grade, panel size, and how the load is distributed. Rather than publish a number that would not hold for your unit, we size the board against your actual product weight and run a loaded assembly check before the run completes.',
    },
    {
      question: 'Why are inside and outside dimensions different?',
      answer:
        'Corrugated has real thickness — a double-wall board can take most of an inch off internal width across a display. Our drawings always specify internal dimensions, because internal space is what has to fit your product. Supplying an external dimension without saying so is a common cause of a display that does not fit its assortment.',
    },
    {
      question: 'Does flute direction matter?',
      answer:
        'Considerably. Flutes running vertically in a wall panel carry far more compression than flutes running horizontally. On a floor-standing unit or anything that will be stacked, running the flutes the wrong way is the difference between a display that stays square through a promotion and one that racks out of shape.',
    },
    {
      question: 'Is corrugated recyclable?',
      answer:
        'Corrugated is among the most widely recycled packaging materials in the United States, and recycled content is standard in most grades. What compromises it is the finish on top — gloss plastic lamination, wax coating, or a plastic window move the pack out of the paper stream. Aqueous coating and paper-based windows keep it in.',
    },
    {
      question: 'Can I print the inside of the display?',
      answer:
        'Yes, and on a shipper-display it is often worth it, because the inner faces only become visible when the case is opened on the shop floor. It is a low-cost way to get brand presence on surfaces that would otherwise be blank kraft.',
    },
    {
      question: 'Will a corrugated display work on a counter, or is it only for floors?',
      answer:
        'It works on both. E and F flute are used for counter units regularly, particularly where the assortment is dense enough that boxboard would bow. The reason counter displays default to boxboard is print quality and thickness, not any rule against corrugated.',
    },
    {
      question: 'How do I stop a large display from bowing when it is full?',
      answer:
        'Usually by adding an internal riser or partition that transfers load from the base to the walls, rather than by moving to a heavier board. A partition is cheaper than a wall upgrade and often more effective, because it addresses where the load actually sits.',
    },
    {
      question: 'Can you match a Pantone color on kraft corrugated?',
      answer:
        'Approximately, not exactly. A kraft liner is brown, and ink is not opaque, so every color prints warmer and darker than it would on white. If a brand color must hold, specify a white top liner. If kraft is the look you want, we can proof the color on the actual liner so there are no surprises at run.',
    },
  ],

  related: [
    'cardboard-display-boxes',
    'cardboard-display-stands',
    'shelf-ready-display-boxes',
    'display-mailer-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
