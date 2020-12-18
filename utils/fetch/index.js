import nookies from 'nookies'

export function fetchAuth(ctx, path) {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const { token } = nookies.get(ctx)
  if (!token) {
    throw new Error('Token not found')
  }

  return fetch(baseUrl + path, {
    headers: { Authorization: JSON.stringify({ token }) }
  })
}
