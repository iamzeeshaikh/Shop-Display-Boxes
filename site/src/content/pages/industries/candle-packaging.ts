import type { PageContent } from '../../../data/page-content';

const content: PageContent = {
  slug: 'candle-packaging',
  kind: 'industry',

  metaTitle: 'Candle Packaging | Displays Built for Glass Weight',
  metaDescription:
    'Display packaging for candle brands: glass vessel weight, scent-led label visibility, and gift retail placement explained.',

  h1: 'Candle Display Packaging',

  intro:
    'Candles combine two awkward properties for packaging: they are heavy for their size, and they are bought on information printed around a curved glass surface. A display has to carry the first without hiding the second.',

  sections: [
    {
      heading: 'Weight first',
      body: [
        'A filled glass jar is dense relative to its footprint. A display holding a dozen concentrates more load on its base than almost any other retail format of the same size.',
        'The failure is gradual rather than sudden — the base holds when filled and bows over the following week as board creeps under sustained compression. By the time it is noticed the display is already in a store looking neglected.',
      ],
      link: {
        text: 'Structures specified against that load are covered on the',
        href: '/candle-display-boxes/',
        anchor: 'candle display boxes page',
      },
    },
    {
      heading: 'Scent names sell, and they live on the label',
      body: [
        'Candle purchases are driven by scent and brand, both printed on a wrap label around the vessel. A display holding jars too deeply, or with walls too high, hides exactly the information the purchase depends on.',
        'Keep the label band clear of the display wall with a cut-down or angled front, and use a stepped riser where the assortment is more than one row deep so back rows stay readable.',
      ],
    },
    {
      heading: 'Glass against glass',
      body: [
        'Vessels chip when they touch, and a chipped jar is unsellable. Movement happens in transit and every time a shopper replaces a jar.',
        'Cavity inserts or partitions give each vessel its own space. In this category that is a protection requirement rather than a merchandising refinement — it is the difference between delivering twelve saleable units and eleven.',
      ],
    },
    {
      heading: 'Shoppers open lids',
      body: [
        'Candles are commonly displayed with the vessel lid on and shoppers expected to open it to smell the product. Lids get removed and replaced repeatedly, often carelessly.',
        'The display needs clearance for a hand to do that without lifting the jar out. Cavities sized tightly to the vessel body without that clearance make a display awkward to shop, which shows up as lower sales rather than as a complaint.',
      ],
    },
    {
      heading: 'Materials and the premium look',
      body: [
        'Lightweight tins can sit in folding boxboard. Glass jars in any quantity need E-flute corrugated at minimum, moving up with jar count and vessel size.',
        'Litho-lamination keeps carton-grade print on that corrugated structure, which is usually what stops a candle display looking cheap while still holding the weight.',
      ],
    },
    {
      heading: 'Where the sustainable choice is also the premium one',
      body: [
        'Candle buyers respond to natural, uncoated materials. Kraft board with a restrained one- or two-color print reads as considered rather than economical in this category — one of the few where the recyclable option and the premium-feeling option point the same way.',
        'A film laminate would take the board out of the paper stream; an aqueous coating or varnish protects the surface and keeps it recyclable.',
      ],
      link: {
        text: 'Coating and recyclability combinations are listed under',
        href: '/sustainability/',
        anchor: 'sustainable packaging options',
      },
    },
    {
      heading: 'Gift retail and seasonality',
      body: [
        'A large share of candle volume is gifting and seasonal, which means artwork changes while the structure stays constant.',
        'Tool the structure once and change the printed artwork or a sleeve between seasons. That turns each cycle into a print job rather than a development job.',
      ],
      link: {
        text: 'Gift-led formats are covered on the',
        href: '/display-gift-boxes/',
        anchor: 'display gift boxes page',
      },
    },
  ],

  faqs: [
    { question: 'Why do candle displays sag at the base?', answer: 'Because a filled glass jar is dense relative to its footprint and paperboard creeps under sustained load. The base holds on day one and bows over the following week — which is why a brief bench test does not predict how it behaves in a store.' },
    { question: 'What weight figure do you need from me?', answer: 'The weight of a filled vessel multiplied by the assortment you want the display to hold. Empty jar weight is the figure most often supplied and it is not the one that determines the board specification.' },
    { question: 'Can I use plain cardboard for a candle display?', answer: 'Only for lightweight tins or very small assortments. Glass jars in any quantity need E-flute corrugated at minimum, moving to B-flute or double wall as jar count and vessel size increase.' },
    { question: 'How do I stop jars chipping against each other?', answer: 'Cavity inserts or partitions so each vessel has its own space. Glass chips on contact in transit and whenever a shopper replaces a jar. Here the insert is a protection requirement, not a merchandising extra.' },
    { question: 'How high should the display walls be?', answer: 'Low enough that the wrap label stays visible, because scent name and brand drive the purchase and both live on that label. Use a cut-down or angled front, and a stepped riser for rows behind the first.' },
    { question: 'Does the display need clearance for lid removal?', answer: 'Yes, if shoppers are expected to open lids to smell the product — which is usual. Cavities sized tightly to the vessel body without hand clearance make the display awkward to shop, and that shows up as lower sales rather than a complaint.' },
    { question: 'Can a candle display still look premium in corrugated?', answer: 'Yes, through litho-lamination — offset-printed sheet laminated onto the corrugated board. It gives carton-grade print on a structure that carries the weight, and it is usually what separates a premium candle display from a cheap one.' },
    { question: 'Is kraft board a good choice for candles?', answer: 'Often, yes. Candle buyers respond to natural uncoated materials, and kraft with restrained print reads as considered rather than cheap. It is one of the few categories where the sustainable choice and the premium choice align.' },
    { question: 'How should seasonal candle ranges be handled?', answer: 'Tool the structure once and change only the printed artwork or a sleeve between seasons. Most of the cost and lead time on a first order is development, so reusing the structure turns each cycle into a print job.' },
  ],

  relatedProducts: ['candle-display-boxes', 'display-gift-boxes', 'soap-display-boxes', 'corrugated-display-boxes'],

  relatedPages: [
    { label: 'Soap packaging', href: '/soap-packaging/' },
    { label: 'How product weight affects display box material', href: '/blog/how-product-weight-affects-display-box-material/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Sustainability options', href: '/sustainability/' },
  ],

  cta: {
    heading: 'Send a filled jar',
    body: 'Weight per unit and the assortment size are what set the board. We will specify against the real load rather than the category.',
  },

  updated: '2026-07-19',
};

export default content;
