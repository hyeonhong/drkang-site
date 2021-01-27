import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { LayoutProvider } from 'utils/hook/useLayout'
import Header from './Header'
import Footer from './Footer'
import Spinner from './Spinner'
import { useAuth } from 'utils/auth/firebaseClient'
// import ContactPopUp from './ContactPopUp'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { loading: authLoading } = useAuth()
  const isLoading = authLoading || loading

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }
    const handleComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return (
    <div className={classes.root}>
      <Header />
      {/* <ContactPopUp /> */}
      {isLoading ? <Spinner /> : <LayoutProvider>{children}</LayoutProvider>}
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </div>
  )
}

export default Layout
