/* eslint-disable multiline-ternary */
import { useRouter } from 'next/router'
import { Link, Typography, Box } from '@material-ui/core'
import Map from 'components/Map'

import { useAuth } from 'utils/auth/firebaseClient'

const HomePage = () => {
  const { user } = useAuth()
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
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Currently NOT signed in</Typography>
        </div>
      )}
      <Map />
    </main>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
