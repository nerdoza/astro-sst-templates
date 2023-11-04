import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: 'This was a GET!'
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}

export const POST: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: 'This was a POST!'
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}

export const DELETE: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: 'This was a DELETE!'
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}

export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `This was a ${request.method}!`
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}
