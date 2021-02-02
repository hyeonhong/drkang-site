import { useRouter } from 'next/router'
import { Link, Typography, Box } from '@material-ui/core'

import { useAuth } from 'utils/auth/firebaseClient'
import { withAuth } from 'utils/server-side'

export default function ProtectedPage({ uid }) {
  const router = useRouter()
  const { getAuthInstance } = useAuth()

  const { currentUser } = getAuthInstance()
  console.log('current user:', currentUser)

  return (
    <div>
      <Typography variant="h6">{'This is protected page'}</Typography>
      <Box />

      <div style={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-all' }}>
        <Typography variant="h6">{"User's Info"}</Typography>
        <Typography variant="h6">{`email: ${currentUser.email}`}</Typography>
        <Typography variant="h6">{`emailVerified: ${currentUser.emailVerified}`}</Typography>
        <Typography variant="h6">{`uid: ${currentUser.uid}`}</Typography>
        <Typography variant="h6">{`refreshToken: ${currentUser.refreshToken}`}</Typography>
        <Link onClick={() => router.push('/protected')} variant="h6">
          Go to Protected Page
        </Link>
        <Link onClick={() => router.push('/secret')} variant="h6">
          Go to Secret Page
        </Link>
        <Link onClick={() => router.push('/testapi')} variant="h6">
          Go to TestAPI Page
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = withAuth((uid) => {
  console.log('uid received:', uid)

  return {
    props: { uid }
  }
})
