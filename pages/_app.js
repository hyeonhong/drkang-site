/* eslint-disable react/display-name */
import 'styles/globals.css'

import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, Typography } from '@material-ui/core'
import createCache from '@emotion/cache'
import { MDXProvider } from '@mdx-js/react'

import { AuthProvider } from 'utils/auth/firebaseClient'
import { LangProvider } from 'utils/hooks/useLang'
import theme from 'styles/theme'
import Layout from 'components/Layout'

export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props) {
  const { Component, pageProps } = props

  const mdxComponents = {
    h1: (props) => <Typography variant={'h1'} {...props} />,
    h2: (props) => <Typography variant={'h2'} {...props} />,
    h3: (props) => <Typography variant={'h3'} {...props} />,
    h4: (props) => <Typography variant={'h4'} {...props} />,
    h5: (props) => <Typography variant={'h5'} {...props} />,
    h6: (props) => <Typography variant={'h6'} {...props} />,
    p: (props) => <Typography variant={'body1'} {...props} />
  }

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
            <MDXProvider components={mdxComponents}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MDXProvider>
          </LangProvider>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
