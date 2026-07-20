/**
 * Navigation.
 *
 * The "Display Boxes" item opens a mega menu that links directly to root-level
 * product pages. There is deliberately no product category page behind it —
 * the menu is a grouping device in the UI only, and creates no URL of its own.
 *
 * Footer link volume is kept deliberately low. Location links are NOT in the
 * footer: the hub at /locations/ is the only site-wide entry point to them.
 */

import { PRODUCTS, type ProductGroup } from './products';

export interface NavLink {
  label: string;
  href: string;
  /** Short line shown under the label in the mega menu. */
  hint?: string;
}

export interface MegaColumn {
  heading: ProductGroup;
  links: NavLink[];
}

/** Product columns for the mega menu, built from the product registry. */
export const PRODUCT_MENU: MegaColumn[] = (
  ['By placement', 'By material', 'By format', 'By industry'] as ProductGroup[]
).map((heading) => ({
  heading,
  links: PRODUCTS.filter((p) => p.group === heading).map((p) => ({
    label: p.navLabel,
    href: `/${p.slug}/`,
  })),
}));

export const PRIMARY_NAV: Array<
  | { label: string; href: string; kind: 'link' }
  | { label: string; kind: 'mega' }
  | { label: string; kind: 'dropdown'; links: NavLink[] }
> = [
  { label: 'Display Boxes', kind: 'mega' },
  {
    label: 'Industries',
    kind: 'dropdown',
    links: [
      { label: 'Retail packaging', href: '/retail-packaging/' },
      { label: 'Cosmetic packaging', href: '/cosmetic-packaging/' },
      { label: 'Health & beauty', href: '/health-and-beauty-display-packaging/' },
      { label: 'Food display packaging', href: '/food-display-packaging/' },
      { label: 'Bakery', href: '/bakery-display-packaging/' },
      { label: 'Confectionery', href: '/confectionery-display-packaging/' },
      { label: 'Candle packaging', href: '/candle-packaging/' },
      { label: 'Soap packaging', href: '/soap-packaging/' },
      { label: 'Supplements', href: '/supplement-display-packaging/' },
      { label: 'Pharmaceutical', href: '/pharmaceutical-display-packaging/' },
      { label: 'Cannabis', href: '/cannabis-display-packaging/' },
      { label: 'Vape', href: '/vape-display-packaging/' },
      { label: 'Electronics', href: '/electronics-display-packaging/' },
      { label: 'Jewelry', href: '/jewelry-display-packaging/' },
      { label: 'Toys', href: '/toy-display-packaging/' },
      { label: 'Pet products', href: '/pet-product-display-packaging/' },
    ],
  },
  {
    label: 'Materials & Printing',
    kind: 'dropdown',
    links: [
      { label: 'Box materials', href: '/box-materials/' },
      { label: 'Custom printing options', href: '/custom-printing-options/' },
      { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
      { label: 'Custom box sizes', href: '/custom-box-sizes/' },
      { label: 'Sustainability', href: '/sustainability/' },
      { label: 'Quality assurance', href: '/quality-assurance/' },
    ],
  },
  {
    label: 'Resources',
    kind: 'dropdown',
    links: [
      { label: 'Free dieline', href: '/get-a-free-dieline/' },
      { label: 'Dieline templates', href: '/dieline-templates/' },
      { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
      { label: 'Free design support', href: '/free-design-support/' },
      { label: 'Display box size guide', href: '/display-box-size-guide/' },
      { label: 'What display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
      { label: 'How to order', href: '/how-to-order/' },
      { label: 'Shipping information', href: '/shipping-information/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'FAQ', href: '/faq/' },
    ],
  },
  { label: 'Locations', href: '/locations/', kind: 'link' },
  { label: 'About', href: '/about-us/', kind: 'link' },
];

export const FOOTER_GROUPS: Array<{ heading: string; links: NavLink[] }> = [
  {
    heading: 'Popular display boxes',
    links: [
      { label: 'Custom display boxes', href: '/custom-display-boxes/' },
      { label: 'Counter display boxes', href: '/counter-display-boxes/' },
      { label: 'Retail display boxes', href: '/retail-display-boxes/' },
      { label: 'Cardboard display stands', href: '/cardboard-display-stands/' },
      { label: 'Corrugated display boxes', href: '/corrugated-display-boxes/' },
      { label: 'Cosmetic display boxes', href: '/cosmetic-display-boxes/' },
    ],
  },
  {
    heading: 'Materials & printing',
    links: [
      { label: 'Box materials', href: '/box-materials/' },
      { label: 'Custom printing options', href: '/custom-printing-options/' },
      { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
      { label: 'Custom box sizes', href: '/custom-box-sizes/' },
      { label: 'Sustainability', href: '/sustainability/' },
    ],
  },
  {
    heading: 'Buyer resources',
    links: [
      { label: 'How to order', href: '/how-to-order/' },
      { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
      { label: 'Dieline templates', href: '/dieline-templates/' },
      { label: 'Display box size guide', href: '/display-box-size-guide/' },
      { label: 'Pricing explained', href: '/how-much-do-custom-display-boxes-cost/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about-us/' },
      { label: 'Contact us', href: '/contact-us/' },
      { label: 'Quality assurance', href: '/quality-assurance/' },
      { label: 'Portfolio', href: '/portfolio/' },
      { label: 'Locations we ship to', href: '/locations/' },
      { label: 'Wholesale display boxes', href: '/wholesale-display-boxes/' },
    ],
  },
];

export const FOOTER_POLICIES: NavLink[] = [
  { label: 'Privacy policy', href: '/privacy-policy/' },
  { label: 'Terms and conditions', href: '/terms-and-conditions/' },
  { label: 'Refund and return policy', href: '/refund-and-return-policy/' },
  { label: 'Shipping policy', href: '/shipping-policy/' },
  { label: 'Cookie policy', href: '/cookie-policy/' },
  { label: 'Accessibility', href: '/accessibility/' },
];
