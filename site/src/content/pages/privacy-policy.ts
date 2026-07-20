import type { PageContent } from '../../data/page-content';

/**
 * Entity, address, and contact confirmed by the owner 2026-07-20.
 * Everything describing how the site itself behaves is accurate to the
 * implementation — the analytics and cookie statements in particular reflect
 * what the code actually does, not a generic template.
 */
const content: PageContent = {
  slug: 'privacy-policy',
  kind: 'policy',

  metaTitle: 'Privacy Policy | How We Handle Your Information Here',
  metaDescription:
    'What information this site collects through its forms and analytics, how it is used, how long it is kept, and your rights over it.',

  h1: 'Privacy Policy',

  intro:
    'This policy covers what happens to information you send through this website. It describes the site as actually built, not a generic template.',

  sections: [
    {
      heading: 'Who is responsible for your information',
      body: [
        'This website is operated by Shop Display Boxes, 1639 70th St, Brooklyn, NY 11204, USA.',
        'For any question about information held about you, including access, correction, or deletion requests, contact info@shopdisplayboxes.com or use the contact form on this site.',
      ],
    },
    {
      heading: 'What the forms collect',
      body: [
        'The quote, sample, dieline, and contact forms collect only what is needed to respond: your name, business name, email address, phone number where you provide one, and the details of your enquiry — dimensions, quantities, materials, and any artwork file you choose to upload.',
        'No field on this site asks for payment card details, and none is collected through the website.',
      ],
      points: [
        'Contact details you enter — name, business, email, phone',
        'Enquiry details — product, dimensions, quantity, requirements',
        'Artwork files you choose to upload',
        'A timestamp used to detect automated submissions',
      ],
    },
    {
      heading: 'How that information is used',
      body: [
        'To respond to your enquiry, to prepare a quote, and to carry out any work you subsequently order. It is not sold, and it is not shared with third parties for their own marketing.',
        'Where a supplier is involved in fulfilling your order, only the information required to do that is shared with them.',
      ],
    },
    {
      heading: 'Artwork and files you upload',
      body: [
        'Uploaded files are used to quote and to produce your job. Artwork remains yours, and we do not publish, reuse, or share it beyond what is needed to produce your order without your agreement.',
        'File uploads are validated by type and size, and files are handled so that an uploaded file cannot be executed by the server.',
      ],
    },
    {
      heading: 'Analytics',
      body: [
        'This site loads analytics only when a genuine measurement ID has been configured. If none is configured, no analytics scripts load at all and no analytics cookies are set.',
        'Where analytics is enabled, conversion events record that a form was submitted successfully. They deliberately carry no personal data — no name, email, phone number, company, or file name is passed into an analytics event or embedded in a URL.',
      ],
      link: {
        text: 'Which cookies this involves is set out in the',
        href: '/cookie-policy/',
        anchor: 'cookie policy',
      },
    },
    {
      heading: 'How long information is kept',
      body: [
        'Enquiry correspondence and order records are kept for as long as needed to service the relationship and to meet legal and accounting obligations, after which they are deleted. Artwork files are kept so that reorders can be produced against the same approved specification without you having to resupply them.',
        'If you would like information about you removed sooner, contact info@shopdisplayboxes.com and we will do so except where we are required to retain it.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Depending on where you are located, you may have rights to access the information held about you, to have it corrected, to have it deleted, and to object to certain uses. Residents of some US states have specific rights under state privacy laws.',
        'To exercise any of these, email info@shopdisplayboxes.com or use the contact form on this site.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'The site is served over HTTPS. Form submissions are validated on the server as well as in the browser, are rate limited, and are protected against cross-site request forgery. Error messages returned to visitors do not expose internal details.',
        'No method of transmission is completely secure, and we do not claim otherwise.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'Material changes will be reflected here with an updated date. The date at the foot of this page indicates when it was last revised.',
      ],
    },
  ],

  relatedPages: [
    { label: 'Cookie policy', href: '/cookie-policy/' },
    { label: 'Terms and conditions', href: '/terms-and-conditions/' },
    { label: 'Accessibility', href: '/accessibility/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],

  updated: '2026-07-19',
};

export default content;
