import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'ynv31bfd',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
  })]
});
