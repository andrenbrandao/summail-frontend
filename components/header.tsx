import Image from 'next/image'
import GoogleLoginButton from './google-login-button'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  function handleRedirect() {
    router.push('/dashboard')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <div className="h-8 w-auto sm:h-10 hidden md:flex">
              <Image
                priority
                src="/logo-with-name.svg"
                width={192}
                height={40}
                alt="Summail Logo"
              />
            </div>
            <div className="h-10 w-auto sm:h-10 flex md:hidden">
              <Image
                priority
                src="/logo-icon.svg"
                width={50}
                height={50}
                alt="Summail Logo"
              />
            </div>
          </a>
        </div>
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
          <GoogleLoginButton onSuccessRedirect={handleRedirect} />
        </div>
      </div>
    </div>
  )
}
