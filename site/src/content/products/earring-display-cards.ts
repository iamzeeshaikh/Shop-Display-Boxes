import type { ProductContent } from '../../data/product-content';

/** Intent: INDUSTRY. Governing constraint is hole spacing and card caliper — a card, not a box. */
const content: ProductContent = {
  slug: 'earring-display-cards',

  metaTitle: 'Earring Display Cards | Custom Printed Jewelry Cards',
  metaDescription:
    'Custom earring display cards with correct hole spacing, hang tabs, and card stock heavy enough to hold posts without bending.',

  h1: 'Earring Display Cards',

  summary:
    'An earring card is the smallest thing we print and the least forgiving. Hole spacing has to match the earring, the caliper has to hold a post without flexing, and the whole card has to survive a peg hook and a lot of handling without creasing.',

  imageAlts: [
    { file: 'earring-display-cards-1.png', alt: 'Printed earring display cards with stud earrings mounted through punched holes' },
    { file: 'earring-display-cards-2.png', alt: 'Kraft earring card with a hang tab and drop earrings attached' },
    { file: 'earring-display-cards-3.png', alt: 'Set of earring display cards in several sizes and print finishes' },
    { file: 'earring-display-cards-4.png', alt: 'Earring card shown from the back, showing butterfly backs and brand information' },
  ],

  uses: [
    'Stud and post earrings mounted through punched holes',
    'Drop and hook earrings hung through slots or holes',
    'Peg-hook display in retail and market environments',
    'Cards doubling as the brand’s primary packaging for small jewelry',
    'Wholesale supply to boutique and gift retail',
  ],

  industries: [
    'Handmade and artisan jewelry makers',
    'Fashion accessory brands',
    'Gift and boutique retail suppliers',
    'Craft fair and market sellers',
  ],

  sections: [
    {
      heading: 'Hole spacing and placement',
      body: [
        'The two holes have to match the earring pair — far enough apart that the earrings do not touch, close enough that the pair reads as a set, and placed so the earrings hang without fouling the card edge or the hang tab.',
        'This is set from a physical sample. Drop earrings in particular need the drop length measured, because a hole placed too low means the earrings hang past the bottom edge of the card and snag on everything.',
      ],
      points: [
        'Spacing matched to the pair so they neither touch nor read as separate',
        'Placement checked against drop length for hook and dangle styles',
        'Clearance kept from the hang tab and the card edges',
      ],
    },
    {
      heading: 'Caliper — heavier than people expect',
      body: [
        'A card too light bends as soon as a post goes through it, and a bent card makes good jewelry look cheap. Earring cards want noticeably heavier stock than most printed items of the same size.',
        'Heavier stock also holds up on a peg hook, where the card carries its own weight plus the earrings from a single punched hole. That hole is the failure point on a light card.',
      ],
    },
    {
      heading: 'Hang tabs and peg display',
      body: [
        'A punched hole for a peg hook is the simplest option and the weakest, since all the load concentrates at one point. A reinforced hang tab — an additional adhesive tab or a die-cut shape with more material around the hole — spreads it.',
        'Where cards are displayed flat in a tray rather than hung, the tab can be omitted entirely, which gives more usable card area for branding.',
      ],
      link: {
        text: 'Tray formats for flat presentation are covered on the',
        href: '/display-trays/',
        anchor: 'display trays page',
      },
    },
    {
      heading: 'Printing both sides',
      body: [
        'The back of an earring card is visible on a peg display when cards hang in a row, and it is the surface a customer sees while taking the earrings off the card at home.',
        'Printing it costs little and is the natural place for material information, care instructions, and brand or social details. Leaving it blank is a missed surface on a product that has very little surface to begin with.',
      ],
    },
    {
      heading: 'Board and finish',
      body: [
        'Uncoated stock suits handmade and artisan positioning, takes a pen for hand-written pricing or sizing, and is easy to punch cleanly. Coated and laminated stock is more durable and resists the finger-marking that comes from repeated handling on a market stall.',
        'Where a card is handled heavily, a matte laminate on the front and uncoated on the back is a practical split — durability where it shows, writability where it helps.',
      ],
      link: {
        text: 'Finish options and their handling characteristics are listed under',
        href: '/finishes-and-add-ons/',
        anchor: 'finishes and add-ons',
      },
    },
    {
      heading: 'Small-run economics',
      body: [
        'Earring cards are usually ordered in relatively small quantities against a wide range of designs, which makes digital printing the natural route — no plate setup, and versioning between designs costs nothing.',
        'Because the piece is small, many designs gang onto a single sheet efficiently, so ordering several designs at once is usually far cheaper per card than ordering them separately over time.',
      ],
    },
  ],

  specs: [
    { label: 'Materials', value: 'Heavyweight card stock, uncoated and coated; kraft and recycled options' },
    { label: 'Custom dimensions', value: 'Custom — hole spacing set from a physical earring sample' },
    { label: 'Board thickness', value: 'Heavier than typical print work — specified per job to resist flexing' },
    { label: 'Flute type', value: 'Not applicable — earring cards are a single-ply card product' },
    { label: 'Printing methods', value: 'Digital for short runs and multiple designs; offset litho at volume' },
    { label: 'Color options', value: 'CMYK process, Pantone spot colors, single-color on kraft' },
    { label: 'Coatings', value: 'Uncoated, matte or gloss lamination, soft-touch' },
    { label: 'Finishes', value: 'Foil stamping, embossing, spot UV, rounded corners' },
    { label: 'Add-ons', value: 'Punched hang holes, reinforced hang tabs, die-cut shapes, slots' },
    { label: 'Inserts', value: 'Not applicable — supplied as printed cards' },
    { label: 'Minimum order quantity', value: '100 units minimum' },
    { label: 'Samples', value: 'Charged — quoted with your job' },
    { label: 'Artwork format', value: 'Vector PDF, AI, or EPS with outlined fonts and 3 mm bleed' },
    { label: 'Production time', value: '5–7 business days after proof approval' },
    { label: 'Shipping coverage', value: 'Free shipping to all 50 US states' },
  ],

  faqs: [
    { question: 'How far apart should the holes be?', answer: 'Far enough that the earrings do not touch, close enough that the pair reads as a set. There is no universal figure because it depends on the earring, so we set it from a physical sample rather than from a nominal spacing.' },
    { question: 'My drop earrings hang past the bottom of the card. How do I fix that?', answer: 'The holes are placed too low for the drop length. Drop and dangle styles need the hole position calculated from the full hanging length, not from the top of the earring — otherwise they overhang the edge and snag on everything nearby.' },
    { question: 'What card thickness do I need?', answer: 'Heavier than most printed items this size. A light card bends as soon as a post goes through it, and a bent card makes good jewelry look cheap. Heavier stock also survives peg-hook display, where all the load hangs from one punched hole.' },
    { question: 'My cards tear at the hang hole. What prevents it?', answer: 'A reinforced hang tab — either an additional adhesive tab or a die-cut shape with more material around the hole — spreads the load that a plain punched hole concentrates at a single point. On a light card that hole is always the failure point.' },
    { question: 'Should I print the back of the card?', answer: 'Yes. The back is visible when cards hang in a row on a peg, and it is the surface the customer looks at while removing the earrings at home. It costs little and is the natural place for materials, care, and brand details.' },
    { question: 'Uncoated or laminated?', answer: 'Uncoated suits handmade positioning, takes a pen for hand-written pricing, and punches cleanly. Laminated resists the finger-marking that comes from heavy handling. A practical split is matte laminate on the front and uncoated on the back.' },
    { question: 'Should I print several designs at once?', answer: 'Almost always. Because the piece is small, many designs gang onto one sheet efficiently, so ordering several together is usually far cheaper per card than ordering them separately over time. Digital printing means versioning between designs costs nothing.' },
    { question: 'Can the cards be die-cut into a custom shape?', answer: 'Yes — rounded corners, scalloped edges, or a fully custom outline are all achievable. Keep the hole positions and any hang tab well clear of the cut edge, since a shaped card has less material around those stress points.' },
    { question: 'Do I need a hang tab if I display cards flat?', answer: 'No, and omitting it gives you more usable card area for branding. Only add a tab if the cards will actually hang on pegs — it is a common default that costs area for no benefit in a tray display.' },
    { question: 'What about earring backs — do they attach to the card?', answer: 'Butterfly or push backs are usually fitted behind the card once the post is through, which is part of why caliper matters: the card sits between the earring and its back and has to hold that without flexing.' },
    { question: 'Can I use recycled or kraft card?', answer: 'Yes, and it suits handmade and natural positioning well. Check punching behavior on a sample, since fiber variation in recycled stock can cause a slightly rougher hole edge than virgin board.' },
    { question: 'What do you need from me to quote?', answer: 'A physical sample of the earring — including the drop length for hanging styles — the card size you have in mind, whether the cards will hang or lie flat, and how many designs you want printed together.' },
  ],

  related: ['flat-display-boxes', 'watch-display-boxes', 'display-trays', 'display-gift-boxes'],
  updated: '2026-07-19',
};

export default content;
