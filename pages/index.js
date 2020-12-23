/* eslint-disable multiline-ternary */
import { Container, Button, Typography, Box } from '@material-ui/core'

import { useAuth } from '../utils/auth/firebaseClient'
import Link from '../components/Link'

export default function Home() {
  const { user, signInWithGoogle, signInWithFacebook, signInWithNaver, signOut } = useAuth()

  return (
    <Container maxWidth="sm">
      <Typography variant="h6">This is home page</Typography>
      <Box />
      {user ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">{"User's Info"}</Typography>
          <Typography variant="h6">{`email: ${user.email}`}</Typography>
          <Typography variant="h6">{`emailVerified: ${user.emailVerified}`}</Typography>
          <Typography variant="h6">{`uid: ${user.uid}`}</Typography>
          <Typography variant="h6">{`refreshToken: ${user.refreshToken}`}</Typography>
          <Link href="/protected" variant="h6">
            Go to Protected Page
          </Link>
          <Link href="/secret" variant="h6">
            Go to Secret Page
          </Link>
          <Link href="/testapi" variant="h6">
            Go to TestAPI Page
          </Link>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Currently NOT signed in</Typography>
          <Link href="/signup" variant="h6">
            Sign up with Email
          </Link>
          <Link href="/signin" variant="h6">
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
    </Container>
  )
}
