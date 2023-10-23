import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import rss from '@astrojs/rss'

export const prerender = false

export async function get(context: APIContext) {
  const posts = await getCollection('blog')
  return await rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site?.toString() ?? '',
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`
    }))
  })
}
