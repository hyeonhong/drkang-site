import 'styles/globals.css'

import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'

import { AuthProvider } from 'utils/auth/firebaseClient'
import { LangProvider } from 'utils/hooks/useLang'
import theme from 'styles/theme'
import Layout from 'components/Layout'

export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
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
    </CacheProvider>
  )
}
