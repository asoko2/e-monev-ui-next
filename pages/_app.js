import '../styles/globals.css'
import AOS from 'aos'
import { useEffect } from 'react'
import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init()
  })

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>
        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel='icon' href='/logo-e-monev.png' />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
