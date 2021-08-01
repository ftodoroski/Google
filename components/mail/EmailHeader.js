import { AiFillPrinter } from "react-icons/ai"
import { RiShareBoxLine } from "react-icons/ri"

function EmailHeader({subject}) {
    return (
        <div className="flex justify-between items-center pt-5 pb-2 pl-16 pr-2.5">
            <div className="flex">
                <h2 className="capitalize font-light text-2xl pr-2.5 ml-2.5">{subject}</h2>
                <img src="https://www.gstatic.com/images/icons/material/system/1x/label_important_googyellow500_20dp.png" className="mr-3 p-2 rounded-full hover:bg-gray-200" />
            </div>
            <div className="flex pr-2.5">
                <div className="cursor-pointer rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                    <AiFillPrinter className="p-2 w-10 h-10"/>
                </div>
                <div className="cursor-pointer rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black">
                    <RiShareBoxLine className="p-2 w-10 h-10"/>
                </div>
            </div>
        </div>
    )
}

export default EmailHeader
