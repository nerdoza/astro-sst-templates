# Astro + SST Templates Mono-Repo

This repository contains templates for various Astro sites utilizing SST for deployment.

## Templates

- [Astro in SSR Mode](./templates/astro-ssr/) - Primarily server-side rendered Astro site deployed with SST.
- [Astro in Hybrid Mode](./templates/astro-hybrid/) - Primarily statically generated Astro site deployed with SST.
- [Astro in Streamed SSR Mode](./templates/astro-streamed/) - Primarily streamed server-side rendered Astro site deployed with SST.
- [Astro in Static Mode](./templates/astro-static/) - Completely statically generated Astro site deployed with SST.

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
```

To force a rebuild of a template (useful when dependencies change):

```
npm run build -- --force
npm run build:ssr -- --force
npm run build:hybrid -- --force
npm run build:streamed -- --force
npm run build:static -- --force
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
```
