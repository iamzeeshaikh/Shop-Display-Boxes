import data from '../data/page-faqs.json';

/**
 * Extra FAQs keyed by route (trailing slash) so every indexable page carries at
 * least ten. FaqAccordion renders answers as text and faqPage() uses the same
 * strings, so authored link markup is reduced to its anchor text here.
 * The cookie and accessibility statements are policy pages and get none.
 */
type Faq = { question: string; answer: string };
type Entry = { h2: string; faqs: { q: string; a: string }[] };
const DATA = data as Record<string, Entry>;
const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
const plain = (s: string) => s.replace(/<[^>]+>/g, '');

export const extraFaqs = (route: string): Faq[] =>
  (DATA[norm(route)]?.faqs ?? []).map((f) => ({ question: f.q, answer: plain(f.a) }));
export const extraHeading = (route: string) => DATA[norm(route)]?.h2 ?? 'Frequently asked questions';
export function withExtras<T extends Faq>(route: string, faqs: T[] = []): T[] {
  const seen = new Set(faqs.map((f) => f.question.trim().toLowerCase()));
  return [...faqs, ...(extraFaqs(route).filter((f) => !seen.has(f.question.trim().toLowerCase())) as T[])];
}
