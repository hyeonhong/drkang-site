import nookies from 'nookies'
import { verifyIdToken } from '../auth/firebaseAdmin'

export function fetchAuth(ctx, path) {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const { token } = nookies.get(ctx)

  return fetch(baseUrl + path, {
    headers: { Authorization: JSON.stringify({ token }) }
  })
}

export async function checkGuest(ctx) {
  const guestPath = {
    redirect: {
      permanent: false,
      destination: '/'
    },
    props: {}
  }

  const { token } = nookies.get(ctx)
  if (token) {
    try {
      await verifyIdToken(token)
      return
    } catch (e) {}
  }

  return guestPath
}
