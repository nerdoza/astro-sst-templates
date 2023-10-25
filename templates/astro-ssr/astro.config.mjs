import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import aws from 'astro-sst/lambda'
import mdx from '@astrojs/mdx'

const site = import.meta.env.DEV
  ? 'http://localhost:3000'
  : import.meta.env.VITE_SITE_URL

const crawlerPolicy = [{ userAgent: '*', disallow: ['/'] }]

export default defineConfig({
  site,
  integrations: [
    mdx(),
    sitemap(),
    prefetch(),
    robotsTxt({ policy: crawlerPolicy })
  ],
  output: 'server',
  redirects: {
    '/old-blog/': '/blog',
    '/old-blog/[...slug]': '/blog/[...slug]'
  },
  adapter: aws({
    responseMode: 'buffer',
    serverRoutes: ['/register', '/methods.json']
  })
})
