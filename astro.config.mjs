// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === "development";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  base: isDev ? "/" : "/cuernavaca_landing/",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});