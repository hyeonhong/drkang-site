import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Link, Typography, Box } from '@material-ui/core'

import { useAuth } from '../utils/auth/firebaseClient'
import { checkGuest } from '../utils/server-side'

export default function SecretPage({ message }) {
  const { user, signOut } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      console.log('no user!!!')
      router.push('/')
    } else {
      console.log('user yes!!')
    }
  }, [user])

  return (
    <div>
      <Typography variant="h6">This is a secret page with message: {message}</Typography>
      <Box />
      <Button onClick={() => signOut()}>Click here to sign out</Button>
      <Box />
      <Link href={'/'} variant="h6">
        Back to home
      </Link>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const guestPath = await checkGuest(ctx)
  console.log('Are you guest?', !!guestPath)
  if (guestPath) {
    return guestPath
  }

  return {
    props: { message: 'carpe diem' }
  }
}
