import 'tailwindcss/tailwind.css'
import '@/styles/quiz_style.css'

import { useUser } from '@/common/utils';

function MyApp({ Component, pageProps }) {
  const userCredentials = useUser();

  return <Component {...pageProps} user={userCredentials} />
}

export default MyApp
