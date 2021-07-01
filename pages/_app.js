import 'tailwindcss/tailwind.css'
import '@/styles/quiz_style.css'

import { AppWrapper } from '@/common/AppContext';

function MyApp({ Component, pageProps }) {
  return <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
}

export default MyApp
