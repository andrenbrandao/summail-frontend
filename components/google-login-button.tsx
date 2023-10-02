import {
  GoogleLogin,
  CredentialResponse,
  GoogleLoginProps,
} from '@react-oauth/google'
import axios from 'axios'
import { toast } from 'react-toastify'

async function handleCredentialResponse(response: CredentialResponse) {
  try {
    await axios.post('http://localhost:400/local/login', response, {
      timeout: 5000,
      withCredentials: true,
    })
  } catch (error) {
    console.error(error)
    toast.error('Login failed!')
  }
}

export default function GoogleLoginButton({
  ...props
}: Omit<GoogleLoginProps, 'onSuccess'>) {
  return (
    <GoogleLogin {...props} onSuccess={handleCredentialResponse} useOneTap />
  )
}
