import '../styles/globals.css'

import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AuthProvider } from '../utils/auth/firebaseClient'
import { LangProvider } from '../utils/hooks/useLang'
import theme from '../styles/theme'
import Layout from '../components/Layout'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <LangProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LangProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
