import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Link, Button, Typography, Box } from '@material-ui/core'

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
      <Link href={'/secret'} variant="h6">
        Go to Secret Page
      </Link>
    </div>
  )
}
