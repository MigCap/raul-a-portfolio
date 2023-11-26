/** @type {import('tailwindcss').Config} */

// const { nextui } = require("@nextui-org/react");

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (prefers-color-scheme: dark) { ... }
      }
    },
  },
  colors: {
    "primary-color": "var(--primary-color)",
    "almost-white": "hsl(0, 0%, 98%)",
    "medium-gray": "hsl(0, 0%, 41%)",
    "almost-black": "hsl(0, 0%, 8%)",
  },
  darkMode: 'class',
  plugins: [],
  // plugins: [nextui()],
}

