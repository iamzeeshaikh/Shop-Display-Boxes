import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'using-qr-codes-on-retail-display-packaging',

  title: 'Using QR Codes on Retail Display Packaging',
  metaTitle: 'Using QR Codes on Retail Display Packaging | Print Guide',
  metaDescription:
    'Printing QR codes that actually scan: size, quiet zone, contrast, placement away from creases, and giving shoppers a reason.',

  excerpt:
    'A QR code that does not scan is worse than no code at all. Most failures come from four printing decisions rather than from the code itself.',

  author: 'Shop Display Boxes',
  published: '2026-07-06',
  updated: '2026-07-06',
  tags: ['Design', 'Printing'],

  image: {
    productSlug: 'retail-display-packaging',
    file: 'retail-display-packaging-2.png',
    alt: 'Printed retail display packaging holding product on a store shelf',
  },

  sections: [
    {
      heading: 'Give the shopper a reason first',
      body: [
        'The most common failure is not technical. It is a code with no stated benefit, printed small in a corner, that nobody scans because nothing suggests what happens if they do.',
        'A short line of copy next to the code doing the work — what the shopper gets, in plain terms — matters more than anything about the code itself. Without it, the print area is wasted regardless of how well the code is produced.',
      ],
    },
    {
      heading: 'Size it for the scanning distance',
      body: [
        'A code has to be large enough to scan from wherever the shopper actually stands. On a counter display that is close; on a floor unit it may be a step back.',
        'Codes are frequently specified at the size that fits the layout rather than the size that scans, and then fail in exactly the placement they were made for. Decide the scanning distance first and size the code to it.',
      ],
    },
    {
      heading: 'Protect the quiet zone',
      body: [
        'A QR code needs clear space around it — the quiet zone — for a scanner to identify its boundaries. Artwork, rules, or other elements crowding right up to the edge of a code will stop it resolving.',
        'This is one of the most common causes of an unreliable code, and it is entirely a layout decision rather than a production one.',
      ],
    },
    {
      heading: 'Contrast, and why inverted codes fail',
      body: [
        'Scanners rely on contrast between the modules and their background. Dark code on a light background is the reliable arrangement.',
        'Inverted codes — light on dark — are less reliably read by some scanners, and codes printed in a mid-tone brand color against a similar background frequently fail outright. A code is a functional element, and it is the wrong place to apply brand palette rules.',
      ],
      subsections: [
        {
          heading: 'Kraft board is a particular risk',
          body: [
            'Kraft is brown, so contrast is already reduced before any ink is chosen. A dark code prints acceptably on kraft, but a colored code frequently does not have enough separation from the substrate.',
            'If a code has to sit on kraft, test it on a printed sample rather than on screen. The screen preview will look considerably better than the printed result.',
          ],
        },
      ],
      link: {
        text: 'How ink behaves on brown board is covered in',
        href: '/blog/kraft-vs-white-cardboard-display-packaging/',
        anchor: 'kraft versus white cardboard packaging',
      },
    },
    {
      heading: 'Keep it off creases and folds',
      body: [
        'A code crossing a crease is broken by the fold — the surface is no longer flat and the modules distort at exactly the point a scanner needs them regular.',
        'It also should not sit on a tuck flap, which disappears into the box, or across a die-cut edge. Treat it like live copy: it belongs flat on a panel face.',
      ],
    },
    {
      heading: 'Watch the finish',
      body: [
        'Gloss lamination is highly reflective, and under retail lighting a glossy code can throw enough glare to defeat a scanner at certain angles.',
        'Matte or uncoated areas scan more reliably. Where the display is otherwise gloss laminated, a matte patch behind the code is a small production addition that solves it.',
      ],
    },
    {
      heading: 'Test the printed article, not the file',
      body: [
        'Codes that scan perfectly from a screen frequently fail in print, because size, contrast, substrate, and finish have all changed.',
        'Scan the physical proof, with a normal phone, in ordinary indoor lighting, from the distance a shopper would actually stand. That five-second test catches nearly every failure mode described above.',
      ],
      points: [
        'Scan from the real viewing distance, not from arm’s length',
        'Test under store-like lighting, including at an angle',
        'Test with more than one phone if the run is large',
        'Confirm the destination page works on mobile before printing',
      ],
    },
    {
      heading: 'Plan for the destination outliving the print run',
      body: [
        'Packaging can be in circulation long after a campaign ends. A code pointing at a campaign page that later returns a 404 is a bad experience printed in permanent ink.',
        'Point codes at a stable URL you control and can redirect, rather than at a temporary campaign address. That single decision costs nothing at design time and avoids a dead code across an entire print run.',
      ],
    },
  ],

  related: [
    'how-to-prepare-artwork-for-display-box-printing',
    'display-box-color-selection-guide',
    'matte-vs-gloss-lamination-for-retail-packaging',
  ],

  furtherReading: [
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
    { label: 'Custom printing options', href: '/custom-printing-options/' },
  ],
};

export default post;
