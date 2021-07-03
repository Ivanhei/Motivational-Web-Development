import 'tailwindcss/tailwind.css'
import '@/styles/quiz_style.css'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
