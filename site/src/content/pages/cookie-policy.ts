import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: this page describes the site as actually implemented. The
 * site sets no cookies of its own, and analytics loads only when a real
 * measurement ID is configured — so the honest statement is that there may
 * currently be no cookies at all, which is what this page says.
 */
const content: PageContent = {
  slug: 'cookie-policy',
  kind: 'policy',

  metaTitle: 'Cookie Policy | What This Site Stores in Your Browser',
  metaDescription:
    'What cookies this website sets, why the analytics here may set none at all, and how to control cookies in your own browser.',

  h1: 'Cookie Policy',

  intro:
    'This page describes what this website actually stores in your browser, which is less than most cookie policies assume.',

  sections: [
    {
      heading: 'This site sets no cookies of its own',
      body: [
        'The site is built as static pages. It has no login, no shopping cart, and no session to maintain, so there is no functional reason for it to set a cookie and it does not set one.',
        'Form submissions are protected by a token that is validated at the point of submission rather than by a persistent tracking cookie.',
      ],
    },
    {
      heading: 'Analytics cookies',
      body: [
        'Analytics is loaded only when a genuine measurement ID has been configured for this site. If none is configured, no analytics script loads and no analytics cookie is set — which may currently be the case.',
        'Where analytics is enabled, Google Analytics sets cookies to distinguish visitors and measure how pages are used. Those cookies do not receive personal information from this site: conversion events record that a form was submitted, and carry no name, email, phone number, company, or file name.',
      ],
      link: {
        text: 'How enquiry information is handled is set out in the',
        href: '/privacy-policy/',
        anchor: 'privacy policy',
      },
    },
    {
      heading: 'What we do not use',
      body: [
        'There are no advertising cookies, no cross-site tracking pixels, no social media embeds, and no third-party fonts or scripts loaded from external hosts. Fonts are served from this domain.',
        'The site’s content security policy blocks requests to external hosts, which means a third-party tracker could not load here even if one were added by mistake.',
      ],
      points: [
        'No advertising or retargeting cookies',
        'No social media tracking embeds',
        'No third-party fonts or externally hosted scripts',
        'No cross-site tracking of any kind',
      ],
    },
    {
      heading: 'Controlling cookies yourself',
      body: [
        'Every major browser lets you view, block, and delete cookies from its settings, and offers a mode that discards them when you close the window.',
        'Because this site sets no cookies of its own, blocking cookies entirely will not prevent any part of it from working.',
      ],
    },
    {
      heading: 'Changes',
      body: [
        'If analytics or any other cookie-setting integration is enabled in future, this page will be updated to describe it. The date below indicates when it was last revised.',
      ],
    },
  ],

  relatedPages: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Terms and conditions', href: '/terms-and-conditions/' },
    { label: 'Accessibility', href: '/accessibility/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],

  updated: '2026-07-19',
};

export default content;
