import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastContainer } from 'react-toastify'
import { Flowbite } from 'flowbite-react'
import customTheme from '../styles/flowbite-theme'

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="413208467082-sbgs3bkgdf8p0oit4bcvce3thkfvn5p3.apps.googleusercontent.com">
      <Flowbite theme={{ theme: customTheme }}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Flowbite>
    </GoogleOAuthProvider>
  )
}

export default MyApp
