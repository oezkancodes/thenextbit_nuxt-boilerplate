import eslint from 'vite-plugin-eslint';
import { tailwindCssConfig } from './config/tailwindcss.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [eslint()],
  },
  modules: [
    // https://tailwindcss.nuxt.dev/
    ['@nuxtjs/tailwindcss', tailwindCssConfig],
  ],
});
