import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
