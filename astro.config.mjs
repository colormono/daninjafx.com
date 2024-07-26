import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://daninjafx.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // @see: https://ui.shadcn.com/docs/installation/astro
      applyBaseStyles: false,
    }),
  ],
  image: {
    // service: imageService(),
  },
  redirects: {
    '/old': '/new',
  },
});
