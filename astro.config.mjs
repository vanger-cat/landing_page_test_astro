// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: "/landing_page_test_astro/", // replace with actual repo
  vite: {
    plugins: [tailwindcss()]
  }
});