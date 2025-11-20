// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === "development";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://simon1691.github.io/",
  base: isDev ? "/" : "",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});