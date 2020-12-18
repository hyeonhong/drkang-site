import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Link, Typography, Box } from '@material-ui/core'
import nookies from 'nookies'

import { verifyIdToken } from '../utils/auth/firebaseAdmin'

export default function SecretPage({ authenticated }) {
  const router = useRouter()

  useEffect(() => {
    if (!authenticated) {
      router.push('/')
    }
  }, [authenticated])

  return (
    <div>
      <Typography variant="h6">This is a secret page.</Typography>
      <Box />
      <Link href={'/'} variant="h6">
        Back to home
      </Link>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  let authenticated = false
  const { token } = nookies.get(ctx)
  if (token) {
    try {
      await verifyIdToken(token)
      authenticated = true
    } catch (e) {}
  }
  return {
    props: { authenticated }
  }
}
