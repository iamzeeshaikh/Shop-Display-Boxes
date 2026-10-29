import type { PageContent } from '../../data/page-content';

/**
 * Entity, address, returns, and shipping terms confirmed by the owner
 * 2026-07-20. Payment terms and a liability cap are still not stated, because
 * neither was supplied — those sections say so rather than assuming figures.
 *
 * This remains a commercial framework rather than lawyer-drafted terms. Worth a
 * qualified review before it is relied on in a dispute.
 */
const content: PageContent = {
  slug: 'terms-and-conditions',
  kind: 'policy',

  metaTitle: 'Terms and Conditions | Ordering Custom Display Boxes',
  metaDescription:
    'The terms covering quotes, approvals, artwork responsibility, and tooling when ordering custom printed display packaging.',

  h1: 'Terms and Conditions',

  intro:
    'These terms cover how quotes, approvals, and orders work. Sections requiring the site owner’s confirmation are marked rather than filled with assumed wording.',

  sections: [
    {
      heading: 'Parties and jurisdiction',
      body: [
        'These terms apply to orders placed with Shop Display Boxes, 1639 70th St, Brooklyn, NY 11204, USA. Orders are governed by the law of the State of New York.',
        'They set out the commercial structure of the relationship: what each approval stage commits you to, who owns what, and where responsibility sits.',
      ],
    },
    {
      heading: 'Quotes',
      body: [
        'A quote is given against a specific specification — dimensions, board, structure, print, finish, and quantity. Changing any of those changes the price, and a revised quote will be issued rather than the original silently reinterpreted.',
        'A quote reflects the specification it was built against. If material costs or your specification change materially before you place the order, we will reissue rather than silently absorb or pass on the difference.',
      ],
    },
    {
      heading: 'Approvals and what they fix',
      body: [
        'Two approvals govern the work. Approving a dieline fixes the structure and internal dimensions. Approving a proof fixes color and printed content.',
        'Production is carried out against those approvals. Goods that do not match an approved proof are our responsibility. Goods that match an approved proof containing a customer error are not, which is why we recommend a physical proof wherever color carries commercial weight.',
      ],
      link: {
        text: 'What to check at each approval is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'Artwork and intellectual property',
      body: [
        'You retain ownership of artwork you supply, and you confirm by supplying it that you hold the rights to use it — including any licensed imagery, trademarks, or brand assets it contains.',
        'We print artwork as supplied. We do not review it for regulatory compliance, for trademark conflicts, or for accuracy of any claim it makes. Responsibility for those remains with you.',
      ],
    },
    {
      heading: 'Dielines and tooling',
      body: [
        'Dielines we draw for your product are supplied to you and are yours to use. Physical tooling — cutting dies and printing plates — is retained and maintained for reorders unless agreed otherwise.',
        'Where tooling has been separately charged, ownership terms require owner confirmation.',
      ],
    },
    {
      heading: 'Quantity tolerance',
      body: [
        'Print and converting processes produce a variance in finished quantity, and it is standard across the industry for delivered quantity to fall within a tolerance of the quantity ordered rather than matching it exactly.',
        'Where a delivered shortfall would leave you short of what you need, tell us the quantity you actually require rather than the quantity you would like, and we will run to that.',
      ],
    },
    {
      heading: 'Payment terms',
      body: [
        'Nothing is charged on this website. Orders are paid by PayPal invoice or bank transfer, which we send after you approve your proof, or by cash on delivery for addresses in the United States and Canada. Production starts once an invoiced order is paid.',
        'The online pack price is $60.00 for 100 display boxes ($0.60 each) in US dollars, with free shipping to the US, UK, Canada and Australia. Larger or custom runs are priced by quote, and deposit requirements or account terms for those are confirmed with the quote.',
      ],
    },
    {
      heading: 'Delivery',
      body: [
        'Shipping is free to the United States, the United Kingdom, Canada and Australia. Production is 5–7 business days from proof approval; delivery then takes 5–7 business days in the US and 7–10 business days to the UK, Canada and Australia. These are our standard times rather than a guaranteed date unless one has been agreed for a specific job.',
        'Import duties or taxes charged by the destination country, if any, are the buyer’s responsibility.',
      ],
      link: {
        text: 'What affects shipping cost and risk is covered under',
        href: '/shipping-information/',
        anchor: 'shipping and delivery information',
      },
    },
    {
      heading: 'Liability',
      body: [
        'Custom printed goods are not returnable for change of mind. Where goods arrive damaged, are defective, or do not match the approved proof and dieline, and you report it within 14 days of delivery with photographs, our responsibility is to replace the affected units free or refund them, with shipping paid by us, as set out in the refund and return policy.',
        'No cap on wider liability, and no exclusion of consequential loss, is stated on this page. Those are terms worth settling with a qualified adviser rather than asserting here, and their absence should not be read as a waiver of any right either party has in law.',
      ],
      link: {
        text: 'Remedies for defective goods are set out in the',
        href: '/refund-and-return-policy/',
        anchor: 'refund and return policy',
      },
    },
    {
      heading: 'Changes to these terms',
      body: [
        'Terms in force are those current at the time your order is accepted. The date at the foot of this page indicates when it was last revised.',
      ],
    },
  ],

  relatedPages: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Refund and return policy', href: '/refund-and-return-policy/' },
    { label: 'Shipping policy', href: '/shipping-policy/' },
    { label: 'How ordering works', href: '/how-to-order/' },
  ],

  updated: '2026-10-29',
};

export default content;
