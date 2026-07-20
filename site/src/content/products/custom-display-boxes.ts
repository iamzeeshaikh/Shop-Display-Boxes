import type { ProductContent } from '../../data/product-content';

/**
 * Intent: HEAD TERM. The buyer knows they need a display box and has not chosen
 * a style. This page's job is to orient and route — it is the widest page on
 * the site and the one that links out to the specific styles. Written as a
 * decision framework rather than as a product description.
 */
const content: ProductContent = {
  slug: 'custom-display-boxes',

  metaTitle: 'Custom Display Boxes | Built to Your Product & Artwork',
  metaDescription:
    'Custom display boxes made to your own dimensions and artwork, with free dielines. Choose the structure, board, and finish.',

  h1: 'Custom Display Boxes',

  summary:
    'A custom display box is one drawn around your product rather than chosen from a catalog of stock sizes. That matters because a display holding a product loosely is a display whose front row leans by the end of the first week. This page walks through the four decisions that determine what yours should be.',

  imageAlts: [
    {
      file: 'custom-display-boxes-1.png',
      alt: 'Group of custom printed display boxes in different structures and sizes',
    },
    {
      file: 'custom-display-boxes-2.png',
      alt: 'Custom display box shown open with product cartons standing in rows',
    },
    {
      file: 'custom-display-boxes-3.png',
      alt: 'Printed display box with a die-cut front window showing the product inside',
    },
    {
      file: 'custom-display-boxes-4.png',
      alt: 'Custom display tray printed in full color with a raised header panel',
    },
    {
      file: 'custom-display-boxes-5.png',
      alt: 'Flat-packed custom display box shown before assembly beside the erected unit',
    },
    {
      file: 'custom-display-boxes-6.png',
      alt: 'Custom counter display box with stepped tiers holding small retail units',
    },
    {
      file: 'custom-display-boxes-7.png',
      alt: 'Set of custom display boxes in kraft and white board finishes',
    },
  ],

  uses: [
    'Product launches that need packaging before a stock size exists for it',
    'Assortments where several SKUs share one display',
    'Retailer-specified displays built to a given footprint or planogram',
    'Seasonal and promotional runs with artwork that changes each cycle',
    'Products whose shape no off-the-shelf display holds securely',
  ],

  industries: [
    'Consumer brands entering physical retail for the first time',
    'Established brands refreshing an in-store presence',
    'Distributors supplying displays across a portfolio of lines',
    'Contract packers building displays on behalf of their clients',
  ],

  sections: [
    {
      heading: 'Decision one — where the display will sit',
      body: [
        'Placement determines more of the design than any other choice, because it sets the footprint you are allowed and the angle the shopper views from. A counter unit competes for a few square inches next to a register. A shelf unit has to fit a fixed shelf depth and height. A floor unit has its own footprint but must hold its shape under a full load for the length of a promotion.',
        'Decide this before anything else. A display designed without a placement in mind tends to end up as a shape that suits none of them.',
      ],
      link: {
        text: 'If the choice is between a countertop and a free-standing unit, the',
        href: '/counter-display-boxes-vs-floor-display-boxes/',
        anchor: 'counter versus floor comparison',
      },
    },
    {
      heading: 'Decision two — what the board has to carry',
      body: [
        'Folding boxboard is smoother, thinner, and prints more finely. Corrugated is thicker and carries load. The dividing line is not the product category but the weight of a full assortment relative to the size of the unsupported base.',
        'A practical test: load the display to its intended assortment and lift it by one edge. If the base bows, the front row will lean in store, and a leaning row stops selling. That is the point where the extra cost of corrugated stops being a preference.',
      ],
      link: {
        text: 'The full comparison of board types is on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Decision three — how the product is held',
      body: [
        'This is where custom work earns its cost. A stock display holds your product approximately; a custom insert holds it exactly. Cavity inserts suit small units that must stand upright, partitions suit units that would otherwise knock together, and stepped risers lift back rows into view.',
        'The tolerance is set from a physical sample rather than a drawing. Measurements from a spec sheet miss the details that decide fit — a cap flare, a tapered base, a wrap label adding a fraction of a millimeter all around.',
      ],
      points: [
        'Cavity inserts — individual wells, for tall or tip-prone units',
        'Partitions — separation for glass and for units that scuff each other',
        'Stepped risers — back rows raised into the shopper’s sightline',
        'Platforms — shallow lift for flat product in a low tray',
      ],
    },
    {
      heading: 'Decision four — print and finish',
      body: [
        'Offset litho gives the finest detail and the most reliable color, and suits runs long enough to absorb plate setup. Digital avoids that setup entirely, which makes it the sensible route for short runs and for versioned artwork. On corrugated, flexo prints directly and litho-lamination gives carton-grade print on a shipper-grade board.',
        'Finish is a durability decision as much as a visual one. Gloss lamination resists the scuffing that comes from restocking. Matte reads as more considered but shows handling marks on dark solids. Coatings also decide recyclability — an aqueous coat keeps board in the paper stream where a plastic laminate does not.',
      ],
      link: {
        text: 'Ink systems and when each is worth the setup are compared in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Dielines and artwork',
      body: [
        'Every custom job starts from a dieline drawn for your product, supplied as a layered vector file with cut, crease, and bleed separated. Place artwork onto that file rather than designing to a rectangle and fitting it afterward — designing before the dieline exists is the most common reason a job needs a reprint.',
        'Supply artwork as print-ready vector with fonts outlined, placed images at 300 DPI at final size, and a 3 mm bleed. Keep live copy clear of creases, because text crossing a fold breaks when the box is erected.',
      ],
      link: {
        text: 'We draw the dieline before you commit to anything — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'What drives the price',
      body: [
        'Four things, roughly in order: quantity, board, structural complexity, and finishing. Quantity dominates because setup — dieline, plates, press make-ready — is a fixed cost spread across the run. Doubling a small run rarely doubles its cost.',
        'Structural complexity is the one buyers underestimate. An extra glue point, an added insert, or a die-cut window each adds a production step, and steps cost more than material does at most quantities.',
      ],
      link: {
        text: 'Each cost driver is broken down in the guide to',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
    {
      heading: 'How a custom job runs',
      body: [
        'Specification and quote, then dieline, then artwork placement and proof, then production, then delivery. The stages that carry risk are the two approvals: the dieline approval fixes the structure, and the proof approval fixes the color. Changes after either are expensive, changes before both are free.',
        'A physical proof is worth the days it adds on anything where color matters commercially. Color on a screen and color on laminated board are different things.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Folding boxboard (SBS, kraft-back), single- and double-wall corrugated, litho-laminated board' },
    { label: 'Custom dimensions', value: 'Custom — drawn around your product sample' },
    { label: 'Board thickness', value: 'Depends on order specifications' },
    { label: 'Flute type', value: 'F, E, B, C single wall; BC and EB double wall' },
    { label: 'Printing methods', value: 'Offset litho, digital, flexo, litho-lamination' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, white ink on kraft' },
    { label: 'Coatings', value: 'Gloss or matte lamination, soft-touch, aqueous, UV varnish' },
    { label: 'Finishes', value: 'Foil stamping, spot UV, embossing, debossing' },
    { label: 'Add-ons', value: 'Header cards, windows, hang tabs, tear strips, hand holes' },
    { label: 'Inserts', value: 'Cavity inserts, partitions, risers, platforms' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    {
      question: 'What makes a display box “custom” rather than stock?',
      answer:
        'The dieline is drawn around your product instead of your product being fitted into an existing size. That covers dimensions, the insert that holds each unit, the structure, and the print. A stock box holds your product approximately; a custom one holds it where you placed it.',
    },
    {
      question: 'Where do I start if I have no idea what style I need?',
      answer:
        'Start with placement — counter, shelf, or floor — because it sets the footprint and the viewing angle, and those constrain everything else. Then board, then how the product is held, then print. Send us the product and where you want it to sit and we will suggest a structure.',
    },
    {
      question: 'Do you need a physical sample of my product?',
      answer:
        'For anything with an insert, yes. Drawings miss what decides fit: a cap flare, a tapered base, a wrap label adding a fraction of a millimeter. We can quote from dimensions, but we cut inserts from the real thing.',
    },
    {
      question: 'How much does a custom dieline cost?',
      answer:
        'Nothing. We draw the dieline for your product before you commit to a run, and it is yours as a layered vector file with cut, crease, and bleed on separate layers.',
    },
    {
      question: 'Can I supply my own dieline?',
      answer:
        'Yes. Send it as a layered vector file and we will check it against the board and structure you have chosen before anything goes to press. Dielines drawn for a different board caliper are the usual thing we find — thickness changes the allowances.',
    },
    {
      question: 'What is the cheapest way to reduce the price?',
      answer:
        'Increase the quantity, because setup is a fixed cost spread across the run. After that, simplify the structure — each extra glue point, insert, or die-cut window is a production step, and steps cost more than material at most quantities. Downgrading the board usually saves less than people expect.',
    },
    {
      question: 'Can one display hold several different products?',
      answer:
        'Yes, with a cavity insert carrying different well sizes or with separate tiers per SKU. Send a sample of every unit in the assortment — sizing around the largest and assuming the rest will sit still does not work in practice.',
    },
    {
      question: 'How many colors can I print?',
      answer:
        'Full-color CMYK is standard. Pantone spot inks are added where a brand color has to hold exactly across reprints, and white ink is available for printing onto kraft board. There is no practical limit that affects most jobs, though each additional spot ink adds a plate.',
    },
    {
      question: 'Will the display ship flat or assembled?',
      answer:
        'Flat, in most cases — it cuts freight cost and volume substantially. Pair that with an auto-lock or crash-lock bottom so store staff can erect it in one motion without tape or tools. Displays that ship pre-assembled or pre-loaded are possible where the structure and the destination justify it.',
    },
    {
      question: 'Can I see a sample before committing to a full run?',
      answer:
        'Samples are charged. The cost depends on the structure and whether the sample is plain or printed, so it is quoted alongside your job rather than listed as a flat fee. On a new structure it costs a fraction of a full run and is the only reliable way to find out that a product does not fit before the run is made.',
    },
    {
      question: 'What file format should artwork be supplied in?',
      answer:
        'Print-ready vector — PDF, AI, or EPS — with fonts outlined, placed images at 300 DPI at final size, and 3 mm bleed. Supply it placed on the dieline we send rather than as a flat rectangle, and keep live copy clear of creases.',
    },
    {
      question: 'What happens if the first run is not right?',
      answer:
        'That depends on what went wrong, which is why the two approval stages exist. Anything approved at dieline and at proof is what gets made. If production does not match the approved proof, that is on us. If the approved proof itself was wrong, a reprint is a new job — which is the argument for taking a physical proof seriously.',
    },
  ],

  related: [
    'retail-display-boxes',
    'counter-display-boxes',
    'cardboard-display-boxes',
    'cardboard-display-stands',
  ],

  updated: '2026-07-19',
};

export default content;
