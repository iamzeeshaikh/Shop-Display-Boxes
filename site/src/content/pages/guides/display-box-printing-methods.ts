import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'display-box-printing-methods',
  kind: 'guide',

  metaTitle: 'Display Box Printing Methods | Offset, Digital, Flexo',
  metaDescription:
    'How display boxes are printed: offset, digital, flexo, and litho-lamination, with what each does well and where it fails.',

  h1: 'Display Box Printing Methods',

  intro:
    'Four routes cover display packaging. The choice between them is decided mostly by substrate and quantity rather than by how the artwork looks, which is not how most people approach it.',

  sections: [
    {
      heading: 'Offset litho',
      body: [
        'Ink is transferred from a plate to a rubber blanket and then onto the sheet. It gives the finest detail, the most consistent color across a long run, and access to the widest range of inks and finishing.',
        'Plates are made per job, so there is a setup cost spread across the run. That makes offset a volume decision: the more units it divides across, the less it matters.',
      ],
    },
    {
      heading: 'Digital',
      body: [
        'No plates, so no setup. That makes it the practical route for short runs, for testing a display before committing, and for versioned artwork where each variant would otherwise need its own plates.',
        'Color consistency is good and improving. For a brand color that must match exactly across repeated reprints, a spot ink on offset remains more reliable, because a spot ink is mixed to a reference rather than built from process inks.',
      ],
    },
    {
      heading: 'Flexo on corrugated',
      body: [
        'A flexible relief plate prints directly onto corrugated board. Efficient, well suited to solid colors, line work, and type, and the standard route for shipping cases and bulk displays.',
        'What it does not do well is fine photographic detail, because the flute underneath telegraphs through the liner as faint ribbing across large tonal areas. That is a property of the substrate, not a fault in the printing.',
      ],
    },
    {
      heading: 'Litho-lamination',
      body: [
        'A sheet is printed offset — with full boxboard-grade detail — then laminated onto corrugated. You get carton print quality on a shipper-grade structure.',
        'It costs more and adds a production stage, so specify it where print quality is doing commercial work and skip it on a plain bulk bin. It is the standard answer whenever someone wants corrugated strength without corrugated print.',
      ],
      link: {
        text: 'How this interacts with board choice is set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'CMYK against spot color',
      body: [
        'CMYK builds any color from four process inks, and suits photographic imagery and multi-color artwork. A brand color built from CMYK shifts with press conditions, stock, and coating.',
        'A Pantone spot ink is mixed to a reference, so it holds across reprints. Specify spot where a brand color must match exactly — particularly if the same color appears on the product the display sits next to.',
      ],
    },
    {
      heading: 'Printing on kraft',
      body: [
        'Kraft is brown and ink is not opaque, so every color prints warmer and darker than on white board. Light colors may not read at all without a white underprint.',
        'Design for the substrate rather than correcting afterward. A palette that works on kraft is usually a different palette, not the same one adjusted.',
      ],
      link: {
        text: 'File setup requirements for any route are listed in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'How coating changes printed color',
      body: [
        'Gloss lamination lifts saturation and deepens dark areas. Matte softens and slightly lightens. Both change the appearance of an approved proof if the proof was made uncoated.',
        'This is why a physical proof on the actual coated stock matters more than a screen or an uncoated proof — particularly on a header card, where the difference is most visible.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Print routes compared',
      headers: ['Route', 'Substrate', 'Photographic detail', 'Setup', 'Best for'],
      rows: [
        ['Offset litho', 'Boxboard', 'Highest', 'Plates per job', 'Volume runs, exact color'],
        ['Digital', 'Boxboard, some corrugated', 'Good', 'None', 'Short runs, versioned artwork'],
        ['Flexo', 'Corrugated', 'Limited by flute', 'Plates per job', 'Bulk displays, shipping cases'],
        ['Litho-lamination', 'Corrugated', 'Highest', 'Plates plus lamination', 'Brand-led displays needing strength'],
      ],
      note: 'The quantity at which offset overtakes digital varies with box size, ink coverage, and finishing. We compare both against your actual specification rather than applying a fixed threshold.',
    },
  ],

  faqs: [
    { question: 'Offset or digital — which should I choose?', answer: 'Quantity decides it. Digital has no plate setup, so it wins on short runs and versioned artwork. Offset overtakes it as quantity grows. Where the crossover falls depends on box size, ink coverage, and finishing.' },
    { question: 'Why does printing on corrugated look ribbed?', answer: 'The flute telegraphs through the liner, showing most across large flat tonal areas and gradients. It is a property of printing onto fluted board rather than a printing fault. Litho-lamination avoids it entirely.' },
    { question: 'What is litho-lamination?', answer: 'A sheet printed offset then laminated onto corrugated board — carton-grade print on a shipper-grade structure. It adds cost and a production stage, so it suits brand-led displays rather than plain bulk bins.' },
    { question: 'When do I need a Pantone spot color?', answer: 'When a brand color must hold exactly across reprints. A CMYK build shifts with press conditions, stock, and coating; a spot ink is mixed to a reference. Especially important if the color also appears on the product itself.' },
    { question: 'Can I print full color onto kraft board?', answer: 'Yes, but everything comes out warmer and darker because kraft is brown and ink is not opaque. Light colors need a white underprint to read. Design a palette for kraft rather than correcting a white-board palette.' },
    { question: 'Does lamination change how the print looks?', answer: 'Yes. Gloss lifts saturation and deepens darks; matte softens and slightly lightens. This is why a physical proof on the actual coated stock matters more than a screen or an uncoated proof.' },
    { question: 'How many spot colors can I use?', answer: 'No practical limit for most jobs, but each spot ink adds a plate and therefore setup cost. Beyond three or four, a CMYK build plus one or two critical spot inks is usually more economical.' },
    { question: 'Can I print different versions in one run?', answer: 'On digital, easily — versioning costs nothing without plates. On offset each version needs its own plates, which makes versioned artwork one of the clearest cases for digital regardless of quantity.' },
  ],

  relatedProducts: ['custom-display-boxes', 'cardboard-display-boxes', 'corrugated-display-boxes', 'cosmetic-display-boxes'],

  relatedPages: [
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'CMYK vs Pantone printing for display boxes', href: '/blog/cmyk-vs-pantone-printing-for-display-boxes/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
  ],

  cta: {
    heading: 'Not sure which route suits your run?',
    body: 'Send the artwork and quantity. We compare routes against your actual job rather than a rule of thumb.',
  },

  updated: '2026-07-19',
};

export default content;
