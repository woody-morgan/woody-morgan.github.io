import '@/css/tailwind.css'
import '@/css/prism.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import * as ChannelService from '@channel.io/channel-web-sdk-loader'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // Boot ChannelTalk on client side
    ChannelService.loadScript()

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
