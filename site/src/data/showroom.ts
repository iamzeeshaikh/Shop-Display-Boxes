/**
 * Showroom design data: which real product photo goes where, and the options
 * offered in "Design Your Display Box". Presentation only — no copy that
 * search engines index lives here except option labels.
 */
import type { PhotoRef } from '../lib/photos';

/**
 * Online order pack. The "Order online" band renders NOTHING while `price` is
 * null. When the owner sets a price (USD, for the whole pack), the band appears
 * on the home page with that figure. There is no checkout yet; the band's
 * button goes to the quote form until one exists.
 */
export const orderPack: { qty: number; price: number | null } = { qty: 100, price: null };

const p = (slug: string, n: number): PhotoRef => ({ slug, n });

export const HOME_PHOTOS = {
  hero: p('cosmetic-display-boxes', 4),
  structure: p('custom-display-boxes', 1),
  order: p('custom-display-boxes', 2),
  close: p('soap-display-boxes', 2),
  placement: {
    counter: p('corrugated-display-boxes', 5),
    shelf: p('shelf-ready-display-boxes', 2),
    floor: p('cardboard-display-stands', 1),
  },
  spec: {
    material: p('cardboard-display-boxes', 8),
    printing: p('retail-display-boxes', 10),
    finishing: p('display-gift-boxes', 7),
    size: p('cardboard-display-boxes', 3),
  },
};

/** Best photo per product for gallery tiles (falls back to photo 1). */
export const GALLERY_PICK: Record<string, number> = {
  'custom-display-boxes': 7,
  'retail-display-boxes': 2,
  'retail-display-packaging': 3,
  'counter-display-boxes': 1,
  'cardboard-counter-display-units': 2,
  'cardboard-display-stands': 3,
  'shelf-ready-display-boxes': 3,
  'pop-up-display-boxes': 1,
  'cardboard-display-boxes': 5,
  'corrugated-display-boxes': 8,
  'flat-display-boxes': 2,
  'flat-tuck-display-boxes': 4,
  'display-trays': 4,
  'display-mailer-boxes': 2,
  'display-gift-boxes': 10,
  'cosmetic-display-boxes': 2,
  'soap-display-boxes': 4,
  'candle-display-boxes': 1,
  'bath-bomb-display-boxes': 3,
  'food-display-boxes': 4,
  'e-juice-display-boxes': 3,
  'counter-display-peptide-boxes': 1,
  'barbie-doll-display-boxes': 3,
  'watch-display-boxes': 3,
  'earring-display-cards': 3,
};

/** Industry page href → photo used on industry tiles and industry page heroes. */
export const INDUSTRY_PHOTOS: Record<string, PhotoRef> = {
  '/cosmetic-packaging/': p('cosmetic-display-boxes', 3),
  '/health-and-beauty-display-packaging/': p('cosmetic-display-boxes', 4),
  '/food-display-packaging/': p('food-display-boxes', 7),
  '/bakery-display-packaging/': p('food-display-boxes', 4),
  '/confectionery-display-packaging/': p('retail-display-boxes', 3),
  '/candle-packaging/': p('candle-display-boxes', 5),
  '/soap-packaging/': p('soap-display-boxes', 3),
  '/supplement-display-packaging/': p('counter-display-peptide-boxes', 3),
  '/pharmaceutical-display-packaging/': p('counter-display-peptide-boxes', 2),
  '/jewelry-display-packaging/': p('earring-display-cards', 4),
  '/electronics-display-packaging/': p('watch-display-boxes', 1),
  '/toy-display-packaging/': p('barbie-doll-display-boxes', 2),
  '/retail-packaging/': p('retail-display-boxes', 7),
  '/pet-product-display-packaging/': p('cardboard-counter-display-units', 1),
  '/cannabis-display-packaging/': p('custom-display-boxes', 3),
  '/vape-display-packaging/': p('e-juice-display-boxes', 3),
};

/** Design Your Display Box — step options, each with a real product photo. */
export const DESIGN_STYLES = [
  { value: 'Counter display', photo: p('cardboard-counter-display-units', 4) },
  { value: 'Display tray', photo: p('display-trays', 1) },
  { value: 'Shelf-ready box', photo: p('shelf-ready-display-boxes', 1) },
  { value: 'Floor stand', photo: p('cardboard-display-stands', 5) },
  { value: 'Display mailer', photo: p('display-mailer-boxes', 3) },
  { value: 'Pop-up display', photo: p('pop-up-display-boxes', 4) },
];

export const DESIGN_SIZES = [
  { value: 'Small counter', note: 'up to 8 in wide', photo: p('counter-display-boxes', 2) },
  { value: 'Medium counter', note: '8–14 in wide', photo: p('counter-display-peptide-boxes', 2) },
  { value: 'Large tiered', note: '14 in and over', photo: p('soap-display-boxes', 2) },
  { value: 'Floor height', note: 'free-standing', photo: p('cardboard-display-stands', 7) },
];

export const DESIGN_FINISHES = [
  { value: 'Kraft, printed', note: 'natural brown board', photo: p('cardboard-display-boxes', 1) },
  { value: 'Full color, matte', note: 'soft, no glare', photo: p('retail-display-packaging', 4) },
  { value: 'Full color, gloss', note: 'bright and wipeable', photo: p('corrugated-display-boxes', 9) },
  { value: 'White, minimal print', note: 'logo and one color', photo: p('pop-up-display-boxes', 2) },
];

export const DESIGN_QUANTITIES = [
  { value: '100', label: '100' },
  { value: '250', label: '250' },
  { value: '500', label: '500' },
  { value: '1000', label: '1,000' },
  { value: '2500', label: '2,500+' },
];
