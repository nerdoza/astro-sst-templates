# Astro + SST Templates Mono-Repo

This repository contains templates for various Astro sites utilizing SST for deployment.

## Templates

- [Astro in SSR Mode](./templates/astro-ssr/) - Primarily server-side rendered Astro site deployed with SST.
- [Astro in Hybrid Mode](./templates/astro-hybrid/) - Primarily statically generated Astro site deployed with SST.
- [Astro in Streamed SSR Mode](./templates/astro-streamed/) - Primarily streamed server-side rendered Astro site deployed with SST.
- [Astro in Static Mode](./templates/astro-static/) - Completely statically generated Astro site deployed with SST.
- [Astro in SSR Edge Mode](./templates/astro-edge/) - Primarily Lamda@Edge server-side rendered Astro site deployed with SST.
- [Astro in SSR Mode with Assets](./templates/astro-assets/) - Primarily server-side rendered Astro site deployed with SST using dynamic asset rendering.
- [Astro Starlight](./templates/astro-starlight/) - Primarily server-side rendered Astro site deployed with SST using Starlight integration.

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
npm run dev:starlight
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
npm run build:starlight
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
npm run build:starlight -- --force
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
npm run deploy:starlight
```

## Remove

To remove all templates in parallel:

```
npm run remove
```

To remove a specific template:

```
npm run remove:ssr
npm run remove:hybrid
npm run remove:streamed
npm run remove:static
npm run remove:edge
npm run remove:assets
npm run remove:starlight
```
