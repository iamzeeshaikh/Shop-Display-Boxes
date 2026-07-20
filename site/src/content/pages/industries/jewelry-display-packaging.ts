import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'jewelry-display-packaging',
  kind: 'industry',

  metaTitle: 'Jewelry Display Packaging | Cards, Boxes & Counter Units',
  metaDescription:
    'Display packaging for jewelry: card caliper and hole spacing, tarnish and scratch protection, and counter unit presentation.',

  h1: 'Jewelry Display Packaging',

  intro:
    'Jewelry packaging spans two very different problems: presentation cards that must hold a piece without bending, and presentation boxes where the opening moment carries part of the perceived value.',

  sections: [
    {
      heading: 'Cards: caliper decides everything',
      body: [
        'A card too light bends the moment a post goes through it, and a bent card makes good jewelry look cheap. Jewelry cards want noticeably heavier stock than most printed items their size.',
        'Weight also matters on a peg hook, where the card carries itself plus the piece from a single punched hole. That hole is the failure point on a light card.',
      ],
      link: {
        text: 'Hole spacing and hang tab construction are covered on the',
        href: '/earring-display-cards/',
        anchor: 'earring display cards page',
      },
    },
    {
      heading: 'Hole placement is measured from the piece',
      body: [
        'Holes must be far enough apart that the pieces do not touch, close enough that the pair reads as a set, and placed so that drop styles hang without fouling the card edge.',
        'Drop and dangle earrings need the full hanging length measured, not just the top of the piece. Holes placed too low mean the earrings overhang the bottom edge and snag on everything.',
      ],
    },
    {
      heading: 'Protecting the finish',
      body: [
        'Polished metal and plated finishes scratch against surfaces harder than they are, including the packaging meant to protect them. A coarse board edge or a rough recess will mark a piece in transit.',
        'Where a piece is held in a box, the contact surfaces should be softer than the finish — flocked, foam-backed, or fabric-faced linings rather than bare board.',
      ],
    },
    {
      heading: 'Tarnish',
      body: [
        'Silver and some plated finishes tarnish through contact with sulfur compounds in the air, and ordinary paperboard is not a barrier against it.',
        'Anti-tarnish papers and treated inserts exist for this, and they are a specific material specification rather than a property of packaging generally. If tarnish is a known problem for your pieces, raise it — a standard card or box will not prevent it.',
      ],
    },
    {
      heading: 'Boxes and the opening moment',
      body: [
        'For higher-value pieces the box is opened in front of the buyer or the recipient, and how the lid behaves contributes to the impression. A lid lifting with slight resistance and settling cleanly reads as considered; one that binds or falls open does not.',
        'Rigid board delivers that consistently where folding board does not, which is why higher-value jewelry packaging uses it despite the freight cost of shipping assembled.',
      ],
      link: {
        text: 'Rigid construction and its trade-offs are set out on the',
        href: '/box-materials/',
        anchor: 'box materials page',
      },
    },
    {
      heading: 'Counter displays',
      body: [
        'Jewelry counter units share the sightline problem of all counter displays: a standing shopper looks down at roughly forty-five degrees, so pieces laid flat present their least informative face.',
        'Angled tiers or raised platforms put the piece into the actual line of sight. For rings and studs, individual recesses also stop pieces migrating into each other through a day of handling.',
      ],
    },
    {
      heading: 'Small runs and wide ranges',
      body: [
        'Jewelry makers typically run many designs in small quantities, which is the clearest case for digital printing — no plates, and versioning between designs costs nothing.',
        'Because cards are small, many designs gang onto one sheet efficiently, so ordering several designs together is usually far cheaper per card than ordering them separately over time.',
      ],
    },
  ],

  faqs: [
    { question: 'What card thickness do jewelry cards need?', answer: 'Heavier than most printed items of the same size. A light card bends as soon as a post goes through it, and a bent card makes good jewelry look cheap. Weight also matters on a peg hook, where everything hangs from one punched hole.' },
    { question: 'How do I position the holes for drop earrings?', answer: 'Measure the full hanging length, not just the top of the piece. Holes placed from the top alone put the earrings past the bottom edge of the card, where they overhang and snag on everything around them.' },
    { question: 'My pieces arrive with fine scratches. Why?', answer: 'Contact with a surface harder than the finish — a coarse board edge, a rough recess, or bare board in a box. Every surface the piece touches should be softer than the finish, which means a flocked, foam-backed, or fabric-faced lining.' },
    { question: 'Will packaging stop silver tarnishing?', answer: 'Ordinary paperboard will not — tarnish comes from sulfur compounds in the air and board is not a barrier. Anti-tarnish papers and treated inserts exist as a specific material specification. Raise it if tarnish is a known issue for your pieces.' },
    { question: 'Rigid or folding board for jewelry boxes?', answer: 'Rigid for higher-value pieces, because the lid behavior is part of the impression when the box is opened in front of a buyer. Folding board is a reasonable economy for lower-value lines but rarely gives that behavior consistently.' },
    { question: 'How should a jewelry counter display present pieces?', answer: 'Angled or raised, not flat. A standing shopper looks down at roughly forty-five degrees, so pieces laid flat present their least informative face. Individual recesses also stop rings and studs migrating into each other during handling.' },
    { question: 'I have many designs in small quantities. What is most economical?', answer: 'Digital printing, and ordering several designs in one run. There are no plates so versioning costs nothing, and because cards are small many designs gang onto a single sheet — far cheaper per card than separate orders over time.' },
    { question: 'Can cards be die-cut into custom shapes?', answer: 'Yes, including rounded corners, scalloped edges, or a fully custom outline. Keep hole positions and any hang tab clear of the cut edge, since a shaped card has less material around those stress points.' },
    { question: 'Should I print the back of the card?', answer: 'Yes. The back is visible when cards hang in a row on a peg, and it is what the customer looks at while removing the piece at home. It is the natural place for materials, care instructions, and brand details.' },
  ],

  relatedProducts: ['earring-display-cards', 'watch-display-boxes', 'display-gift-boxes', 'flat-display-boxes'],

  relatedPages: [
    { label: 'Health and beauty display packaging', href: '/health-and-beauty-display-packaging/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Low minimum orders', href: '/low-minimum-orders/' },
  ],

  cta: {
    heading: 'Running several designs?',
    body: 'Send them together with a sample piece. Ganging designs onto one sheet is usually far cheaper than ordering each separately.',
  },

  updated: '2026-07-19',
};

export default content;
