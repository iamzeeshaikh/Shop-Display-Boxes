import type { BlogPost } from '../../data/blog';

/**
 * NOTE ON HONESTY: no color-psychology claims are presented as established
 * fact. That literature is contested and heavily context-dependent, and
 * packaging sites routinely state it as settled science. This article stays
 * with what is reliably true: contrast, substrate behavior, and consistency.
 */
const post: BlogPost = {
  slug: 'display-box-color-selection-guide',

  title: 'Display Box Color Selection Guide',
  metaTitle: 'Display Box Color Selection Guide | Contrast & Substrate',
  metaDescription:
    'Choosing display box colors: contrast against the shelf, how substrate shifts every color, and keeping variants distinct.',

  excerpt:
    'Color choice on a display is mostly about contrast and context, not about what a color supposedly makes people feel.',

  author: 'Shop Display Boxes',
  published: '2026-06-30',
  updated: '2026-06-30',
  tags: ['Design', 'Printing'],

  image: {
    productSlug: 'display-gift-boxes',
    file: 'display-gift-boxes-3.png',
    alt: 'Set of display gift boxes in graduated sizes with matching print',
  },

  sections: [
    {
      heading: 'What this guide does not claim',
      body: [
        'You will find a great deal written about what specific colors make shoppers feel and do. Much of that literature is contested, heavily dependent on culture and context, and frequently restated as settled fact by people selling packaging.',
        'We are not going to repeat it. What follows is the part that is reliably true: how color behaves against a shelf, on a substrate, and across a range.',
      ],
    },
    {
      heading: 'Contrast against the environment, not in isolation',
      body: [
        'A display is never seen alone. It sits among competitors, store fixtures, and whatever the retailer has nearby, and it is judged against that context.',
        'A color that looks distinctive on a screen can disappear into a shelf where three competitors use something similar. The useful exercise is looking at a photograph of the actual aisle or counter, not at a swatch.',
      ],
      subsections: [
        {
          heading: 'The category-color trap',
          body: [
            'Many categories converge on a palette — greens for natural products, blues for cleaning, black for premium. Adopting the category color makes a display legible as belonging to that category and simultaneously harder to pick out within it.',
            'That is a genuine trade-off rather than a mistake. Deciding consciously which side of it you want is more useful than following convention by default.',
          ],
        },
      ],
    },
    {
      heading: 'The substrate changes the color',
      body: [
        'Ink is translucent, so what sits beneath it affects the result. On white board a color prints close to its reference; on kraft, every color comes out warmer and darker, and pale colors may barely register.',
        'A palette that works on kraft is usually a different palette, not the same one adjusted. Decide the substrate before the palette rather than trying to reconcile them afterward.',
      ],
      link: {
        text: 'How brown board affects every color is covered in',
        href: '/blog/kraft-vs-white-cardboard-display-packaging/',
        anchor: 'kraft versus white cardboard packaging',
      },
    },
    {
      heading: 'The coating changes it again',
      body: [
        'Gloss lamination lifts saturation and deepens dark areas. Matte softens and slightly lightens. A color approved on an uncoated proof is not what you will receive on a laminated display.',
        'Where color carries commercial weight, approve it on a physical proof of the actual stock with the intended finish. This matters most on large flat areas like a header card, where any shift is most visible.',
      ],
    },
    {
      heading: 'Keeping a brand color stable',
      body: [
        'A color built from four process inks shifts with press conditions, stock, and coating. A Pantone spot ink is mixed to a reference before it reaches the press and holds far more reliably across reprints.',
        'If the same color also appears on the product the display sits beside, supply the product itself as the reference. That side-by-side comparison is the one a shopper actually makes, and a mismatch there is more damaging than a small deviation from a swatch book.',
      ],
      link: {
        text: 'The full comparison is in',
        href: '/blog/cmyk-vs-pantone-printing-for-display-boxes/',
        anchor: 'CMYK versus Pantone printing',
      },
    },
    {
      heading: 'Distinguishing variants',
      body: [
        'Where a range shares one design with different colors per variant, those colors have to be distinguishable quickly, at distance, under store lighting.',
        'Subtle differences that read clearly on a designer’s monitor frequently do not on a shelf. In categories where picking the wrong variant matters — supplements, pharmacy, anything with strengths or formulations — this is a safety consideration rather than a design preference.',
      ],
      points: [
        'Test variant colors side by side at arm’s length, not full screen',
        'Do not rely on hue alone; vary lightness as well',
        'Add a text or icon differentiator for anyone with color vision deficiency',
        'Check them under warm store lighting, not daylight-balanced monitors',
      ],
    },
    {
      heading: 'Color for legibility, not just identity',
      body: [
        'Whatever the display must communicate at a glance needs contrast against whatever it sits on. Mid-tone text on a mid-tone background is the most common legibility failure in packaging artwork, and it is invisible in a design review at full screen size.',
        'View artwork at actual size before approving it. A header that reads perfectly at 200% may be unreadable from three feet away.',
      ],
    },
    {
      heading: 'Practical sequence',
      body: [
        'Decide the substrate. Look at the real retail context. Choose a palette that separates from it. Specify a spot ink for anything that must hold. Then approve it on a physical proof with the intended coating.',
        'Doing it in that order avoids the common outcome where a palette is chosen on screen, printed on kraft under a matte laminate, and arrives looking like a different brand.',
      ],
    },
  ],

  related: [
    'cmyk-vs-pantone-printing-for-display-boxes',
    'kraft-vs-white-cardboard-display-packaging',
    'matte-vs-gloss-lamination-for-retail-packaging',
  ],

  furtherReading: [
    { label: 'Custom printing options', href: '/custom-printing-options/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Request a sample', href: '/sample-request/' },
  ],
};

export default post;
