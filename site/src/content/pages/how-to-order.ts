import type { PageContent } from '../../data/page-content';

const content: PageContent = {
  slug: 'how-to-order',
  kind: 'commercial',

  metaTitle: 'How to Order Custom Display Boxes | Step-by-Step Guide',
  metaDescription:
    'The six stages of a custom display box order, which two approval points carry the risk, and what to check before each one.',

  h1: 'How Ordering Works',

  intro:
    'Six stages, of which two carry almost all the risk. Changes before those two approval points cost nothing; changes after them are expensive. Knowing which is which is most of ordering packaging well.',

  sections: [
    {
      heading: 'One — specification and quote',
      body: [
        'Send the product, a quantity, and where the display will sit. If a retailer has given you a footprint or a shelf-ready specification, send that too — it is a hard constraint and it shapes everything downstream.',
        'You get back a price against a specification, with the variables that materially move it identified. Nothing is committed at this stage.',
      ],
    },
    {
      heading: 'Two — dieline (first approval point)',
      body: [
        'We draw a dieline around your product and supply it as a layered vector file with cut, crease, and bleed separated. For anything with an insert, this comes from a physical sample rather than from dimensions.',
        'Approving the dieline fixes the structure. This is the point to check that the internal dimensions genuinely fit your product with its cap, its label, and any tolerance the item varies by between batches.',
      ],
      points: [
        'Check internal, not external, dimensions',
        'Check the fit against a real unit, including cap and label',
        'Check that live copy is clear of every crease',
        'Check assembly — can a store associate erect it in one motion?',
      ],
    },
    {
      heading: 'Three — artwork',
      body: [
        'Place artwork onto the supplied dieline rather than designing to a rectangle and fitting it afterward. Designing before the dieline exists is the most common origin of a reprint.',
        'Supply print-ready vector with fonts outlined, placed images at 300 DPI at final size, and a 3 mm bleed.',
      ],
      link: {
        text: 'File requirements are listed in full in the',
        href: '/artwork-guidelines/',
        anchor: 'artwork guidelines',
      },
    },
    {
      heading: 'Four — proof (second approval point)',
      body: [
        'A proof confirms what will be printed. For anything where color matters commercially, a physical proof is worth the days it adds — color on a screen and color on laminated board are different things, and a header card is exactly where that difference shows.',
        'Approving the proof fixes the color and the content. After this point, changes mean a new job rather than an adjustment.',
      ],
    },
    {
      heading: 'Five — production',
      body: [
        'Print, coat or laminate, die-cut, glue, and fold. Each stage is checked against the approved proof rather than against the previous stage, so a drift does not compound down the line.',
        'Where the job has an insert, a fit check with real units loaded into the erected display happens before the run completes.',
      ],
      link: {
        text: 'What gets checked at each stage is set out under',
        href: '/quality-assurance/',
        anchor: 'quality assurance',
      },
    },
    {
      heading: 'Six — delivery',
      body: [
        'Most displays ship flat, which cuts freight volume substantially and pairs with a lock-bottom structure that erects without tape or tools. Pre-assembled and pre-loaded shipping are both possible where the structure and destination justify the cost.',
        'We ship to business addresses across all fifty states.',
      ],
      link: {
        text: 'Coverage and what affects transit is covered under',
        href: '/shipping-information/',
        anchor: 'shipping information',
      },
    },
    {
      heading: 'Reordering',
      body: [
        'Once a dieline and a proof are approved and on file, a reorder is a print job rather than a development job. Most of the cost and elapsed time on a first order sits in the development, which is why a second order is a different proposition.',
        'If only the artwork changes between runs — a seasonal design, a new variant — the structure tooling carries over unchanged.',
      ],
    },
  ],

  faqs: [
    { question: 'Which stages actually carry risk?', answer: 'The two approval points: dieline and proof. Dieline approval fixes the structure, proof approval fixes the color and content. Changes before each are free; changes after are a new job. Everything else is process.' },
    { question: 'What should I check on a dieline?', answer: 'That internal dimensions fit your real product including cap, label, and batch variation. That live copy clears every crease. And that the display can be erected in one motion by someone with no instructions and thirty seconds.' },
    { question: 'Do I need a physical proof?', answer: 'For anything where color matters commercially, yes. Screen color and printed color on laminated board differ, and a header card is where that shows most. It adds days, and it is cheaper than a reprint.' },
    { question: 'Can I supply my own dieline?', answer: 'Yes. Send it as a layered vector file and we will check it against the board and structure chosen. The usual issue we find is a dieline drawn for a different board caliper, since thickness changes the allowances.' },
    { question: 'How long does the whole process take?', answer: 'Standard production is 5–7 business days after proof approval. That clock starts at approval, not at enquiry — the dieline and proof stages come first, and how fast they go depends partly on how quickly approvals come back from your side.' },
    { question: 'What if the delivered product does not match the proof?', answer: 'That is on us. Production is checked against the approved proof at each stage precisely so that does not happen. If the approved proof itself was wrong, a reprint is a new job — which is the argument for taking proof approval seriously.' },
    { question: 'How do reorders work?', answer: 'A reorder against an approved dieline and proof is a print job. The development cost and time that dominated the first order do not repeat, so reorders are faster and cheaper.' },
  ],

  relatedPages: [
    { label: 'Request a quote', href: '/request-a-quote/' },
    { label: 'Get a free dieline', href: '/get-a-free-dieline/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'What display boxes cost', href: '/how-much-do-custom-display-boxes-cost/' },
  ],

  cta: {
    heading: 'Start with stage one',
    body: 'Send the product and a quantity. The dieline follows before you commit to anything.',
  },

  updated: '2026-07-19',
};

export default content;
