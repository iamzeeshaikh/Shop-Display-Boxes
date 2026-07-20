import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'cmyk-vs-pantone-printing-for-display-boxes',

  title: 'CMYK vs Pantone Printing for Display Boxes',
  metaTitle: 'CMYK vs Pantone for Display Boxes | Which to Specify',
  metaDescription:
    'How CMYK builds differ from Pantone spot inks, why brand colors drift between reprints, and when to pay for a spot color.',

  excerpt:
    'A brand color built from four process inks shifts with press conditions, stock, and coating. A spot ink is mixed to a reference. That difference is what decides which to specify.',

  author: 'Shop Display Boxes',
  published: '2026-07-15',
  updated: '2026-07-15',
  tags: ['Printing'],

  image: {
    productSlug: 'cosmetic-display-boxes',
    file: 'cosmetic-display-boxes-3.png',
    alt: 'Printed cosmetic display with a raised header card above two tiers of product',
  },

  sections: [
    {
      heading: 'Two fundamentally different approaches',
      body: [
        'CMYK builds any color by overlaying four process inks — cyan, magenta, yellow, and black — in varying densities. It is how photographic imagery is reproduced, and it can produce an enormous range of colors from four ink stations.',
        'A Pantone spot ink is not built. It is mixed as a single ink to a defined reference before it reaches the press, and applied as its own layer. The color is decided in the bucket rather than on the sheet.',
      ],
    },
    {
      heading: 'Why brand colors drift in CMYK',
      body: [
        'Because a built color depends on four variables landing correctly at once. Ink density, press conditions, the absorbency of the stock, and the coating applied afterward each shift the result slightly.',
        'Individually those shifts are small. Combined across four inks they are enough that the same file printed twice, on different days or different stock, produces visibly different results — particularly in the colors that are hardest to build.',
      ],
      subsections: [
        {
          heading: 'The colors that drift most',
          body: [
            'Corporate blues, oranges, and greens are the usual casualties. They sit in regions where a small change in one ink moves the perceived hue noticeably.',
            'Neutral greys built from process inks are also unstable — a slight shift in one channel turns a grey warm or cold, which is very visible next to a product.',
          ],
        },
      ],
    },
    {
      heading: 'When a spot ink earns its cost',
      body: [
        'A spot ink adds a plate, which adds setup. That cost is worth paying in three situations.',
      ],
      points: [
        'The color is the brand — where a shopper recognizes the color before the name',
        'The same color also appears on the product the display sits beside',
        'The display will be reprinted repeatedly and must match across runs',
      ],
      link: {
        text: 'How that setup cost behaves across quantities is covered under',
        href: '/how-much-do-custom-display-boxes-cost/',
        anchor: 'what custom display boxes cost',
      },
    },
    {
      heading: 'The comparison a shopper actually makes',
      body: [
        'A display does not get judged against a swatch book. It gets judged against the product unit sitting on or beside it, in store lighting.',
        'If the product carton is printed with a spot ink and the display is a CMYK build, the mismatch is visible precisely where it matters most. Where both exist, supply the product itself as the color reference rather than a digital value.',
      ],
    },
    {
      heading: 'When CMYK is the right answer',
      body: [
        'For photographic imagery, gradients, and artwork using many colors, CMYK is not a compromise — it is the correct process. Building those from spot inks would be impractical and enormously expensive.',
        'It is also the sensible route for short runs and versioned artwork, where digital printing removes plate setup entirely and spot inks are not generally available.',
      ],
    },
    {
      heading: 'Combining both',
      body: [
        'The common professional specification is CMYK for imagery plus one or two spot inks for the elements that must hold — a logo, a brand field, a signature color.',
        'Beyond three or four spot inks the economics deteriorate, since each adds a plate. At that point a well-managed CMYK build plus one critical spot is usually the better answer.',
      ],
    },
    {
      heading: 'Substrate changes everything',
      body: [
        'On kraft board, no ink prints as it would on white. Kraft is brown and ink is not opaque, so every color comes out warmer and darker, and light colors may not read at all without a white underprint.',
        'A Pantone reference assumes a white substrate. Specifying one on kraft without accounting for that is a common cause of a color that is technically correct and visually wrong.',
      ],
      link: {
        text: 'Print routes and substrates are compared in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'Coating shifts the finished color',
      body: [
        'Gloss lamination lifts saturation and deepens dark areas. Matte softens and slightly lightens. Both change the appearance of a color that was approved uncoated.',
        'This is the argument for a physical proof on the actual coated stock rather than a screen or an uncoated proof — and on a header card, where the color is largest, the difference is most visible.',
      ],
    },
  ],

  related: [
    'matte-vs-gloss-lamination-for-retail-packaging',
    'how-to-prepare-artwork-for-display-box-printing',
    'display-box-color-selection-guide',
  ],

  furtherReading: [
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Display box printing methods', href: '/display-box-printing-methods/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
  ],
};

export default post;
