import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no review, rating, or testimonial is published here, and no
 * Review or AggregateRating schema is emitted anywhere on this site.
 *
 * The schema builders in src/lib/schema.ts type `aggregateRating` as `never`,
 * so a fabricated rating is a compile error rather than a review note. When
 * genuine reviews exist, widen that type and render each review visibly on the
 * same page as its schema.
 */
const content: PageContent = {
  showReviews: true,

  slug: 'customer-reviews',
  kind: 'commercial',

  metaTitle: 'Customer Reviews | Verified Feedback, Published in Full',
  metaDescription:
    'Customer feedback on Shop Display Boxes, published in full, plus how we collect reviews and why there are not more of them yet.',

  h1: 'Customer Reviews',

  intro:
    'One review so far, published in full. We are not padding this page out — everything here comes from a customer who actually placed an order, and it stays that way as more arrive.',

  sections: [
    {
      heading: 'Why there is only one',
      body: [
        'Because it is the only one we have collected so far. Fabricated reviews are common in this industry and easy to produce — a page of plausible five-star quotes attributed to invented buyers costs nothing to write, and a great many packaging sites carry exactly that.',
        'We would rather show one real review than twenty invented ones. As orders complete we ask customers for feedback, and whatever comes back gets published here.',
      ],
    },
    {
      heading: 'How the rating markup works here',
      body: [
        'Star ratings in search results come from structured data on the page. Adding that markup without genuine displayed reviews behind it misrepresents the business to both search engines and buyers, and it breaches search engine guidelines.',
        'So the code only emits review markup for reviews actually shown on this page, and it can only calculate an average from ratings customers actually gave. A rating cannot be typed in by hand anywhere in this site — it is computed from real reviews or it does not exist.',
      ],
    },
    {
      heading: 'How reviews will be collected',
      body: [
        'From customers who have actually placed an order, after delivery, with no incentive attached to leaving a positive one. Incentivized reviews are worth less than no reviews, because everyone reading them knows how they were obtained.',
        'Reviews will be published whole rather than edited into favorable excerpts, and critical ones will not be filtered out. A review page with no criticism on it tells a reader only that criticism was removed.',
      ],
      points: [
        'Only from verified customers, after delivery',
        'No incentives attached to leaving feedback',
        'Published in full, not excerpted into favorable fragments',
        'Critical reviews published alongside positive ones',
      ],
    },
    {
      heading: 'What is ready for when they exist',
      body: [
        'The site is built so verified reviews can be added without any redesign. The data structures and the display components are in place, and the schema utilities will emit review markup correctly once genuine reviews are rendered on the page alongside it.',
        'Product-specific ratings will attach only to the product they relate to. A company-wide rating applied across unrelated product pages is misleading, and the architecture does not permit it.',
      ],
    },
    {
      heading: 'What to judge us on meanwhile',
      body: [
        'The specifics. The product pages set out what each structure can and cannot do, including where materials fail. The guides show the reasoning behind particular decisions.',
        'A supplier who tells you where boxboard stops working, and that a paperboard box confers no child resistance, is giving you more usable information than a page of testimonials would.',
      ],
      link: {
        text: 'The clearest example of that is probably the',
        href: '/cardboard-vs-corrugated-display-boxes/',
        anchor: 'cardboard versus corrugated comparison',
      },
    },
  ],

  relatedPages: [
    { label: 'Case studies', href: '/case-studies/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
    { label: 'About us', href: '/about-us/' },
  ],

  cta: {
    heading: 'Worked with us before?',
    body: 'If you would leave a review, we would like to publish it — in full, including anything critical.',
    buttonLabel: 'Get in touch',
    buttonHref: '/contact-us/',
  },

  updated: '2026-07-19',
};

export default content;
