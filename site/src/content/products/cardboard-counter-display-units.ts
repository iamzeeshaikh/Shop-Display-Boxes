import type { ProductContent } from '../../data/product-content';

/**
 * Intent: PRODUCT TYPE — the assembled CDU as a trade item. Deliberately kept
 * distinct from /counter-display-boxes/ (which is written about placement and
 * footprint): this page is about the unit as a specified, ordered assembly —
 * base, header, tiers, and the terminology trade buyers use.
 */
const content: ProductContent = {
  slug: 'cardboard-counter-display-units',

  metaTitle: 'Cardboard Counter Display Units | Custom CDU Packaging',
  metaDescription:
    'Custom cardboard counter display units with printed header cards, tiered inserts, and fast one-motion in-store assembly.',

  h1: 'Cardboard Counter Display Units',

  summary:
    'A counter display unit is specified as an assembly rather than as a box: a base that holds the assortment, tiers that present it, and a header card that carries the brand. Buyers who work to a retailer brief usually order by that specification, and this page is written to be quoted against directly.',

  imageAlts: [
    {
      file: 'cardboard-counter-display-units-1.png',
      alt: 'Cardboard counter display unit with a printed header card above two product tiers',
    },
    {
      file: 'cardboard-counter-display-units-2.png',
      alt: 'CDU shown from the side, showing the stepped tier structure inside the base',
    },
    {
      file: 'cardboard-counter-display-units-3.png',
      alt: 'Printed counter display unit loaded with small retail cartons in rows',
    },
    {
      file: 'cardboard-counter-display-units-4.png',
      alt: 'Counter display unit shown flat-packed beside the assembled unit',
    },
    {
      file: 'cardboard-counter-display-units-5.png',
      alt: 'Counter display unit base with the tier insert lifted out to show construction',
    },
  ],

  uses: [
    'Retailer-briefed units specified by footprint, tier count, and facings',
    'Brand assortments needing a header card for identification at the counter',
    'Distributor programs where one CDU format runs across several SKUs',
    'Trade-show and wholesale ordering where units ship as a countable item',
    'Promotional units replaced on a fixed cycle with new header artwork',
  ],

  industries: [
    'Wholesale and distribution businesses supplying independent retail',
    'Convenience and forecourt suppliers',
    'Health and supplement brands in pharmacy chains',
    'Confectionery and impulse-line suppliers',
  ],

  sections: [
    {
      heading: 'What a CDU is, as a specification',
      body: [
        'CDU stands for counter display unit. In trade use it describes an assembly rather than a single box: a base that sits on the counter, an internal tier or insert that positions the product, and usually a header card standing above the back panel.',
        'That distinction matters commercially, because a CDU is quoted, ordered, and counted as one unit even though it is several components. When a retailer brief asks for a CDU, it is asking for the whole assembly delivered ready to place, not for a tray you fill afterward.',
      ],
      points: [
        'Base — the structural component that carries the assortment',
        'Tier or insert — positions product and sets the presentation angle',
        'Header card — brand identification, visible above the product line',
        'Optional outer — protects the assembly in transit',
      ],
    },
    {
      heading: 'Specifying tiers and facings',
      body: [
        'The two numbers a CDU brief usually contains are tier count and facings per tier. Together they set how much stock the unit holds and how the assortment reads to a shopper.',
        'More tiers means more stock and a taller unit; more facings per tier means a wider one. Since a retailer is conceding counter footprint, height is generally the cheaper direction to grow. Two or three tiers covers most counter briefs before the unit becomes unstable.',
      ],
      link: {
        text: 'How footprint limits get negotiated in the first place is covered on the',
        href: '/counter-display-boxes/',
        anchor: 'counter display boxes page',
      },
    },
    {
      heading: 'The header card',
      body: [
        'On a CDU the header is not optional decoration — it is the component that identifies the unit in a crowded counter environment and, in a wholesale context, the part that carries the offer.',
        'Header artwork is also the element most likely to change between production runs, since the base and tiers stay constant while promotions rotate. Where that is the pattern, specifying the header as a separately printed component lets you reprint it alone rather than retooling the whole unit.',
      ],
    },
    {
      heading: 'Assembly and delivery format',
      body: [
        'CDUs ship flat in almost every case, because an assembled unit is mostly air and freight is charged on volume. The design job is making the flat pack assemble in one motion — a lock-bottom base, a tier that drops into a located position, and a header that slots without adhesive.',
        'Where a distributor is assembling and filling units before onward supply, the assembly sequence matters differently: the unit needs to be fillable before the header goes on, so it can be loaded flat rather than through a narrow opening.',
      ],
      points: [
        'Lock-bottom base erecting without tape or tools',
        'Tier insert located so it cannot be fitted the wrong way round',
        'Slot-fit header requiring no adhesive',
        'Filling sequence agreed where a distributor loads before dispatch',
      ],
    },
    {
      heading: 'Board choice for a CDU',
      body: [
        'Folding boxboard covers most counter units and gives the finest print on the header, which is the component doing the most visual work. E-flute corrugated is used where the assortment is dense, or where the base has to survive being filled and moved repeatedly by a distributor.',
        'A common and sensible split is a corrugated base with a boxboard header, taking structure from one material and print quality from the other.',
      ],
      link: {
        text: 'Where board weight stops being sufficient is set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Running one CDU format across several SKUs',
      body: [
        'Distributors frequently want one base and tier tooling to serve a whole portfolio, with only the header and the product changing. This is a considerable saving, and it works as long as the SKUs are close enough in size that one tier holds them all securely.',
        'Where they are not, the honest options are separate tier inserts against a shared base, or accepting a second tooling. Forcing dissimilar SKUs into one insert produces a unit that holds some products well and lets others fall over.',
      ],
    },
    {
      heading: 'Ordering and reordering',
      body: [
        'Because a CDU is a repeat item for most buyers, the useful thing to settle at first order is what stays fixed and what changes. Base and tier tooling is the fixed investment; header artwork and quantity are the variables.',
        'Keeping the approved dieline and the header specification on file means a reorder becomes a print job rather than a new development, which is where most of the cost and the lead time on a first order actually sits.',
      ],
      link: {
        text: 'What happens at each stage of an order is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard, E-flute corrugated, mixed board and corrugated assemblies' },
    { label: 'Custom dimensions', value: 'Custom — built to the brief footprint and assortment' },
    { label: 'Board thickness', value: 'Typically 18 pt to 28 pt boxboard; flute grade where corrugated' },
    { label: 'Flute type', value: 'E-flute or F-flute where corrugated is used' },
    { label: 'Printing methods', value: 'Offset litho, digital for short runs, flexo on corrugated' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing on header cards' },
    { label: 'Add-ons', value: 'Printed header cards, shelf talkers, transit outers, tear strips' },
    { label: 'Inserts', value: 'Tier inserts, cavity wells, dividers, risers' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'What does CDU stand for?',
      answer:
        'Counter display unit. In trade use it means the whole assembly — base, tier or insert, and header card — rather than a single box. When a retailer brief asks for a CDU, it is asking for a unit delivered ready to place, not a tray you fill afterward.',
    },
    {
      question: 'How is a CDU different from a counter display box?',
      answer:
        'Mostly in how it is specified and ordered. A counter display box is the box itself. A CDU is an assembly quoted and counted as one unit, usually with a header card and a defined tier structure, and usually written into a retailer or distributor brief with a tier count and facings.',
    },
    {
      question: 'How many tiers should a CDU have?',
      answer:
        'Two or three covers most counter briefs. Beyond that the unit gets tall enough to become unstable on a counter and to attract objections from the retailer. If the assortment needs more, the honest answer is a floor-standing unit rather than a taller CDU.',
    },
    {
      question: 'Can I reprint just the header card?',
      answer:
        'Yes, and if your promotions rotate while the assortment stays constant, specify the header as a separate printed component from the start. Reprinting a header is a print job; retooling a whole unit is a development job. The saving over a few cycles is substantial.',
    },
    {
      question: 'Can one CDU format hold different products?',
      answer:
        'If the SKUs are close enough in size that one tier holds them all securely, yes — and it saves a tooling investment. Where they are not, use separate tier inserts against a shared base. Forcing dissimilar SKUs into one insert gives you a unit that holds some products and drops others.',
    },
    {
      question: 'Do CDUs ship flat or assembled?',
      answer:
        'Flat, in almost every case — an assembled unit is mostly air and freight is charged on volume. The design work goes into making the flat pack erect in one motion: a lock-bottom base, a tier that can only drop in one way, and a slot-fit header needing no adhesive.',
    },
    {
      question: 'We fill units before sending them to stores. Does that change the design?',
      answer:
        'It does. If you are loading units before dispatch, the unit needs to be fillable while flat or open, rather than through a narrow opening once the header is fitted. Tell us the filling sequence at quoting stage and the assembly order gets designed around it.',
    },
    {
      question: 'Should the base be boxboard or corrugated?',
      answer:
        'Boxboard for most counter assortments. E-flute corrugated where the stock is dense, or where a distributor will fill and move the unit repeatedly before it reaches a store. A common split is a corrugated base with a boxboard header — structure from one, print quality from the other.',
    },
    {
      question: 'What information do you need to quote a CDU?',
      answer:
        'Footprint limit if the retailer has given you one, the product dimensions and weight, tier count and facings if the brief specifies them, and whether the header artwork will change between runs. That is enough to quote against without further back and forth.',
    },
    {
      question: 'Do you supply a transit outer with the CDU?',
      answer:
        'Where the unit needs one, yes. Whether it does depends on how it travels and whether it ships filled. A flat-packed empty CDU going to a distributor usually does not need one; a filled unit going to a store generally does.',
    },
    {
      question: 'How do reorders work?',
      answer:
        'Once the dieline and header specification are approved and on file, a reorder is a print job rather than a new development. Most of the cost and lead time on a first CDU order sits in that development, so the second order is a different proposition from the first.',
    },
    {
      question: 'Can the tier insert be removed for restocking?',
      answer:
        'It can be designed that way, and it is worth doing where the unit will be refilled in store rather than replaced. A tier that lifts out lets someone reload the unit from above instead of feeding product in through a front opening.',
    },
  ],

  related: [
    'counter-display-boxes',
    'cardboard-display-stands',
    'retail-display-boxes',
    'display-trays',
  ],

  updated: '2026-07-19',
};

export default content;
