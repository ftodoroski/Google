import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRefresh,
    MdChevronLeft,
    MdChevronRight
} from "react-icons/md";
import { BiCaretDown } from "react-icons/bi";
import { HiChatAlt } from "react-icons/hi";
import { DotsVerticalIcon } from '@heroicons/react/solid'

function EmailListSettings({ selectedAll, setSelectedAll} ) {
    
    function toggleCheckbox() {
        setSelectedAll(!selectedAll);
    }

    return (
        <div className="top-0 sticky z-50 flex justify-between h-14 pr-2.5 bg-white">
            {/* Left Settings */}
            <div className="flex items-center">
                <div className="flex items-center ">
                    {!selectedAll ? <MdCheckBoxOutlineBlank onClick={toggleCheckbox} className="cursor-pointer ml-4 h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" /> : <MdCheckBox onClick={toggleCheckbox} className="cursor-pointer ml-4 h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />}
                    <BiCaretDown className="cursor-pointer -ml-3 h-7 w-7 p-2 rounded-full hover:bg-gray-100 hover:text-black text-gray-c-400" />
                </div>
                <MdRefresh className="cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                <DotsVerticalIcon className="cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
            </div>

            {/* Right Settings */}
            <div className="flex items-center">
                <MdChevronLeft className="cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                <MdChevronRight className="cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                <HiChatAlt className="cursor-pointer h-10 w-10 p-2 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
            </div>
        </div>
    )
}

export default EmailListSettings
