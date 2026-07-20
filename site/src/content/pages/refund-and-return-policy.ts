import type { PageContent } from '../../data/page-content';

/**
 * Return terms confirmed by the owner 2026-07-20: custom printed goods are not
 * returnable for change of mind; defects and specification mismatches are
 * reportable within 7 days of delivery for replacement or refund.
 *
 * MerchantReturnPolicy schema is emitted from those verified terms in
 * src/lib/schema.ts. Any change here must be mirrored there — the schema and
 * the visible page must not diverge.
 */
const content: PageContent = {
  slug: 'refund-and-return-policy',
  kind: 'policy',

  metaTitle: 'Refund and Return Policy | Custom Printed Packaging',
  metaDescription:
    'How returns work on custom printed packaging: defects reportable within 7 days, and why the two approval stages protect you.',

  h1: 'Refund and Return Policy',

  intro:
    'Custom printed packaging is made to your specification and your artwork, which changes how returns work compared with stock goods. In short: not returnable for change of mind, but defects and specification errors are reportable within 7 days.',

  sections: [
    {
      heading: 'Why custom goods are treated differently',
      body: [
        'A run of boxes printed with your artwork, cut to your dieline, and sized to your product has no resale value to anyone else. That is a structural fact about made-to-order goods rather than a policy choice, and it is why custom packaging is commonly treated differently from stock items under most suppliers’ terms.',
        'So custom printed packaging is not returnable for change of mind. Manufacturing defects and goods that do not match the approved specification are a different matter: report them within 7 days of delivery, with photographs, and we will replace or refund the affected units.',
      ],
    },
    {
      heading: 'Where the approval stages protect you',
      body: [
        'Two approval points exist precisely so that disputes about the finished goods are rare. Approving the dieline fixes the structure and the internal dimensions. Approving the proof fixes the color and the printed content.',
        'Anything produced that does not match the approved proof is our responsibility to put right. Anything that matches an approved proof which itself contained an error is a different situation — which is the practical argument for taking both approvals seriously and, where color matters, for requesting a physical proof.',
      ],
      link: {
        text: 'The full sequence and what to check at each stage is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'Manufacturing defects',
      body: [
        'Defects are faults in production rather than differences of preference: misregistered print against the approved proof, crushed creases, failed glue seams, incorrect die cuts, or delivery of the wrong specification.',
        'If you receive goods with a defect of this kind, contact us within 7 days of delivery with photographs and the order reference. We will replace the affected units or refund them.',
      ],
      points: [
        'Print that does not match the approved proof',
        'Failed glue seams or crushed creases',
        'Die cuts that do not match the approved dieline',
        'Delivery of a specification other than the one ordered',
      ],
    },
    {
      heading: 'Transit damage',
      body: [
        'Report transit damage within 7 days of delivery, in line with the defect window above, with photographs of both the outer packaging and the goods.',
        'Do not wait on this one. Carrier claims carry short reporting windows of their own, and a late report can remove the remedy entirely even where the damage is obvious.',
      ],
    },
    {
      heading: 'Cancellations',
      body: [
        'It depends how far the order has progressed. Before dieline approval little has been committed, and cancelling is straightforward.',
        'After plates are made and material is cut, costs have been incurred that cannot be recovered, and those are chargeable. Ask before cancelling and we will tell you exactly where your order stands and what it would cost.',
      ],
    },
    {
      heading: 'Reducing the risk before you order',
      body: [
        'Request a sample before committing to a full run, particularly for a new structure. Ask for a physical proof where color carries commercial weight. Check the dieline against a real unit of your product rather than against a drawing.',
        'These three steps prevent the great majority of disputes, and they cost far less than a reprint.',
      ],
      link: {
        text: 'Sample options are covered under',
        href: '/sample-request/',
        anchor: 'requesting a sample',
      },
    },
  ],

  relatedPages: [
    { label: 'Terms and conditions', href: '/terms-and-conditions/' },
    { label: 'Shipping policy', href: '/shipping-policy/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
    { label: 'How ordering works', href: '/how-to-order/' },
  ],

  updated: '2026-07-19',
};

export default content;
