import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const Dashboard: NextPage = () => {
  return (
    <div className="bg-gray-100">
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
        <div className="flex sm:flex-row">
          <aside className="flex flex-col min-h-screen items-center bg-white text-gray-700 font-medium p-6 w-80">
            <a
              href="#"
              className="flex w-full items-center gap-2 p-2 hover:bg-gray-50 rounded-lg"
            >
              <UserCircleIcon
                aria-hidden="true"
                className="w-7 h-7 text-gray-400"
              />
              <span>General</span>
            </a>
          </aside>
          <main className={styles.container}></main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
