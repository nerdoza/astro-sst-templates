import { sequence, defineMiddleware } from 'astro/middleware'
import { useAstroI18n } from 'astro-i18n'

const astroI18n = useAstroI18n()

const stringIncludesAny = (str: string, arr: string[]) =>
  arr.some((v) => str.includes(v))

const headerMiddleware = defineMiddleware(async (_, next) => {
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

export const onRequest = sequence(astroI18n, headerMiddleware)
