// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL?.replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  // Configure this value in Cloudflare with the canonical https://www domain.
  site,
  trailingSlash: 'always',
});
