import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no certification, audit, carbon figure, or environmental
 * claim about this business appears here, because none has been supplied.
 * The page explains material properties, which are verifiable, and states
 * plainly where a claim would require certification we cannot evidence.
 */
const content: PageContent = {
  slug: 'sustainability',
  kind: 'commercial',

  metaTitle: 'Sustainable Display Packaging | Recyclable Options',
  metaDescription:
    'Recyclable and recycled-content display packaging, and the coating decision that determines whether board stays recyclable.',

  h1: 'Sustainable Packaging Options',

  intro:
    'Paper-based packaging starts with a genuine advantage: it is widely recycled. Most of what determines whether a specific display keeps that advantage comes down to what is applied on top of the board.',

  sections: [
    {
      heading: 'The coating decides it',
      body: [
        'Uncoated and aqueous-coated board goes into the paper recycling stream without difficulty. A plastic film laminate — gloss, matte, or soft-touch — bonds a plastic layer to the board and takes it out of kerbside paper recycling in most municipalities.',
        'This single decision affects recyclability more than the board grade, the recycled content, or anything else on the specification. If recyclability matters, it is the first thing to settle rather than the last.',
      ],
      points: [
        'Uncoated — recyclable, no surface protection',
        'Aqueous coating or varnish — recyclable, light protection',
        'Film lamination — best protection, leaves the paper stream',
      ],
    },
    {
      heading: 'Recycled content',
      body: [
        'Available across folding boxboard and corrugated. In most corrugated grades recycled content is standard rather than a premium option, so it is often already present without being specified.',
        'Recycled board has a warmer, less uniform surface with visible fiber variation. Whether that reads as a deliberate choice or as a compromise is a brand judgment — it suits natural and artisan positioning well and conventional luxury positioning less so.',
      ],
    },
    {
      heading: 'Recycled content and food contact',
      body: [
        'For direct food contact, recycled fiber needs more care, because contaminants from the recovered stream can migrate into food. The usual solution is a functional barrier layer between the recycled fibers and the product.',
        'For wrapped product — where the display is secondary packaging — recycled board raises none of these questions.',
      ],
      link: {
        text: 'Food-contact requirements are covered on the',
        href: '/food-display-boxes/',
        anchor: 'food display boxes page',
      },
    },
    {
      heading: 'Mixed materials',
      body: [
        'A pack that separates into one material stream is easier for a retailer to dispose of and more likely to actually be recycled. Plastic windows, film laminates, and adhesive labels of a different material each work against that.',
        'Where a retailer specification calls for single-stream disposal, paper-based windows and aqueous coatings keep the pack in one stream. This comes up most often in shelf-ready packaging, where disposal is one of the stated requirements.',
      ],
      link: {
        text: 'The disposal requirement in retailer specifications is covered on the',
        href: '/shelf-ready-display-boxes/',
        anchor: 'shelf-ready display boxes page',
      },
    },
    {
      heading: 'Using less material',
      body: [
        'The reduction that usually goes unexamined is size. A display sized generously around its product uses more board, ships in a larger carton, and takes more pallet space, all of which carry both cost and footprint.',
        'A dieline drawn tightly around the real product rather than around a rounded-up estimate is the most reliable material saving available, and it costs nothing.',
      ],
    },
    {
      heading: 'What we are not claiming',
      body: [
        'We are not publishing certification marks, audit results, carbon figures, or environmental claims about this business, because we do not have verified evidence to support them. Where you need certified stock or documented chain of custody, ask at quoting stage and we will confirm what can be evidenced for your specific job.',
        'Material properties described on this page are general to the materials, not claims about a particular supply chain.',
      ],
    },
  ],

  faqs: [
    { question: 'Is cardboard packaging recyclable?', answer: 'Uncoated and aqueous-coated board is, and paper-based packaging is among the most widely recycled materials. What takes it out of the stream is a plastic film laminate, which in most municipalities means the pack is no longer kerbside recyclable.' },
    { question: 'What is the single biggest decision for recyclability?', answer: 'The coating. It affects recyclability more than board grade or recycled content. If recyclability matters for your job, settle the coating first rather than adding it at the end as a finish decision.' },
    { question: 'Can I have both durability and recyclability?', answer: 'Partly. An aqueous coating or varnish gives real surface protection while keeping the board repulpable — but less scuff resistance than a film laminate. For a display that must survive months of heavy handling, that is a genuine trade-off rather than a free choice.' },
    { question: 'Does recycled board cost less?', answer: 'Usually somewhat, and in corrugated it is largely standard rather than a premium. The trade-off is surface consistency: recycled stock is warmer and less uniform, with visible fiber variation.' },
    { question: 'Can I use recycled board for food packaging?', answer: 'Freely for wrapped product. For direct contact it needs a functional barrier between the recycled fibers and the food, because contaminants from the recovered stream can otherwise migrate.' },
    { question: 'Are paper-based windows worth using?', answer: 'Where a specification requires a single material stream, yes — they keep the pack recyclable as paper. Clarity is lower than PET film, so ask for a sample if product visibility is the reason the window exists.' },
    { question: 'Do you have environmental certifications?', answer: 'We are not publishing certification marks we cannot evidence. If your job requires certified stock or documented chain of custody, raise it at quoting stage and we will confirm what can be evidenced for that specific job.' },
    { question: 'What is the easiest way to reduce material use?', answer: 'Size the box correctly. A display drawn generously around its product uses more board, ships in a larger carton, and takes more pallet space. A dieline drawn around the real product rather than a rounded-up estimate costs nothing and saves all three.' },
  ],

  relatedProducts: ['corrugated-display-boxes', 'cardboard-display-boxes', 'shelf-ready-display-boxes', 'display-trays'],

  relatedPages: [
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Finishes and add-ons', href: '/finishes-and-add-ons/' },
    { label: 'Sustainable materials for retail display packaging', href: '/blog/sustainable-materials-for-retail-display-packaging/' },
    { label: 'Quality assurance', href: '/quality-assurance/' },
  ],

  cta: {
    heading: 'Need a recyclable specification?',
    body: 'Tell us what the display has to withstand and we will find the most protective option that stays in the paper stream.',
  },

  updated: '2026-07-19',
};

export default content;
