// import '@/styles/globals.css'
import 'normalize.css/normalize.css'
import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component className={roboto.className} {...pageProps} />
}
