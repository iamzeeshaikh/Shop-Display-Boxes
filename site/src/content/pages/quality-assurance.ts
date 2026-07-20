import type { PageContent } from '../../data/page-content';

/**
 * NOTE ON HONESTY: no ISO or third-party certification, audit result, defect
 * rate, or inspection statistic appears here — none has been supplied. The page
 * describes the checks performed, which are inherent to the process.
 */
const content: PageContent = {
  slug: 'quality-assurance',
  kind: 'commercial',

  metaTitle: 'Quality Assurance | Checks at Every Production Stage',
  metaDescription:
    'How display packaging is checked: dieline against a real product, proof for color, and a loaded fit check before the run.',

  h1: 'Quality Assurance',

  intro:
    'Quality control on packaging is mostly about catching problems while they are still cheap. Each production stage is checked against the approved proof rather than against the stage before it, so a small drift does not compound down the line.',

  sections: [
    {
      heading: 'Checked against the proof, not the previous stage',
      body: [
        'If each stage is compared only to the one before it, a small deviation carries forward and accumulates. By the end of a run the output can be visibly different from what was approved without any single stage having failed.',
        'Checking every stage against the approved proof catches drift at the point it appears rather than after it has compounded.',
      ],
    },
    {
      heading: 'Dieline check',
      body: [
        'Before anything is printed, the dieline is verified against the actual product — a physical unit wherever an insert is involved. Internal dimensions are confirmed with the product as it really is, including cap, label, and any batch variation.',
        'This is also where assembly is assessed: whether the structure erects in one motion without tools, and whether a panel can be fitted the wrong way round.',
      ],
    },
    {
      heading: 'Print proof',
      body: [
        'A proof establishes what the printed result should look like. For anything where color matters commercially, a physical proof on the actual stock is worth the days it adds — screen color and printed color on laminated board are different things.',
        'Once approved, that proof becomes the reference every subsequent stage is measured against.',
      ],
      link: {
        text: 'Where proofing sits in the sequence is set out under',
        href: '/how-to-order/',
        anchor: 'how ordering works',
      },
    },
    {
      heading: 'In-production checks',
      body: [
        'Print registration, color against the approved proof, crease quality, die accuracy, and glue integrity are each checked during the run. On corrugated, crushing at the crease is checked specifically, since it weakens the structure without being obvious.',
        'Assembled units are checked for squareness. A display that is out of square looks wrong on a shelf even when every individual dimension is within tolerance.',
      ],
      points: [
        'Print registration and color against the approved proof',
        'Crease quality, and crush on corrugated',
        'Die accuracy and cut cleanliness',
        'Glue integrity on lock bottoms and side seams',
        'Squareness of the erected unit',
      ],
    },
    {
      heading: 'Loaded fit check',
      body: [
        'The most useful single test on a display is loading real units into an erected sample and leaving it standing. Bowing, leaning, and racking surface there rather than in a store.',
        'For a floor-standing unit this matters more than any bench measurement, because the failure mode is creep under sustained load — which a brief test does not reveal.',
      ],
    },
    {
      heading: 'What we do not claim',
      body: [
        'We are not publishing certification marks, audit results, or defect-rate statistics, because we do not have verified evidence to present. If your job requires documented inspection, certified stock, or a specific quality standard, raise it at quoting stage and we will confirm what can be evidenced for that job.',
        'The checks described above are inherent to producing packaging properly, not a certified programme we are asking you to take on trust.',
      ],
    },
  ],

  faqs: [
    { question: 'What is checked before printing starts?', answer: 'The dieline against the actual product — a physical unit wherever an insert is involved — confirming internal dimensions against the item as it really is, including cap, label, and batch variation. Assembly is assessed at the same point.' },
    { question: 'Why check every stage against the proof rather than the previous stage?', answer: 'Because comparing each stage only to the one before lets small deviations accumulate. By the end of a run the output can differ visibly from what was approved without any single stage having failed. Checking against the proof catches drift where it appears.' },
    { question: 'Do I need a physical proof?', answer: 'Where color matters commercially, yes. Screen color and printed color on laminated board differ, and a header card is where that difference is most visible. It adds days and costs far less than a reprint.' },
    { question: 'What is a loaded fit check?', answer: 'Real product loaded into an erected display, left standing. It is the most informative single test available, because bowing, leaning, and racking appear there rather than after the display has reached a store.' },
    { question: 'What happens if delivered stock does not match the proof?', answer: 'That is on us — production is checked against the approved proof precisely so it does not happen. If the approved proof itself was wrong, a reprint is a new job, which is the argument for treating proof approval seriously.' },
    { question: 'Do you hold quality certifications?', answer: 'We are not publishing certification marks we cannot evidence. If your job requires documented inspection, certified stock, or a specific standard, raise it at quoting stage and we will confirm what can be evidenced for that job.' },
    { question: 'Is crease crushing really a problem?', answer: 'On corrugated, yes. A crushed crease weakens the structure at exactly the point it needs to fold and hold, and it is not obvious on inspection unless you are looking for it — which is why it is checked specifically rather than incidentally.' },
    { question: 'How do you check a display will stay square?', answer: 'By erecting and loading it, then leaving it. Squareness under load over time is different from squareness measured on a bench, and a display out of square looks wrong on a shelf even when every individual dimension is within tolerance.' },
  ],

  relatedPages: [
    { label: 'How ordering works', href: '/how-to-order/' },
    { label: 'Box materials', href: '/box-materials/' },
    { label: 'Artwork guidelines', href: '/artwork-guidelines/' },
    { label: 'About us', href: '/about-us/' },
  ],

  cta: {
    heading: 'Have a specification that needs verifying?',
    body: 'Send it with your product and we will tell you what will and will not hold before quoting.',
  },

  updated: '2026-07-19',
};

export default content;
