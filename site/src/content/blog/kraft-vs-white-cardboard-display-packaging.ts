import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'kraft-vs-white-cardboard-display-packaging',

  title: 'Kraft vs White Cardboard Display Packaging',
  metaTitle: 'Kraft vs White Cardboard | Display Packaging Compared',
  metaDescription:
    'How kraft and white board differ in print behavior, cost, and positioning, and why kraft changes every color you print on it.',

  excerpt:
    'Kraft is brown and ink is not opaque. That single physical fact governs the whole comparison, and it catches out more brands than any other substrate decision.',

  author: 'Shop Display Boxes',
  published: '2026-07-13',
  updated: '2026-07-13',
  tags: ['Materials', 'Printing'],

  image: {
    productSlug: 'soap-display-boxes',
    file: 'soap-display-boxes-8.png',
    alt: 'Artisan soap display box in uncoated kraft with single-color printing',
  },

  sections: [
    {
      heading: 'What each one is',
      body: [
        'White board — usually SBS — is bleached through its thickness, giving a bright, uniform, highly reflective printing surface. Kraft board is unbleached, retaining the natural brown of the pulp, and is available either as full kraft or as kraft-back with a white printing face.',
        'The third option worth knowing is kraft-back: a white surface to print on with a brown reverse. It costs less than full SBS and looks identical from the front — which matters only if the inside of the display is never visible.',
      ],
    },
    {
      heading: 'The physical fact that drives everything',
      body: [
        'Printing ink is not opaque. It is translucent, and it takes its final appearance partly from whatever sits beneath it.',
        'On white board, what sits beneath is bright and neutral, so a color prints close to its reference. On kraft, what sits beneath is brown, so every color comes out warmer and darker. This is not a printing fault and it cannot be corrected in the file.',
      ],
      subsections: [
        {
          heading: 'What this does to light colors',
          body: [
            'Pale colors suffer most. A soft pink, a pale blue, or a light grey printed directly onto kraft may barely register at all — the brown dominates and the ink reads as a tint of the substrate.',
            'A white underprint solves it: a layer of opaque white laid down first, with the color printed over it. That adds an ink station and cost, and where it stops short of the artwork edges there will be a visible transition.',
          ],
        },
        {
          heading: 'What it does to brand colors',
          body: [
            'A Pantone reference assumes a white substrate. Specifying one for a kraft job without accounting for the shift produces a color that is technically correct against the standard and visually wrong on the shelf.',
            'If a brand color has to hold exactly, kraft is the wrong substrate for it — or the color needs a white underprint, which somewhat defeats the point of choosing kraft.',
          ],
        },
      ],
    },
    {
      heading: 'Design for kraft rather than adapting to it',
      body: [
        'The palette that works on kraft is usually a different palette, not the same one corrected. Deep, saturated, and earthy colors sit well on it. Black prints richly. Single-color and two-color work often looks better than full-color imagery.',
        'Brands that succeed on kraft generally chose it early and designed into its constraints. Brands that struggle usually designed for white and switched substrate late.',
      ],
      link: {
        text: 'How substrate interacts with ink systems is covered in the guide to',
        href: '/display-box-printing-methods/',
        anchor: 'display box printing methods',
      },
    },
    {
      heading: 'What kraft signals',
      body: [
        'In some categories it reads as considered, natural, and deliberate — handmade soap, candles, artisan food, and natural personal care all use it to genuine effect.',
        'In others it reads as economical, and can undercut a premium position. Conventional luxury signalling relies on weight, gloss, and depth of color, and kraft delivers none of those. It is a positioning decision as much as a material one.',
      ],
    },
    {
      heading: 'Cost',
      body: [
        'Kraft is generally cheaper than bleached white board, and kraft-back sits between the two. The saving is real but usually modest relative to the whole job, and it should not be the deciding factor.',
        'A white underprint erodes the saving. If your artwork needs one across most of the surface, the cost advantage of kraft largely disappears while its visual character remains — which may still be the right trade, but it should be a conscious one.',
      ],
    },
    {
      heading: 'Recycled content is a separate question',
      body: [
        'Kraft is often assumed to mean recycled, and that is not automatic — kraft describes the pulping process and the unbleached appearance, not the fiber source.',
        'Recycled content is available in both kraft and white grades, and it should be specified explicitly rather than inferred from color. A brown box is not evidence of anything about its fiber.',
      ],
      link: {
        text: 'What actually determines a pack’s recyclability is covered under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'Print a sample before committing',
      body: [
        'More than with almost any other substrate decision, kraft needs to be seen. Screen previews of artwork on kraft are approximations, and the difference between the approximation and the printed result is routinely larger than people expect.',
        'Where a range is launching on kraft, a printed sample of the worst-case color — the palest one — is the test that settles it.',
      ],
    },
  ],

  related: [
    'cardboard-thickness-guide-for-display-boxes',
    'cmyk-vs-pantone-printing-for-display-boxes',
    'display-box-color-selection-guide',
  ],

  furtherReading: [
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Request a sample', href: '/sample-request/' },
  ],
};

export default post;
