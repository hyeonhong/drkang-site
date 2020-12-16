import { Button, Typography } from '@material-ui/core'
import nookies from 'nookies'

import { verifyIdToken } from '../utils/auth/firebaseAdmin'
import { useAuth } from '../utils/auth/firebaseClient'

export default function AuthenticatedPage({ message }) {
  const { signOut } = useAuth()

  return (
    <div>
      <Typography variant="h6">{message}</Typography>
      <Button onClick={() => signOut()}>Click here to sign out</Button>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx)
    console.log(JSON.stringify(cookies, null, 2))
    const token = await verifyIdToken(cookies.token)
    const { uid, email } = token

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
