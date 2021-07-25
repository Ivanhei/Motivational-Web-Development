import 'tailwindcss/tailwind.css'
import '@/styles/quiz_style.css'
import 'regenerator-runtime/runtime' // for 'react-speech-recognition'

import { AppProps } from 'next/app'

import { LanguageTag } from '@/common/Strings/Types'
import { useMemo } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const languageTag: LanguageTag = useMemo(() => "jp" as LanguageTag, [])

  return <Component {...pageProps} language={languageTag} />
}

export default MyApp
