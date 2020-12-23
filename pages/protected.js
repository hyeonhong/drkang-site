import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Link, Button, Typography, Box } from '@material-ui/core'
import nookies from 'nookies'

import { verifyIdToken } from '../utils/auth/firebaseAdmin'
import { useAuth } from '../utils/auth/firebaseClient'

export default function ProtectedPage({ message }) {
  const { user, signOut } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])

  return (
    <div>
      <Typography variant="h6">{message}</Typography>
      <Button onClick={() => signOut()}>Click here to sign out</Button>
      <Box />
      <Link href={'/'} variant="h6">
        Back to home
      </Link>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx)
    const decodedToken = await verifyIdToken(cookies.token)
    const { uid, email } = decodedToken

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {}
    }
  }
}
