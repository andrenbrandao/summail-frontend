import {
  GoogleLogin,
  CredentialResponse,
  GoogleLoginProps,
} from '@react-oauth/google'
import axios from 'axios'
import { toast } from 'react-toastify'

type onSuccessRedirect = () => void

async function handleCredentialResponse(
  response: CredentialResponse,
  onSuccessRedirect: onSuccessRedirect,
) {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, response, {
      timeout: 5000,
      withCredentials: true,
    })
    onSuccessRedirect()
  } catch (error) {
    console.error(error)
    toast.error('Login failed!')
  }
}

export default function GoogleLoginButton({
  ...props
}: Partial<GoogleLoginProps & { onSuccessRedirect: onSuccessRedirect }>) {
  const onSuccessRedirect = props.onSuccessRedirect || (() => {})
  return (
    <GoogleLogin
      {...props}
      onSuccess={(response) =>
        handleCredentialResponse(response, onSuccessRedirect)
      }
      useOneTap
    />
  )
}
