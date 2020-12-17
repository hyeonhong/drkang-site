import nookies from 'nookies'

export function fetchAuth(ctx, path) {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const cookies = nookies.get(ctx)

  return fetch(baseUrl + path, {
    headers: { Authorization: JSON.stringify({ token: cookies.token }) }
  })
}
