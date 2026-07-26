# Dev Profile

Personal developer portfolio built with SvelteKit and deployed to Cloudflare Workers.

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

## Preview (Cloudflare Worker locally)

```sh
cp .dev.vars.example .dev.vars
# Add GITHUB_TOKEN to .dev.vars
npm run preview
```

## Deploy to Cloudflare Workers

Set the runtime secret (not a build-time variable):

```sh
wrangler secret put GITHUB_TOKEN
```

Or in the Cloudflare dashboard: **Workers & Pages → dev-profile → Settings → Variables and Secrets → Add → Secret**.

Then deploy:

```sh
npm run deploy
```

**Important:** Build-time environment variables do not populate `platform.env` at runtime. `GITHUB_TOKEN` must be an encrypted Worker secret.
