import { useRouter } from 'next/router'
import { Link, Typography, Box } from '@material-ui/core'

export default function ProtectedPage() {
  const router = useRouter()

  return (
    <div>
      <Typography variant="h6">{'This is protected page'}</Typography>
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
