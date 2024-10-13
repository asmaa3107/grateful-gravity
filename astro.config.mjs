import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: './',
  trailingSlash: 'ignore',
  build: {
    // distDir: 'dist',
    assets: 'dist',
    format: 'file',  // This ensures separate folders for each page
    outDir: 'dist',       // Output directory
    inlineStylesheets: 'never',
    minify: false,

  },
});


