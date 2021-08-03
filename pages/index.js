import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value
    
    if (!term) return 

    router.push(`/search?term=${term}`)
  }

  const goToInbox = (e) => {
    e.preventDefault()

    router.push(`/mail`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google like clone" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>  
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <button className='link focus:outline-none' onClick={goToInbox}>Gmail</button>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          <Avatar url='https://media-exp1.licdn.com/dms/image/C4E03AQE1YQHKXzpCoA/profile-displayphoto-shrink_800_800/0/1602799196597?e=1628726400&v=beta&t=SAuq1pwTVUWolAE1Qw3THEZ1XV5keX6LzJBxpH8Rqb0'/>
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image 
          src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
          height={100}
          width={300}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl' >
          <SearchIcon className='h-5 mr-3 text-gray-500 '/>
          <input 
            ref={searchInputRef}
            type='text' 
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5'/>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
