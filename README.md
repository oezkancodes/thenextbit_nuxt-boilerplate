# Nuxt 3 Boilerplate

<details>
  <summary>Table of contents</summary>
  
- [Nuxt 3 Boilerplate](#nuxt-3-boilerplate)
  - [Branches](#branches)
  - [Integrations](#integrations)
    - [ESLint & Prettier](#eslint--prettier)
    - [Tailwind CSS](#tailwind-css)
  - [Setup](#setup)
  - [Development Server](#development-server)
  - [Production](#production)

</details>

## Branches

This boilerplate comes with different branches with different integrations. Currently there are the following branches:

- [`master`: Nuxt 3 with ESLint, Prettier and Tailwind CSS](https://github.com/oezkancodes/thenextbit_nuxt-boilerplate/tree/storyblok)
- [`storyblok`: Nuxt 3 with Storyblok, ESLint, Prettier and Tailwind CSS](https://github.com/oezkancodes/thenextbit_nuxt-boilerplate/tree/storyblok)

## Integrations

### ESLint & Prettier

[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) are fully integrated in this boilerplate for linting, styling and automatically fixing problems. For ESLint to work with Nuxt (and Vite), the Vite plugin `vite-plugin-eslint` is installed. You can configure ESLint in [`./.eslintrc`](./.eslintrc) and Prettier in [`./.prettierrc`](./.prettierrc).

### Tailwind CSS

This boilerplate comes with the [Nuxt Tailwind](https://tailwindcss.nuxt.dev/) module `@nuxtjs/tailwindcss`. You can configure the module ooptions in [`./config/tailwindcss.config.ts`](./config/tailwindcss.config.ts). Also, the Prettier plugin `prettier-plugin-tailwindcss` is installed for automatic class sorting.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
