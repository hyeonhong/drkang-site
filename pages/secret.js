import { useRouter } from 'next/router'
import { Button, Link, Typography, Box } from '@material-ui/core'

import { useAuth } from 'utils/auth/firebaseClient'
import { withAuth } from 'utils/server-side'

export default function SecretPage({ message }) {
  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <div>
      <Typography variant="h6">This is a secret page with message: {message}</Typography>
      <Box />
      <Button onClick={() => signOut()}>Click here to sign out</Button>
      <Box />
      <Link onClick={() => router.push('/')} variant="h6">
        Back to home
      </Link>
      <Box />
      <Link onClick={() => router.push('/protected')} variant="h6">
        Go to Protected
      </Link>
    </div>
  )
}

export const getServerSideProps = withAuth((uid) => {
  console.log('uid received:', uid)

  return {
    props: { message: 'carpe diem' }
  }
})
