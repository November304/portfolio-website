// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site:  'https://november304.github.io',
  base: '/portfolio-website/',
  output: "static",
  integrations: [mdx()]
});