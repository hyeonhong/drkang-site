export function fetchAuth(ctx, path) {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const { token } = ctx.req.cookies

  return fetch(baseUrl + path, {
    headers: { Authorization: JSON.stringify({ token }) }
  })
}

export const withAuth = (getServerSidePropsFn) => async (ctx) => {
  const { token } = ctx.req.cookies
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      },
      props: {}
    }
  }

  return getServerSidePropsFn()
}
