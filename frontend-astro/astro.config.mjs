import { defineConfig } from 'astro/config';
import 'dotenv/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: 'production',
      apiVersion: '2021-10-21',
      useCdn: false,
    }),
  ],
  // output: 'hybrid',
  // output: 'server',
  // adapter: vercel(),
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr", "pt-br", "es"],
  //   fallback: {
  //     pt: "es",
  //     fr: "en"
  //   }
  // }
});
