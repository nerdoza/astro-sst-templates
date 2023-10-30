import { defineMiddleware } from 'astro/middleware'

const stringIncludesAny = (str: string, arr: string[]) =>
  arr.some((v) => str.includes(v))

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next()
  response.headers.set('Cache-Control', 'private, max-age=0, no-cache')
  const responseContentType = response.headers.get('content-type') ?? ''

  if (
    stringIncludesAny(responseContentType, ['text/html', 'text/css']) &&
    !stringIncludesAny(responseContentType, ['charset'])
  ) {
    response.headers.set(
      'content-type',
      `${responseContentType}; charset=UTF-8`
    )
  }

  return response
})
