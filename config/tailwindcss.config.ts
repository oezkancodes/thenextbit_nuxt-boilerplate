import { Config } from 'tailwindcss';

type ModuleOptions = {
  configPath?: string;
  cssPath?: string;
  config?: Config;
  viewer?: boolean;
  exposeConfig?: boolean;
  injectPosition?: number;
  disableHmrHotfix?: boolean;
};

/** https://tailwindcss.nuxt.dev/getting-started/options  */
export const tailwindCssConfig: ModuleOptions = {};
