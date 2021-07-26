import 'tailwindcss/tailwind.css'
import '@/styles/quiz_style.css'
import 'regenerator-runtime/runtime' // for 'react-speech-recognition'

import { AppProps } from 'next/app'

import { LanguageTag } from '@/common/Strings/Types'
import { useEffect, useMemo } from 'react'
import { useUserDocSubject, useUserSubject } from '@/common/User/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const languageTag: LanguageTag = useMemo(() => "jp" as LanguageTag, [])

  const subjectUserDoc = useUserDocSubject(useUserSubject())

  useEffect(() => {
    const subs = subjectUserDoc.subscribe(doc => {
      if (!doc.darkUI)
        //document.body.parentElement
        document.querySelector('html')
          .classList.remove("dark")
    })

    return () => {
      subs.unsubscribe()
    }
  }, [subjectUserDoc])

  return <Component {...pageProps} language={languageTag} />
}

export default MyApp
