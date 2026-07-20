import type { PageContent } from '../../data/page-content';

/**
 * Freight terms confirmed by the owner 2026-07-20: shipping is included in the
 * quoted price to business addresses in all fifty states.
 *
 * Transit times remain deliberately unpublished — free shipping is a price
 * commitment, not a speed commitment, and no carrier or delivery window has
 * been confirmed. OfferShippingDetails carries the free shipping rate and the
 * production handling time only.
 */
const content: PageContent = {
  slug: 'shipping-policy',
  kind: 'policy',

  metaTitle: 'Shipping Policy | Delivery Terms for Packaging Orders',
  metaDescription:
    'Delivery terms for custom packaging orders: free shipping across all fifty states, how consignments travel, and damage reporting.',

  h1: 'Shipping Policy',

  intro:
    'Shipping is included in the quoted price to business addresses across all fifty states. This page covers how consignments travel, what to check on arrival, and the terms that still depend on your own delivery conditions.',

  sections: [
    {
      heading: 'Where we ship',
      body: [
        'We ship custom display packaging to business addresses across all fifty US states.',
        'We do not maintain premises, production facilities, or collection points in individual states or cities. Orders are shipped to you rather than collected, wherever you are located.',
      ],
    },
    {
      heading: 'How orders travel',
      body: [
        'Most display packaging ships flat. Freight on this product is billed on the volume a consignment occupies rather than its weight, so flat-packing substantially reduces delivery cost — a pallet of assembled displays is mostly air.',
        'Where a structure ships assembled or pre-loaded with product, expect a materially higher freight component. We will say which applies when quoting.',
      ],
      link: {
        text: 'What drives freight cost in more detail is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Transit times',
      body: [
        'Shipping being included in the price is a cost commitment, not a speed one. Delivery timings are estimates confirmed per order rather than guarantees, and this site publishes no transit time or delivery date because none has been committed to.',
        'If your order depends on a fixed in-store date, tell us when you request a quote. We will confirm whether it is achievable before you commit rather than after.',
      ],
    },
    {
      heading: 'Freight terms',
      body: [
        'Shipping is included in the quoted price to business addresses across all fifty states. There is no separate freight line to settle after the fact — the number you approve is the number you pay.',
        'That is why box sizing matters commercially as well as structurally. Freight on display packaging is billed on volume, so a display drawn tightly around its product costs us less to ship and prices better for you.',
      ],
    },
    {
      heading: 'Delivery addresses and access',
      body: [
        'Consignments of display packaging are frequently palletized and need a delivery point that can receive a pallet. Where an address cannot, tell us in advance so the consignment can be arranged appropriately.',
        'Redelivery arising from an address that cannot receive the consignment as booked may carry a charge, since that cost falls outside the included freight. Flagging access limitations in advance avoids it entirely.',
      ],
    },
    {
      heading: 'Damage in transit',
      body: [
        'Inspect consignments on arrival where you can, and photograph both the outer packaging and the goods if anything is damaged.',
        'Report transit damage within 7 days of delivery. Carrier claims carry short reporting windows of their own, so a late report can remove the remedy even where the damage is obvious.',
      ],
      link: {
        text: 'Remedies for damaged or defective goods are covered in the',
        href: '/refund-and-return-policy/',
        anchor: 'refund and return policy',
      },
    },
    {
      heading: 'Quantity variance',
      body: [
        'Print and converting produce a variance in finished quantity, and it is standard for delivered quantity to fall within a tolerance of the quantity ordered rather than matching exactly.',
        'The tolerance applied and how it is charged require owner confirmation and are stated in the terms rather than assumed here.',
      ],
    },
  ],

  relatedPages: [
    { label: 'Shipping information', href: '/shipping-information/' },
    { label: 'Refund and return policy', href: '/refund-and-return-policy/' },
    { label: 'Terms and conditions', href: '/terms-and-conditions/' },
    { label: 'Locations we ship to', href: '/locations/' },
  ],

  updated: '2026-07-19',
};

export default content;
