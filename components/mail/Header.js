import Head from 'next/head'
import { MenuIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon, QuestionMarkCircleIcon, CogIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Avatar from "../Avatar"



function Header() {
    return (
        <div className="flex items-center justify-between border-b">
            <Head>
                {/* Add the email to the title string interpolation */}
                <title>Inbox</title> 
                <meta name="description" content="Google like clone" />
                <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
            </Head>

            {/* Header Left  */}
            <div className="flex items-center">
                <MenuIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer ml-5'/>
                <Image 
                    src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                    alt="Gmail logo" 
                    width={180}
                    height={101}
                    className="object-contain m-5"
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
