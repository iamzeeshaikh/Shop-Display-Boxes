// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://shopdisplayboxes.com',
  trailingSlash: 'always',
  // Static by default: every page is prerendered. Only routes that opt out
  // with `export const prerender = false` are server-rendered — currently just
  // the form endpoint, which needs server-side validation.
  output: 'static',

  // Deploying to Vercel. Static pages are served from the CDN; only the form
  // endpoint (prerender = false) runs as a function.
  //
  // Security headers and redirects live in vercel.json at the project root
  // rather than being emitted into the build output — Vercel reads that file
  // before the build runs, so it must be committed. `npm run build` regenerates
  // it and `npm run qa:headers` fails if the committed copy has gone stale.
  adapter: vercel(),

  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  // Source maps are intentionally off in production builds.
  vite: {
    build: {
      sourcemap: false,
    },
  },

  image: {
    // Only local assets are processed; no remote image hosts are permitted.
    domains: [],
    remotePatterns: [],
  },

  // Sitemaps are hand-rolled in src/pages/sitemap.xml.ts and
  // src/pages/sitemaps/[name].xml.ts. @astrojs/sitemap was removed because it
  // emits sitemap-index.xml rather than /sitemap.xml, and stamps every lastmod
  // with build time instead of when the content actually changed.
  integrations: [],
});
