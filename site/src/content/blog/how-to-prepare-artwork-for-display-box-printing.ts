import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'how-to-prepare-artwork-for-display-box-printing',

  title: 'How to Prepare Artwork for Display Box Printing',
  metaTitle: 'How to Prepare Artwork for Display Box Printing | Setup',
  metaDescription:
    'File setup for display box printing: working on the dieline, bleed and safe area, resolution, color space, and the creases.',

  excerpt:
    'Almost every reprint traces back to one of four file problems, and all four are avoidable in the hour before you send the artwork.',

  author: 'Shop Display Boxes',
  published: '2026-07-08',
  updated: '2026-07-08',
  tags: ['Printing', 'Design'],

  image: {
    productSlug: 'custom-display-boxes',
    file: 'custom-display-boxes-4.png',
    alt: 'Custom display tray printed in full color with a raised header panel',
  },

  sections: [
    {
      heading: 'Work on the dieline, not on a rectangle',
      body: [
        'This is the one that causes the most expensive problems. A dieline is drawn at actual size for a specific board caliper, with cut, crease, and bleed on separate layers.',
        'Designing to an assumed rectangle and fitting it to the dieline afterward almost never works cleanly, because panel proportions on a flat drawing rarely match what a designer infers from a photograph of a finished box. Get the dieline first — it costs nothing — and place artwork onto it.',
      ],
      link: {
        text: 'Dielines are drawn before you commit to anything — see',
        href: '/get-a-free-dieline/',
        anchor: 'how to get a free dieline',
      },
    },
    {
      heading: 'Keep the file in a printable state',
      body: [
        'Supply print-ready vector: PDF, AI, or EPS. Fonts must be outlined or fully embedded, because a font we do not have will substitute silently and reflow your layout without warning.',
        'Work at 100% scale and never rescale the dieline to fit a page. Allowances, tuck tolerances, and crease positions do not scale proportionally with the panels, so a file scaled even a few percent produces a box that no longer matches its own drawing.',
      ],
      points: [
        'Vector PDF, AI, or EPS',
        'Fonts outlined or fully embedded',
        '100% actual size, never rescaled',
        'Dieline layers preserved and clearly named',
      ],
    },
    {
      heading: 'Bleed and safe area',
      body: [
        'Extend any artwork running to an edge 3 mm beyond the cut line. Cutting carries a tolerance, and without bleed a small drift leaves a white sliver along the finished edge.',
        'Then keep important content — logos, copy, anything that looks wrong clipped — at least 3 mm inside the cut line. Between the bleed outside and the safe area inside, the genuinely usable panel is narrower than it appears on screen.',
      ],
    },
    {
      heading: 'Resolution is measured at final size',
      body: [
        'Placed images need to be 300 DPI at the size they will actually print, not at the size they were supplied.',
        'An image that is 300 DPI at two inches and then enlarged to six inches is effectively 100 DPI and will print soft, regardless of what the file properties report. Check resolution after scaling, not before.',
      ],
    },
    {
      heading: 'Convert to CMYK before you approve the design',
      body: [
        'RGB has a wider gamut than print can reproduce, so vivid colors — especially bright blues, oranges, and greens — shift noticeably when converted.',
        'Converting before internal approval means you are signing off on something close to what will be printed. Converting afterward means the first time anyone sees the real colors is on a proof, when changing them is expensive.',
      ],
      subsections: [
        {
          heading: 'And decide about spot inks at the same time',
          body: [
            'If a brand color must hold exactly across reprints, specify a Pantone spot ink rather than a CMYK build. A built color shifts with press conditions, stock, and coating.',
            'Where that color also appears on the product the display will sit beside, supply the product itself as the reference — that is the comparison a shopper actually makes.',
          ],
        },
      ],
      link: {
        text: 'The difference between the two is worked through in',
        href: '/blog/cmyk-vs-pantone-printing-for-display-boxes/',
        anchor: 'CMYK versus Pantone for display boxes',
      },
    },
    {
      heading: 'Keep live copy off the creases',
      body: [
        'Text crossing a crease breaks when the box is erected, because the fold interrupts the letterforms. Images and background colors survive a crease; type does not.',
        'On tuck flaps, remember the flap disappears into the box entirely. Anything that must stay readable belongs on a panel face — the flap is better used for an opening instruction or a batch area.',
      ],
    },
    {
      heading: 'Design for the substrate you are actually printing on',
      body: [
        'On kraft board every color prints warmer and darker, because kraft is brown and ink is not opaque. Light colors may not read at all without a white underprint.',
        'A palette that works on kraft is usually a different palette rather than the same one corrected. Decide the substrate before the artwork, not after.',
      ],
    },
    {
      heading: 'Remember the coating changes the color',
      body: [
        'Gloss lamination lifts saturation and deepens darks; matte softens and slightly lightens. A proof approved uncoated is not a reliable guide to a laminated result.',
        'Where color carries commercial weight, ask for a physical proof on the actual stock with the intended finish. It adds days and costs a fraction of a reprint.',
      ],
    },
    {
      heading: 'What we will not check',
      body: [
        'Regulatory compliance, in any market. We print exactly what you supply, including ingredient lists, warnings, safety marks, and claims, and we do not verify any of it against the rules where you sell.',
        'Assuming a packaging supplier is checking that is a costly assumption, so it is worth stating plainly rather than leaving to inference.',
      ],
      link: {
        text: 'The full file requirements checklist is in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
  ],

  related: [
    'cmyk-vs-pantone-printing-for-display-boxes',
    'kraft-vs-white-cardboard-display-packaging',
    'matte-vs-gloss-lamination-for-retail-packaging',
  ],

  furtherReading: [
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Dieline templates', href: '/dieline-templates/' },
    { label: 'Free design support', href: '/free-design-support/' },
  ],
};

export default post;
