import {
  GoogleLogin,
  CredentialResponse,
  GoogleLoginProps,
} from '@react-oauth/google'
import axios from 'axios'

async function handleCredentialResponse(response: CredentialResponse) {
  await axios.post('http://localhost:4000/local/login', response, {
    timeout: 5000,
    withCredentials: true,
  })
}

export default function GoogleLoginButton({
  ...props
}: Omit<GoogleLoginProps, 'onSuccess'>) {
  return (
    <GoogleLogin {...props} onSuccess={handleCredentialResponse} useOneTap />
  )
}
