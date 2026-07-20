import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'custom-printing-options',
  kind: 'commercial',

  metaTitle: 'Custom Printing Options | Offset, Digital & Flexo',
  metaDescription:
    'Printing options for display packaging: offset litho, digital, flexo, and litho-lamination, with the quantity at which each wins.',

  h1: 'Custom Printing Options',

  intro:
    'Four print routes cover display packaging, and the choice between them is mostly decided by quantity and substrate rather than by how the artwork looks. Here is where each one wins.',

  sections: [
    {
      heading: 'Offset litho',
      body: [
        'The standard for folding boxboard. It gives the finest detail, the most consistent color across a run, and the widest range of ink and finishing options. Plates are made per job, so there is a setup cost that is spread across the run.',
        'That setup is what makes offset a volume decision: the more units it is spread across, the less it matters. Above a few thousand units it generally wins on total cost and keeps pulling ahead as the run grows.',
      ],
    },
    {
      heading: 'Digital',
      body: [
        'No plates and no setup, which makes it the practical route for short runs, for testing a display before committing to volume, and for versioned artwork where each variant would otherwise need its own plates.',
        'Below a few thousand units digital usually wins on total cost. Color consistency is good and improving, though for an exact brand color across repeated reprints a spot ink on offset is still more reliable.',
      ],
    },
    {
      heading: 'Flexo on corrugated',
      body: [
        'Prints directly onto corrugated board. It is efficient and well suited to solid colors, line work, and type.',
        'What it does not do well is fine photographic detail, because the flute underneath telegraphs through the liner and shows as faint ribbing across large tonal areas. That is a physical consequence of the substrate rather than a quality failing.',
      ],
    },
    {
      heading: 'Litho-lamination',
      body: [
        'A sheet printed offset and then laminated onto corrugated. You get carton-grade print on a shipper-grade structure, which is the usual answer when a display needs both.',
        'It costs more and adds a production stage, so it is worth specifying where print quality is doing commercial work — a brand-led display in a competitive aisle — and not worth it on a plain bulk bin.',
      ],
      link: {
        text: 'How this interacts with board choice is set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'CMYK against Pantone',
      body: [
        'CMYK builds any color from four process inks and is the right choice for photographic imagery and multi-color artwork. A brand color built from CMYK shifts with press conditions, stock, and coating.',
        'A Pantone spot ink is mixed to a reference rather than built, so it holds across reprints. Specify spot where a brand color has to match exactly — particularly if the same color also appears on the product itself.',
      ],
    },
    {
      heading: 'Printing on kraft',
      body: [
        'Kraft is brown and ink is not opaque, so every color printed on it comes out warmer and darker than the same color on white board. Light colors may not read at all without a white underprint.',
        'Where a brand color has to hold, specify a white top liner. Where the kraft look is the point, proof the colors on the actual liner so there are no surprises at run.',
      ],
    },
  ],

  tables: [
    {
      caption: 'Print routes compared',
      headers: ['Route', 'Substrate', 'Best quantity', 'Photographic detail', 'Setup cost'],
      rows: [
        ['Offset litho', 'Folding boxboard', 'Higher volumes', 'Highest', 'Plates per job'],
        ['Digital', 'Boxboard, some corrugated', 'Short runs, versioned artwork', 'Good', 'None'],
        ['Flexo', 'Corrugated', 'Any, favors volume', 'Limited by flute', 'Plates per job'],
        ['Litho-lamination', 'Corrugated', 'Where print quality matters', 'Highest', 'Plates plus lamination stage'],
      ],
      note: 'The quantity at which offset overtakes digital varies with box size, ink coverage, and finishing. We compare both on your specification rather than applying a fixed threshold.',
    },
  ],

  faqs: [
    { question: 'Should I print offset or digital?', answer: 'Quantity decides it. Digital has no plate setup, so it usually wins below a few thousand units and for versioned artwork. Offset pulls ahead above that and keeps pulling ahead as the run grows. We compare both on your actual specification.' },
    { question: 'Why does my corrugated print look ribbed?', answer: 'The flute underneath is telegraphing through the liner. It shows most across large flat tonal areas and gradients, and it is a physical property of printing onto fluted board. Litho-lamination avoids it by printing the sheet before laminating.' },
    { question: 'How do I keep a brand color consistent?', answer: 'Specify it as a Pantone spot ink rather than a CMYK build. Spot inks are mixed to a reference; CMYK builds shift with press conditions, stock, and coating. If the color also appears on the product, supply that as the reference.' },
    { question: 'Can I print full color on kraft board?', answer: 'Yes, but every color comes out warmer and darker because kraft is brown and ink is not opaque. Light colors need a white underprint to read. If a brand color must hold exactly, specify a white top liner instead.' },
    { question: 'How many spot colors can I use?', answer: 'There is no practical limit that affects most jobs, though each additional spot ink adds a plate and therefore setup cost. Beyond three or four, a CMYK build plus one or two critical spots is usually more economical.' },
    { question: 'Can I print different versions in one run?', answer: 'On digital, easily — versioning costs nothing since there are no plates. On offset, each version needs its own plates, so versioned artwork is one of the clearest cases where digital wins regardless of quantity.' },
    { question: 'Does the coating affect printed color?', answer: 'Yes. Gloss lamination lifts saturation and deepens dark areas; matte softens and slightly lightens. It is why a physical proof on the actual coated stock matters more than a screen or an uncoated proof.' },
  ],

  relatedProducts: ['custom-display-boxes', 'cardboard-display-boxes', 'corrugated-display-boxes', 'retail-display-boxes'],

  relatedPages: [
    { label: 'Display box printing methods', href: '/display-box-printing-methods/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
  ],

  cta: {
    heading: 'Which route suits your run?',
    body: 'Send the artwork and quantity and we will compare print routes on your actual job rather than on a rule of thumb.',
  },

  updated: '2026-07-19',
};

export default content;
