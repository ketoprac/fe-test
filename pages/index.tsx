import type { NextPage } from 'next'
import Head from 'next/head'
import { useGetUserReposQuery } from '../redux/apiSlice'

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetUserReposQuery('ketoprac');

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <Head>
        <title>Skilltest MyTEnS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center text-white font-bold gap-5 p-12 border border-slate-600 rounded">
        <p>Test</p>
      </main>
    </div>
  )
}

export default Home
