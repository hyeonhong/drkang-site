import { useRouter } from 'next/router'
import { Link, Typography, Box } from '@material-ui/core'

import { withAuth } from 'utils/server-side'

export default function SecretPage({ message }) {
  const router = useRouter()

  return (
    <div>
      <Typography variant="h6">This is a secret page with message: {message}</Typography>
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
