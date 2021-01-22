/* eslint-disable multiline-ternary */
import { useRouter } from 'next/router'
import { Link, Button, Typography, Box } from '@material-ui/core'
import Map from 'components/Map'

import { useAuth } from 'utils/auth/firebaseClient'

const HomePage = () => {
  const { user, signInWithGoogle, signInWithFacebook, signInWithNaver, signOut } = useAuth()
  const router = useRouter()

  return (
    <main>
      <Typography variant="h6">This is home page</Typography>
      <Box />
      {user ? (
        <div style={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-all' }}>
          <Typography variant="h6">{"User's Info"}</Typography>
          <Typography variant="h6">{`email: ${user.email}`}</Typography>
          <Typography variant="h6">{`emailVerified: ${user.emailVerified}`}</Typography>
          <Typography variant="h6">{`uid: ${user.uid}`}</Typography>
          <Typography variant="h6">{`refreshToken: ${user.refreshToken}`}</Typography>
          <Link onClick={() => router.push('/protected')} variant="h6">
            Go to Protected Page
          </Link>
          <Link onClick={() => router.push('/secret')} variant="h6">
            Go to Secret Page
          </Link>
          <Link onClick={() => router.push('/testapi')} variant="h6">
            Go to TestAPI Page
          </Link>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Currently NOT signed in</Typography>
          <Link onClick={() => router.push('/signup')} variant="h6">
            Sign up with Email
          </Link>
          <Link onClick={() => router.push('/signin')} variant="h6">
            Sign in with Email
          </Link>
          <Button onClick={() => signInWithGoogle()}>
            <Typography variant="h6">Sign in with Google</Typography>
          </Button>
          <Button onClick={() => signInWithFacebook()}>
            <Typography variant="h6">Sign in with Facebook</Typography>
          </Button>
          <Button onClick={() => signInWithNaver()}>
            <Typography variant="h6"> Sign in with Naver</Typography>
          </Button>
        </div>
      )}
      <Map />
    </main>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
