/**
 * Product registry and keyword/search-intent map.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * OVERLAP RESOLUTION (audit of the 26 supplied asset folders)
 * ─────────────────────────────────────────────────────────────────────────────
 * The brief flagged ten folders as likely to collide. Each was checked against
 * the others for primary keyword and search intent:
 *
 *  KEPT — distinct intent:
 *   • custom-display-boxes ......... head term; bespoke structure, buyer has no
 *                                    fixed style in mind yet.
 *   • cardboard-display-boxes ...... MATERIAL intent (folding boxboard/SBS);
 *                                    buyer is choosing board, not placement.
 *   • corrugated-display-boxes ..... MATERIAL intent (fluted board); the direct
 *                                    comparison target of the page above.
 *   • retail-display-boxes ......... CHANNEL intent; buyer is placing stock into
 *                                    a store environment.
 *   • retail-display-packaging ..... SOLUTION/top-funnel intent; broader than a
 *                                    single box style, covers the whole program.
 *   • counter-display-boxes ........ PLACEMENT intent: countertop / point of sale.
 *   • cardboard-counter-display-units  PRODUCT-TYPE intent: the assembled CDU —
 *                                    base, header card, tiered inserts — which
 *                                    trade buyers search for by the CDU acronym.
 *                                    Differentiated from the page above by unit
 *                                    assembly and header artwork, not placement.
 *   • cardboard-display-stands ..... PLACEMENT intent: free-standing floor unit
 *                                    (FSDU), a different footprint entirely.
 *   • flat-display-boxes ........... FORMAT intent: shallow, low-profile display
 *                                    format for thin goods.
 *   • flat-tuck-display-boxes ...... STRUCTURE intent: tuck-end closure with a
 *                                    display panel. Narrower and more technical
 *                                    than the format page above.
 *
 *  CONSOLIDATED — no unique intent:
 *   • cardboard-retail-display-boxes → /retail-display-boxes/
 *     This term is the intersection of two pages that already exist
 *     (cardboard = material, retail display boxes = channel) and carries no
 *     separate buyer intent of its own. Publishing it would have produced a
 *     third page competing for the same query set. Its 4 images were merged
 *     into the retail display boxes gallery and a 301 was added to the redirect
 *     map. The source folder is untouched on disk.
 *
 *  MONITORED — kept, but narrow separation:
 *   • flat-display-boxes vs flat-tuck-display-boxes
 *   • counter-display-boxes vs cardboard-counter-display-units
 *     Both pairs are genuinely different searches but sit close together. Their
 *     copy is written from different angles (format vs structure; placement vs
 *     unit assembly). If Search Console later shows the same queries landing on
 *     both, consolidate the weaker page into the stronger one.
 *
 * Result: 26 asset folders → 25 indexable product pages, 1 consolidation.
 */

export type ProductGroup =
  | 'By placement'
  | 'By material'
  | 'By industry'
  | 'By format';

export interface ProductRecord {
  /** Root-level slug. Products are never nested under a path segment. */
  slug: string;
  /** Visible H1 / display name, spelling and capitalization corrected. */
  name: string;
  /** Short label for navigation and cards. */
  navLabel: string;
  /** The one query this page is built to win. */
  primaryKeyword: string;
  /** Supporting terms that belong on this page and nowhere else. */
  secondaryKeywords: string[];
  /** The buyer's job-to-be-done, in one line. Drives the page's angle. */
  searchIntent: string;
  /** Source folder under ../Images/ — preserved, never renamed on disk. */
  sourceFolder: string;
  /** Extra folders whose images were merged in after consolidation. */
  mergedFolders?: string[];
  group: ProductGroup;
  /** Surfaced in the header mega menu and homepage selection. */
  featured?: boolean;
}

export const PRODUCTS: ProductRecord[] = [
  {
    slug: 'custom-display-boxes',
    name: 'Custom Display Boxes',
    navLabel: 'Custom Display Boxes',
    primaryKeyword: 'custom display boxes',
    secondaryKeywords: ['custom printed display boxes', 'made to order display boxes'],
    searchIntent:
      'Buyer wants a display box built to their own dimensions and artwork and has not settled on a style yet.',
    sourceFolder: 'Custom Display boxes',
    group: 'By format',
    featured: true,
  },
  {
    slug: 'retail-display-boxes',
    name: 'Retail Display Boxes',
    navLabel: 'Retail Display Boxes',
    primaryKeyword: 'retail display boxes',
    secondaryKeywords: ['in-store display boxes', 'store display boxes'],
    searchIntent:
      'Buyer is preparing stock for a store environment and needs packaging that merchandises on shelf.',
    sourceFolder: 'retail display boxes',
    mergedFolders: ['cardboard retail display boxes'],
    group: 'By placement',
    featured: true,
  },
  {
    slug: 'retail-display-packaging',
    name: 'Retail Display Packaging',
    navLabel: 'Retail Display Packaging',
    primaryKeyword: 'retail display packaging',
    secondaryKeywords: ['display packaging solutions', 'point of purchase packaging'],
    searchIntent:
      'Earlier-stage buyer scoping a whole display packaging program rather than one box style.',
    sourceFolder: 'retail display packaging',
    group: 'By placement',
  },
  {
    slug: 'counter-display-boxes',
    name: 'Counter Display Boxes',
    navLabel: 'Counter Display Boxes',
    primaryKeyword: 'counter display boxes',
    secondaryKeywords: ['countertop display boxes', 'pos display boxes'],
    searchIntent:
      'Buyer needs a compact box that earns a spot on a checkout counter with limited footprint.',
    sourceFolder: 'counter display boxes',
    group: 'By placement',
    featured: true,
  },
  {
    slug: 'cardboard-counter-display-units',
    name: 'Cardboard Counter Display Units',
    navLabel: 'Counter Display Units (CDU)',
    primaryKeyword: 'cardboard counter display units',
    secondaryKeywords: ['CDU packaging', 'counter display unit with header card'],
    searchIntent:
      'Trade buyer specifying an assembled CDU — base, printed header card, and product tiers.',
    sourceFolder: 'Cardboard Counter Display Units',
    group: 'By placement',
  },
  {
    slug: 'cardboard-display-stands',
    name: 'Cardboard Display Stands',
    navLabel: 'Display Stands (FSDU)',
    primaryKeyword: 'cardboard display stands',
    secondaryKeywords: ['floor standing display unit', 'FSDU cardboard'],
    searchIntent:
      'Buyer needs a free-standing floor unit that holds weight through a full retail promotion.',
    sourceFolder: 'cardboard display stands',
    group: 'By placement',
    featured: true,
  },
  {
    slug: 'shelf-ready-display-boxes',
    name: 'Shelf-Ready Display Boxes',
    navLabel: 'Shelf-Ready Display Boxes',
    primaryKeyword: 'shelf ready display boxes',
    secondaryKeywords: ['shelf ready packaging', 'retail ready packaging SRP'],
    searchIntent:
      'Buyer supplying a grocery or pharmacy chain with SRP compliance requirements to meet.',
    sourceFolder: 'shelf ready display boxes',
    group: 'By placement',
  },
  {
    slug: 'pop-up-display-boxes',
    name: 'Pop-Up Display Boxes',
    navLabel: 'Pop-Up Display Boxes',
    primaryKeyword: 'pop up display boxes',
    secondaryKeywords: ['pop up counter display', 'fold flat display box'],
    searchIntent:
      'Buyer needs a display that ships flat and erects in seconds without tools or tape.',
    sourceFolder: 'Pop Up Display Boxes',
    group: 'By format',
  },
  {
    slug: 'cardboard-display-boxes',
    name: 'Cardboard Display Boxes',
    navLabel: 'Cardboard Display Boxes',
    primaryKeyword: 'cardboard display boxes',
    secondaryKeywords: ['paperboard display boxes', 'SBS display boxes'],
    searchIntent:
      'Buyer is choosing board stock and wants to know what folding boxboard can and cannot do.',
    sourceFolder: 'cardboard display boxes',
    group: 'By material',
    featured: true,
  },
  {
    slug: 'corrugated-display-boxes',
    name: 'Corrugated Display Boxes',
    navLabel: 'Corrugated Display Boxes',
    primaryKeyword: 'corrugated display boxes',
    secondaryKeywords: ['fluted display boxes', 'E-flute display box'],
    searchIntent:
      'Buyer has weight or shipping demands that folding boxboard cannot carry.',
    sourceFolder: 'Corrugated Display Boxes',
    group: 'By material',
    featured: true,
  },
  {
    slug: 'flat-display-boxes',
    name: 'Flat Display Boxes',
    navLabel: 'Flat Display Boxes',
    primaryKeyword: 'flat display boxes',
    secondaryKeywords: ['low profile display box', 'shallow display box'],
    searchIntent:
      'Buyer has thin or flat goods and needs a shallow format that shows the product face-up.',
    sourceFolder: 'flat display boxes',
    group: 'By format',
  },
  {
    slug: 'flat-tuck-display-boxes',
    name: 'Flat Tuck Display Boxes',
    navLabel: 'Flat Tuck Display Boxes',
    primaryKeyword: 'flat tuck display boxes',
    secondaryKeywords: ['tuck end display box', 'straight tuck display packaging'],
    searchIntent:
      'Buyer is specifying closure structure — tuck end versus lock bottom — for a display carton.',
    sourceFolder: 'flat tuck display boxes',
    group: 'By format',
  },
  {
    slug: 'display-trays',
    name: 'Display Trays',
    navLabel: 'Display Trays',
    primaryKeyword: 'display trays',
    secondaryKeywords: ['cardboard display tray', 'retail tray packaging'],
    searchIntent:
      'Buyer wants an open tray that presents product without a lid or front panel.',
    sourceFolder: 'Display Trays',
    group: 'By format',
  },
  {
    slug: 'display-mailer-boxes',
    name: 'Display Mailer Boxes',
    navLabel: 'Display Mailer Boxes',
    primaryKeyword: 'display mailer boxes',
    secondaryKeywords: ['mailer box that converts to display', 'ecommerce display packaging'],
    searchIntent:
      'Buyer ships direct to a retailer and wants one box that survives transit and then merchandises.',
    sourceFolder: 'Display Mailer Boxes',
    group: 'By format',
  },
  {
    slug: 'display-gift-boxes',
    name: 'Display Gift Boxes',
    navLabel: 'Display Gift Boxes',
    primaryKeyword: 'display gift boxes',
    secondaryKeywords: ['gift box display packaging', 'seasonal gift display box'],
    searchIntent:
      'Buyer needs gift-grade presentation that still merchandises in a retail display.',
    sourceFolder: 'display gift boxes',
    group: 'By format',
  },
  {
    slug: 'cosmetic-display-boxes',
    name: 'Cosmetic Display Boxes',
    navLabel: 'Cosmetic Display Boxes',
    primaryKeyword: 'cosmetic display boxes',
    secondaryKeywords: ['makeup display packaging', 'beauty counter display box'],
    searchIntent:
      'Beauty brand needs display packaging that holds small, tall, tip-prone units upright.',
    sourceFolder: 'cosmetic display boxes',
    group: 'By industry',
    featured: true,
  },
  {
    slug: 'soap-display-boxes',
    name: 'Soap Display Boxes',
    navLabel: 'Soap Display Boxes',
    primaryKeyword: 'soap display boxes',
    secondaryKeywords: ['soap bar display packaging', 'handmade soap display box'],
    searchIntent:
      'Soap maker needs a display that handles oils, weight, and often an open product face.',
    sourceFolder: 'soap display boxes',
    group: 'By industry',
  },
  {
    slug: 'candle-display-boxes',
    name: 'Candle Display Boxes',
    navLabel: 'Candle Display Boxes',
    primaryKeyword: 'candle display boxes',
    secondaryKeywords: ['candle display packaging', 'jar candle display box'],
    searchIntent:
      'Candle brand needs a display rated for glass vessel weight without the base bowing.',
    sourceFolder: 'candle display boxes',
    group: 'By industry',
  },
  {
    slug: 'bath-bomb-display-boxes',
    name: 'Bath Bomb Display Boxes',
    navLabel: 'Bath Bomb Display Boxes',
    primaryKeyword: 'bath bomb display boxes',
    secondaryKeywords: ['bath bomb packaging display', 'bath fizzy display box'],
    searchIntent:
      'Bath brand needs a display for round, fragile, moisture-sensitive units.',
    sourceFolder: 'bath bomb display boxes',
    group: 'By industry',
  },
  {
    slug: 'food-display-boxes',
    name: 'Food Display Boxes',
    navLabel: 'Food Display Boxes',
    primaryKeyword: 'food display boxes',
    secondaryKeywords: ['food grade display packaging', 'snack display box'],
    searchIntent:
      'Food brand needs display packaging with a food-safe liner or coating specification.',
    sourceFolder: 'Food Display Boxes',
    group: 'By industry',
  },
  {
    slug: 'e-juice-display-boxes',
    name: 'E-Juice Display Boxes',
    navLabel: 'E-Juice Display Boxes',
    primaryKeyword: 'e juice display boxes',
    secondaryKeywords: ['vape juice display packaging', 'e-liquid counter display'],
    searchIntent:
      'Vape brand needs a compact counter display with room for mandatory warning copy.',
    sourceFolder: 'e juice display boxes',
    group: 'By industry',
  },
  {
    slug: 'counter-display-peptide-boxes',
    name: 'Counter Display Peptide Boxes',
    navLabel: 'Peptide Display Boxes',
    primaryKeyword: 'peptide display boxes',
    secondaryKeywords: ['vial display packaging', 'peptide counter display box'],
    searchIntent:
      'Supplier of small vials needs a counter display with secure cavities for glass.',
    sourceFolder: 'Counter display Peptide Box',
    group: 'By industry',
  },
  {
    slug: 'barbie-doll-display-boxes',
    name: 'Barbie Doll Display Boxes',
    navLabel: 'Doll Display Boxes',
    primaryKeyword: 'barbie doll display boxes',
    secondaryKeywords: ['doll packaging with window', 'toy display box'],
    searchIntent:
      'Toy seller needs a tall window display box that holds a figure in a fixed pose.',
    sourceFolder: 'barbie doll display boxes',
    group: 'By industry',
  },
  {
    slug: 'watch-display-boxes',
    name: 'Watch Display Boxes',
    navLabel: 'Watch Display Boxes',
    primaryKeyword: 'watch display boxes',
    secondaryKeywords: ['watch presentation box', 'watch counter display'],
    searchIntent:
      'Watch seller needs a display that presents the dial and protects the finish.',
    sourceFolder: 'watch display boxes',
    group: 'By industry',
  },
  {
    slug: 'earring-display-cards',
    name: 'Earring Display Cards',
    navLabel: 'Earring Display Cards',
    primaryKeyword: 'earring display cards',
    secondaryKeywords: ['jewelry display cards', 'custom printed earring cards'],
    searchIntent:
      'Jewelry maker needs printed cards with correct hole spacing and a hang-tab.',
    sourceFolder: 'earring display cards',
    group: 'By industry',
  },
];

/** Slugs consolidated away, with their destination. Feeds the redirect map. */
export const CONSOLIDATED_PRODUCTS: Array<{ from: string; to: string; reason: string }> = [
  {
    from: '/cardboard-retail-display-boxes/',
    to: '/retail-display-boxes/',
    reason:
      'Intersection of an existing material page and an existing channel page; no separate search intent. Images merged into the destination gallery.',
  },
];

export function getProduct(slug: string): ProductRecord {
  const found = PRODUCTS.find((p) => p.slug === slug);
  if (!found) throw new Error(`getProduct(): unknown product slug "${slug}"`);
  return found;
}

export function productsByGroup(group: ProductGroup): ProductRecord[] {
  return PRODUCTS.filter((p) => p.group === group);
}

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
