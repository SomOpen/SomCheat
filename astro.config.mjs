// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import {visualizer} from 'rollup-plugin-visualizer';


import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    }},
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss(), visualizer({ open: true, gzipSize: true, brotliSize: true,})]
  },

  server: {
    host: true
  },

  integrations: [react(), mdx()]
});