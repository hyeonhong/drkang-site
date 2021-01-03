import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Link, Button, Typography, Box } from '@material-ui/core'

import { useAuth } from 'utils/auth/firebaseClient'

export default function ProtectedPage() {
  const { user, signOut } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])

  return (
    <div>
      <Typography variant="h6">{'This is protected page'}</Typography>
      <Button onClick={() => signOut()}>Click here to sign out</Button>
      <Box />
      <Link onClick={() => router.push('/')} variant="h6">
        Back to home
      </Link>
      <Box />
      <Link onClick={() => router.push('/secret')} variant="h6">
        Go to Secret Page
      </Link>
    </div>
  )
}
