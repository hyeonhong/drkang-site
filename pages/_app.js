import '../styles/globals.css'

import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AuthProvider } from '../utils/auth/firebaseClient'
import theme from '../styles/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
