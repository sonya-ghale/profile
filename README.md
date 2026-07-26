# Dev Profile

Personal developer portfolio built with SvelteKit and deployed to Cloudflare Pages.

## Setup

```sh
npm install
cp .env.example .env
# Add your GitHub token to .env for local development
```

## Developing

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Preview (Cloudflare locally)

```sh
cp .dev.vars.example .dev.vars
# Add GITHUB_TOKEN to .dev.vars
npm run preview
```

## Deploy to Cloudflare Pages

1. Connect this repository in the Cloudflare dashboard
2. Build command: `npm run build`
3. Build output directory: `.svelte-kit/cloudflare`
4. Add `GITHUB_TOKEN` as an **encrypted** environment variable under **Variables and Secrets**

Or deploy from your machine:

```sh
npm run deploy
```
