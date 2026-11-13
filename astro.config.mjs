import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.pokepricerapp.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
