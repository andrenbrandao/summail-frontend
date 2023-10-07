import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { Sidebar } from 'flowbite-react'

const Dashboard: NextPage = () => {
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
          <main className={styles.container}></main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
