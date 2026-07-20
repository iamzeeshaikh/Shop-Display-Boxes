// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://shopdisplayboxes.com',
  trailingSlash: 'always',
  // Static by default: every page is prerendered. Only routes that opt out
  // with `export const prerender = false` are server-rendered — currently just
  // the form endpoint, which needs server-side validation.
  output: 'static',

  // The Node adapter runs anywhere Node runs and keeps deployment portable.
  // Swap for @astrojs/vercel or @astrojs/netlify if deploying to those — the
  // form endpoint is adapter-agnostic. See README.
  adapter: node({ mode: 'standalone' }),

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
