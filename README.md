# Shop Display Boxes

Website for **shopdisplayboxes.com** — custom printed display boxes and retail
display packaging.

```
Images/    source product photography (146 PNGs) — the archive of record
site/      the Astro site
```

## Getting started

```bash
cd site
npm install
npm run images     # copies Images/ into src/assets/ — required before first build
npm run dev
```

`npm run images` must run before the first build. The generated
`site/src/assets/products/` directory is not committed, because it is a copy of
`Images/` and storing both would duplicate ~108 MB of photography.

## Build and checks

```bash
npm run build      # production build + asset prune + security headers
npm run qa         # content, SEO, links, and accessibility gates
```

`npm run qa` exits non-zero on any failure, so it can gate a deploy.

Full documentation — business facts, form setup, deployment, and the decisions
behind the build — is in [`site/README.md`](site/README.md).
