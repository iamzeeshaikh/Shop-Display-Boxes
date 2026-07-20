import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: this states what has actually been implemented and tested,
 * and does not claim a formal audit or a conformance certification that has not
 * been carried out. "Aims to conform" is the accurate phrasing until an
 * independent audit exists.
 */
const content: PageContent = {
  slug: 'accessibility',
  kind: 'policy',

  metaTitle: 'Accessibility Statement | Our Commitment and Status',
  metaDescription:
    'How this site is built for accessibility, what has been tested against WCAG 2.2 AA, and how to report a barrier you encounter.',

  h1: 'Accessibility',

  intro:
    'This site is built to be usable by as many people as possible, including with a keyboard, a screen reader, magnification, or reduced motion. This page states what has been done and what has not.',

  sections: [
    {
      heading: 'Standard we work to',
      body: [
        'The site aims to conform to the Web Content Accessibility Guidelines version 2.2 at level AA. That is a stated aim supported by the implementation choices below — not a claim of certified conformance, because no independent audit has been carried out.',
        'Where we become aware of a shortfall, the honest position is to record it and fix it rather than to describe the site as fully conformant.',
      ],
    },
    {
      heading: 'What has been built in',
      body: [
        'Structure comes first: semantic HTML with a logical heading order, one H1 per page, real landmarks, and a skip link to the main content as the first focusable element.',
        'Interactive elements are native wherever possible. The FAQ accordions are built on the browser’s own disclosure element, which means the answers are present in the page, reachable by keyboard, and announced correctly without any custom scripting.',
      ],
      points: [
        'Skip-to-content link as the first focusable element',
        'Semantic landmarks and a logical heading order, one H1 per page',
        'Navigation and mobile menu fully operable by keyboard, with Escape to close',
        'Visible focus indicators on every interactive element, on light and dark surfaces',
        'Form labels tied to inputs, with errors announced to assistive technology',
        'Target sizes of at least 44 by 44 pixels on controls',
        'Text alternatives on informative images, and empty alt on decorative ones',
        'Tables with proper header cells, scrolling within their own container',
      ],
    },
    {
      heading: 'Color and contrast',
      body: [
        'Foreground and background pairings used in the interface are checked against the WCAG 2.2 AA contrast thresholds, and the ratios are recorded alongside the color tokens in the codebase so a future change cannot quietly break them.',
        'Color is never the only way information is conveyed. Form errors carry text as well as a color change, and links are distinguishable without relying on hue alone.',
      ],
    },
    {
      heading: 'Motion',
      body: [
        'Animation is limited to short transitions. The site honors the operating system’s reduced-motion preference, and when that is set, transitions and smooth scrolling are effectively disabled rather than merely shortened.',
        'There are no auto-playing videos, no carousels that advance on their own, and no parallax effects.',
      ],
    },
    {
      heading: 'Without JavaScript',
      body: [
        'The site is static HTML and does not require JavaScript to read. With scripts unavailable, every page still renders, every link works, and all navigation destinations remain reachable and crawlable.',
        'Scripting is used only for the menu disclosures, the gallery thumbnails, and client-side form hints — each of which degrades to a usable state without it.',
      ],
    },
    {
      heading: 'Known limitations',
      body: [
        'No independent accessibility audit has been carried out, and no testing with assistive technology users has been commissioned. Automated checking catches a meaningful proportion of issues but not all of them, and we would rather say so than imply a level of assurance that does not exist.',
        'Any specific barriers identified will be listed in this section as they are found, with what is being done about them.',
      ],
    },
    {
      heading: 'Reporting a problem',
      body: [
        'If you encounter a barrier on this site, please tell us through the contact form, describing the page and what happened. That is genuinely useful — real reports find things automated checks do not.',
        'A dedicated accessibility contact address will be published here once the site owner has confirmed contact details.',
      ],
      link: {
        text: 'Until then, please report anything you find through the',
        href: '/contact-us/',
        anchor: 'contact form',
      },
    },
  ],

  relatedPages: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Cookie policy', href: '/cookie-policy/' },
    { label: 'Terms and conditions', href: '/terms-and-conditions/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],

  updated: '2026-07-19',
};

export default content;
