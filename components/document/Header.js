import Icon from "@material-tailwind/react/Icon"
import Button from "@material-tailwind/react/Button";
import Image from "next/image"
import { useState } from 'react';

function Header() {
    const [search, setSearch] = useState("")
    const [hasFocus, setFocus] = useState(false)

    return (
        <header className="header-min-max-h p-2 sticky top-0 z-50 border-b-2 flex items-center justify-between bg-white">
            <div className="flex items-center">
                <div>
                    <Button 
                        color="blueGray"
                        buttonType="outline"
                        size="regular"
                        rounded={true}
                        block={false}
                        className="menu-icon-header"
                    >
                        <Icon name="menu" size="3xl"/>
                    </Button>
                </div>

                <div className="mt-1">
                    <Image
                        src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                        alt="Google Docs logo"
                        width={42}
                        height={42}
                        className="object-contain"
                    />
                </div>
                
                <div>
                    <span className="header-icon-color  text-2xl ml-3">Docs</span>
                </div>
            </div>

            <div  className={`flex items-center search-bar-document ${hasFocus ? `bg-white border shadow-md` : `bg-gray-300`} bg-opacity-25 p-1.5 rounded-lg`}>
                <div className="cursor-pointer search-icon-header flex items-center ml-1 rounded-full">
                    <Icon name="search" size="3xl" color="black"/>
                </div>
                <div className="flex-grow">
                    <input onFocus={e => setFocus(true)} onBlur={e => setFocus(false)} onChange={e => setSearch(e.target.value)} value={search} placeholder="Search" type="text" className="textb border-0 outline-none w-full p-2.5 text-base bg-transparent" />
                </div>
                <div onClick={e => setSearch("")} className={`${!search && `invisible`} cursor-pointer search-icon-header flex items-center mr-2 rounded-full`}>
                    <Icon name="close" size="3xl" color="black" />
                </div>
            </div>

            <div className="flex items-center mr-5">
                <div>
                    <Button
                        color="blueGray"
                        buttonType="outline"
                        size="regular"
                        rounded={true}
                        block={false}
                        className="app-icon-header"
                    >
                        <Icon name="apps" size="2xl" />
                    </Button>
                </div>

                <div className="img-icon-header">
                    <img 
                        loading="lazy" 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQE1YQHKXzpCoA/profile-displayphoto-shrink_800_800/0/1602799196597?e=1628726400&amp;v=beta&amp;t=SAuq1pwTVUWolAE1Qw3THEZ1XV5keX6LzJBxpH8Rqb0" 
                        alt="Profile pic"
                        class="h-9 rounded-full cursor-pointer" 
                    />
                </div>
            </div>

        </header>
    )
}

export default Header
