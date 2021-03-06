import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { MdArchive, MdAddCircle, MdLabel } from "react-icons/md"
import { BsFillExclamationOctagonFill, BsFolderSymlinkFill } from "react-icons/bs"
import { FaTrash } from "react-icons/fa"
import { AiFillClockCircle } from "react-icons/ai"
import { IoIosMail } from "react-icons/io"
import { HiOutlineDotsVertical } from "react-icons/hi"

function EmailSettings({router}) {
    function handlePrevPage(e) {
        e.preventDefault()
        router.push("/mail")
    }

    return (
        <div className="sticky top-90 border-b-2 flex justify-between h-14 pr-2.5 bg-white">
            <div className="flex items-center">
                <div onClick={handlePrevPage} className="cursor-pointer mr-5 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                    <BiArrowBack className="p-2 w-10 h-10"/>
                </div>
 
                <div className="bb h-6 mr-2 flex items-center">
                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <MdArchive className="p-2 w-10 h-10"/>
                    </div>

                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <BsFillExclamationOctagonFill className="p-2.5 w-10 h-10"/>
                    </div>

                    <div className="cursor-pointer pr-2 m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <FaTrash className="p-2.5 w-10 h-10"/>
                    </div>
                </div>

                <div className="bb h-6 mr-2 flex items-center">
                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <IoIosMail className="p-2 w-10 h-10" />
                    </div>

                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <AiFillClockCircle className="p-2.5 w-10 h-10" />
                    </div>

                    <div className="cursor-pointer pr-2 m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <MdAddCircle className="p-2.5 w-10 h-10" />
                    </div>
                </div>

                <div className="mr-2 flex items-center ">
                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <BsFolderSymlinkFill className="p-2.5 w-10 h-10" />
                    </div>

                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <MdLabel className="p-2 w-10 h-10" />
                    </div>

                    <div className="cursor-pointer m-1 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                        <HiOutlineDotsVertical className="p-2.5 w-10 h-10" />
                    </div>
                </div>
            </div>

            <div className="pr-2.5 flex items-center">
                <div className="cursor-pointer rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                    <BiChevronLeft className="p-2 w-10 h-10"/>
                </div>

                <div className="cursor-pointer rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                    <BiChevronRight className="p-2 w-10 h-10"/>
                </div>
            </div>
        </div>
    )
}

export default EmailSettings
