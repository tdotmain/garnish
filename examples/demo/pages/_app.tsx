import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { GarnishProvider } from '@garnish/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GarnishProvider>
      <Component {...pageProps} />
    </GarnishProvider>
  )
}

export default MyApp
