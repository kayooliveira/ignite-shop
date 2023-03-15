import { DefaultLayout } from '@/layout/Default'
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout className={roboto.className}>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
