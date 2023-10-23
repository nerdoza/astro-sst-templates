export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({
    message: 'This was a GET!'
  })
  )
}

export const POST: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    message: 'This was a POST!'
  })
  )
}

export const DELETE: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    message: 'This was a DELETE!'
  })
  )
}

export const ALL: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    message: `This was a ${request.method}!`
  })
  )
}
