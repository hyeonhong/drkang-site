import { verifyIdToken } from 'utils/auth/firebaseAdmin'

export function apiRequest(ctx, path, method = 'GET', data) {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const { token } = ctx.req.cookies

  return fetch(`${baseUrl}/api/${path}`, {
    method,
    headers: { Authorization: JSON.stringify({ token }) },
    body: data ? JSON.stringify(data) : undefined
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

  try {
    const { uid } = await verifyIdToken(token)
    return getServerSidePropsFn(uid)
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      },
      props: {}
    }
  }
}
