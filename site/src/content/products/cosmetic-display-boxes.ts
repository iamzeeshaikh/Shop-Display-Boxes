import type { ProductContent } from '../../data/product-content';

/**
 * Intent: a beauty brand that needs display packaging holding small, tall,
 * tip-prone units upright on a busy counter. The angle throughout is unit
 * stability and cavity fit — the problems specific to cosmetics — rather than
 * general display box copy.
 */
const content: ProductContent = {
  slug: 'cosmetic-display-boxes',

  metaTitle: 'Cosmetic Display Boxes | Custom Counter Unit Packaging',
  metaDescription:
    'Custom cosmetic display boxes that hold lipsticks, glosses, and compacts upright on counter. Free dielines, low minimums.',

  h1: 'Custom Cosmetic Display Boxes',

  summary:
    'Cosmetic units are small, tall, and top-heavy. A display box that fits them loosely lets the front row tip within a day of going on counter, and a tipped row stops selling. These displays are built around the actual dimensions of your unit, so each piece sits where you placed it.',

  imageAlts: [
    {
      file: 'cosmetic-display-boxes-1.png',
      alt: 'Kraft cosmetic display box shown closed and open, with lip balm tubes lying in the open tray',
    },
    {
      file: 'cosmetic-display-boxes-2.png',
      alt: 'Counter display box holding upright rows of cosmetic tubes behind a low front panel',
    },
    {
      file: 'cosmetic-display-boxes-3.png',
      alt: 'Printed cosmetic display with a raised header card above two tiers of product',
    },
    {
      file: 'cosmetic-display-boxes-4.png',
      alt: 'Open cosmetic display box with divider inserts separating individual product cavities',
    },
    {
      file: 'cosmetic-display-boxes-5.png',
      alt: 'Compact cosmetic counter display shown from the side, showing the angled product tier',
    },
  ],

  uses: [
    'Lipstick, gloss, and liner units held upright in individual cavities',
    'Compacts and palettes laid flat in a shallow tiered tray',
    'Sachet and single-use samples at the register',
    'Limited-run seasonal sets that ship into stores as a complete unit',
    'Salon and spa retail shelves where the display doubles as the shipper',
  ],

  industries: [
    'Color cosmetics brands launching into specialty retail',
    'Skincare lines placing trial sizes at the counter',
    'Salon and professional beauty distributors',
    'Subscription beauty brands moving into physical retail',
  ],

  sections: [
    {
      heading: 'Why cosmetic units need a different display structure',
      body: [
        'Most display boxes are designed around a box-shaped product. Cosmetics are not. A lipstick is roughly 20 mm across and 80 mm tall, which gives it a high center of gravity and almost no footprint. Drop that into a display sized with a generous tolerance and it leans. Once the front row leans, shoppers stop reaching for it.',
        'The fix is dimensional, not decorative. Cavities are cut to the unit with a tolerance tight enough to hold it upright and loose enough that a shopper can lift one out with one hand. That tolerance is the single most important number on a cosmetic display drawing, and it is set from your actual sample rather than from a nominal size on a spec sheet.',
      ],
      points: [
        'Tall, narrow units need cavity support, not just a perimeter wall',
        'Glass and metal components load the base more than the same size in plastic',
        'A shopper must be able to remove one unit without disturbing the row',
      ],
      link: {
        text: 'If you are still deciding between a counter unit and a floor-standing one, the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'comparison of counter and floor displays',
      },
    },
    {
      heading: 'Structural options',
      body: [
        'Three structures cover most cosmetic launches. A tray with a low front panel suits units you want shoppers to pick up and inspect. A tiered display raises the back rows so a full assortment reads from standing height. A closed box with a die-cut front window protects the units while still showing the range, which suits open-stock testers less well but travels better.',
        'Each of these can carry a header card. The header is the part a shopper sees from across an aisle, so it holds the brand mark and the range name rather than ingredient copy.',
      ],
      points: [
        'Open tray with a low front lip — easy pick-up, maximum product visibility',
        'Two- or three-tier riser — full assortment visible from standing height',
        'Windowed front panel — protects units, suits sealed product',
        'Header card — printed both sides where the display sits away from a wall',
      ],
    },
    {
      heading: 'Materials for cosmetic displays',
      body: [
        'Folding boxboard from around 14 pt to 24 pt covers most counter displays holding plastic or lightweight units. It takes fine print detail well, which matters when a small header card has to carry a logo cleanly.',
        'Once glass enters the assortment — dropper bottles, glass jars, heavier compacts — the base needs more support than boxboard gives. E-flute corrugated adds stiffness under load without much added thickness, and litho-laminating a printed sheet onto it keeps the print quality of boxboard on a stronger base.',
      ],
      link: {
        text: 'The trade-offs between board types are set out in full on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Printing and finish',
      body: [
        'Beauty packaging lives or dies on color consistency, because a shopper compares the display against the unit in their hand and against the brand they saw online. Where a brand color has to match exactly across a run, a Pantone spot ink holds it more reliably than a CMYK build.',
        'Finish choice affects handling as much as looks. A matte laminate reads as premium and hides handling marks, but shows fingerprints on dark solids. Gloss lifts color saturation and resists scuffing on a display that will be restocked repeatedly. Soft-touch adds a distinct tactile quality and is the most easily marked of the three.',
      ],
      points: [
        'CMYK for photographic imagery and multi-color artwork',
        'Pantone spot color where a brand color must hold across reprints',
        'Foil stamping and spot UV for selective emphasis on a header',
        'Embossing on a header card, where board caliper supports it',
      ],
      link: {
        text: 'Ink systems and when each is worth the setup are covered in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Inserts and cavity fit',
      body: [
        'Inserts do the actual work of holding cosmetics in place. A die-cut board insert with individual cavities is the most common approach and the cheapest to tool. A folded platform raises units toward the shopper and suits shallow trays. Corrugated partitions suit heavier glass, where the goal is to stop units knocking together in transit.',
        'Send a physical sample of the unit before the insert is cut. Measurements taken from a drawing miss the details that matter — a cap flare, a tapered base, a label that adds a fraction of a millimeter all around.',
      ],
    },
    {
      heading: 'Artwork and dielines',
      body: [
        'Work starts from a dieline drawn for your unit, supplied as a layered vector file with the cut, crease, and bleed on separate layers. Place artwork on that file rather than designing to a rectangle and fitting it afterward, which is where most reprints originate.',
        'Supply artwork as print-ready vector with fonts outlined, images at 300 DPI at final size, and a 3 mm bleed. Keep live copy clear of creases — text that crosses a fold will break when the box is erected.',
      ],
      link: {
        text: 'File setup requirements are listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'Production and quality checks',
      body: [
        'Production runs in sequence: dieline approval, print proof, print, laminate or coat, die-cut, glue, and fold. Each stage is checked against the approved proof rather than against the previous stage, so a drift does not carry forward.',
        'A physical proof before the full run is worth the days it adds on a cosmetic display. Color on a screen and color on laminated board are different things, and a header card is exactly where that difference shows.',
      ],
      points: [
        'Dieline approved against your physical unit sample',
        'Print proof checked for color against the supplied reference',
        'Fit check — units loaded into the erected display before the run completes',
        'Assembly check that the display erects without tools',
      ],
    },
    {
      heading: 'Sustainability choices',
      body: [
        'Board is recyclable where it has not been laminated with a plastic film. If end-of-life recyclability matters for a retailer specification, an aqueous or varnish coating keeps the board in the paper stream where a gloss laminate does not.',
        'Recycled content is available in both boxboard and corrugated. Recycled board has a warmer, less uniform surface than virgin stock, which suits some beauty brands and works against others — worth seeing on a sample before committing a launch to it.',
      ],
      link: {
        text: 'Coating and recyclability combinations are set out under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard (SBS, kraft-back), E-flute corrugated, litho-laminated board' },
    { label: 'Custom dimensions', value: 'Custom — built to your unit sample' },
    { label: 'Board thickness', value: 'Typically 14 pt to 24 pt boxboard; specified per job' },
    { label: 'Flute type', value: 'E-flute or F-flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital; flexo on corrugated' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, soft-touch, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing, debossing' },
    { label: 'Add-ons', value: 'Header cards, hang tabs, die-cut windows, tear strips' },
    { label: 'Inserts', value: 'Die-cut cavity inserts, folded platforms, corrugated partitions' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'How tight should the cavity be around a lipstick or gloss unit?',
      answer:
        'Tight enough that the unit stands without leaning, loose enough that a shopper lifts it out one-handed. The exact tolerance depends on the unit, which is why we cut the insert from a physical sample rather than from a drawing. A cap flare or a wrap label can add a fraction of a millimeter that a spec sheet does not show.',
    },
    {
      question: 'Can one display hold several different cosmetic units?',
      answer:
        'Yes. Mixed assortments are usually handled with a die-cut insert carrying different cavity sizes, or with separate tiers per unit type. Send a sample of every unit in the assortment — sizing the insert around the largest one and hoping the rest sit still does not work in practice.',
    },
    {
      question: 'Will a cosmetic display box hold glass bottles and jars?',
      answer:
        'It can, but not in plain folding boxboard at typical counter-display calipers. Glass loads the base far more than plastic of the same size. For glass assortments we move to E-flute corrugated, usually litho-laminated so the print quality stays where you want it.',
    },
    {
      question: 'Do I need a header card?',
      answer:
        'Only if the display sits somewhere shoppers approach from a distance. On a checkout counter that a shopper is already standing at, a header adds height and cost without adding much. In an aisle or on a back-bar shelf, the header is what gets the display noticed at all.',
    },
    {
      question: 'How do I keep a brand color consistent across reprints?',
      answer:
        'Specify it as a Pantone spot ink rather than a CMYK build. A four-color build of a brand color shifts with press conditions, stock, and coating; a spot ink is mixed to the reference. If the color also appears on the unit itself, supply that unit as the color reference so the display is matched to it.',
    },
    {
      question: 'Which finish holds up best on a display that gets restocked often?',
      answer:
        'Gloss lamination. It resists the scuffing that comes from hands reaching in and stock being replaced repeatedly. Matte looks more premium but shows handling marks on dark solids, and soft-touch marks most easily of the three.',
    },
    {
      question: 'Can the display double as the shipping carton?',
      answer:
        'For lighter assortments, yes — a corrugated display that ships loaded and opens on counter avoids a second pack. For glass or for long transit, we would normally still recommend an outer shipper, because a display strong enough to survive freight on its own is heavier than it needs to be on counter.',
    },
    {
      question: 'What artwork do you need to start?',
      answer:
        'A print-ready vector file — PDF, AI, or EPS — with fonts outlined, any placed images at 300 DPI at final size, and 3 mm bleed. If you do not have a dieline yet, we draw one for your unit first and you place artwork onto it.',
    },
    {
      question: 'Is recycled board suitable for beauty packaging?',
      answer:
        'It is available in both boxboard and corrugated, and it prints well. The surface is warmer and less uniform than virgin stock, which reads as a deliberate choice for some brands and looks like a compromise for others. See it on a sample before a launch is committed to it.',
    },
    {
      question: 'Can I get a sample before ordering a full run?',
      answer:
        'Samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted alongside your job rather than listed as a flat fee. On a new structure it costs a fraction of a full run and is the only reliable way to find out that a product does not fit before the run is made.',
    },
    {
      question: 'How is the price affected if I reduce the quantity?',
      answer:
        'Setup costs — dieline, plates, press make-ready — are spread across the run, so a smaller run carries more of that cost per piece. This is why the starting price applies to large-volume orders. Reducing quantity raises the per-piece price rather than lowering the total proportionally.',
    },
    {
      question: 'Do you print regulatory or ingredient copy on the display?',
      answer:
        'We print whatever artwork you supply, including ingredient and regulatory copy. Responsibility for the accuracy and compliance of that copy stays with you — we do not review artwork for regulatory compliance in your market.',
    },
  ],

  related: [
    'counter-display-boxes',
    'cardboard-counter-display-units',
    'display-trays',
    'bath-bomb-display-boxes',
  ],

  updated: '2026-07-19',
};

export default content;
