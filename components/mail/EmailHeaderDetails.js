import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { MdReply } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi"
import { BiCaretDown } from "react-icons/bi";

function EmailHeaderDetails({title, destination, time}) {
    function parseTime() {
        // Return Format -> 'Mon Jul 26 2021 21:55:59 GMT-0400 (Eastern Daylight Time)'
        const t = new Date(time.seconds * 1000)
        return t.toString()
    }

    return (
        <div className="pt-5 pl-16">
            <div className="flex items-center justify-between">
                <div>
                    <span className="capitalize font-medium text-base ml-2.5 ">{title}</span>
                    <span className="text-gray-emd text-sm pl-1">{`<${destination}>`}</span>
                    <span className="text-gray-emd cursor-pointer underline text-xs pl-1">Unsubscribe</span>
                </div>

                <div className="pr-4 mb-0 flex items-center">
                    <div className="text-gray-emd-2 text-xs">
                        {`${parseTime().split(" ")[1]} ${parseTime().split(" ")[2]}, ${parseTime().split(" ")[3]}, ${parseTime().split(" ")[4].slice(0, 5)} ${parseTime().split(" ")[4].slice(0, 2) > 12 ? "PM" : "AM"}`}
                    </div>

                    <div>
                        <IoMdStarOutline className="cursor-pointer p-2 w-10 h-10 ml-3 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                    </div>

                    <div>
                        <MdReply className="cursor-pointer p-2 w-10 h-10 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                    </div>

                    <div>
                        <HiOutlineDotsVertical className="cursor-pointer p-2 w-10 h-10 rounded-full hover:bg-gray-100 text-gray-c-400 hover:text-black" />
                    </div>
                </div>
            </div>

            <div className="flex items-center -mt-2.5">
                <div className="text-gray-emd-2 text-xs pr-px ml-2.5">to me</div>
                <div className="justify-center"><BiCaretDown className="cursor-pointer h-7 w-7 p-2 rounded hover:bg-gray-100 hover:text-black text-gray-c-400"/></div>
            </div>
        </div>
    )
}

export default EmailHeaderDetails
