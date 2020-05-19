import { AppProps } from 'next/app'
import Head from 'next/head'
import './_app.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Fast</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
