# Astro + SST Templates Mono-Repo

This repository contains templates for various Astro sites utilizing SST for deployment.

## Templates

- [Astro in SSR Mode](./templates/astro-ssr/) - Primarily server-side rendered Astro site deployed with SST.
- [Astro in Hybrid Mode](./templates/astro-hybrid/) - Primarily statically generated Astro site deployed with SST.
- [Astro in Streamed SSR Mode](./templates/astro-streamed/) - Primarily streamed server-side rendered Astro site deployed with SST.
- [Astro in Static Mode](./templates/astro-static/) - Completely statically generated Astro site deployed with SST.
- [Astro in SSR Edge Mode](./templates/astro-edge/) - Primarily Lamda@Edge server-side rendered Astro site deployed with SST.
- [Astro in SSR Mode with Image Processing](./templates/astro-assets/) - Primarily server-side rendered Astro site using Sharp for image processing and deployed with SST.
- [Astro in SSR Mode with Image Processing](./templates/astro-qwik/) - Primarily server-side rendered Astro site with [Qwik integration](https://github.com/QwikDev/astro) and deployed with SST.

## Dev

To run all templates in parallel:

```
npm run dev
```

To run a specific template:

```
npm run dev:ssr
npm run dev:hybrid
npm run dev:streamed
npm run dev:static
npm run dev:edge
npm run dev:assets
npm run dev:qwik
```

## Build

To build all templates in parallel:

```
npm run build
```

To build a specific template:

```
npm run build:ssr
npm run build:hybrid
npm run build:streamed
npm run build:static
npm run build:edge
npm run build:assets
npm run build:qwik
```

To force a rebuild of a template (useful when dependencies change):

```
npm run build -- --force
npm run build:ssr -- --force
npm run build:hybrid -- --force
npm run build:streamed -- --force
npm run build:static -- --force
npm run build:edge -- --force
npm run build:assets -- --force
npm run build:qwik -- --force
```

## Deploy

To deploy all templates in parallel:

```
npm run deploy
```

To deploy a specific template:

```
npm run deploy:ssr
npm run deploy:hybrid
npm run deploy:streamed
npm run deploy:static
npm run deploy:edge
npm run deploy:assets
npm run deploy:qwik
```
