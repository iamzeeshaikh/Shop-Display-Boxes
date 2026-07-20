import type { BlogPost } from '../../data/blog';

const post: BlogPost = {
  slug: 'cardboard-thickness-guide-for-display-boxes',

  title: 'Cardboard Thickness Guide for Display Boxes',
  metaTitle: 'Cardboard Thickness Guide for Display Boxes | Calipers',
  metaDescription:
    'How paperboard caliper is measured, what each thickness range suits, and why a heavier board is not automatically better.',

  excerpt:
    'Board thickness is measured in points, and choosing it is not simply a matter of going heavier. Above a certain caliper, creasing and cracking become the limiting problems.',

  author: 'Shop Display Boxes',
  published: '2026-07-16',
  updated: '2026-07-16',
  tags: ['Materials'],

  image: {
    productSlug: 'cardboard-display-boxes',
    file: 'cardboard-display-boxes-2.png',
    alt: 'Folding boxboard display shown flat and erected, showing the crease lines',
  },

  sections: [
    {
      heading: 'How thickness is measured',
      body: [
        'Folding boxboard is measured in points, where one point is one thousandth of an inch. A 24 pt board is 0.024 inches thick. Display work generally falls between 14 pt and 28 pt.',
        'Caliper is a thickness measurement, not a strength measurement. Two boards of the same caliper in different grades will not behave identically, which is why a specification should name the grade as well as the thickness.',
      ],
    },
    {
      heading: 'What each range suits',
      body: [
        'These are working ranges rather than rules — the right caliper depends on panel size and load as much as on the format.',
      ],
      subsections: [
        {
          heading: '14 pt to 18 pt',
          body: [
            'Light structures: small counter displays, header cards, sleeves, and inserts. It creases very cleanly and folds into fine detail.',
            'At this weight, large unsupported panels will flex noticeably, so it suits small formats rather than big ones.',
          ],
        },
        {
          heading: '20 pt to 24 pt',
          body: [
            'The most common range for counter displays and retail cartons. Enough rigidity for a base carrying light product, while still creasing well and taking finishing processes cleanly.',
            'If a single caliper had to cover most display work in boxboard, it would be in this band.',
          ],
        },
        {
          heading: '26 pt to 28 pt and above',
          body: [
            'Heavier structures, larger panels, and bases that must stay flat under some weight. It is also where the trade-offs start to bite.',
            'Very heavy board resists folding, creases less cleanly at small radii, and is more likely to crack through a laminate on a tight fold.',
          ],
        },
      ],
    },
    {
      heading: 'Why heavier is not automatically better',
      body: [
        'The instinct when a display feels flimsy is to step up the caliper. It is often the wrong move.',
        'Heavier board creases less cleanly on intricate structures, and on a tight fold radius the outer surface can crack — visibly, and through a laminate. On a display with fine die-cut detail, a lighter board with better structural design usually outperforms a thicker one.',
      ],
    },
    {
      heading: 'Structure beats caliper for perceived rigidity',
      body: [
        'A returned edge, a doubled panel, or a full-area insert adds far more perceived rigidity than a caliper step does, and generally costs less.',
        'This is worth trying before upgrading the board. A large boxboard panel that feels flimsy usually needs geometry, not thickness.',
      ],
      points: [
        'Returned edges stiffen a panel along its weakest axis',
        'Doubled panels dramatically increase rigidity for one extra fold',
        'A full-area insert turns a flexing base into a supported one',
        'Internal risers transfer load from the base into the walls',
      ],
    },
    {
      heading: 'Where caliper stops being the answer',
      body: [
        'Paperboard fails under sustained load by creep — gradual deformation rather than sudden collapse. A base that holds flat when the display is filled can bow noticeably a week later.',
        'Adding caliper delays that; it does not prevent it. Once the assortment is heavy enough — glass, dense liquids, bulk — the answer is corrugated, not a thicker boxboard.',
      ],
      link: {
        text: 'Where that transition sits is covered in the guide to',
        href: '/cardboard-vs-corrugated-display-boxes/',
        anchor: 'cardboard versus corrugated display boxes',
      },
    },
    {
      heading: 'Caliper changes your dieline',
      body: [
        'Allowances on a dieline are calculated for a specific board thickness. Change the caliper after approval and the folds no longer sit where they should — a tuck flap that held at 18 pt may buckle at 24 pt, and a box may not close squarely.',
        'Raise any board change before dieline approval rather than after. It is a redraw, not an adjustment.',
      ],
      link: {
        text: 'What each approval stage fixes is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'A note on grades',
      body: [
        'SBS is bleached white throughout and gives the best print surface. Kraft-back board keeps a white printing face with a brown reverse and costs less. Recycled greyboard is cheaper again, with a warmer, less uniform surface and visible fiber variation.',
        'At the same caliper these behave differently in creasing and in how they take a laminate, so specify the grade alongside the thickness rather than assuming points alone describe the board.',
      ],
    },
  ],

  related: [
    'corrugated-flute-types-for-retail-displays',
    'kraft-vs-white-cardboard-display-packaging',
    'how-product-weight-affects-display-box-material',
  ],

  furtherReading: [
    { label: 'Cardboard display boxes', href: '/cardboard-display-boxes/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Best material for display boxes', href: '/best-material-for-display-boxes/' },
  ],
};

export default post;
