// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabrielwork4-hub.github.io',
  base: process.env.NODE_ENV === 'production' ? '/volt-city' : undefined,
});
