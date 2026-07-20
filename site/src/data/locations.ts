/**
 * Location data for state and city pages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THESE PAGES MAY AND MAY NOT SAY
 * ─────────────────────────────────────────────────────────────────────────────
 * These pages exist because businesses search for suppliers by location. They
 * must NOT imply a local presence that does not exist. Specifically, no page
 * may claim or imply:
 *
 *   • a local office, factory, warehouse, or collection point
 *   • local staff, representatives, or account managers
 *   • local customers, reviews, or case studies
 *   • same-day or next-day delivery, or any specific transit time
 *   • guaranteed delivery dates
 *
 * What they may say — and what the whole page is built on — is that custom
 * display packaging is produced to order and shipped to businesses in that
 * location. That is true and is stated plainly on every page.
 *
 * The differentiating content is genuine economic and retail context for the
 * state or city, which is public information, plus the packaging implications
 * that follow from it. Where a location cannot support meaningfully distinct
 * content, it is marked `thin: true`, served noindex/follow, and excluded from
 * the sitemap rather than padded out.
 */

export interface CityRef {
  slug: string;
  name: string;
}

export interface StateLocation {
  slug: string;
  name: string;
  abbr: string;

  /** One line summarizing why this state matters for display packaging. */
  positioning: string;

  /**
   * Genuine sectors present in the state that buy display packaging.
   * Public economic context, not claims about our customers.
   */
  sectors: string[];

  /** Retail characteristics that shape packaging decisions in this state. */
  retailContext: string[];

  /** The packaging implication that follows from the above — the real content. */
  packagingAngle: { heading: string; body: string[] };

  /** Product slugs most relevant to this state's sector mix. */
  products: string[];

  /** Cities on this site that sit in this state. */
  cities: CityRef[];

  /** Set true if the page cannot be written with meaningful unique content. */
  thin?: boolean;
}

export interface CityLocation {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  stateAbbr: string;

  positioning: string;
  sectors: string[];
  retailContext: string[];
  packagingAngle: { heading: string; body: string[] };
  products: string[];

  thin?: boolean;
}

/* ────────────────────────────────────────────────────────────────────────────
   STATES
   ────────────────────────────────────────────────────────────────────────────*/

export const STATES: StateLocation[] = [
  {
    slug: 'custom-display-boxes-california',
    name: 'California',
    abbr: 'CA',
    positioning:
      'California combines the largest consumer market in the country with dense concentrations of beauty, natural products, and specialty food brands — categories that lean heavily on display packaging.',
    sectors: [
      'Beauty and personal care, particularly independent and clean-beauty brands',
      'Natural and organic food and beverage',
      'Cannabis, under a state-regulated retail framework',
      'Apparel and accessories, with a large wholesale trade',
      'Wine and specialty beverage',
    ],
    retailContext: [
      'A large independent and specialty retail base alongside national chains',
      'Strong farmers market and direct-to-consumer channels',
      'Retailers and consumers with above-average attention to packaging sustainability',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in California',
      body: [
        'Two things recur. The first is recyclability: both retailers and end buyers in this market pay closer attention to packaging claims than in most, which makes the coating decision consequential. A film laminate takes board out of the paper stream, and in categories positioned around natural or clean formulation that mismatch gets noticed.',
        'The second is regulated retail. Cannabis packaging in particular is governed by state requirements covering warnings, child resistance, and in some cases opacity — constraints that have to be established before a dieline is drawn rather than designed around afterward.',
      ],
    },
    products: ['cosmetic-display-boxes', 'candle-display-boxes', 'soap-display-boxes', 'counter-display-boxes'],
    cities: [
      { slug: 'custom-display-boxes-los-angeles-ca', name: 'Los Angeles' },
      { slug: 'custom-display-boxes-san-diego-ca', name: 'San Diego' },
      { slug: 'custom-display-boxes-san-jose-ca', name: 'San Jose' },
      { slug: 'custom-display-boxes-san-francisco-ca', name: 'San Francisco' },
    ],
  },
  {
    slug: 'custom-display-boxes-texas',
    name: 'Texas',
    abbr: 'TX',
    positioning:
      'Texas has the scale to support both large-format chain retail and a substantial independent base, and its distribution infrastructure means a lot of packaging travels palletized before it reaches a shelf.',
    sectors: [
      'Food and beverage manufacturing, including a large snack and packaged-food sector',
      'Health and supplement brands',
      'Convenience and forecourt retail, which is unusually large here',
      'Consumer electronics and accessories distribution',
      'Pet products',
    ],
    retailContext: [
      'A heavy convenience-store and forecourt channel with tight counter space',
      'Large-format chains operating strict planograms and shelf-ready requirements',
      'Significant distribution and third-party logistics activity',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Texas',
      body: [
        'Convenience retail dominates more of the display conversation here than in most states, and it is the most footprint-constrained channel there is. Counter space beside a register is contested by hardware, accessories, and a dozen other suppliers, so displays that grow upward through tiers place more easily than wide ones holding the same stock.',
        'The other factor is transit. Where product moves through distribution centers before reaching stores, the board is specified against pallet compression rather than product weight — the case at the bottom of a full pallet carries everything above it, and that figure sets the flute.',
      ],
    },
    products: ['counter-display-boxes', 'shelf-ready-display-boxes', 'food-display-boxes', 'corrugated-display-boxes'],
    cities: [
      { slug: 'custom-display-boxes-houston-tx', name: 'Houston' },
      { slug: 'custom-display-boxes-san-antonio-tx', name: 'San Antonio' },
      { slug: 'custom-display-boxes-dallas-tx', name: 'Dallas' },
      { slug: 'custom-display-boxes-austin-tx', name: 'Austin' },
      { slug: 'custom-display-boxes-fort-worth-tx', name: 'Fort Worth' },
    ],
  },
  {
    slug: 'custom-display-boxes-florida',
    name: 'Florida',
    abbr: 'FL',
    positioning:
      'Florida combines a large tourism-driven gift and souvenir trade with substantial food, beverage, and health-product sectors — and a climate that genuinely affects packaging specification.',
    sectors: [
      'Tourism, gift, and souvenir retail',
      'Food and beverage, including a significant citrus and specialty food trade',
      'Health, supplement, and personal care brands',
      'Marine and outdoor products',
      'International trade and re-export activity',
    ],
    retailContext: [
      'Heavy seasonal fluctuation tied to tourism cycles',
      'Large gift-shop and specialty retail channel alongside national chains',
      'Significant port and distribution activity',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Florida',
      body: [
        'Humidity is a real specification input here rather than a footnote. Sustained high humidity softens paperboard and can affect how coatings behave, and packaging destined for non-climate-controlled storage or open-fronted retail should be specified with that in mind rather than assumed to behave as it would in a dry warehouse.',
        'The second factor is seasonality. Tourism-driven retail runs pronounced cycles, which favors structures where the printed element can be updated independently — a sleeve or a separately printed header over a constant base — so a seasonal change is a print job rather than a new development.',
      ],
    },
    products: ['display-gift-boxes', 'counter-display-boxes', 'food-display-boxes', 'custom-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-jacksonville-fl', name: 'Jacksonville' }],
  },
  {
    slug: 'custom-display-boxes-new-york',
    name: 'New York',
    abbr: 'NY',
    positioning:
      'New York concentrates specialty retail, beauty, and food brands in an environment where retail space is more expensive and more contested than anywhere else in the country.',
    sectors: [
      'Beauty, fragrance, and personal care',
      'Specialty and gourmet food',
      'Jewelry and accessories, including a substantial wholesale trade',
      'Fashion and apparel',
      'Publishing, media, and design-led consumer brands',
    ],
    retailContext: [
      'Very high retail rents, which makes every square inch of counter and shelf contested',
      'Dense independent and boutique retail alongside flagship national stores',
      'Sophisticated design expectations in consumer-facing categories',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in New York',
      body: [
        'Footprint discipline matters more here than almost anywhere. Where retail space carries the rents it does in this market, a retailer weighs a display against the revenue that space could otherwise produce, and a wide display holding modest stock is a difficult ask. Growing upward through tiers is not just a design preference in this context — it is often the difference between placement and refusal.',
        'Design execution also carries more weight in a market where buyers and consumers see a very high standard routinely. That tends to push toward print quality that holds up close: offset or litho-lamination rather than direct-printed corrugated where the display is doing brand work.',
      ],
    },
    products: ['cosmetic-display-boxes', 'counter-display-boxes', 'earring-display-cards', 'display-gift-boxes'],
    cities: [{ slug: 'custom-display-boxes-new-york-ny', name: 'New York City' }],
  },
  {
    slug: 'custom-display-boxes-illinois',
    name: 'Illinois',
    abbr: 'IL',
    positioning:
      'Illinois sits at the center of US distribution, and a substantial share of packaged goods moving through the Midwest passes through it — which puts transit performance ahead of most other considerations.',
    sectors: [
      'Food and beverage manufacturing and processing',
      'Confectionery, with a long-established presence in the state',
      'Household and cleaning products',
      'Pharmaceutical and health products',
      'Industrial and B2B distribution',
    ],
    retailContext: [
      'Major distribution and rail freight hub serving national retail',
      'Large grocery and drugstore chain presence with shelf-ready requirements',
      'Strong independent grocery and specialty food channel',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Illinois',
      body: [
        'Where product moves through a distribution network before reaching stores, the packaging has two jobs and the harder one is transit. Shelf-ready formats dominate in the grocery and pharmacy chains that operate here, and their specifications govern opening method, case dimensions, and how much product face must remain visible.',
        'The practical consequence is that board is specified against stack height rather than product weight. A case at the bottom of a full pallet carries everything above it, and perforation strength has to be tested after time under compression — a perforation that behaves correctly on a fresh sample can fail after a week in a stack.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'corrugated-display-boxes', 'display-mailer-boxes', 'food-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-chicago-il', name: 'Chicago' }],
  },
  {
    slug: 'custom-display-boxes-pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    positioning:
      'Pennsylvania has a long-established food manufacturing base, particularly in confectionery and snacks, alongside a substantial pharmaceutical sector.',
    sectors: [
      'Confectionery and chocolate manufacturing',
      'Snack food and packaged food production',
      'Pharmaceutical and life sciences',
      'Specialty and artisan food producers',
      'Industrial and materials manufacturing',
    ],
    retailContext: [
      'Strong regional grocery chains with their own packaging specifications',
      'Significant convenience and forecourt retail',
      'Active farmers market and direct-sales channel for artisan producers',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Pennsylvania',
      body: [
        'Confectionery is the category that shapes a lot of display work here, and it brings two specific requirements. Impulse placement means tight counter footprints, and displays that look picked-over at half stock stop selling — which is the argument for dispenser structures that hold their appearance as they deplete.',
        'Heat is the other consideration. Chocolate near a window or a lighting fixture softens, and packaging cannot refrigerate anything. What it can do is avoid trapping warmth: an open tray lets heat dissipate where an enclosed structure holds it against the product.',
      ],
    },
    products: ['counter-display-boxes', 'food-display-boxes', 'display-trays', 'shelf-ready-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-philadelphia-pa', name: 'Philadelphia' }],
  },
  {
    slug: 'custom-display-boxes-ohio',
    name: 'Ohio',
    abbr: 'OH',
    positioning:
      'Ohio combines consumer products manufacturing with a central distribution position, and a number of national retail and consumer brands are headquartered in the state.',
    sectors: [
      'Household and personal care products manufacturing',
      'Food processing and packaged goods',
      'Automotive and industrial parts, including aftermarket accessories',
      'Retail head offices and distribution operations',
      'Health and pharmaceutical distribution',
    ],
    retailContext: [
      'Substantial distribution infrastructure serving the eastern and midwestern markets',
      'Large-format and big-box retail with formal planogram discipline',
      'Established regional grocery chains',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Ohio',
      body: [
        'Chain retail discipline is the recurring theme. Where a retailer issues a display specification, it governs footprint, arrival condition, and often whether store staff may assemble anything at all — and a non-compliant submission is refused rather than negotiated.',
        'That puts a premium on establishing the requirements before design work begins. It also favors structures that arrive ready or erect in a single motion, because chains that mandate shelf-ready formats are managing store labor, and a display that takes time to build works against the reason they specified it.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'retail-display-boxes', 'corrugated-display-boxes', 'cardboard-display-stands'],
    cities: [{ slug: 'custom-display-boxes-columbus-oh', name: 'Columbus' }],
  },
  {
    slug: 'custom-display-boxes-georgia',
    name: 'Georgia',
    abbr: 'GA',
    positioning:
      'Georgia is a major logistics state with substantial port activity, and a growing base of consumer brands in beauty, food, and beverage.',
    sectors: [
      'Food and beverage production and distribution',
      'Beauty and personal care, including a notable multicultural beauty sector',
      'Poultry and agricultural processing',
      'Film and entertainment-adjacent consumer products',
      'Logistics and port-related distribution',
    ],
    retailContext: [
      'Major port and inland distribution activity',
      'Growing independent beauty and specialty retail',
      'Strong regional grocery presence',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Georgia',
      body: [
        'Beauty is the category where the specification questions get most demanding here. Cosmetic units are small, tall, and top-heavy, and a display that holds them loosely will have a leaning front row within a week — so cavity tolerance, set from a physical unit rather than a spec sheet, becomes the critical dimension.',
        'For brands shipping through the state’s distribution infrastructure, the second factor is that displays travelling palletized need board specified against stack compression, which is a different and usually higher figure than the weight of what the display holds.',
      ],
    },
    products: ['cosmetic-display-boxes', 'counter-display-boxes', 'food-display-boxes', 'display-trays'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    positioning:
      'North Carolina pairs a long manufacturing tradition with growing food, beverage, and personal care sectors, and a strong independent retail culture in its urban centers.',
    sectors: [
      'Food and beverage, including a substantial craft brewing sector',
      'Personal care and household products manufacturing',
      'Pharmaceutical and biotech',
      'Furniture and home goods',
      'Textiles and apparel',
    ],
    retailContext: [
      'Active independent and specialty retail in urban centers',
      'Regional grocery chains alongside national operators',
      'Strong craft and maker market channel',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in North Carolina',
      body: [
        'The craft and maker sector here brings a specific set of requirements. Small producers frequently sell at markets as well as into retail, which means a display is erected and packed down repeatedly rather than placed once — and that favors assembly speed and crease durability over finish.',
        'For handmade product in particular, batch variation matters. Soap bars, candles, and craft goods vary measurably between batches, so an insert sized to a single sample fits part of the stock and not the rest. Several units should inform the tolerance rather than one.',
      ],
    },
    products: ['soap-display-boxes', 'candle-display-boxes', 'display-trays', 'custom-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-charlotte-nc', name: 'Charlotte' }],
  },
  {
    slug: 'custom-display-boxes-michigan',
    name: 'Michigan',
    abbr: 'MI',
    positioning:
      'Michigan combines automotive and industrial manufacturing with a substantial food processing sector and a growing specialty food and beverage scene.',
    sectors: [
      'Automotive parts and aftermarket accessories',
      'Food processing, including cereal and packaged food production',
      'Craft beverage and specialty food',
      'Industrial and B2B supplies',
      'Agricultural production',
    ],
    retailContext: [
      'Established regional grocery chains',
      'Automotive aftermarket and parts retail with peg-hung accessory displays',
      'Seasonal retail tied to a pronounced climate cycle',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Michigan',
      body: [
        'The automotive aftermarket brings a display requirement that most categories do not: peg-hung accessory packaging where the entire weight of pack and product hangs from a single punched hole. On heavier items a reinforced hang tab matters more than any other structural decision, because a tab that tears leaves the product on the floor of the aisle.',
        'For food producers, the pronounced seasonal cycle favors structures where the printed element updates independently, so a seasonal change is a print run rather than a new tooling development.',
      ],
    },
    products: ['flat-display-boxes', 'counter-display-boxes', 'food-display-boxes', 'corrugated-display-boxes'],
    cities: [],
  },
];

/* ── States 11–20 ──────────────────────────────────────────────────────────*/

STATES.push(
  {
    slug: 'custom-display-boxes-new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    positioning:
      'New Jersey has an unusually dense concentration of pharmaceutical, personal care, and specialty chemical manufacturing, alongside major port and distribution activity.',
    sectors: [
      'Pharmaceutical and life sciences manufacturing',
      'Personal care and cosmetics production',
      'Specialty food and flavor manufacturing',
      'Logistics and port-related distribution',
      'Contract packaging and fulfillment services',
    ],
    retailContext: [
      'Major port activity feeding the northeastern retail market',
      'High concentration of contract packers and third-party fulfillment',
      'Dense drugstore and pharmacy chain presence',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in New Jersey',
      body: [
        'Pharmacy and personal care dominate here, and both bring the same practical requirement: a clear uncoated area planned into the artwork for batch, lot, or serialization data applied after printing. A fully laminated panel will not reliably accept overprint inks or label adhesives, and discovering that after a run is entirely avoidable.',
        'Contract packers add a second consideration. Where a third party is filling displays before onward supply, the unit has to be loadable while flat or open rather than through a narrow opening once assembled — so the filling sequence needs agreeing at quoting stage rather than after tooling.',
      ],
    },
    products: ['counter-display-peptide-boxes', 'shelf-ready-display-boxes', 'cosmetic-display-boxes', 'cardboard-counter-display-units'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-virginia',
    name: 'Virginia',
    abbr: 'VA',
    positioning:
      'Virginia combines port and distribution infrastructure with a growing specialty food and beverage sector and a substantial government and institutional supply market.',
    sectors: [
      'Food and beverage, including a growing craft producer base',
      'Agricultural production and processing',
      'Logistics and port distribution',
      'Government and institutional supply',
      'Tobacco and related manufacturing',
    ],
    retailContext: [
      'Significant port activity serving the mid-Atlantic',
      'Regional grocery chains alongside national operators',
      'Active farmers market and agritourism retail channel',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Virginia',
      body: [
        'Craft and specialty food producers here frequently sell across two very different channels: markets and farm shops, where displays are erected and packed down repeatedly, and grocery, where shelf-ready specifications govern. Those pull in opposite directions, and one display rarely satisfies both.',
        'The workable pattern is usually a common structure with different printed panels, or two formats sharing insert tooling — rather than a single design stretched until it suits neither channel properly.',
      ],
    },
    products: ['display-trays', 'food-display-boxes', 'shelf-ready-display-boxes', 'display-gift-boxes'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-washington',
    name: 'Washington',
    abbr: 'WA',
    positioning:
      'Washington pairs a strong specialty food and beverage culture with technology-sector consumer products, and a market unusually attentive to packaging sustainability.',
    sectors: [
      'Specialty coffee, food, and beverage',
      'Consumer technology and accessories',
      'Natural and organic personal care',
      'Cannabis, under a state-regulated framework',
      'Agriculture and food processing',
    ],
    retailContext: [
      'Strong independent and specialty retail culture',
      'Consumers and retailers with high expectations on packaging sustainability',
      'Significant direct-to-consumer and subscription commerce',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Washington',
      body: [
        'Recyclability is scrutinized more closely in this market than in most, and the decision that actually determines it is the coating rather than the board or its recycled content. A plastic film laminate takes paperboard out of the paper stream in most municipalities, while an aqueous coating keeps it in at the cost of less scuff resistance.',
        'That trade-off is real rather than rhetorical. A display finished with an aqueous coating will show handling marks sooner, and on a campaign running several months that is a genuine cost to weigh rather than a free choice.',
      ],
    },
    products: ['soap-display-boxes', 'food-display-boxes', 'counter-display-boxes', 'display-trays'],
    cities: [{ slug: 'custom-display-boxes-seattle-wa', name: 'Seattle' }],
  },
  {
    slug: 'custom-display-boxes-arizona',
    name: 'Arizona',
    abbr: 'AZ',
    positioning:
      'Arizona has a substantial distribution and fulfillment presence serving the western states, alongside growing food, beverage, and personal care sectors.',
    sectors: [
      'Distribution and fulfillment operations',
      'Food and beverage production',
      'Personal care and wellness products',
      'Outdoor and recreational products',
      'Electronics and semiconductor-adjacent manufacturing',
    ],
    retailContext: [
      'Large fulfillment and distribution footprint serving the West',
      'Significant seasonal population variation affecting retail cycles',
      'Growing independent retail in urban centers',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Arizona',
      body: [
        'Heat is a genuine specification input. Sustained high temperatures affect adhesives and can soften some products in storage or transit, and packaging that will sit in a non-climate-controlled warehouse or a hot vehicle should be specified with that in mind rather than assumed to behave as it would in a temperate environment.',
        'For brands shipping from fulfillment operations here, the other recurring factor is that display packaging travelling palletized needs board specified against stack compression rather than the weight of its own contents.',
      ],
    },
    products: ['corrugated-display-boxes', 'display-mailer-boxes', 'counter-display-boxes', 'retail-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-phoenix-az', name: 'Phoenix' }],
  },
  {
    slug: 'custom-display-boxes-massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    positioning:
      'Massachusetts concentrates life sciences, specialty food, and design-led consumer brands in a compact market with dense independent retail.',
    sectors: [
      'Life sciences, biotech, and medical products',
      'Specialty food and craft beverage',
      'Consumer technology and design-led products',
      'Education-adjacent consumer goods',
      'Marine and seafood products',
    ],
    retailContext: [
      'Dense independent and specialty retail in urban areas',
      'Sophisticated design expectations in consumer categories',
      'Strong seasonal tourism retail in coastal areas',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Massachusetts',
      body: [
        'The life sciences presence brings requirements most consumer packaging never faces: secure retention of small glass vials, uncoated areas for batch and lot application, and restrained clinical presentation where heavy consumer-style branding reads as suspect.',
        'For that category the insert does the protective work and is where the specification budget belongs. A vial that can move will eventually break, and cavity geometry — cut from a physical sample rather than a drawing — is what prevents it.',
      ],
    },
    products: ['counter-display-peptide-boxes', 'display-gift-boxes', 'food-display-boxes', 'counter-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-boston-ma', name: 'Boston' }],
  },
  {
    slug: 'custom-display-boxes-tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    positioning:
      'Tennessee is a major distribution state with significant food, beverage, and healthcare sectors, and a substantial music and tourism-driven gift trade.',
    sectors: [
      'Distribution and parcel logistics',
      'Food and beverage manufacturing',
      'Healthcare products and services',
      'Music, entertainment, and tourism merchandise',
      'Automotive manufacturing and parts',
    ],
    retailContext: [
      'Major parcel and freight distribution hub',
      'Significant tourism and souvenir retail in music-centered markets',
      'Regional grocery and convenience chains',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Tennessee',
      body: [
        'Tourism and merchandise retail here runs pronounced seasonal cycles with artwork that changes while structure stays constant. That favors tooling a structure once and updating only a printed sleeve or header between cycles, which turns each season into a print job rather than a new development.',
        'For brands shipping through the state’s distribution infrastructure, packaging that travels as parcel rather than palletized faces different stresses — single-parcel handling is rougher per unit than palletized freight, and a display specified for pallet transit is not automatically suited to it.',
      ],
    },
    products: ['display-gift-boxes', 'display-mailer-boxes', 'counter-display-boxes', 'food-display-boxes'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-indiana',
    name: 'Indiana',
    abbr: 'IN',
    positioning:
      'Indiana combines pharmaceutical and medical device manufacturing with a substantial food processing sector and central distribution access.',
    sectors: [
      'Pharmaceutical and medical device manufacturing',
      'Food processing and packaged goods',
      'Automotive and industrial components',
      'Agricultural production',
      'Distribution and logistics',
    ],
    retailContext: [
      'Central position serving midwestern and eastern retail',
      'Pharmacy and drugstore chain presence with formal specifications',
      'Established regional grocery operators',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Indiana',
      body: [
        'Pharmaceutical and medical packaging brings the strictest information-hierarchy requirement of any category. Where several variants share a design — different strengths or formulations — distinguishing them clearly matters more than brand consistency does, because a picking error has consequences beyond an unhappy customer.',
        'Large, high-contrast variant identification beats subtle differentiation here, and it is the most common weakness we see in artwork submitted for this sector.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'counter-display-peptide-boxes', 'retail-display-boxes', 'corrugated-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-indianapolis-in', name: 'Indianapolis' }],
  },
  {
    slug: 'custom-display-boxes-missouri',
    name: 'Missouri',
    abbr: 'MO',
    positioning:
      'Missouri sits at a central distribution crossroads with substantial food, beverage, and agricultural processing, and a strong regional retail base.',
    sectors: [
      'Food and beverage manufacturing, including brewing',
      'Agricultural processing and animal health products',
      'Pet products and animal nutrition',
      'Distribution and freight',
      'Consumer packaged goods manufacturing',
    ],
    retailContext: [
      'Central freight and rail position serving national retail',
      'Strong regional grocery and farm supply retail',
      'Significant pet and farm product channel',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Missouri',
      body: [
        'Pet products are unusually prominent in this market, and they bring a specific structural requirement. Bulk bins for treats are shopped by reaching in, which puts hands and forearm weight on the rim repeatedly through a promotion — so rim reinforcement matters more than base strength, and rim collapse is the characteristic failure on that format.',
        'Many pet treats are also oily or strongly scented, which means a barrier-coated inner surface or a replaceable liner keeps the printed structure presentable through several restocks.',
      ],
    },
    products: ['corrugated-display-boxes', 'cardboard-display-stands', 'food-display-boxes', 'display-trays'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-maryland',
    name: 'Maryland',
    abbr: 'MD',
    positioning:
      'Maryland combines biotech and life sciences with port activity and a substantial specialty food sector, particularly around seafood.',
    sectors: [
      'Biotech, life sciences, and medical research products',
      'Specialty food, particularly seafood and regional products',
      'Port and distribution activity',
      'Government and institutional supply',
      'Personal care and wellness products',
    ],
    retailContext: [
      'Port activity serving the mid-Atlantic corridor',
      'Strong specialty and gourmet food retail',
      'Dense pharmacy and health retail presence',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Maryland',
      body: [
        'Research and life sciences supply brings requirements that consumer packaging rarely encounters: cavity geometry tight enough that inverting a display does not release a vial, restraint in all three axes so units cannot bounce vertically in transit, and uncoated areas planned for batch application.',
        'Specialty food adds the opposite problem at the other end of the state economy — direct food contact, where the board grade and coating are dictated by contact requirements before any structural decision is made.',
      ],
    },
    products: ['counter-display-peptide-boxes', 'food-display-boxes', 'display-trays', 'counter-display-boxes'],
    cities: [],
  },
  {
    slug: 'custom-display-boxes-colorado',
    name: 'Colorado',
    abbr: 'CO',
    positioning:
      'Colorado has a strong natural products, outdoor, and craft beverage culture, alongside a regulated cannabis retail market.',
    sectors: [
      'Natural and organic food and personal care',
      'Craft brewing and specialty beverage',
      'Outdoor and recreational products',
      'Cannabis, under a state-regulated framework',
      'Wellness and supplement brands',
    ],
    retailContext: [
      'Strong independent natural-products and specialty retail',
      'Consumers attentive to sustainability and ingredient claims',
      'Established regulated cannabis retail channel',
    ],
    packagingAngle: {
      heading: 'What tends to drive packaging decisions in Colorado',
      body: [
        'The natural products sector here favors uncoated kraft and restrained printing, which reads as considered rather than economical in these categories. That preference runs into a technical constraint worth knowing: kraft is brown and ink is not opaque, so every color prints warmer and darker, and pale colors may not register at all without a white underprint.',
        'For regulated categories, requirements covering warnings, child resistance, and product visibility have to be confirmed by your compliance adviser before a dieline is drawn. We print the artwork supplied and do not review it against any jurisdiction.',
      ],
    },
    products: ['soap-display-boxes', 'candle-display-boxes', 'food-display-boxes', 'counter-display-boxes'],
    cities: [{ slug: 'custom-display-boxes-denver-co', name: 'Denver' }],
  }
);

/* ────────────────────────────────────────────────────────────────────────────
   CITIES

   Each city page must justify its own existence against its state page. Where
   a city's genuine differentiator is thin, that is recorded honestly rather
   than padded — see `thin` on the interface.
   ────────────────────────────────────────────────────────────────────────────*/

export const CITIES: CityLocation[] = [
  {
    slug: 'custom-display-boxes-new-york-ny',
    name: 'New York',
    stateSlug: 'custom-display-boxes-new-york',
    stateName: 'New York',
    stateAbbr: 'NY',
    positioning:
      'New York City is the most space-constrained retail environment in the country, and that single fact governs more display decisions here than category or budget do.',
    sectors: [
      'Beauty, fragrance, and personal care brands',
      'Specialty and gourmet food retail',
      'Jewelry and accessories, including the diamond and wholesale trade',
      'Fashion and apparel',
      'Bodega and convenience retail at unusually high density',
    ],
    retailContext: [
      'Extremely high retail rents making every square inch of counter contested',
      'Very dense bodega and independent convenience network',
      'Flagship national stores alongside small-format boutiques',
    ],
    packagingAngle: {
      heading: 'Designing for New York retail space',
      body: [
        'A bodega counter and a Fifth Avenue flagship have almost nothing in common except that both will refuse a display that takes more room than it earns. In a market with these rents, a retailer is weighing your display against the revenue that space could otherwise generate.',
        'The practical response is to grow upward rather than outward. A narrow stepped unit holding the same stock in less counter area places far more easily than a wide shallow one — and it suits the steep viewing angle at a counter anyway.',
      ],
    },
    products: ['counter-display-boxes', 'cosmetic-display-boxes', 'earring-display-cards', 'cardboard-counter-display-units'],
  },
  {
    slug: 'custom-display-boxes-los-angeles-ca',
    name: 'Los Angeles',
    stateSlug: 'custom-display-boxes-california',
    stateName: 'California',
    stateAbbr: 'CA',
    positioning:
      'Los Angeles has one of the densest concentrations of independent beauty and personal care brands in the country, many of them launching into retail for the first time.',
    sectors: [
      'Independent beauty, skincare, and clean-formulation brands',
      'Apparel and accessories, with a large downtown wholesale district',
      'Entertainment and licensed merchandise',
      'Specialty food and beverage',
      'Cannabis retail under state regulation',
    ],
    retailContext: [
      'Large concentration of specialty beauty retail and boutique stockists',
      'Substantial wholesale and showroom trade',
      'Port activity supporting both import and export',
    ],
    packagingAngle: {
      heading: 'The recurring problem for LA beauty brands',
      body: [
        'A first retail launch usually surfaces the same issue: the display was designed around the product as photographed, not as measured. Cosmetic units are small, tall, and top-heavy, and a cavity cut from a spec sheet frequently will not accept the real unit, because the cap is wider than the body and a wrap label adds thickness all round.',
        'The fix is unglamorous and it works. Send physical units — several, if the product varies between batches — and let the cavity tolerance be cut from the real thing rather than from a drawing.',
      ],
    },
    products: ['cosmetic-display-boxes', 'counter-display-boxes', 'soap-display-boxes', 'display-gift-boxes'],
  },
  {
    slug: 'custom-display-boxes-chicago-il',
    name: 'Chicago',
    stateSlug: 'custom-display-boxes-illinois',
    stateName: 'Illinois',
    stateAbbr: 'IL',
    positioning:
      'Chicago is a national freight interchange, and a great deal of packaging that passes through it is judged on how well it survives palletized transit rather than on how it looks.',
    sectors: [
      'Food and beverage manufacturing and processing',
      'Confectionery and snack production',
      'Household and cleaning products',
      'Freight, rail, and distribution operations',
      'Restaurant and foodservice supply',
    ],
    retailContext: [
      'Major rail and freight interchange serving national retail',
      'Large grocery and drugstore chain presence with SRP mandates',
      'Strong independent neighborhood grocery and specialty food trade',
    ],
    packagingAngle: {
      heading: 'Packaging that has to survive the freight before it sells',
      body: [
        'Where cases move through a rail and distribution network before reaching a shelf, the governing figure is pallet compression, not the weight of what is inside the box. The case at the bottom of a full pallet carries everything above it.',
        'For shelf-ready formats the perforation is where this gets decided. Test it after units have sat under representative weight for a week rather than on a fresh sample — a perforation that opens cleanly on the bench can fail entirely after time in a stack.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'corrugated-display-boxes', 'display-mailer-boxes', 'food-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-houston-tx',
    name: 'Houston',
    stateSlug: 'custom-display-boxes-texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    positioning:
      'Houston combines the largest US port complex by tonnage with an exceptionally diverse independent food retail scene and a major medical district.',
    sectors: [
      'Port, energy, and industrial supply',
      'International and specialty food retail, unusually diverse',
      'Medical and healthcare products, around a large hospital district',
      'Personal care and multicultural beauty',
      'Convenience and forecourt retail',
    ],
    retailContext: [
      'Very diverse independent grocery and specialty food channel',
      'Major port and import activity',
      'Large healthcare institutional supply market',
    ],
    packagingAngle: {
      heading: 'Humidity and independent retail',
      body: [
        'Two Houston-specific factors come up repeatedly. Sustained humidity affects paperboard — it softens board and can affect coating performance, so displays held in non-climate-controlled storage should be specified with that in mind rather than assumed to behave as they would in a dry warehouse.',
        'The second is that a lot of retail here is independent rather than chain. That means fewer formal planogram constraints and more variety in counter space, which favors flexible smaller-run displays over one rigid format built to a chain specification.',
      ],
    },
    products: ['food-display-boxes', 'counter-display-boxes', 'display-trays', 'custom-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-dallas-tx',
    name: 'Dallas',
    stateSlug: 'custom-display-boxes-texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    positioning:
      'Dallas is a wholesale and showroom market as much as a retail one, and packaging here is frequently seen first by buyers at trade markets rather than by shoppers on a shelf.',
    sectors: [
      'Wholesale trade and showroom distribution',
      'Gift, home, and decorative products',
      'Apparel and accessories wholesale',
      'Corporate headquarters and consumer brands',
      'Food and beverage distribution',
    ],
    retailContext: [
      'Substantial wholesale market and showroom trade',
      'Large corporate and chain retail head office presence',
      'Active gift and home goods buying community',
    ],
    packagingAngle: {
      heading: 'Packaging that sells to buyers, not just shoppers',
      body: [
        'When a display is presented at a wholesale market, its first audience is a buyer deciding whether to stock the line at all. That buyer is assessing whether the unit will place in their stores, assemble without a fuss, and hold up through a season — practical questions rather than aesthetic ones.',
        'Displays that ship flat and erect in one motion demonstrate well in that setting, because a buyer can see the whole proposition in seconds. A structure needing explanation is a harder sell in a room where attention is measured in moments.',
      ],
    },
    products: ['display-gift-boxes', 'cardboard-counter-display-units', 'pop-up-display-boxes', 'retail-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-austin-tx',
    name: 'Austin',
    stateSlug: 'custom-display-boxes-texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    positioning:
      'Austin has a concentrated independent food, beverage, and maker community, and a festival and event calendar that drives short-run promotional packaging.',
    sectors: [
      'Craft food, beverage, and brewing',
      'Independent makers and artisan producers',
      'Technology and consumer hardware',
      'Music, festival, and event merchandise',
      'Natural and wellness products',
    ],
    retailContext: [
      'Strong independent grocery and specialty retail',
      'Significant festival and event retail activity',
      'Active farmers market and maker-fair channel',
    ],
    packagingAngle: {
      heading: 'Short runs, events, and repeated setup',
      body: [
        'A lot of packaging here is short-run and event-driven, which changes the economics. Digital printing removes plate setup entirely, making genuinely small quantities viable and letting several designs run together at little extra cost.',
        'Displays used at markets and festivals also get erected and packed down repeatedly rather than placed once. That favors assembly speed and crease durability over finish — a structure that folds flat without tearing will outlast a more elaborate one never designed for repeated handling.',
      ],
    },
    products: ['display-trays', 'counter-display-boxes', 'pop-up-display-boxes', 'food-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-san-antonio-tx',
    name: 'San Antonio',
    stateSlug: 'custom-display-boxes-texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    positioning:
      'San Antonio has a large tourism and heritage retail trade alongside substantial military and institutional supply, and a strong regional food culture.',
    sectors: [
      'Tourism, gift, and heritage retail',
      'Regional and Hispanic food producers',
      'Military and institutional supply',
      'Healthcare and bioscience',
      'Convenience and neighborhood retail',
    ],
    retailContext: [
      'Significant tourism-driven gift and souvenir retail',
      'Strong regional food and grocery channel',
      'Large institutional and base supply market',
    ],
    packagingAngle: {
      heading: 'Gift and heritage retail requirements',
      body: [
        'Tourism retail asks packaging to do two things at once: present well enough to justify a gift purchase and survive being carried home in a suitcase. That usually points toward structures with real corner strength rather than the lightest board that will hold the product.',
        'Seasonality is pronounced, and artwork changes far more often than structure. Tooling a base once and updating only a printed sleeve between cycles keeps each change a print job rather than a new development.',
      ],
    },
    products: ['display-gift-boxes', 'food-display-boxes', 'counter-display-boxes', 'custom-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-fort-worth-tx',
    name: 'Fort Worth',
    stateSlug: 'custom-display-boxes-texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    positioning:
      'Fort Worth combines a substantial logistics and distribution base with western wear, agricultural supply, and a growing food and beverage sector.',
    sectors: [
      'Logistics, freight, and distribution',
      'Western wear, boots, and accessories',
      'Agricultural and ranch supply',
      'Food and beverage production',
      'Aerospace and industrial manufacturing',
    ],
    retailContext: [
      'Major freight and distribution infrastructure',
      'Specialty western wear and accessory retail',
      'Farm and ranch supply retail channel',
    ],
    packagingAngle: {
      heading: 'Accessory retail and peg display',
      body: [
        'Western wear and ranch supply retail lean heavily on peg-hung accessory packaging, where the entire weight of pack and product hangs from a single punched hole. On heavier items the hang tab specification matters more than any other structural decision, because a tab that tears puts the product on the aisle floor.',
        'Reinforcing that tab — an additional adhesive layer or a die-cut shape with more material around the hole — spreads a load that a plain punched hole concentrates at one point.',
      ],
    },
    products: ['flat-display-boxes', 'corrugated-display-boxes', 'retail-display-boxes', 'display-mailer-boxes'],
  },
  {
    slug: 'custom-display-boxes-phoenix-az',
    name: 'Phoenix',
    stateSlug: 'custom-display-boxes-arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    positioning:
      'Phoenix is a major fulfillment and distribution center for the western states, and packaging here is frequently specified around heat and transit rather than shelf appearance.',
    sectors: [
      'Fulfillment and distribution operations',
      'Food and beverage production',
      'Personal care and wellness brands',
      'Outdoor and recreational products',
      'Electronics and component manufacturing',
    ],
    retailContext: [
      'Large fulfillment footprint serving the western states',
      'Pronounced seasonal population variation',
      'Growing independent retail in central districts',
    ],
    packagingAngle: {
      heading: 'Specifying for heat and warehouse conditions',
      body: [
        'Sustained high temperatures affect adhesives and can soften some products in storage or in a vehicle. Packaging that will sit in a non-climate-controlled warehouse or travel in summer heat should be specified accordingly rather than assumed to behave as it would in a temperate environment.',
        'For fulfillment operations, the other distinction is parcel versus pallet. Single-parcel shipping is rougher per unit than palletized freight, and a display specified for pallet transit is not automatically suited to going out one at a time.',
      ],
    },
    products: ['display-mailer-boxes', 'corrugated-display-boxes', 'counter-display-boxes', 'retail-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-philadelphia-pa',
    name: 'Philadelphia',
    stateSlug: 'custom-display-boxes-pennsylvania',
    stateName: 'Pennsylvania',
    stateAbbr: 'PA',
    positioning:
      'Philadelphia has a dense independent food retail culture, a substantial pharmaceutical presence in its wider region, and strong neighborhood convenience trade.',
    sectors: [
      'Specialty and independent food retail',
      'Pharmaceutical and life sciences',
      'Confectionery and snack production',
      'Health and personal care',
      'Neighborhood convenience retail',
    ],
    retailContext: [
      'Dense independent corner-store and specialty grocery network',
      'Established regional grocery chains',
      'Significant pharmacy and health retail presence',
    ],
    packagingAngle: {
      heading: 'Independent retail and small footprints',
      body: [
        'Independent retail dominates a lot of the display conversation here, and it behaves very differently from chains. There is usually no formal planogram, which means more flexibility on structure — and much less predictability on how much counter space you will actually get.',
        'That argues for a display designed conservatively on footprint and tall rather than wide, so it fits the smallest counter you are likely to encounter rather than an average one.',
      ],
    },
    products: ['counter-display-boxes', 'food-display-boxes', 'display-trays', 'cardboard-counter-display-units'],
  }
];

/* ── Cities 11–20 ──────────────────────────────────────────────────────────*/

CITIES.push(
  {
    slug: 'custom-display-boxes-san-diego-ca',
    name: 'San Diego',
    stateSlug: 'custom-display-boxes-california',
    stateName: 'California',
    stateAbbr: 'CA',
    positioning:
      'San Diego combines a substantial biotech and life sciences cluster with a well-established craft brewing scene and significant cross-border trade.',
    sectors: [
      'Biotech, life sciences, and medical devices',
      'Craft brewing and specialty beverage',
      'Personal care and wellness products',
      'Cross-border manufacturing and trade',
      'Tourism and visitor retail',
    ],
    retailContext: [
      'Strong craft beverage taproom and retail channel',
      'Substantial research and institutional supply market',
      'Cross-border logistics activity',
    ],
    packagingAngle: {
      heading: 'Two very different specification problems',
      body: [
        'Life sciences supply here needs retention above all: cavity geometry tight enough that inverting a display does not release a vial, restraint in all three axes so units cannot bounce vertically in transit, and an uncoated area planned for batch application after printing.',
        'Craft beverage sits at the opposite end. Glass is dense relative to its footprint, so a display holding a dozen filled bottles concentrates far more load on its base than its size suggests — and boxboard settles under that weight even when it holds at first fill.',
      ],
    },
    products: ['counter-display-peptide-boxes', 'corrugated-display-boxes', 'display-gift-boxes', 'counter-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-san-jose-ca',
    name: 'San Jose',
    stateSlug: 'custom-display-boxes-california',
    stateName: 'California',
    stateAbbr: 'CA',
    positioning:
      'San Jose is centred on technology hardware and consumer electronics, where accessory packaging is judged on compatibility information and theft deterrence.',
    sectors: [
      'Consumer electronics and accessories',
      'Technology hardware and components',
      'Specialty food and beverage',
      'Wellness and personal care',
      'Direct-to-consumer commerce',
    ],
    retailContext: [
      'Significant electronics and accessory retail',
      'Strong direct-to-consumer and subscription commerce',
      'Independent specialty food retail alongside chains',
    ],
    packagingAngle: {
      heading: 'Accessory packaging requirements',
      body: [
        'Electronics accessories are bought on compatibility, not on appearance. If the pack does not make it obvious at a glance that the item fits the shopper’s device, they pick up a competitor’s that does — which argues for compatibility information above the brand mark in the visual hierarchy.',
        'Two other constraints follow. Small high-value items are a shrinkage concern, so packs are often deliberately oversized relative to the product; and standard paperboard is not an antistatic material, so anything requiring static protection needs a specialist specification rather than an assumption.',
      ],
    },
    products: ['flat-display-boxes', 'counter-display-boxes', 'custom-display-boxes', 'corrugated-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-san-francisco-ca',
    name: 'San Francisco',
    stateSlug: 'custom-display-boxes-california',
    stateName: 'California',
    stateAbbr: 'CA',
    positioning:
      'San Francisco has a concentrated specialty food and premium personal care scene, and a market that scrutinises packaging sustainability more closely than most.',
    sectors: [
      'Specialty coffee, chocolate, and artisan food',
      'Premium personal care and clean beauty',
      'Technology-adjacent consumer products',
      'Wine and specialty beverage',
      'Tourism and visitor retail',
    ],
    retailContext: [
      'Dense independent specialty and gourmet retail',
      'High consumer attention to sustainability claims',
      'Small-format stores with limited display space',
    ],
    packagingAngle: {
      heading: 'Sustainability claims meet small footprints',
      body: [
        'This market notices a mismatch between a natural brand position and a plastic-laminated pack faster than most. The decision that determines recyclability is the coating: uncoated and aqueous-coated board stays in the paper stream, while a film laminate takes it out in most municipalities.',
        'The trade-off is genuine — an aqueous coating shows handling marks sooner. In small-format stores where displays sit for months and get handled constantly, that has to be weighed rather than assumed away.',
      ],
    },
    products: ['soap-display-boxes', 'display-gift-boxes', 'food-display-boxes', 'counter-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-seattle-wa',
    name: 'Seattle',
    stateSlug: 'custom-display-boxes-washington',
    stateName: 'Washington',
    stateAbbr: 'WA',
    positioning:
      'Seattle is defined commercially by specialty coffee and food, technology-sector consumer products, and an unusually sustainability-literate customer base.',
    sectors: [
      'Specialty coffee and artisan food',
      'Consumer technology and accessories',
      'Natural and organic personal care',
      'Outdoor and recreational products',
      'Direct-to-consumer and subscription commerce',
    ],
    retailContext: [
      'Strong independent specialty food and coffee retail',
      'Substantial subscription and direct-to-consumer shipping',
      'Retailers with formal packaging sustainability expectations',
    ],
    packagingAngle: {
      heading: 'Packaging that ships as well as displays',
      body: [
        'A lot of product here moves direct to consumers as well as through retail, which raises a question worth settling early: one pack rarely does both jobs well. Ecommerce shipping is single-parcel and rougher per unit; retail display is palletized and judged on presentation.',
        'Where both are needed, a display mailer that travels sealed and converts on arrival can remove a packing stage — provided the structure is designed so that what remains after opening is still square and stable.',
      ],
    },
    products: ['display-mailer-boxes', 'food-display-boxes', 'display-trays', 'counter-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-denver-co',
    name: 'Denver',
    stateSlug: 'custom-display-boxes-colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    positioning:
      'Denver has a strong natural products and craft beverage scene alongside an established regulated cannabis retail market.',
    sectors: [
      'Natural and organic food and personal care',
      'Craft brewing and distilling',
      'Outdoor and recreational products',
      'Cannabis retail under state regulation',
      'Wellness and supplement brands',
    ],
    retailContext: [
      'Strong independent natural-products retail',
      'Established regulated dispensary channel',
      'Active outdoor and specialty sports retail',
    ],
    packagingAngle: {
      heading: 'Kraft aesthetics and regulated retail',
      body: [
        'Natural products brands here gravitate toward uncoated kraft, which reads as considered in these categories. The technical consequence is worth knowing before the palette is chosen: kraft is brown and ink is not opaque, so every color prints warmer and darker, and pale colors may not register without a white underprint.',
        'For regulated categories, requirements covering warnings, child resistance, and product visibility must be confirmed by your compliance adviser before a dieline is drawn. We print the artwork supplied and do not review it against any jurisdiction.',
      ],
    },
    products: ['soap-display-boxes', 'candle-display-boxes', 'counter-display-boxes', 'food-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-boston-ma',
    name: 'Boston',
    stateSlug: 'custom-display-boxes-massachusetts',
    stateName: 'Massachusetts',
    stateAbbr: 'MA',
    positioning:
      'Boston combines a dense life sciences and research cluster with specialty food retail and a compact, high-rent urban retail environment.',
    sectors: [
      'Life sciences, biotech, and research supply',
      'Specialty food and seafood products',
      'Design-led consumer brands',
      'Education-adjacent consumer goods',
      'Medical devices and healthcare products',
    ],
    retailContext: [
      'Dense independent retail in a compact urban footprint',
      'Large institutional and research supply market',
      'High retail rents constraining display space',
    ],
    packagingAngle: {
      heading: 'Research supply and restrained presentation',
      body: [
        'Research and life sciences packaging is judged on precision, and presentation contributes to that judgment. Clean typography, generous space, and accurate print registration read as credible where heavy consumer-style branding reads as suspect.',
        'Structurally the insert does the work. A small glass vial that can move will eventually break, so cavity geometry — cut from a physical sample rather than a drawing — is where the specification budget belongs rather than on an elaborate outer.',
      ],
    },
    products: ['counter-display-peptide-boxes', 'food-display-boxes', 'display-gift-boxes', 'counter-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-columbus-oh',
    name: 'Columbus',
    stateSlug: 'custom-display-boxes-ohio',
    stateName: 'Ohio',
    stateAbbr: 'OH',
    positioning:
      'Columbus hosts a notable concentration of retail head offices and distribution operations, which means packaging here is often evaluated against formal chain specifications.',
    sectors: [
      'Retail head offices and merchandising operations',
      'Personal care and beauty products',
      'Food and beverage distribution',
      'Apparel and accessories',
      'Logistics and fulfillment',
    ],
    retailContext: [
      'Significant retail corporate and merchandising presence',
      'Substantial distribution and fulfillment footprint',
      'Chain retail with formal planogram discipline',
    ],
    packagingAngle: {
      heading: 'Designing to a chain specification',
      body: [
        'Where a retailer issues a display specification, it governs the design entirely — footprint, opening method, how much product face must remain visible, and whether store staff may assemble anything. A non-compliant submission is refused rather than negotiated.',
        'The practical implication is sequencing. Get the specification before design work begins, and design to it first and to brand preference second. Discovering a requirement after a submission means starting over rather than adjusting.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'retail-display-boxes', 'cardboard-display-stands', 'corrugated-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-charlotte-nc',
    name: 'Charlotte',
    stateSlug: 'custom-display-boxes-north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    positioning:
      'Charlotte pairs a substantial corporate and distribution presence with a growing independent food, beverage, and maker community.',
    sectors: [
      'Food and beverage, including craft brewing',
      'Personal care and household products',
      'Financial and corporate services supply',
      'Textiles and apparel',
      'Distribution and logistics',
    ],
    retailContext: [
      'Growing independent and specialty retail in central districts',
      'Regional grocery chains alongside national operators',
      'Active maker market and craft fair channel',
    ],
    packagingAngle: {
      heading: 'Serving two channels at once',
      body: [
        'Producers here frequently sell through both markets and retail, and those channels want different things. A market display is erected and struck repeatedly, so assembly speed and crease durability dominate. A retail display is placed once and judged on presentation and shelf compliance.',
        'One structure rarely satisfies both well. A common base with different printed panels, or two formats sharing insert tooling, usually works better than a single design stretched across both.',
      ],
    },
    products: ['display-trays', 'food-display-boxes', 'soap-display-boxes', 'counter-display-boxes'],
  },
  {
    slug: 'custom-display-boxes-indianapolis-in',
    name: 'Indianapolis',
    stateSlug: 'custom-display-boxes-indiana',
    stateName: 'Indiana',
    stateAbbr: 'IN',
    positioning:
      'Indianapolis combines pharmaceutical and medical manufacturing with a central logistics position serving much of the eastern United States.',
    sectors: [
      'Pharmaceutical and medical device manufacturing',
      'Logistics and parcel distribution',
      'Food processing and packaged goods',
      'Sports and event merchandise',
      'Agricultural products',
    ],
    retailContext: [
      'Major parcel and freight hub',
      'Pharmacy and healthcare retail with formal requirements',
      'Significant event and sports merchandise retail',
    ],
    packagingAngle: {
      heading: 'Variant clarity in healthcare packaging',
      body: [
        'Where several product variants share one design — different strengths, formulations, or pack sizes — distinguishing them clearly matters more here than brand consistency does. A picking error in this category has consequences beyond an unhappy customer.',
        'Large, high-contrast variant identification beats subtle brand-consistent differentiation, and unclear variant marking is the most common weakness in artwork submitted for this sector.',
      ],
    },
    products: ['shelf-ready-display-boxes', 'counter-display-peptide-boxes', 'retail-display-boxes', 'display-mailer-boxes'],
  },
  {
    slug: 'custom-display-boxes-jacksonville-fl',
    name: 'Jacksonville',
    stateSlug: 'custom-display-boxes-florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    positioning:
      'Jacksonville is a port and logistics city with a substantial distribution footprint serving the southeast, alongside growing food and health product sectors.',
    sectors: [
      'Port, logistics, and distribution',
      'Food and beverage production',
      'Health and personal care products',
      'Marine and outdoor products',
      'Financial and corporate services supply',
    ],
    retailContext: [
      'Major port activity serving the southeastern market',
      'Substantial distribution and warehousing footprint',
      'Regional grocery and convenience presence',
    ],
    packagingAngle: {
      heading: 'Humidity and warehouse storage',
      body: [
        'Packaging stored in non-climate-controlled warehouse space in this climate faces sustained humidity, which softens paperboard and can affect how coatings perform over time. A display specified on the assumption of dry storage may not behave the same way here.',
        'Where product moves through the port and distribution network before reaching stores, board should be specified against pallet compression rather than the weight of the display contents — the bottom case carries everything above it.',
      ],
    },
    products: ['corrugated-display-boxes', 'display-mailer-boxes', 'shelf-ready-display-boxes', 'food-display-boxes'],
  }
);

/* ────────────────────────────────────────────────────────────────────────────
   PUBLISHED SET

   The brief listed 20 states and 20 cities. Building all 40 would have meant
   320 location FAQs for a business with no presence in any of them, and past
   roughly the halfway point those questions become the same question with a
   place name swapped — the exact thin-content pattern the brief forbids
   elsewhere.

   The decision (confirmed with the site owner) was to publish fewer locations
   and make every published one substantive. Selection criteria, in order:

     1. Does the location have a genuine sector or condition that changes a
        packaging decision? (freight interchange, humidity, regulated retail,
        peg-hung accessory retail, life-sciences vials, wholesale buyer trade)
     2. Does a city add something its state page does not already say?
     3. Every published city must have its parent state published, so the
        city → state relationship always resolves.

   Result: 12 states, 12 cities. The remaining entries stay in this file as
   data — they are not deleted — but are excluded from the published set and
   generate no URLs. They can be promoted later if genuine local content or
   verified customer context becomes available.
   ────────────────────────────────────────────────────────────────────────────*/

const PUBLISHED_STATE_SLUGS = new Set([
  'custom-display-boxes-california',
  'custom-display-boxes-texas',
  'custom-display-boxes-illinois',
  'custom-display-boxes-new-york',
  'custom-display-boxes-pennsylvania',
  'custom-display-boxes-washington',
  'custom-display-boxes-arizona',
  'custom-display-boxes-massachusetts',
  'custom-display-boxes-new-jersey',
  'custom-display-boxes-michigan',
  'custom-display-boxes-missouri',
  'custom-display-boxes-colorado',
]);

const PUBLISHED_CITY_SLUGS = new Set([
  'custom-display-boxes-new-york-ny',
  'custom-display-boxes-los-angeles-ca',
  'custom-display-boxes-san-diego-ca',
  'custom-display-boxes-san-jose-ca',
  'custom-display-boxes-chicago-il',
  'custom-display-boxes-houston-tx',
  'custom-display-boxes-dallas-tx',
  'custom-display-boxes-austin-tx',
  'custom-display-boxes-phoenix-az',
  'custom-display-boxes-seattle-wa',
  'custom-display-boxes-boston-ma',
  'custom-display-boxes-philadelphia-pa',
]);

/** Locations held back, with the reason. Documented rather than silently dropped. */
export const HELD_BACK = [
  { slug: 'custom-display-boxes-florida', reason: 'Humidity angle is carried by Jacksonville and Houston; state page would repeat it.' },
  { slug: 'custom-display-boxes-georgia', reason: 'Beauty-sector angle duplicates California and Los Angeles.' },
  { slug: 'custom-display-boxes-north-carolina', reason: 'Dual-channel maker angle duplicates Virginia and Charlotte.' },
  { slug: 'custom-display-boxes-virginia', reason: 'Dual-channel angle duplicates North Carolina.' },
  { slug: 'custom-display-boxes-tennessee', reason: 'Tourism-seasonality angle duplicates Florida and San Antonio.' },
  { slug: 'custom-display-boxes-maryland', reason: 'Life-sciences angle duplicates Massachusetts and New Jersey.' },
  { slug: 'custom-display-boxes-ohio', reason: 'Chain-planogram angle is better carried by Columbus; neither sustains 8 distinct FAQs.' },
  { slug: 'custom-display-boxes-indiana', reason: 'Variant-clarity angle duplicates New Jersey pharmaceutical content.' },
  { slug: 'custom-display-boxes-san-francisco-ca', reason: 'Sustainability and small-format angles duplicate Seattle and San Diego.' },
  { slug: 'custom-display-boxes-fort-worth-tx', reason: 'Peg-display angle duplicates Michigan; Texas already has three published cities.' },
  { slug: 'custom-display-boxes-san-antonio-tx', reason: 'Tourism-gift angle duplicates Florida; Texas already has three published cities.' },
  { slug: 'custom-display-boxes-jacksonville-fl', reason: 'Parent state held back; humidity angle carried by Houston.' },
  { slug: 'custom-display-boxes-columbus-oh', reason: 'Parent state held back.' },
  { slug: 'custom-display-boxes-charlotte-nc', reason: 'Parent state held back.' },
  { slug: 'custom-display-boxes-indianapolis-in', reason: 'Parent state held back.' },
  { slug: 'custom-display-boxes-denver-co', reason: 'Kraft and regulated-retail angles duplicate the Colorado state page almost entirely.' },
] as const;

/** The locations that actually generate pages. */
export const PUBLISHED_STATES: StateLocation[] = STATES.filter((s) =>
  PUBLISHED_STATE_SLUGS.has(s.slug)
).map((s) => ({
  ...s,
  // Only link to cities that are themselves published.
  cities: s.cities.filter((c) => PUBLISHED_CITY_SLUGS.has(c.slug)),
}));

export const PUBLISHED_CITIES: CityLocation[] = CITIES.filter((c) =>
  PUBLISHED_CITY_SLUGS.has(c.slug)
);
