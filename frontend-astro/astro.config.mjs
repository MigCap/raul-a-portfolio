import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity(
      {
        projectId: 'ynv31bfd',
        dataset: 'production',
        apiVersion: '2021-10-21',
        useCdn: false,
      }
    )
  ],
  // output: 'hybrid'
});
