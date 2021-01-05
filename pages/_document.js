import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import createEmotionServer from '@emotion/server/create-instance'
import { defaultTheme } from 'styles/theme'
import { cache } from './_app.js'

const { extractCritical } = createEmotionServer(cache)

const { fontFamily } = require('../config')

const fontString = JSON.stringify(fontFamily)
  .replace(/[{}"]/g, '') // Remove {}"
  .replace(/\],/g, '&family=')
  .replace(/\[/g, 'wght@')
  .replace(/\]/g, '') // Remove ]
  .replace(/,/g, ';') // replace , with ;
  .replace(/ /g, '+') // replace ' ' with +

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={defaultTheme.palette.primary.main} />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=${fontString}&display=swap"`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)
  const styles = extractCritical(initialProps.html)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />
    ]
  }
}
