import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

function EmailRow({ email }) {
    const { id, title, subject, description, time} = email

    return (
        <div className="group cursor-pointer flex items-center google-bg-gray google-row-shadow h-12 hover:google-row-shadow-hover relative">
            <img src="https://www.gstatic.com/images/icons/material/system/1x/drag_indicator_black_20dp.png" className="group-hover:m-2 opacity-30 hidden group-hover:block group-hover:absolute" />
            <MdCheckBoxOutlineBlank className="ml-4 h-10 w-10 p-2 py-0 opacity-20 rounded-full hover:bg-gray-200 group-hover:text-gray-500 group-hover:opacity-100 hover:text-hov" />
            <IoMdStarOutline className="h-10 w-10 p-2 opacity-20 rounded-full hover:bg-gray-200 group-hover:text-gray-500 group-hover:opacity-100 hover:text-hov" />
            <img src="https://www.gstatic.com/images/icons/material/system/1x/label_important_googyellow500_20dp.png" className="mr-3 p-2 rounded-full hover:bg-gray-200" />
            <div className="font-normal w-48 overflow-hidden leading-5 text-black-mail-row-main text-15">{title}</div>
            <div className="overflow-hidden overflow-ellipsis font-normal leading-5 text-black-mail-row-main text-15">{subject}</div>
            <div className="text-gray-mail-row-side text-sm">&nbsp; - &nbsp;</div>
            <div className="pr-12 overflow-hidden overflow-ellipsis whitespace-nowrap flex-grow flex-shrink-0 w-description-500 text-gray-mail-row-side text-15">{description}</div>
            <div className="w-6">&nbsp;</div>
            <div className="pr-4 text-sm text-gray-mail-row-side">{`${time.split(' ')[0].slice(0, 3)} ${time.split(' ')[1].slice(0, 2)}`}</div>
        </div>
    )
}

export default EmailRow

