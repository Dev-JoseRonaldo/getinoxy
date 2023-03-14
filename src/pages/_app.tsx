import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useEffect } from 'react'

import { Toaster } from 'react-hot-toast'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <Head>
        <title>GetinOxy</title>
      </Head>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  )
}
