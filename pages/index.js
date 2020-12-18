/* eslint-disable multiline-ternary */
import { Container, Button, Typography, Box } from '@material-ui/core'

import { useAuth } from '../utils/auth/firebaseClient'
import Link from '../components/Link'
import Layout from '../components/Layout'

export default function Home() {
  const { session, signInWithGoogle, signInWithFacebook, signInWithNaver, signOut } = useAuth()

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h6">This is home page</Typography>
        {session ? (
          <>
            <Typography variant="h6">{`User's token info: ${session}`}</Typography>
            <Link href="/protected" variant="h6">
              Go to Protected Page
            </Link>
            <Box />
            <Button onClick={() => signOut()}>Sign out</Button>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
    </Layout>
  )
}
