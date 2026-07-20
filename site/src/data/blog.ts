/**
 * Blog content model.
 *
 * Articles are typed data rather than markdown so that the table of contents,
 * reading time, and Article schema are derived from the same source as the
 * rendered page — they cannot drift from what is actually on screen.
 *
 * Tags organize articles for readers and for related-article selection. They
 * deliberately do NOT generate indexable archive pages: a tag archive on a
 * twenty-article blog is a thin page competing with the articles themselves.
 */

export interface BlogSubsection {
  /** Rendered as an H3. */
  heading: string;
  body: string[];
  points?: string[];
}

export interface BlogSection {
  /** Rendered as an H2 and listed in the table of contents. */
  heading: string;
  body: string[];
  points?: string[];
  subsections?: BlogSubsection[];
  /** At most one contextual link per section, per the site linking rules. */
  link?: { text: string; href: string; anchor: string };
}

export type BlogTag =
  | 'Materials'
  | 'Printing'
  | 'Design'
  | 'Costs'
  | 'Ordering'
  | 'Sustainability'
  | 'Retail';

export interface BlogPost {
  slug: string;

  title: string;
  metaTitle: string;
  metaDescription: string;

  /** Shown on the index and used as the article standfirst. */
  excerpt: string;

  author: string;
  /** ISO dates. `published` drives ordering; `updated` drives sitemap lastmod. */
  published: string;
  updated: string;

  tags: BlogTag[];

  /**
   * Featured image, referenced from the product asset library so the blog uses
   * the same optimized derivatives rather than a second copy of the same files.
   */
  image: { productSlug: string; file: string; alt: string };

  sections: BlogSection[];

  /** Slugs of related articles. Chosen for relevance, not generated. */
  related: string[];

  /** Product or commercial pages this article should route readers toward. */
  furtherReading?: Array<{ label: string; href: string }>;
}

/** Slugifies a heading into a stable anchor id for the table of contents. */
export function headingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Reading time from the article's actual rendered words.
 * 220 words per minute is a common average for adult non-technical reading;
 * this is an estimate shown as a reader convenience, not a precise measure.
 */
export function readingTime(post: BlogPost): number {
  const words = [
    post.excerpt,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.body,
      ...(s.points ?? []),
      ...(s.subsections ?? []).flatMap((ss) => [ss.heading, ...ss.body, ...(ss.points ?? [])]),
    ]),
  ]
    .join(' ')
    .trim()
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / 220));
}

/** Table of contents entries derived from the section headings. */
export function tableOfContents(post: BlogPost) {
  return post.sections.map((s) => ({
    heading: s.heading,
    id: headingId(s.heading),
    children: (s.subsections ?? []).map((ss) => ({
      heading: ss.heading,
      id: headingId(ss.heading),
    })),
  }));
}
