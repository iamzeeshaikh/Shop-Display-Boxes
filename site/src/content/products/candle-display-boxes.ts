import type { ProductContent } from '../../data/product-content';

/**
 * Intent: INDUSTRY. The governing constraint is glass vessel weight — a candle
 * display fails at the base long before it fails anywhere else. Written around
 * load per square inch, which no other industry page covers.
 */
const content: ProductContent = {
  slug: 'candle-display-boxes',

  metaTitle: 'Candle Display Boxes | Built for Glass Vessel Weight',
  metaDescription:
    'Candle display boxes engineered for glass jar weight, with reinforced bases and cavity inserts that stop vessels knocking.',

  h1: 'Candle Display Boxes',

  summary:
    'A candle display is a weight problem before it is a design problem. A filled glass jar is dense, and a display holding a dozen of them concentrates more load on its base than almost any other retail format at the same footprint. Get the base wrong and the display bows within a week.',

  imageAlts: [
    {
      file: 'candle-display-boxes-1.png',
      alt: 'Printed candle display box holding glass jar candles upright in a single row',
    },
    {
      file: 'candle-display-boxes-2.png',
      alt: 'Candle display with divider inserts separating each glass vessel',
    },
    {
      file: 'candle-display-boxes-3.png',
      alt: 'Kraft candle display box shown open with tin candles inside',
    },
    {
      file: 'candle-display-boxes-4.png',
      alt: 'Candle display box with a raised header panel above two rows of jars',
    },
    {
      file: 'candle-display-boxes-5.png',
      alt: 'Individual candle box shown beside the multi-unit display it ships in',
    },
    {
      file: 'candle-display-boxes-6.png',
      alt: 'Candle display viewed from above showing the cavity layout for each jar',
    },
    {
      file: 'candle-display-boxes-7.png',
      alt: 'Printed candle display box with a die-cut front revealing the jar labels',
    },
  ],

  uses: [
    'Glass jar candles presented upright with labels facing forward',
    'Tin and travel candles in multi-unit counter displays',
    'Seasonal candle assortments shipped as a complete unit',
    'Gift sets pairing candles with smaller accessories',
    'Wholesale displays supplied to independent gift retail',
  ],

  industries: [
    'Home fragrance and candle brands',
    'Gift and homeware retail suppliers',
    'Spa and wellness product lines',
    'Craft and artisan makers selling wholesale',
  ],

  sections: [
    {
      heading: 'Start from the weight, not the size',
      body: [
        'A filled glass candle jar is heavy relative to its footprint, and that ratio is what matters. Twelve jars in a display can concentrate a load on an unsupported base that folding boxboard simply will not hold over time.',
        'The failure mode is gradual, which is what makes it dangerous. The base holds fine when the display is filled on day one, then bows over the following week as the board creeps under sustained compression. By the time anyone notices, the display is in a store looking neglected.',
      ],
      points: [
        'Weigh a filled unit — the empty vessel weight is not the number that matters',
        'Multiply by the intended assortment and check the unsupported base span',
        'Assume sustained load, not instantaneous load',
      ],
    },
    {
      heading: 'Board specification',
      body: [
        'For anything beyond a few lightweight tins, corrugated is the honest answer. E-flute handles small counter displays of modest assortments; B-flute and above come in as jar count or vessel size rises.',
        'Where print quality matters — and for a gift-led category it usually does — litho-lamination gives the finish of a printed carton on a corrugated structure. That combination costs more than plain boxboard and is what stops a candle display looking cheap while still carrying the load.',
      ],
      link: {
        text: 'Flute selection against load is set out on the',
        href: '/corrugated-display-boxes/',
        anchor: 'corrugated display boxes page',
      },
    },
    {
      heading: 'Stopping glass from knocking',
      body: [
        'Glass against glass chips, and a chipped jar is unsellable. In transit, and every time a shopper puts a jar back, vessels move. A display with a single open well lets them do that freely.',
        'Cavity inserts or partitions solve it by giving every vessel its own space. For a candle display this is a protection requirement rather than a merchandising nicety — it is the difference between delivering twelve saleable units and eleven.',
      ],
    },
    {
      heading: 'Presenting the label',
      body: [
        'Candle buying is driven by scent name and brand, and both live on a wrap label around the jar. A display that holds jars too deeply, or with walls too high, hides exactly the information the purchase depends on.',
        'The workable arrangement keeps the label band clear of the display wall, usually with a low front and a cut-down or angled front panel. Where the assortment is more than one row deep, a stepped riser lifts the back rows so their labels stay readable rather than obscured by the row in front.',
      ],
    },
    {
      heading: 'Lids, dust, and open display',
      body: [
        'Candles are frequently displayed with the vessel lid on and the shopper expected to open it to smell the product. That means lids get removed and replaced repeatedly, and the display needs enough clearance for a hand to do that without lifting the jar out.',
        'It also means wax surfaces are exposed to dust in store. Where that is a concern, a display with a shallow closed top or a windowed front gives some protection while keeping the assortment visible.',
      ],
    },
    {
      heading: 'Shipping candles in their display',
      body: [
        'Glass and freight are an unforgiving combination. A display that will ship loaded needs partition support between vessels, adequate top clearance so jars are not bearing the weight of whatever is stacked above, and usually an outer shipper.',
        'Where volumes justify it, shipping the display flat and the candles separately is often cheaper and safer, at the cost of someone assembling and filling in store.',
      ],
      link: {
        text: 'How consignments travel and what that implies for packing is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Sustainability for a gift-led category',
      body: [
        'Candle buyers respond to natural, uncoated materials, and kraft board with a simple one- or two-color print reads as considered rather than cheap in this category — one of the few where the sustainable choice and the premium choice point the same way.',
        'If the display is laminated for durability, it leaves the paper recycling stream. An aqueous coating or varnish protects the surface while keeping the board recyclable, which matters more here than in most categories because the end buyer is often paying attention to it.',
      ],
      link: {
        text: 'Coating and recyclability combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
  ],

  specs: [
    { label: 'Materials', value: 'E and B flute corrugated, litho-laminated board, kraft board for lighter units' },
    { label: 'Custom dimensions', value: 'Custom — built around your filled vessel' },
    { label: 'Board thickness', value: 'Depends on order specifications — set by filled unit weight' },
    { label: 'Flute type', value: 'E-flute for small assortments; B-flute or double wall as jar count rises' },
    { label: 'Printing methods', value: 'Offset litho, litho-lamination, flexo, digital for short runs' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white or single-color on kraft' },
    { label: 'Coatings', value: 'Aqueous, varnish, gloss or matte lamination on litho-laminated stock' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing on laminated panels' },
    { label: 'Add-ons', value: 'Header cards, die-cut fronts, windows, stepped risers' },
    { label: 'Inserts', value: 'Cavity inserts, corrugated partitions, base pads' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'Why do candle displays bow at the base?',
      answer:
        'Because a filled glass jar is dense relative to its footprint, and paperboard creeps under sustained load. The base holds when filled on day one and bows over the following week. It is gradual, which is why it usually gets noticed only once the display is already in a store.',
    },
    {
      question: 'What weight should I give you when asking for a quote?',
      answer:
        'The weight of a filled vessel, not an empty one, multiplied by the assortment you intend the display to hold. The empty jar weight is the figure most often supplied and it is not the one that determines the board specification.',
    },
    {
      question: 'Can a candle display be made from plain cardboard?',
      answer:
        'Only for lightweight tins or very small assortments. For glass jars in any quantity, folding boxboard will not hold the base flat over time. E-flute corrugated is the practical starting point, moving to B-flute or double wall as jar count and vessel size increase.',
    },
    {
      question: 'How do I stop jars chipping against each other?',
      answer:
        'Cavity inserts or partitions, so every vessel has its own space. Glass against glass chips in transit and every time a shopper replaces a jar. On this format the insert is a protection requirement, not a merchandising extra — it is the difference between twelve saleable units and eleven.',
    },
    {
      question: 'Can the display still look premium if it is corrugated?',
      answer:
        'Yes, through litho-lamination — a sheet printed offset then laminated to the corrugated board. You get carton-grade print on a structure that carries the weight. It costs more than plain boxboard and is what keeps a candle display from looking cheap while still holding up.',
    },
    {
      question: 'How high should the display walls be?',
      answer:
        'Low enough that the jar label stays visible, since scent name and brand drive the purchase and both live on that wrap label. A display that hides the label band has hidden the reason someone would buy. Use a cut-down or angled front, and a stepped riser for back rows.',
    },
    {
      question: 'Shoppers open the lids to smell the candles. Does that affect the design?',
      answer:
        'It does. There needs to be enough clearance above and around each jar for a hand to remove and replace a lid without lifting the vessel out of the display. Cavities sized tightly to the jar body without that clearance make the display awkward to shop.',
    },
    {
      question: 'Can the display ship with the candles already inside?',
      answer:
        'It can, with partitions between vessels, top clearance so jars do not carry stacked weight, and usually an outer shipper. Glass and freight are unforgiving. Where volume allows, shipping the display flat and the candles separately is often cheaper and safer.',
    },
    {
      question: 'Is kraft board a good choice for candle displays?',
      answer:
        'In this category, often yes. Candle buyers respond to natural uncoated materials, and kraft with a simple one- or two-color print reads as considered rather than cheap. It is one of the few categories where the sustainable option and the premium option point the same direction.',
    },
    {
      question: 'Will a laminated finish stop the display being recyclable?',
      answer:
        'A plastic film laminate takes the board out of the paper recycling stream in most municipalities. An aqueous coating or varnish gives surface protection while keeping it recyclable. That matters more in this category than most, because candle buyers tend to be paying attention.',
    },
    {
      question: 'How many candles should one display hold?',
      answer:
        'Enough to look full and few enough that the base span stays supportable. Those two pull against each other, and where they conflict, the base wins — a display that bows undermines the product far more than a smaller assortment does.',
    },
    {
      question: 'Do you supply individual candle boxes as well as the display?',
      answer:
        'Yes, and where both are needed it is worth designing them together, so the individual box dimensions and the display cavity are drawn from the same figures rather than reconciled afterward.',
    },
  ],

  related: [
    'soap-display-boxes',
    'display-gift-boxes',
    'corrugated-display-boxes',
    'cosmetic-display-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
