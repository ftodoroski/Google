import Head from 'next/head'
import { MenuIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon, QuestionMarkCircleIcon, CogIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Avatar from "../Avatar"

function Header() {
    return (
        <div className="top-0 sticky z-50 header-min-max-h-p bg-white flex items-center justify-between border-b">
            <Head>
                {/* Add the email to the title string interpolation */}
                <title>Inbox</title> 
                <meta name="description" content="Google like clone" />
                <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
            </Head>

            {/* Header Left  */}
            <div className="flex items-center">
                <MenuIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer ml-5 mr-2.5'/>
                <Image 
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
                    alt="Gmail logo" 
                    width={120}
                    height={60}
                    className="object-contain"
                />
            </div>

            {/* Header Middle */}
            <div className="flex items-center flex-7 bg-gray-300 bg-opacity-25 p-2.5 rounded-md">
                <SearchIcon className="h-5 text-gray-600"/>
                <input placeholder="Search mail" type="text" className="border-0 outline-none w-full p-2.5 text-base bg-transparent"/>
                <AdjustmentsIcon className="h-5 "/>
            </div>

            {/* Header Right */}
            <div className="flex items-center space-x-2.5 pr-5">
                <QuestionMarkCircleIcon className="text-gray-700 h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                <CogIcon className="text-gray-700 h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                <ViewGridIcon className="text-gray-700 h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                <Avatar url='https://media-exp1.licdn.com/dms/image/C4E03AQE1YQHKXzpCoA/profile-displayphoto-shrink_800_800/0/1602799196597?e=1628726400&v=beta&t=SAuq1pwTVUWolAE1Qw3THEZ1XV5keX6LzJBxpH8Rqb0' />
            </div>
        </div>
    )
}

export default Header
