import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://artassenx.fr',
  integrations: [
    tailwind(),
    react(),
    keystatic(),
  ],
});
