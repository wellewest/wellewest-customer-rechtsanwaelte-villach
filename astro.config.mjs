import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://rechtsanwaelte-villach.wellewest.at',
  integrations: [
    sitemap({
      // Demo: keine Sitemap für Suchmaschinen
      filter: () => false,
    }),
  ],
  build: { inlineStylesheets: 'auto' },
})
