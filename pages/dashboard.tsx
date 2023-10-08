import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { Sidebar, Card, Button } from 'flowbite-react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const Dashboard: NextPage = () => {
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    overrideScope: true,
    scope:
      'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify',
    onSuccess: async (codeResponse) => {
      console.log(codeResponse)
      const tokens = await axios.post('http://localhost:3001/auth/google', {
        code: codeResponse.code,
      })

      console.log(tokens)
    },
    onError: (errorResponse) => console.log(errorResponse),
  })

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Summail Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dashboard Header */}
      <div className="flex items-center px-8 justify-start py-3 border-b border-gray-200 bg-white">
        <Image
          priority
          src="/logo-icon.svg"
          width={50}
          height={50}
          alt="Summail Logo"
        />
      </div>

      {/* Main */}
      <div className="min-h-screen">
        <div className="flex">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={UserCircleIcon} active>
                  <p>General</p>
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={ArrowLeftOnRectangleIcon}>
                  <p>Log out</p>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <main className="p-6">
            <Card className="max-w-lg">
              <h2 className="text-md font-bold">Grant Gmail Permissions</h2>
              <p className="text-sm text-gray-500 leading-5">
                Enable Summail to retrieve your newsletters and deliver them at
                your convenience.
              </p>
              <Button onClick={() => googleLogin()} color="blue">
                Authorize Gmail
              </Button>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
