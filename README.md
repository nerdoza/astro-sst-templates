# Astro + SST Templates Mono-Repo

This repository contains templates for various Astro sites utilizing SST for deployment.

## Templates

- [Astro in SSR Mode](./apps/astro-ssr/) - Primarily server-side rendered Astro site deployed with SST.
- [Astro in Hybrid Mode](./apps/astro-hybrid/) - Primarily statically generated Astro site deployed with SST.

## Dev

To run all templates in parallel:

```
npm run dev
```

To run a specific template:

```
npm run dev:ssr
npm run dev:hybrid
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
```

To force a rebuild of a template (useful when dependencies change):

```
npm run build -- --force
npm run build:ssr -- --force
npm run build:hybrid -- --force
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
```
