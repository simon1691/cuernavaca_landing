// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
   base: "/cuernavaca_landing/",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});