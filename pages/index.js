/* eslint-disable multiline-ternary */
import { Container, Button, Typography } from '@material-ui/core'

import Link from '../components/Link'
import Layout from '../components/Layout'
import { useAuth } from '../utils/auth/firebaseClient'

export default function Home() {
  const { user, signInWithGoogle, signInWithFacebook, signOut } = useAuth()
  console.log(user)

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h6">This is home page</Typography>
        {user ? (
          <>
            <Typography variant="h6">
              User info: {JSON.stringify({ uid: user.uid, email: user.email }, null, 2)}
            </Typography>
            <Button onClick={() => signOut()}>Click here to sign out</Button>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/signup">
              <Typography variant="h6">Click here to sign up</Typography>
            </Link>
            <Link href="/signin">
              <Typography variant="h6">Click here to sign in</Typography>
            </Link>
            <Button onClick={() => signInWithGoogle()}>
              <Typography variant="h6">Click here to sign in with Google</Typography>
            </Button>
            <Button onClick={() => signInWithFacebook()}>
              <Typography variant="h6">Click here to sign in with Facebook</Typography>
            </Button>
          </div>
        )}
      </Container>
    </Layout>
  )
}
