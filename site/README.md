# Shop Display Boxes

Astro site for **shopdisplayboxes.com** — custom printed display boxes and retail
display packaging.

---

## Business facts

All required facts are confirmed and live. They are held in `src/data/business.ts`;
change them there and every page and schema block updates on the next build.

| Fact | Value |
| --- | --- |
| Legal / trading name | Shop Display Boxes |
| Phone | (503) 358-0443 |
| Email | info@shopdisplayboxes.com |
| Address | 1639 70th St, Brooklyn, NY 11204, USA |
| Hours | 24/7 (contact availability) |
| Minimum order | 100 units |
| Production time | 5–7 business days from proof approval |
| Returns | Not returnable for change of mind; defects reportable within 7 days |
| Shipping | Included in price, all 50 states |
| Samples | Charged, quoted per job |
| Starting price | $0.30/piece for qualifying large-volume orders |

Optional and still unset: `supportEmail`, `legalEntityRegistration`, `socialProfiles`.

**Two things are deliberately never stated anywhere on the site:**

1. **Transit time.** Free shipping is a price commitment, not a speed one. The site
   states production time and says plainly that delivery on top is not guaranteed.
2. **Any review or rating.** `aggregateRating` is typed `never` in
   `src/lib/schema.ts`, so a fabricated rating is a compile error.

Schema emitted is `Organization`, not `LocalBusiness` — the Brooklyn address is a
registered address, not a collection point, and the copy says so. If it becomes a
staffed walk-in location, upgrade it.

The terms and privacy pages are a commercial framework, not lawyer-drafted text.
Worth a qualified review before you rely on them in a dispute.

---

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # production build + asset prune + security headers
npm run preview    # preview the built site
npm run images     # re-import source photography (after adding images)

npm run qa         # all gates: content, seo, links, a11y
npm run qa:content # every product has content; no slug collisions; refs resolve
npm run qa:seo     # duplicate titles/descriptions/H1s, canonicals, alt text, JSON-LD
npm run qa:links   # broken links, orphan pages, links through redirects
npm run qa:a11y    # structure, labels, images, and CSP hash integrity
```

`npm run qa` exits non-zero on any error, so it can gate a deploy.

---

## What is where

```
src/
  data/           typed content models and registries
    business.ts       ← unverified facts live here (launch blocker)
    products.ts       product registry + keyword/intent map
    locations.ts      states/cities + which are published, and why
    redirects.ts      central redirect map
  content/        the actual writing
    products/     25 product pages
    pages/        commercial, policy, industries/, guides/
    blog/         20 articles
  components/     page bodies and UI
  lib/            urls, seo, schema, sitemap, form validation & delivery
  pages/          routes ([slug].astro resolves all root-level pages)
scripts/          image import, asset prune, header generation, QA
```

**Source photography** lives outside this directory in `../Images/` and is the
archive of record. It is never modified — `npm run images` copies into
`src/assets/products/` with slug-based filenames.

---

## Editing content

Almost everything is a typed data file, so a mistake is a build error rather than
a broken page.

- **A product** → `src/content/products/<slug>.ts`. Needs 10+ FAQs, a spec table,
  and alt text per gallery image. Register the slug in `src/data/products.ts`.
- **A commercial / industry / guide page** → `src/content/pages/…`. The `kind`
  field selects the layout.
- **An article** → `src/content/blog/<slug>.ts`. Table of contents and reading
  time derive from the sections, so they cannot drift from the page.
- **A location** → `src/data/locations.ts` plus 8+ FAQs in `location-faqs.ts`,
  then add the slug to `PUBLISHED_STATE_SLUGS` / `PUBLISHED_CITY_SLUGS`.

Meta titles target 50–60 characters and descriptions 120–130. `qa:seo` reports
anything outside that as advisory. For templated metadata use `pickInRange()`
from `src/lib/seo.ts` rather than hand-counting.

---

## Connecting the forms

Forms post to `/api/quote/`, which is server-rendered (`export const prerender = false`).
Everything else on the site is static.

**Delivery is not configured.** With `FORM_ADAPTER` unset the endpoint validates
the submission fully and logs it to the server log without sending anything —
deliberately, so enquiries are not silently swallowed while the form appears to work.

To connect it:

```bash
cp .env.example .env
# set FORM_ADAPTER to resend | sendgrid | webhook
# set FORM_TO_EMAIL, FORM_FROM_EMAIL, and the matching API key
```

Adapters live in `src/lib/form-delivery.ts`. The SMTP adapter is stubbed —
install `nodemailer` and wire it there if you need SMTP.

### What the endpoint enforces

Client-side validation is a usability convenience only. `src/lib/form-validation.ts`
is the security boundary and revalidates everything independently:

- **CSRF** — Astro rejects cross-origin POSTs (verified: returns 403)
- **Honeypot** — hidden `companyUrl` field; a filled value returns a *success*
  response so bots learn nothing, and delivers nothing
- **Timing** — submissions completed in under 2.5s, or with a stale timestamp,
  are rejected
- **Rate limiting** — 5 per minute per client. **In-memory and per-instance:**
  it does not survive a restart or coordinate across instances. Put a
  platform-level limit in front of it in production.
- **Header injection** — CR/LF in any field bound for an email header is rejected
- **Uploads** — validated by extension, size, *and* magic number, so a renamed
  executable is caught. **Store uploads outside the web root** — SVG is accepted
  because designers send it, and SVG can carry script.
- **Error messages** — generic to the client, detailed to the server log, so
  errors cannot be used as a probing oracle

---

## Deployment

The build produces:

```
dist/client/     static HTML, assets, sitemaps, robots.txt
dist/server/     the form endpoint
dist/_headers    Netlify / Cloudflare Pages
dist/_redirects  Netlify / Cloudflare Pages
dist/vercel.json Vercel headers + redirects
```

### Vercel

Configured with `@astrojs/vercel`. Static pages are served from the CDN; only
`/api/quote/` runs as a function.

**Import the repo, then set Root Directory to `site`** — the repository root
holds `Images/` alongside the site, so Vercel needs pointing at the subdirectory.
Framework preset and build command are detected automatically.

**Set these Environment Variables in the Vercel dashboard** (never in a committed
`.env` — the repository is public):

| Variable | Value |
| --- | --- |
| `FORM_ADAPTER` | `resend` (or `sendgrid` / `webhook`) |
| `FORM_TO_EMAIL` | where enquiries should land |
| `FORM_FROM_EMAIL` | a verified sender on your domain |
| `RESEND_API_KEY` | your key |

Without these the endpoint validates submissions and logs them, but sends
nothing. That is intentional — see "Connecting the forms" above.

**Domains:** add `shopdisplayboxes.com` as primary and `www.shopdisplayboxes.com`
redirecting to it. `vercel.json` also carries a www → apex redirect as a backstop.

#### vercel.json is committed on purpose

Vercel reads `vercel.json` *before* running the build, so the CSP hashes inside
it necessarily come from a previous build. **After changing any component that
contains an inline `<script>` or `<style>`, run `npm run build` and commit the
regenerated `vercel.json`.**

`npm run qa:headers` fails the check if the committed file no longer covers the
inline code in the current output — without it, a stale CSP would silently block
your own scripts in production. It runs as part of `npm run qa`.

### What Vercel handles for you

- **HTTP → HTTPS** — automatic
- **www → non-www** — domain settings plus the `vercel.json` redirect
- **Trailing slashes** — `"trailingSlash": true`, matching Astro's config
- **404s return 404** — the custom 404 page is served with the correct status

### Security headers

`scripts/build-headers.mjs` generates them from the built output on every build.

The CSP is **hash-based with no `unsafe-inline`**. The site emits only 3 distinct
inline scripts and 6 inline styles, so each is hashed and allowed individually.
Hashes are computed from the real output, so they cannot drift — and `qa:a11y`
fails the build if any inline script is not covered, because a missed hash means
a broken page in production.

Also set: HSTS, `nosniff`, `frame-ancestors 'none'`, Referrer-Policy,
Permissions-Policy, COOP, and immutable caching for hashed assets.

**HSTS preload is deliberately not enabled.** Turn it on only once every subdomain
is confirmed to serve HTTPS — it is hard to reverse.

---

## Decisions worth knowing

**26 image folders → 25 product pages.** `cardboard-retail-display-boxes` was
consolidated into `/retail-display-boxes/` — it was the intersection of an existing
material page and an existing channel page with no distinct search intent. Images
merged, 301 in the redirect map, source folder untouched. Two pairs
(`flat-display-boxes`/`flat-tuck-display-boxes`,
`counter-display-boxes`/`cardboard-counter-display-units`) are kept but flagged
"monitored" in `products.ts` — consolidate if Search Console shows shared queries.

**40 location pages → 24.** Writing 320 location FAQs for a business with no local
presence would have produced the same question with a place name swapped. Instead
12 states and 12 cities are published, each with genuine sector context and 9 FAQs.
The other 16 stay in `locations.ts` under `HELD_BACK` with a reason each, ready to
promote if real local content appears.

**`@astrojs/sitemap` was removed.** It emits `sitemap-index.xml` rather than
`/sitemap.xml`, and stamps every `lastmod` with build time. Sitemaps are hand-rolled
in `src/pages/sitemap.xml.ts` with real per-content dates.

**No reviews or ratings anywhere.** `aggregateRating` is typed as `never` in
`src/lib/schema.ts`, so adding a fabricated rating is a compile error rather than
something a reviewer has to catch. When genuine reviews exist, widen that type and
render each review visibly on the same page as its schema.

**`import.meta.glob` makes Vite emit every matched source PNG** whether referenced
or not — 92 MB of dead weight. `scripts/prune-assets.mjs` runs after every build and
deletes only files it has positively verified nothing references.

**Astro's `<Image>` takes `format` (singular).** Passing `formats` is silently
ignored and no AVIF is produced. Use `<Picture>` where you need multiple formats.

---

## Known gaps

- No independent accessibility audit or assistive-technology testing has been done.
  `/accessibility/` says so, and `qa:a11y` is a static structural check only.
- Lighthouse has not been run against a deployed URL.
- `/case-studies/` and `/customer-reviews/` are honest empty states awaiting real
  content — the data structures are ready.
- The SMTP form adapter is a stub.
- Rate limiting is per-instance (see above).
