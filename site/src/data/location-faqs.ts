/**
 * Location page FAQs, keyed by location slug.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THESE ARE HARD, AND HOW THEY ARE HANDLED
 * ─────────────────────────────────────────────────────────────────────────────
 * The brief asks for at least 8 unique FAQs per location page across 40 pages.
 * That is 320 questions about a business with no local presence in any of them.
 *
 * The honest constraint: a genuine question about ordering display packaging in
 * Dallas has the same answer as the same question about Houston, because the
 * answer depends on the product and the retailer, not on the city. Writing 320
 * questions that merely swap a place name would be exactly the name-substituted
 * content the brief forbids elsewhere.
 *
 * So each location gets FAQs drawn from that location's actual economic and
 * retail context — the sectors present, the climate, the channel mix, the
 * regulatory position. Those questions genuinely differ because the underlying
 * situations differ.
 *
 * Where a location cannot support 8 substantive location-specific questions, it
 * is marked `thin: true` in locations.ts, served noindex/follow, and excluded
 * from the sitemap. That is a deliberate outcome, not a failure — a thin page
 * excluded from the index is better than a padded page in it.
 *
 * One shared question DOES appear on every page, deliberately: whether we have
 * a local office. The answer is no, and repeating it everywhere is a feature
 * rather than duplication, because it is the claim these pages must never make.
 */

export interface LocationFaq {
  question: string;
  answer: string;
}

/**
 * Answer for locations where we genuinely have no presence — which is every
 * published location except New York, where the registered address sits.
 */
export const NO_LOCAL_PRESENCE: LocationFaq = {
  question: 'Do you have an office or production facility here?',
  answer:
    'No. We do not maintain premises, production facilities, or collection points in any individual state or city. Custom display packaging is produced to order and shipped to your business address. Any supplier claiming a local presence should be able to give you the address.',
};

/**
 * Answer for the location containing the registered address. It confirms the
 * address rather than denying a presence, and is equally careful not to imply a
 * collectable trade counter, which has not been confirmed.
 */
export const HOME_LOCATION_PRESENCE: LocationFaq = {
  question: 'Do you have an office or production facility here?',
  answer:
    'Our registered address is 1639 70th St, Brooklyn, NY 11204. That makes New York the one place on this site where we are actually based. It is not a published trade counter with opening hours, and we would rather say so than imply you can collect from it — orders are produced to specification and shipped to your business address.',
};

export const LOCATION_FAQS: Record<string, LocationFaq[]> = {
  /* ── States ────────────────────────────────────────────────────────────── */

  'custom-display-boxes-california': [
    { question: 'Does cannabis packaging need to be different in California?', answer: 'State requirements govern warnings, child resistance, and in some cases whether product may be visible through the packaging — which rules out the windows most retail relies on. Those requirements must be confirmed by your compliance adviser before a dieline is drawn. We print the artwork supplied and do not review it against any jurisdiction.' },
    { question: 'Retailers here keep asking about recyclability. What actually determines it?', answer: 'The coating, far more than the board or its recycled content. Uncoated and aqueous-coated board stays in the paper recycling stream; a plastic film laminate takes it out in most municipalities. If recyclability is a requirement, settle it before choosing a finish rather than after.' },
    { question: 'Can I have a recyclable finish that still survives months on shelf?', answer: 'Partly. An aqueous coating or varnish protects the surface while keeping the board repulpable, but it resists scuffing less well than a film laminate. On a long campaign in a busy store that is a genuine trade-off rather than a free choice.' },
    { question: 'My beauty products are small and keep tipping over in displays. Why?', answer: 'Because most cosmetic units are tall and narrow with a high centre of gravity and almost no footprint. In a generously sized well they lean, and a leaning front row stops selling. Cavity tolerance cut from a physical unit rather than a spec sheet is the fix.' },
    { question: 'We sell at farmers markets as well as retail. Does that change the display?', answer: 'Considerably. A market display is erected and packed down repeatedly, so assembly speed and crease durability matter more than finish. A retail display is placed once and judged on presentation. One structure rarely does both well.' },
    { question: 'Does kraft board suit clean-beauty positioning?', answer: 'Often yes, and it reads as considered in natural categories. Be aware kraft is brown and ink is not opaque, so every colour prints warmer and darker and pale colours may not register without a white underprint. Design a palette for kraft rather than adapting one built for white board.' },
    { question: 'Our brand colour has to match the product exactly. How?', answer: 'Specify a Pantone spot ink rather than a CMYK build, which shifts with press conditions, stock, and coating. Supply the product unit itself as the colour reference, because the comparison a shopper actually makes is display against product.' },
    { question: 'How does shipping to California work if you are not based here?', answer: 'Orders are produced to your specification and shipped to your business address. We do not publish transit times we have not committed to — if your order depends on a fixed in-store date, tell us when you request a quote and we will say whether it is achievable.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-texas': [
    { question: 'Convenience stores keep refusing our counter display. What is wrong?', answer: 'Almost always the footprint. Counter space beside a register is contested by hardware, accessories, and other suppliers, and the retailer is weighing your display against that. Build upward through tiers rather than outward — height costs less negotiating capital than width.' },
    { question: 'Our product goes through a distribution centre first. Does that change the board?', answer: 'Yes, and it usually raises it. The governing figure becomes pallet compression rather than the weight of your product — the case at the bottom of a full pallet carries everything above it, and that is what the flute is specified against.' },
    { question: 'What is shelf-ready packaging and do the chains here require it?', answer: 'It is a case that opens in one action and goes onto the shelf without unpacking. Large-format chains increasingly mandate it, and where they issue a specification it governs the design entirely — a non-compliant case gets unpacked by hand, which removes the labour saving they required it for.' },
    { question: 'How do we stop a counter display looking picked-over?', answer: 'A dispenser structure, where units are drawn from a front opening, looks the same at half stock as at full. In high-turnover convenience retail where restocking is irregular, that usually justifies its extra structural complexity by itself.' },
    { question: 'Does summer heat affect packaging in transit here?', answer: 'It can affect adhesives and soften some products in a non-climate-controlled vehicle or warehouse. If your packaging will sit in those conditions, say so at quoting stage rather than assuming it will behave as it would in a temperate environment.' },
    { question: 'We supply both chains and independents. One display or two?', answer: 'Usually a common structure with different printed panels. Chains issue specifications and reject anything that misses them; independents take what fits their counter. One design stretched across both tends to be over-engineered for one and non-compliant for the other.' },
    { question: 'How many SKUs should share one display?', answer: 'Three to five in practice. Beyond that each product gets too little frontage to register as distinct. Give the leading seller more facings rather than splitting equally — equal facings across a range is fair and sells less.' },
    { question: 'Can displays ship already loaded with product?', answer: 'They can, and it removes a packing stage. It also means the structure carries product weight through freight, which usually raises the board specification. For fragile or heavy assortments, shipping flat with product separate is often safer and cheaper.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-illinois': [
    { question: 'Our cases arrive crushed after going through a distribution centre. What fixes it?', answer: 'Specify the board against pallet compression rather than product weight. The case at the bottom of a full pallet carries everything stacked above it, and that figure is usually much higher than the weight of what is inside your own box.' },
    { question: 'The shelf-ready cases open fine on the bench but fail in the field. Why?', answer: 'Perforations behave differently after time under load. A tear line that opens cleanly on a fresh sample can weaken or fail after a week under a stacked pallet. Test perforation strength on units that have sat under representative weight, not on samples made that morning.' },
    { question: 'The chains here mandate shelf-ready packaging. What governs the design?', answer: 'Their specification does, entirely. It sets case dimensions, opening method, and how much of the product face must remain visible. Design to it first and to brand preference second — a non-compliant case gets unpacked by hand, which removes the labour saving it was mandated for.' },
    { question: 'How strong should the tear perforation be?', answer: 'Strong enough to survive pallet compression, weak enough that an operator opens it without a blade. Too strong and they reach for a knife, which cuts the product underneath; too weak and cases open in transit. It is a function of board grade, flute, and tear length.' },
    { question: 'Can one case work as both a shipper and a display?', answer: 'That is what a shipper-display does, and it removes a packing stage. The constraint people miss is that a box is much weaker once its top is removed — the structure remaining after conversion has to be square and stable on its own.' },
    { question: 'Does confectionery need different handling in transit?', answer: 'Heat is the variable. Chocolate softens near a window, a light fixture, or in a warm vehicle, and packaging cannot refrigerate anything. An open tray lets heat dissipate where an enclosed structure holds it against the product.' },
    { question: 'How much of the product face has to be visible on a shelf-ready case?', answer: 'Whatever the retailer specifies — it varies by chain and is often expressed as a proportion of product height. Where the specification is silent, keep enough wall to retain the back rows while leaving the product readable from a standing position.' },
    { question: 'Our variants share one design. Is that a problem for grocery?', answer: 'It can be. Store operators read cases quickly, on a pallet and again on a shelf, so variants need large high-contrast identification rather than subtle brand-consistent differences. Poor variant distinction is the most common cause of picking errors.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-new-york': [
    { question: 'Retailers here keep saying the display is too big. How small does it need to be?', answer: 'Smaller than feels reasonable. With the retail rents in this market, a buyer is weighing your display against the revenue that floor or counter space could otherwise produce. Get the footprint figure from them before designing rather than proposing one.' },
    { question: 'How do we hold stock without taking more counter space?', answer: 'Build upward. A narrow stepped unit holding the same stock in less counter area places far more easily than a wide shallow one, and it suits the steep viewing angle at a counter anyway. Height costs less negotiating capital than width.' },
    { question: 'Does a bodega need a different display from a department store?', answer: 'Usually yes. Bodega counters are extremely space-constrained and rarely governed by a planogram, so a compact flexible unit works. Flagship stores are more prescriptive and expect higher print execution. A common structure with different printed panels handles both better than one compromise design.' },
    { question: 'Why does print quality matter more in this market?', answer: 'Because buyers and consumers here see a very high standard routinely, and a display is judged close up. That tends to favour offset or litho-lamination over direct-printed corrugated wherever the display is doing brand work rather than bulk merchandising.' },
    { question: 'We sell jewellery wholesale. What matters most on display cards?', answer: 'Caliper. A card too light bends as soon as a post goes through it, and a bent card makes good jewellery look cheap. Weight also matters on a peg hook, where the whole load hangs from one punched hole.' },
    { question: 'How many SKUs can a small counter display carry?', answer: 'Three to five before each product loses enough frontage to stop registering as distinct. In a market where the footprint is already tight, that limit arrives faster than elsewhere — it is usually better to run two focused displays than one crowded one.' },
    { question: 'Our display keeps getting moved to a worse spot. Why?', answer: 'Often because it is awkward for staff — it blocks something, needs straightening, or has to be moved to use the counter. A display that interferes with the transaction gets relegated regardless of how well it sells.' },
    { question: 'Is soft-touch lamination worth it for premium positioning here?', answer: 'It changes how a pack feels in the hand more than any print decision does, which suits premium categories. It also marks the most easily of the common finishes, so it works better on packs bought and taken away than on a display handled for weeks on a counter.' },
    HOME_LOCATION_PRESENCE,
  ],

  'custom-display-boxes-pennsylvania': [
    { question: 'Our chocolate display looks fine in the morning and poor by afternoon. Why?', answer: 'Two things compound. Product near a window or lighting fixture softens as the day warms, and a display that has sold down looks picked-over. Packaging cannot refrigerate anything, but an open structure lets heat dissipate where an enclosed one traps it.' },
    { question: 'How do we keep an impulse display looking full?', answer: 'A dispenser structure, where units are drawn from a front opening, looks identical at half stock. For single-SKU confectionery lines that usually justifies the extra structural complexity by itself, because these displays deplete faster than they get restocked.' },
    { question: 'What footprint will a checkout accept?', answer: 'Less than you want. Checkout space is the most contested in any store, and the retailer decides. Establish the figure before designing — a display that exceeds it does not get placed however well it would have performed.' },
    { question: 'Do we need food-grade board for wrapped confectionery?', answer: 'No. Wrapped product makes the display secondary packaging with straightforward requirements. Unwrapped or loose confectionery is direct contact and needs food-grade board with a compliant coating — tell us which applies before printing.' },
    { question: 'Our seasonal artwork changes but the structure does not. Can we avoid retooling?', answer: 'Yes, and you should. Tool the structure once and change only the printed panel or a sleeve between seasons. Most of the cost and lead time on a first order is development, so reusing the tooling turns each cycle into a print job.' },
    { question: 'How far ahead should we order for a seasonal confectionery push?', answer: 'Work backward from the in-store date through delivery, production, proof approval, and dieline approval. Build the slack at artwork approval — it involves the most people and slips most often, and seasonal deadlines do not move.' },
    { question: 'Independent stores here vary a lot in counter space. How do we design for that?', answer: 'Design conservatively for the smallest counter you expect rather than an average one. Independents rarely run planograms, which gives structural freedom but removes any guarantee about the space you will actually get.' },
    { question: 'Which finish survives a full promotional period at a register?', answer: 'Gloss lamination. Checkout displays get knocked, pushed aside, and wiped around constantly, and they fail through abrasion rather than structural collapse. Matte and uncoated finishes will show handling marks well before the campaign ends.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-washington': [
    { question: 'Retailers here ask whether our packaging is recyclable. What is the honest answer?', answer: 'It depends almost entirely on the coating. Uncoated and aqueous-coated board goes into the paper stream; a plastic film laminate takes it out in most municipalities. Board grade and recycled content matter far less to that answer than the finish does.' },
    { question: 'Can we have a recyclable finish that still lasts on shelf?', answer: 'Partly, and the trade-off is genuine. An aqueous coating or varnish protects the surface while keeping the board repulpable, but it resists scuffing less well than a laminate. On a campaign running several months that is a real cost rather than a technicality.' },
    { question: 'Does kraft board mean recycled?', answer: 'No. Kraft describes the pulping process and the unbleached appearance, not the fibre source. Recycled content is available in white grades too and should be specified explicitly rather than inferred from the colour of the board.' },
    { question: 'We ship direct to consumers as well as to retail. One pack or two?', answer: 'Usually two, because the jobs differ. Ecommerce shipping is single-parcel and rougher per unit; retail display is palletized and judged on presentation. A display mailer that converts on arrival can bridge them, provided the structure stays stable after opening.' },
    { question: 'Our coffee packaging picks up oil marks. What stops that?', answer: 'A barrier coating on the inner surface. Oils migrate into uncoated board and show as translucent staining that does not come out. Greaseproof coatings developed for food packaging resist it while staying repulpable, which matters in a market that scrutinises recyclability.' },
    { question: 'Does a subscription box need different structure from a retail display?', answer: 'Yes. A subscription pack is opened once by one person and is judged on the unboxing; a retail display is handled by dozens and judged on how it looks in week four. Durability and presentation priorities are almost opposite.' },
    { question: 'Are paper-based windows a real alternative to plastic film?', answer: 'They exist and they keep a pack in a single material stream, which some retailer specifications require. Clarity is lower than PET film, so ask for a sample if seeing the product is the reason the window is there at all.' },
    { question: 'How do we reduce packaging material without weakening the display?', answer: 'Size it correctly. A display drawn generously around its product uses more board, ships in a larger carton, and takes more pallet space. Tightening the dieline to the real product is free at design stage and reduces all three.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-arizona': [
    { question: 'Does heat actually affect packaging here?', answer: 'Yes, in two ways worth planning for. Sustained high temperatures can affect adhesive performance, and some products soften in a non-climate-controlled warehouse or a vehicle. If your packaging will sit in those conditions, say so at quoting stage rather than assuming temperate behaviour.' },
    { question: 'We ship single parcels from a fulfillment centre. Does that change the box?', answer: 'It does. Single-parcel shipping is rougher per unit than palletized freight — more individual handling, more drops, less protection from surrounding load. A display specified for pallet transit is not automatically suited to going out one at a time.' },
    { question: 'Can one box work for both parcel and pallet shipping?', answer: 'Sometimes, but it is usually over-specified for one and under-specified for the other. Where volumes justify it, two specifications sharing a dieline is often cheaper overall than one compromise that fails occasionally in the harsher channel.' },
    { question: 'Our displays arrive with scuffed corners from fulfillment. What helps?', answer: 'Corner damage is the characteristic parcel failure. A laminate resists the scuffing itself, and an outer shipper sized with minimal void stops the display moving inside its carton — void space is where the impacts happen.' },
    { question: 'Does the seasonal population swing affect how we should order?', answer: 'It affects quantity planning more than specification. Where demand is concentrated in part of the year, consolidating into fewer larger runs usually beats repeated small reorders, provided you have somewhere to store the stock.' },
    { question: 'Should displays ship flat or assembled from a fulfillment operation?', answer: 'Flat, in almost every case. Freight is billed on volume and an assembled display is mostly air. Pair it with a lock-bottom structure that erects in one motion so whoever receives it can put it up without instructions.' },
    { question: 'How do we stop product moving inside the display during transit?', answer: 'An insert, rather than a heavier outer box. Product that can move will move, and in parcel shipping it moves more. Cavity inserts or partitions hold each unit in place and are usually cheaper than upgrading the whole structure.' },
    { question: 'Is corrugated always necessary for shipping displays?', answer: 'For anything travelling loaded or stacked, effectively yes. Folding boxboard does not carry sustained compression, and a display that ships assembled in boxboard tends to arrive out of shape even when it would have held fine on a shelf.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-massachusetts': [
    { question: 'How tightly should a vial cavity fit?', answer: 'Tight enough that inverting the display does not release the vial, loose enough that it lifts out by hand without force. That is a narrow window, and it is cut from a physical sample — a drawing will not capture the shoulder profile or label thickness that decide the fit.' },
    { question: 'Our vials arrive chipped. What is causing it?', answer: 'Movement. A vial held at its sides but free to move vertically still takes repeated shock on its base through transit. Restraint has to work in all three axes, which usually means a top pad or a closed lid bearing lightly on the vial tops.' },
    { question: 'We need to add batch numbers after printing. How do we plan for that?', answer: 'Leave a clear uncoated area sized and positioned for the specific ink or label being applied. A fully laminated panel will not reliably accept most overprint inks or adhesives, and finding that out after a run is entirely avoidable.' },
    { question: 'What presentation style suits research and life-sciences products?', answer: 'Restrained and clinical. Clean typography, generous space, and accurate registration read as credible in this category, where heavy consumer-style branding tends to read as suspect. Print execution is doing credibility work rather than decorative work.' },
    { question: 'Should the display also be the shipping pack for glass vials?', answer: 'Usually not. A structure optimised for counter presentation is rarely the right one to survive freight. Where it must do both, it needs an outer and an insert restraining movement in every direction.' },
    { question: 'Can one display hold several vial sizes?', answer: 'Yes, with an insert carrying different cavity diameters. Send a sample of each size — sizing every well to the largest vial lets the smaller ones move, which reintroduces exactly the breakage risk the insert exists to prevent.' },
    { question: 'Retail space here is expensive. How does that affect display design?', answer: 'The same way it does in any high-rent market: footprint discipline. A compact unit that grows upward rather than outward earns space more easily, and in a dense urban retail environment that is often the difference between placement and refusal.' },
    { question: 'Do specialty food producers here need food-grade board?', answer: 'If the product touches the board, yes — including partial wraps where exposed faces make contact. Wrapped product makes the display secondary packaging with much simpler requirements. Tell us which applies before anything is printed.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-new-jersey': [
    { question: 'We need to overprint lot numbers after the run. How should the artwork allow for that?', answer: 'Leave a clear uncoated area, sized and positioned for the specific ink or label being applied. A fully laminated panel will not reliably accept most overprint inks or label adhesives, and discovering that after production is an avoidable and expensive problem.' },
    { question: 'A contract packer fills our displays. Does that change the structure?', answer: 'It changes the assembly sequence. If a third party loads units before onward supply, the display needs to be fillable while flat or open rather than through a narrow opening once the header is fitted. Agree the filling sequence at quoting stage, not after tooling.' },
    { question: 'Do you handle serialization or track-and-trace codes?', answer: 'We print the artwork supplied, including variable data areas you specify. We do not advise on serialization requirements or verify that a scheme meets any regulation — that stays with you and your compliance adviser.' },
    { question: 'Our personal care range spans tubes, pumps, and jars. Can one display hold them?', answer: 'Only with separate cavity sizes or separate tiers. One generic well sized to the largest item lets everything smaller move, and units that move fall over. Send a sample of every format rather than the biggest one.' },
    { question: 'How does port and distribution transit affect the specification?', answer: 'Where product moves palletized, the board is specified against stack compression rather than the weight of the display contents. The case at the bottom of a full pallet carries everything above it, and that figure is usually the higher one.' },
    { question: 'Pharmacy chains here want shelf-ready cases. What governs the design?', answer: 'Their specification does. It sets case dimensions, opening method, and how much product face must remain visible. A non-compliant case is unpacked by hand, which removes the labour saving the requirement exists to deliver.' },
    { question: 'Do you review our regulatory copy before printing?', answer: 'No, in any market. We print exactly the artwork supplied including warnings, ingredient declarations, and safety marks. Confirming accuracy and compliance stays with you — assuming a packaging supplier is checking is a costly assumption.' },
    { question: 'Why does print registration matter so much for pharmaceutical packaging?', answer: 'Because precision is the proposition. Poor registration or a colour that does not match the product unit reads as a signal about the product itself, in a category where both pharmacists and shoppers are making a credibility judgment.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-michigan': [
    { question: 'Our accessory packs keep tearing off the peg hook. What fixes it?', answer: 'A reinforced hang tab. On a plain punched hole the entire weight of pack and product concentrates at one point, and on heavier items that hole is the failure point. An additional adhesive tab or a die-cut shape with more material around the hole spreads the load.' },
    { question: 'How heavy can a peg-hung accessory pack be?', answer: 'It depends on the card caliper and the tab construction rather than being a single figure. The practical test is hanging a fully loaded pack and leaving it — tab failures usually appear over time rather than immediately, which a quick check will not reveal.' },
    { question: 'What information matters most on automotive accessory packaging?', answer: 'Compatibility, above the brand mark and readable at arm’s length. Nobody buys a part because the pack looks good — they buy the one that visibly fits their vehicle. Burying compatibility is the most common weakness in this category.' },
    { question: 'Our packs look worn on the peg wall. Why?', answer: 'They have been picked up and replaced repeatedly by shoppers comparing options. Specify heavier card than the size suggests plus a laminate for scuff resistance — in accessory retail a handled-looking pack reads as old stock.' },
    { question: 'Should we use a window or print the product?', answer: 'A window lets buyers assess build quality, at the cost of a plastic component and some theft protection. A printed representation at actual size avoids both and frees surface for compatibility information, but asks the shopper to trust the print.' },
    { question: 'How do we deter theft on small high-value parts?', answer: 'Oversize the pack relative to the product so it is awkward to pocket, and provide a flat unobstructed area for a security tag where the retailer requires one. Retailers factor shrinkage into whether they stock a line at all.' },
    { question: 'Does the seasonal climate here affect food packaging?', answer: 'It affects the ordering cycle more than the specification. Where demand is strongly seasonal, tooling a structure once and updating only a printed sleeve between cycles turns each change into a print job rather than a new development.' },
    { question: 'Can one pack design serve a whole accessory range?', answer: 'Often yes, with a common structure and different printed panels, since accessory ranges usually share a size envelope. It also keeps the range recognisable on a peg wall, which helps more than per-product design does.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-missouri': [
    { question: 'Our bulk treat bins collapse at the rim rather than the base. Why?', answer: 'Because shoppers reach in, putting hands and forearm weight on the rim repeatedly through a promotion. Rim collapse is the characteristic failure on this format, so it needs a returned edge or a doubled wall — a stronger base does not address it.' },
    { question: 'How much weight can a floor bin hold?', answer: 'It depends on flute, wall, liner grade, and how the load sits, so we specify against your actual fill weight rather than publishing a figure. Treats are dense, and a bin holding twenty pounds concentrates serious load on its base.' },
    { question: 'Oily treats are staining our displays. What stops that?', answer: 'A barrier-coated inner surface or a replaceable liner. Fats migrate into uncoated board exactly as they do in human food packaging. A liner takes the staining and gets swapped at restock, keeping the printed structure presentable.' },
    { question: 'Is scent transfer between products a real concern?', answer: 'In stores where several open bins sit together, yes. Strongly scented treats can transfer odour to adjacent product, which is a reason to favour enclosed or lined structures for the most aromatic lines.' },
    { question: 'How should we present multiple sizes in one display?', answer: 'Divided sections with size identification printed on the display rather than only on the pack. Many pet products are size or breed specific, and a mixed bin means shoppers sort through — or buy the wrong one and return it.' },
    { question: 'Do loose treats need food-grade board?', answer: 'Where they sit loose and are handled or scooped, food-contact considerations apply much as they do for human food, and food-grade board with a compliant coating is appropriate. Tell us at quoting stage rather than after printing.' },
    { question: 'Who is pet packaging actually selling to?', answer: 'The owner — the animal has no opinion. Imagery, ingredient prominence, and suitability information are aimed at a person making a quality judgment, which pushes the information hierarchy closer to human food than to toys.' },
    { question: 'Our product ships by rail and freight. Does that change anything?', answer: 'It puts pallet compression ahead of product weight in the specification. The bottom case in a full pallet carries everything above it, and that is the figure the board is chosen against on anything moving through a freight network.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-colorado': [
    { question: 'We want uncoated kraft for our natural range. What should we know first?', answer: 'That kraft is brown and ink is not opaque, so every colour prints warmer and darker than on white board, and pale colours may not register at all without a white underprint. Design a palette for kraft rather than adapting one built for white.' },
    { question: 'Does a white underprint defeat the point of choosing kraft?', answer: 'Partly. It solves the legibility problem and adds an ink station and cost, eroding the price advantage while keeping the visual character. That may still be the right trade, but it should be a conscious one rather than a surprise at proof.' },
    { question: 'Does kraft board mean recycled content?', answer: 'No. Kraft describes the pulping process and the unbleached appearance, not the fibre source. Recycled content is available in white grades too, and should be specified explicitly rather than inferred from the colour of the board.' },
    { question: 'What do we need to establish before designing cannabis packaging?', answer: 'The mandated warning content, size, and placement, plus any child-resistance or product-visibility requirements. Those claim panel area before brand design starts. Confirm them with your compliance adviser — we print what is supplied and do not review it against any jurisdiction.' },
    { question: 'Does a paperboard box provide child resistance?', answer: 'No. Child resistance is a certified mechanical specification, usually involving a component beyond plain board. If your product requires it, that closure or container is a separate specification and the display is built around it.' },
    { question: 'Our craft beverage display sags under filled bottles. What is wrong?', answer: 'Glass is dense relative to its footprint, and paperboard deforms under sustained load rather than failing suddenly. A base that holds when first filled can bow within a week. For filled glass, E-flute corrugated is the practical minimum.' },
    { question: 'How do we keep packaging recyclable in a market that checks?', answer: 'Settle the coating before the finish is chosen. Uncoated and aqueous-coated board stays in the paper stream; a plastic film laminate takes it out in most municipalities. It affects recyclability more than board grade or recycled content does.' },
    { question: 'Regulations in our category keep changing. Should we order long runs?', answer: 'Cautiously. Packaging compliant when printed may need updating, and a large quantity of superseded stock is a write-off rather than a saving. Structures where a printed sleeve updates independently limit that exposure.' },
    NO_LOCAL_PRESENCE,
  ],

  /* ── Cities ────────────────────────────────────────────────────────────── */

  'custom-display-boxes-new-york-ny': [
    { question: 'A bodega will only give us a few inches of counter. Can a display work in that?', answer: 'Yes, if it grows upward. A narrow stepped unit holding the same stock in less counter area places where a wide shallow one is refused. In this market the footprint number is the whole conversation, so get it before designing.' },
    { question: 'Should we design differently for bodegas and department stores?', answer: 'Usually, yes. Bodegas are space-constrained and rarely run planograms, so a compact flexible unit works. Flagship stores are more prescriptive and expect higher print execution. A common structure with different printed panels handles both better than one compromise.' },
    { question: 'Why do displays get moved to worse positions in small stores?', answer: 'Usually because they interfere. A display that has to be moved to use the counter, or that blocks a terminal, gets relegated regardless of how it sells. Footprint and placement practicality matter more than design here.' },
    { question: 'Is a header card worth the height on a city counter display?', answer: 'Rarely. At a counter the shopper is already standing at the display, so a header adds height a retailer may object to without adding much. Headers earn their place on floor units seen from down an aisle.' },
    { question: 'Our jewellery cards bend in the wholesale district. What caliper do we need?', answer: 'Heavier than most printed items of that size. A light card bends as soon as a post goes through it, and a bent card makes good jewellery look cheap. Weight also matters on a peg, where the whole load hangs from one hole.' },
    { question: 'How many products can a small counter display hold before it stops working?', answer: 'Three to five SKUs before each loses enough frontage to stop registering as distinct. With the footprint already tight here, two focused displays usually outperform one crowded unit.' },
    { question: 'Does print quality really matter more in this market?', answer: 'It tends to, because buyers and shoppers see a high standard routinely and displays are viewed close up. That favours offset or litho-lamination over direct-printed corrugated wherever the display is doing brand work.' },
    { question: 'How do deliveries work for stores with no loading access?', answer: 'Tell us the delivery constraints when you order. Many consignments are palletized, and an address that cannot receive a pallet needs the shipment arranged differently — worth flagging in advance rather than at the door.' },
    HOME_LOCATION_PRESENCE,
  ],

  'custom-display-boxes-los-angeles-ca': [
    { question: 'This is our first retail launch. What usually goes wrong?', answer: 'The display gets designed around the product as photographed rather than as measured. Cavities cut from a spec sheet frequently will not accept the real unit, because the cap is wider than the body and a wrap label adds thickness all round.' },
    { question: 'What exactly should we send you?', answer: 'Physical units — several if your product varies between batches. The dimensions that decide fit are the ones a spec sheet does not record: a cap flare, a tapered base, label thickness. A drawing is good for scoping and poor for cutting a cavity.' },
    { question: 'Our lipsticks lean in the display within days. Why?', answer: 'Tall narrow units have a high centre of gravity and almost no footprint, so a generously sized well lets them tip. Cavity tolerance has to be tight enough to hold the unit upright and loose enough to lift out one-handed.' },
    { question: 'How do we match the display colour to our product packaging?', answer: 'Specify a Pantone spot ink rather than a CMYK build, and supply the product itself as the colour reference. The comparison a shopper actually makes is display against product, not display against a swatch book.' },
    { question: 'Boutique stockists each give us different space. How do we handle that?', answer: 'Design conservatively for the smallest footprint you expect. Independent stockists rarely run planograms, which gives structural freedom but no guarantee about the space you will get in any given store.' },
    { question: 'We are also going into a chain. Same display?', answer: 'Probably not. Chains issue specifications and reject anything that misses them, while boutiques take what fits. A shared structure with different printed panels usually works better than one design stretched across both.' },
    { question: 'Does clean-beauty positioning affect the packaging specification?', answer: 'It affects the coating decision. A plastic film laminate takes board out of the paper recycling stream, and in a category positioned around clean formulation that mismatch gets noticed by both retailers and customers here.' },
    { question: 'We are launching a small first run. Is that viable?', answer: 'Yes. Digital printing removes plate setup, which is what makes genuinely short runs economic. Expect a higher per-piece price, and treat it as a proving run — finding a structural problem across a hundred units is far cheaper than across ten thousand.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-chicago-il': [
    { question: 'Our cases are crushed by the time they reach stores. What are we specifying wrong?', answer: 'Almost certainly the board against product weight rather than pallet compression. The case at the bottom of a full pallet carries everything above it, and in a freight network that is the load that governs.' },
    { question: 'How should we test a shelf-ready perforation?', answer: 'On units that have sat under representative pallet weight for a week, not on samples made that morning. A tear line that opens cleanly when fresh can weaken or fail after time under compression, and that is the failure that reaches stores.' },
    { question: 'What happens if the perforation is too strong?', answer: 'The operator reaches for a knife, which defeats the labour saving and frequently cuts the product underneath. Too weak and cases open under compression in transit. Getting it right is the single detail that decides whether shelf-ready works.' },
    { question: 'Can a shipper-display really replace two packs?', answer: 'It can, and it removes a packing stage. The constraint is that a box is much weaker once its top is gone — the structure remaining after conversion has to be square and stable on its own, which is the condition people forget to test.' },
    { question: 'Grocery chains here want cases identified from a pallet. How?', answer: 'Large, high-contrast variant identification on the case front, readable while still stacked. Store operators read quickly, and subtle brand-consistent differences between variants are the most common cause of picking errors.' },
    { question: 'Does rail freight handle differently from road?', answer: 'It involves more handling events and longer periods under static load. Either way the specification question is the same — how much compression the bottom case carries — and that is what the flute and wall are chosen against.' },
    { question: 'Our confectionery softens in transit during summer. Can packaging help?', answer: 'Not directly, since packaging cannot refrigerate anything. What it can do is avoid trapping heat: an enclosed structure holds warmth against the product where an open one lets it dissipate. Beyond that it is a placement and transit question.' },
    { question: 'How do we reduce freight cost on bulky displays?', answer: 'Flat-pack them and check pallet fit at dieline stage. Freight is billed on volume, so a design leaving unused pallet space carries that cost on every shipment. Gaining a unit per layer is free while the drawing is open.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-houston-tx': [
    { question: 'Does humidity here actually affect display packaging?', answer: 'Yes. Sustained humidity softens paperboard and can affect how some coatings perform over time. A display specified on the assumption of dry storage may not behave the same way in a non-climate-controlled warehouse in this climate.' },
    { question: 'How do we specify for humid storage?', answer: 'Tell us the storage and retail conditions at quoting stage. It can change the board grade and the coating rather than just the finish, and it is not something that can be corrected once a run has been produced.' },
    { question: 'Most of our stockists are independent. Does that change the display?', answer: 'It gives you more structural freedom and less predictability. Independents rarely run planograms, so there is no fixed specification to design to — but there is also no guarantee of counter space, which argues for designing to the smallest footprint you expect.' },
    { question: 'We supply a very diverse food retail base. One display or several?', answer: 'Usually one structure with different printed panels. The structural requirements are similar across independent grocery; what differs is the product and the language on the pack, and print is the cheap variable.' },
    { question: 'Does our product touching the board change the specification?', answer: 'Substantially. Direct food contact requires food-grade board with compliant coatings and inks. Wrapped product makes the display secondary packaging with much simpler requirements. Partial wraps count as direct contact.' },
    { question: 'How does port and import activity affect packaging decisions?', answer: 'Mostly through transit. Product arriving palletized and moving on to stores is exposed to stack compression, so the board is specified against that rather than the weight of the display contents.' },
    { question: 'Our displays are handled a lot in small stores. What finish holds up?', answer: 'Gloss lamination resists scuffing best. Displays in busy independent retail fail through abrasion rather than structural collapse, and an uncoated or matte finish will show handling marks well before the campaign ends.' },
    { question: 'Can we get small quantities for a limited number of stores?', answer: 'Yes. Digital printing removes plate setup, making short runs viable. Expect a higher per-piece price because fixed costs spread across fewer units, and consider it a proving run before committing to volume.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-dallas-tx': [
    { question: 'Our display is shown at a wholesale market. Does that change the design?', answer: 'It changes the audience. The first person judging it is a buyer deciding whether to stock the line, and they are assessing whether it will place in their stores, assemble without fuss, and last a season — practical questions rather than aesthetic ones.' },
    { question: 'What demonstrates well in a showroom setting?', answer: 'A display that ships flat and erects in one motion, because a buyer can see the whole proposition in seconds. A structure that needs explaining is a harder sell in a room where attention is measured in moments.' },
    { question: 'Buyers ask how it ships. What should we be able to answer?', answer: 'Whether it flat-packs, how many fit a pallet layer, and whether store staff can erect it unaided. Those three answers matter more to a wholesale buyer than the print does, because they determine what it costs them to handle.' },
    { question: 'We sell to many small retailers through wholesale. What footprint should we target?', answer: 'The smallest you expect any of them to concede. When you cannot survey every stockist, designing to the tightest likely counter is safer than designing to an average and being refused by the smaller half.' },
    { question: 'Can one display serve a whole gift range?', answer: 'Often yes, with a common base and different printed panels or inserts. It avoids re-developing a display per product and keeps the range recognisable, which helps a buyer see it as a coherent line rather than separate items.' },
    { question: 'How do seasonal gift ranges affect tooling?', answer: 'Tool the structure once and change only the printed element between seasons. Most of the cost and lead time on a first order is development, so reusing the tooling turns each cycle into a print job rather than a new project.' },
    { question: 'Should we bring samples or renders to a market?', answer: 'Samples. A buyer can assess a physical display in seconds and cannot assess a render at all — particularly for assembly, which is one of their real concerns and is invisible in an image.' },
    { question: 'How quickly can we reorder after a market takes orders?', answer: 'Once a dieline and proof are approved and on file, a reorder is a print job rather than a new development. That is worth setting up before the market rather than after the orders arrive.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-austin-tx': [
    { question: 'We need a small run for a single event. Is that possible?', answer: 'Yes. Digital printing removes plate setup entirely, which is what makes genuinely small quantities viable. Expect a higher per-piece price, because fixed costs like the cutting die spread across fewer units.' },
    { question: 'Can we print several designs in one short run?', answer: 'On digital, yes, and versioning costs very little because there are no plates per version. For a range of small-batch products that is usually far cheaper than ordering each design separately over time.' },
    { question: 'Our display gets set up and packed down at every market. What suits that?', answer: 'Assembly speed and crease durability over finish. A structure that erects in one motion and folds flat without tearing at the creases will outlast a more elaborate one never designed for repeated handling.' },
    { question: 'How many times can a display be reused?', answer: 'It depends on the structure and board rather than a fixed number. If reuse matters, say so at quoting stage — some geometries collapse and re-erect well and others are designed to be built once.' },
    { question: 'Festival merchandise sells fast then stops. How should we plan quantity?', answer: 'Treat the first run as a proving run rather than committing a year of stock to an untested structure. Reorder economics are better once the dieline and proof are on file, so a second run is faster and cheaper than the first.' },
    { question: 'Our craft food product is unwrapped. What board do we need?', answer: 'Food-grade board with a compliant coating, because that is direct contact. Partial wraps and paper bands count as direct contact too, since exposed faces still touch the board. Tell us before printing rather than after.' },
    { question: 'Does a display for a market stall need to look different from a retail one?', answer: 'It usually does. A market display is seen from all sides, moved constantly, and set up by you; a retail display sits against a wall, is placed once, and is built by someone with thirty seconds. Those are different structures.' },
    { question: 'How do we keep costs down on frequent small runs?', answer: 'Combine designs into one run rather than ordering separately, and keep the structure simple — each extra glue point, insert, or die-cut window adds a production step, and steps cost more than material at low quantities.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-phoenix-az': [
    { question: 'Does heat affect packaging in storage here?', answer: 'It can affect adhesive performance and soften some products in a non-climate-controlled warehouse or vehicle. If your packaging will sit in those conditions, say so at quoting stage rather than assuming it behaves as it would in a temperate climate.' },
    { question: 'We ship single parcels rather than pallets. Does that change the spec?', answer: 'Yes. Single-parcel shipping is rougher per unit — more individual handling, more drops, and no surrounding load to protect the box. A display specified for palletized freight is not automatically suited to going out one at a time.' },
    { question: 'Can one box handle both parcel and pallet shipping?', answer: 'Sometimes, but it is usually over-specified for one and under-specified for the other. Two specifications sharing a dieline is often cheaper overall than one compromise that fails occasionally in the harsher channel.' },
    { question: 'Our displays arrive with damaged corners. What helps?', answer: 'Corner damage is the characteristic parcel failure. A laminate resists the scuffing, and an outer shipper sized with minimal void stops the display moving inside its carton — void space is where the impacts happen.' },
    { question: 'How do we stop product shifting inside the display in transit?', answer: 'An insert rather than a heavier outer. Product that can move will move, and it moves more in parcel shipping. Cavity inserts or partitions hold each unit and usually cost less than upgrading the whole structure.' },
    { question: 'Should displays ship flat from a fulfillment operation?', answer: 'Almost always. Freight is billed on volume and an assembled display is mostly air. Pair flat-packing with a lock-bottom structure that erects in one motion so the recipient can put it up without instructions.' },
    { question: 'Does seasonal demand affect how we should order?', answer: 'It affects quantity planning more than specification. Where demand concentrates in part of the year, consolidating into fewer larger runs beats repeated small reorders — provided you have storage, since display packaging is bulky even flat.' },
    { question: 'Is corrugated always needed for shipping displays?', answer: 'For anything travelling loaded or stacked, effectively yes. Folding boxboard does not carry sustained compression, so a boxboard display shipped assembled tends to arrive out of shape even when it would have held fine on a shelf.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-san-diego-ca': [
    { question: 'Our glass vials need to be held very securely. What does that require?', answer: 'Cavity geometry tight enough that inverting the display does not release the vial, and restraint in all three axes so units cannot bounce vertically in transit. That is usually a die-cut insert plus a top pad, cut from a physical sample.' },
    { question: 'Why do vials break even when they fit snugly at the sides?', answer: 'Because a vial held laterally but free to move vertically still takes repeated shock on its base through a journey. Lateral fit alone is not restraint — the pack has to prevent movement in every direction.' },
    { question: 'We need to apply lot numbers after printing. How do we plan for that?', answer: 'Leave a clear uncoated area sized for the ink or label being used. A fully laminated panel will not reliably accept most overprint inks or adhesives, and that is discovered after production when it is expensive to fix.' },
    { question: 'Our craft beer display sags under filled bottles. What is wrong?', answer: 'Glass is dense relative to its footprint, and paperboard deforms under sustained load rather than failing suddenly. A base that holds when first filled can bow within a week. E-flute corrugated is the practical minimum for filled glass.' },
    { question: 'How do we stop bottles chipping against each other?', answer: 'Partitions or cavity inserts so each vessel has its own space. Glass chips on contact in transit and every time a customer replaces one, and a chipped bottle is unsellable — so this is protection rather than merchandising.' },
    { question: 'Does taproom retail need a different display from grocery?', answer: 'Usually. A taproom display is seen close up by a customer already choosing, while grocery is a shelf-compliance problem with a planogram. The structures and the information hierarchy both differ.' },
    { question: 'Can one display hold different vial or bottle sizes?', answer: 'Yes, with an insert carrying different cavity diameters. Send a sample of each size — sizing every well to the largest lets smaller units move, reintroducing exactly the breakage risk the insert exists to prevent.' },
    { question: 'What presentation style suits life-sciences products?', answer: 'Restrained and clinical. Clean typography, generous space, and accurate registration read as credible here; heavy consumer-style branding tends to read as suspect in a category where precision is the proposition.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-san-jose-ca': [
    { question: 'What matters most on electronics accessory packaging?', answer: 'Compatibility, above the brand mark and readable at arm’s length. Nobody buys a cable because the pack looks appealing — they buy the one that visibly fits their device. Burying compatibility is the most common weakness in this category.' },
    { question: 'Does cardboard packaging protect against static?', answer: 'No. Standard paperboard is not an antistatic material and should not be treated as one. If your product requires antistatic or shielded protection, that is a specialist material specification — raise it at quoting stage rather than assuming.' },
    { question: 'How do we deter theft on small high-value accessories?', answer: 'Oversize the pack relative to the product so it is awkward to pocket, and leave a flat unobstructed area for a security tag where the retailer requires one. Retailers factor shrinkage into whether they stock a line at all.' },
    { question: 'Should we show the product through a window?', answer: 'A window lets buyers assess the connector and build quality, at the cost of a plastic component and some theft protection. A printed representation at actual size avoids both and frees surface for compatibility information, but asks for trust.' },
    { question: 'Our packs look worn on the peg wall. Why?', answer: 'They are picked up and replaced constantly by shoppers comparing options. Specify heavier card than the size suggests plus a laminate — in this category a handled-looking pack reads as old stock, and shoppers assume newer is better.' },
    { question: 'Why do our hang tabs tear on heavier items?', answer: 'The whole weight of pack and product hangs from one punched hole. On power banks and chargers a reinforced tab matters more than any other structural decision, because a tab that tears leaves the product on the aisle floor.' },
    { question: 'Can one pack design cover a whole accessory range?', answer: 'Often yes, with a common structure and different printed panels, since accessory ranges usually share a size envelope. It also keeps the range recognisable on a peg wall, which helps more than per-product design does.' },
    { question: 'We also sell direct to consumers. Same packaging?', answer: 'Rarely optimal. Retail packaging is designed to be seen and handled on a peg; ecommerce packaging is designed to survive single-parcel shipping. One pack doing both is usually over-specified for one and under-specified for the other.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-seattle-wa': [
    { question: 'We ship direct to consumers and into retail. Do we need two packs?', answer: 'Usually, because the jobs differ. Ecommerce is single-parcel and rougher per unit; retail display is palletized and judged on presentation. A display mailer that converts on arrival can bridge them if the structure stays stable once opened.' },
    { question: 'How does a display mailer actually work?', answer: 'It ships as a sealed case and converts into a display, usually by tearing away a perforated section or folding down a front panel. The constraint people miss is that a box is much weaker once its top is gone.' },
    { question: 'Retailers here ask about recyclability. What determines it?', answer: 'The coating, more than the board or its recycled content. Uncoated and aqueous-coated board stays in the paper stream; a plastic film laminate takes it out in most municipalities. Settle it before choosing a finish.' },
    { question: 'Can a recyclable finish survive months on shelf?', answer: 'Partly, and the trade-off is real. An aqueous coating protects the surface while staying repulpable but resists scuffing less well than a laminate. On a long campaign in a busy store that is a genuine cost to weigh.' },
    { question: 'Our coffee packaging picks up oil marks. What stops that?', answer: 'A barrier coating on the inner surface. Oils migrate into uncoated board and show as translucent staining that does not come out. Greaseproof coatings developed for food packaging resist it while remaining repulpable.' },
    { question: 'Does a subscription box need different structure from a retail display?', answer: 'Yes. A subscription pack is opened once by one person and judged on the unboxing; a retail display is handled by dozens and judged on how it looks in week four. The durability priorities are almost opposite.' },
    { question: 'Are paper-based windows a genuine alternative?', answer: 'They exist and keep a pack in a single material stream, which some specifications require. Clarity is lower than PET film, so ask for a sample if seeing the product is the reason the window is there at all.' },
    { question: 'How do we cut packaging material without weakening the display?', answer: 'Size it correctly. A display drawn generously around its product uses more board, ships in a bigger carton, and takes more pallet space. Tightening the dieline to the real product is free at design stage and reduces all three.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-boston-ma': [
    { question: 'How precisely do vial cavities need to fit?', answer: 'Tight enough that inverting the display does not release the vial, loose enough to lift out by hand without force. It is a narrow window and it is cut from a physical sample — a drawing will not capture the shoulder profile or label thickness.' },
    { question: 'Our vials chip in transit even though they fit snugly. Why?', answer: 'Because they are held laterally but free to move vertically, so each unit takes repeated shock on its base. Restraint has to work in all three axes, which usually means a top pad or a lid bearing lightly on the vial tops.' },
    { question: 'We apply batch numbers after printing. How should artwork allow for it?', answer: 'Leave a clear uncoated area sized and positioned for the specific ink or label. A fully laminated panel will not reliably accept most overprint inks or adhesives, and that is found out after production when it is expensive.' },
    { question: 'What presentation style suits research supply?', answer: 'Restrained and clinical. Clean typography, generous space, and accurate print registration read as credible; heavy consumer-style branding tends to read as suspect in a category where precision is the whole proposition.' },
    { question: 'Should the display double as the shipping pack?', answer: 'Usually not for glass. A structure optimised for presentation is rarely the right one to survive freight. Where it has to do both, it needs an outer and an insert that restrains movement in every direction.' },
    { question: 'Retail space here is tight and expensive. How does that affect design?', answer: 'It puts footprint discipline first. A compact unit that grows upward rather than outward earns space more easily, and in a dense urban retail environment that is often the difference between placement and refusal.' },
    { question: 'Our specialty food product is unwrapped. What changes?', answer: 'It becomes direct food contact, which requires food-grade board with compliant coatings and inks. Partial wraps count too, since exposed faces still touch the board. Tell us before anything is printed rather than after.' },
    { question: 'Can one display hold several vial sizes?', answer: 'Yes, with an insert carrying different cavity diameters. Send a sample of each size — sizing every well to the largest lets smaller units move, which reintroduces the breakage risk the insert exists to prevent.' },
    NO_LOCAL_PRESENCE,
  ],

  'custom-display-boxes-philadelphia-pa': [
    { question: 'Corner stores here vary hugely in counter space. How do we design for that?', answer: 'For the smallest counter you expect rather than an average one. Independent retail rarely runs planograms, which gives structural freedom but removes any guarantee about the space you will actually be given.' },
    { question: 'Is there a specification we should design to for independents?', answer: 'Usually not, which cuts both ways. There is no formal requirement to meet, and no assurance either — so the display has to be conservative on footprint and easy to place anywhere without adjustment.' },
    { question: 'How do we keep an impulse display looking full?', answer: 'A dispenser structure, where units are drawn from a front opening, looks the same at half stock as at full. Where restocking is irregular — as it often is in small independent stores — that usually justifies the extra complexity.' },
    { question: 'Do we need food-grade board for wrapped snacks?', answer: 'No. Wrapped product makes the display secondary packaging with straightforward requirements. Unwrapped or loose product is direct contact and needs food-grade board with a compliant coating.' },
    { question: 'Our confectionery softens near the window in summer. Can packaging help?', answer: 'Not directly — packaging cannot refrigerate anything. It can avoid making things worse: an open structure lets heat dissipate where an enclosed one traps it against the product. Beyond that it is a placement conversation.' },
    { question: 'Pharmacy chains in the region want shelf-ready cases. What governs that?', answer: 'Their specification, entirely — case dimensions, opening method, and how much product face stays visible. A non-compliant case gets unpacked by hand, removing the labour saving it was required for.' },
    { question: 'How many stores can we supply from a small run?', answer: 'That depends on the display, but digital printing makes genuinely small quantities viable. It is often better to prove a structure across a handful of stores before committing to a quantity that covers the whole estate.' },
    { question: 'Which finish holds up in a busy corner store?', answer: 'Gloss lamination. These displays are knocked, pushed aside, and wiped around constantly, and they fail through abrasion rather than collapse. Uncoated and matte finishes will show handling marks well before a campaign ends.' },
    NO_LOCAL_PRESENCE,
  ],
};
