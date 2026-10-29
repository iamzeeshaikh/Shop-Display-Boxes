import type { PageContent } from '../../data/page-content';

/**
 * Freight terms confirmed by the owner 2026-07-20, extended 2026-10-29: free
 * shipping to the United States, United Kingdom, Canada and Australia;
 * production 5–7 business days; transit 5–7 business days in the US and 7–10
 * to the other three. The same numbers drive OfferShippingDetails and the
 * Merchant feed through src/data/order.ts — change them together.
 */
const content: PageContent = {
  slug: 'shipping-policy',
  kind: 'policy',

  metaTitle: 'Shipping Policy | Delivery Terms for Packaging Orders',
  metaDescription:
    'Delivery terms for custom packaging orders: free shipping to the US, UK, Canada and Australia, delivery times, damage reporting.',

  h1: 'Shipping Policy',

  intro:
    'Shipping is free on every order to the United States, the United Kingdom, Canada and Australia. This page covers delivery times, how consignments travel, what to check on arrival, and the terms that still depend on your own delivery conditions.',

  sections: [
    {
      heading: 'Where we ship',
      body: [
        'We ship custom display packaging free to addresses in the United States, the United Kingdom, Canada and Australia. For any other country, request a quote and tell us where the order is going.',
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
        anchor: 'shipping and delivery information',
      },
    },
    {
      heading: 'Transit times',
      body: [
        'Production takes 5–7 business days after you approve the proof. Once your order ships, delivery takes 5–7 business days within the United States and 7–10 business days to the United Kingdom, Canada and Australia.',
        'Those are our standard times for the online 100-box pack and most quoted runs. If your order depends on a fixed in-store date, tell us when you order or request a quote, and we will confirm whether it is achievable before you commit rather than after.',
      ],
    },
    {
      heading: 'Freight terms',
      body: [
        'Shipping is free on every order to the United States, the United Kingdom, Canada and Australia. There is no separate freight line to settle after the fact — the number you approve is the number you pay. Import duties or taxes charged by the destination country, if any, are the buyer’s responsibility.',
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
        'Report transit damage within 14 days of delivery, with photographs. We replace damaged boxes free or refund them, and we pay the shipping. Report as early as you can: carrier claims carry short reporting windows of their own.',
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

  updated: '2026-10-29',
};

export default content;
