import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no case study is published here.
 *
 * The owner confirmed the branded renders in the asset library are genuine
 * client projects, so that imagery may be shown as product photography. But a
 * case study is a claim about outcomes — quantities, timelines, results, cost
 * changes, sell-through — and none of that was supplied. Writing plausible
 * numbers would fabricate customer results.
 *
 * This page therefore explains what a case study here will contain when real
 * ones exist, and states plainly that none is published yet. The data model in
 * src/data/case-studies.ts is ready for verified entries.
 */
const content: PageContent = {
  slug: 'case-studies',
  kind: 'commercial',

  metaTitle: 'Case Studies | Display Packaging Projects and Briefs',
  metaDescription:
    'How we will document display packaging projects, what each case study will contain, and why none is published here just yet.',

  h1: 'Case Studies',

  intro:
    'We are not publishing case studies yet. This page explains what will appear here, and why we would rather show nothing than write something we cannot evidence.',

  sections: [
    {
      heading: 'Why this page is empty',
      body: [
        'A case study makes claims about outcomes — how many units, over what timeline, at what cost, with what result on shelf. Those are the numbers that make it worth reading, and they are exactly the numbers that cannot be estimated.',
        'We have produced display packaging for brands whose work appears in the product photography across this site. What we do not yet have is written permission to name those brands alongside verified figures for what the projects achieved. Until both exist, publishing a case study would mean inventing the substance of it.',
      ],
    },
    {
      heading: 'What each case study will contain',
      body: [
        'When we publish these, each will cover the brief and its constraints, the structural decisions and why they were made, the material specification, and what was actually delivered.',
        'Where a client is willing to share commercial outcomes, those will be attributed and quantified. Where they are not, the case study will describe the packaging problem and its solution without implying results that were not measured.',
      ],
      points: [
        'The brief, including any retailer footprint or specification',
        'Structural decisions and the reasoning behind them',
        'Material and print specification as produced',
        'Named client and quantified outcome only where verified and permitted',
      ],
    },
    {
      heading: 'What you can look at meanwhile',
      body: [
        'The product pages carry the substance a case study would: the constraints that govern each format, the decisions that resolve them, and photography of work produced.',
        'The buyer guides go further into the reasoning behind particular choices, which is usually what a reader is actually looking for when they open a case study.',
      ],
      link: {
        text: 'For work by format, start from the',
        href: '/portfolio/',
        anchor: 'portfolio',
      },
    },
    {
      heading: 'If you are an existing client',
      body: [
        'If you have worked with us and are willing to be featured, we would like to hear from you. A case study needs your permission to be named and your figures to be meaningful.',
        'We will send you the draft before anything is published, and nothing goes live without your sign-off on both the wording and the numbers.',
      ],
    },
  ],

  relatedPages: [
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Customer reviews', href: '/customer-reviews/' },
    { label: 'About us', href: '/about-us/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
  ],

  cta: {
    heading: 'Have a project with its own constraints?',
    body: 'Send the brief and the product. We would rather work through your problem than show you someone else’s.',
  },

  updated: '2026-07-19',
};

export default content;
