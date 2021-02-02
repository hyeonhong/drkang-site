// import { useRouter } from 'next/router'
import { Typography, Box } from '@material-ui/core'
import Map from 'components/Map'

// import { useAuth } from 'utils/auth/firebaseClient'

const HomePage = () => {
  // const { user } = useAuth()
  // const router = useRouter()

  return (
    <main>
      <Typography variant="h6">This is home page</Typography>
      <Box />
      <Map />
    </main>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
