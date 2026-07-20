import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'artwork-guidelines',
  kind: 'commercial',

  metaTitle: 'Artwork Guidelines | Print-Ready File Requirements',
  metaDescription:
    'File requirements for display box printing: vector formats, outlined fonts, 300 DPI images, bleed, and copy off creases.',

  h1: 'Artwork Guidelines',

  intro:
    'Most reprints trace back to one of four things: artwork designed before the dieline existed, live copy crossing a crease, images placed at screen resolution, or a color built in CMYK that needed to be a spot ink. All four are avoidable at file-setup stage.',

  sections: [
    {
      heading: 'Work on the dieline',
      body: [
        'Place artwork onto the dieline we supply rather than designing to a rectangle and fitting it afterward. The dieline is drawn at actual size for a specific board caliper, with cut, crease, and bleed on separate layers.',
        'Designing before the dieline exists is the single most common origin of a reprint, because panel proportions on a flat drawing rarely match what a designer assumed from a photograph of a finished box.',
      ],
      link: {
        text: 'If you do not have one yet, we draw it first — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'File format',
      body: [
        'Supply print-ready vector: PDF, AI, or EPS. Fonts must be outlined or fully embedded, because a font we do not have will substitute silently and change the layout.',
        'Keep the dieline layers intact in the file you send back. We use them to verify that artwork aligns to the structure before anything goes to press.',
      ],
      points: [
        'Vector PDF, AI, or EPS',
        'Fonts outlined or embedded',
        'Dieline layers preserved and clearly named',
        'Artwork at 100% scale, not scaled to fit a page',
      ],
    },
    {
      heading: 'Images and resolution',
      body: [
        'Placed images need to be 300 DPI at final printed size. An image that is 300 DPI at 2 inches and then enlarged to 6 inches is effectively 100 DPI and will look soft.',
        'Supply images in CMYK rather than RGB. RGB has a wider gamut than print can reproduce, so bright saturated colors — particularly vivid blues and oranges — shift noticeably when converted, and the shift is easier to manage before you approve a design than after.',
      ],
    },
    {
      heading: 'Bleed and safe area',
      body: [
        'Extend any artwork that runs to an edge 3 mm beyond the cut line. Cutting has a tolerance, and without bleed a small drift leaves a white sliver along the edge.',
        'Keep important content — logos, copy, anything that looks wrong when clipped — at least 3 mm inside the cut line. Between the bleed outside and the safe area inside, the working zone is narrower than the panel appears.',
      ],
    },
    {
      heading: 'Creases',
      body: [
        'Text that crosses a crease breaks when the box is erected, because the fold interrupts the letterforms. Keep live copy clear of every fold line.',
        'Images and background colors can cross a crease without a problem, though a hard-edged graphic element will show a slight discontinuity at the fold. On tuck flaps, remember the flap disappears into the box — anything that must remain readable belongs on a panel face.',
      ],
    },
    {
      heading: 'Color',
      body: [
        'CMYK is the default and suits photographic imagery and multi-color artwork. Where a brand color must hold exactly across reprints, specify a Pantone spot ink — a CMYK build of a brand color shifts with press conditions, stock, and coating.',
        'If the same color appears on the product itself, supply the product as the color reference so the display is matched to what a shopper compares it against.',
      ],
      link: {
        text: 'Ink systems and when each is worth the setup are compared under',
        href: '/custom-printing-options/',
        anchor: 'custom printing options',
      },
    },
    {
      heading: 'Printing on kraft',
      body: [
        'Kraft is brown and ink is not opaque, so every color prints warmer and darker than on white board, and light colors may not read at all without a white underprint.',
        'Design for the substrate rather than adjusting afterward. A palette that works on kraft is usually a different palette from one that works on white, not the same one corrected.',
      ],
    },
    {
      heading: 'Regulatory and mandatory copy',
      body: [
        'We print exactly what you supply, including ingredient declarations, warnings, safety marks, and age grading. We do not review artwork for regulatory compliance in your market.',
        'Where a category has mandated warning size or placement, confirm the requirement before the dieline is drawn rather than after the panel has been designed around something else.',
      ],
    },
  ],

  tables: [
    {
      caption: 'File checklist before sending',
      headers: ['Item', 'Requirement'],
      rows: [
        ['Format', 'Vector PDF, AI, or EPS'],
        ['Fonts', 'Outlined or fully embedded'],
        ['Scale', '100% actual size'],
        ['Placed images', '300 DPI at final printed size'],
        ['Color space', 'CMYK, with Pantone spot inks specified where required'],
        ['Bleed', '3 mm beyond every cut edge'],
        ['Safe area', 'Important content 3 mm inside the cut line'],
        ['Creases', 'No live copy crossing a fold'],
        ['Dieline', 'Layers preserved and clearly named'],
      ],
    },
  ],

  faqs: [
    { question: 'What file format do you need?', answer: 'Print-ready vector — PDF, AI, or EPS — with fonts outlined or fully embedded, at 100% scale, with the dieline layers preserved. A font we do not have will substitute silently and change your layout, which is why outlining matters.' },
    { question: 'How much bleed do you need?', answer: '3 mm beyond every cut edge for anything running to the edge. Cutting has a tolerance, and without bleed a small drift leaves a white sliver along the edge of the finished box.' },
    { question: 'Why does my text break at the fold?', answer: 'Because it crosses a crease. The fold interrupts the letterforms when the box is erected. Images and background colors can cross a crease, but live copy has to stay clear of every fold line.' },
    { question: 'What resolution do images need to be?', answer: '300 DPI at final printed size — not at original size. An image that is 300 DPI at 2 inches and enlarged to 6 inches is effectively 100 DPI and will print soft, regardless of what the file properties say.' },
    { question: 'Should I supply RGB or CMYK?', answer: 'CMYK. RGB has a wider gamut than print can reproduce, so vivid colors — especially bright blues and oranges — shift when converted. Converting before you approve the design lets you manage that shift rather than being surprised by it.' },
    { question: 'When do I need a Pantone spot color?', answer: 'When a brand color has to hold exactly across reprints. A CMYK build shifts with press conditions, stock, and coating; a spot ink is mixed to a reference. If the color also appears on your product, supply that product as the reference.' },
    { question: 'Can I send a design that is not on your dieline?', answer: 'We can work with it, but expect adjustments. Panel proportions on a flat dieline rarely match what a designer assumed from a photograph, and reconciling the two after the fact is where most reprints originate.' },
    { question: 'Do you check my regulatory copy?', answer: 'No. We print exactly what you supply including warnings, ingredient declarations, and safety marks, but responsibility for accuracy and compliance in your market stays with you.' },
  ],

  relatedPages: [
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Dieline templates', href: '/dieline-templates/' },
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'How to prepare artwork for display box printing', href: '/blog/how-to-prepare-artwork-for-display-box-printing/' },
  ],

  cta: {
    heading: 'Not sure your file is ready?',
    body: 'Send it and we will check it against the dieline and the board before anything goes to press.',
  },

  updated: '2026-07-19',
};

export default content;
