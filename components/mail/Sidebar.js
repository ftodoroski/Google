import SidebarOption from './SidebarOption'
import { 
    InboxIcon, 
    StarIcon, 
    ClockIcon, 
    PaperAirplaneIcon, 
    TrashIcon, 
    DocumentTextIcon, 
    TagIcon, 
    ChevronDownIcon, 
    VideoCameraIcon, 
} from "@heroicons/react/solid"
import { MdLabel } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import LabelIcon from '../../public/LabelIcon';

function Sidebar() {
    return (
        <div className="top-90 sticky pr-4 min-max-width-300px h-full flex flex-col ">
            <div className="flex items-center h-14 w-44 mt-4 mb-4 ml-3 pl-4 shadow-g rounded-full cursor-pointer font-custom hover:shadow-lg hover:border hover:bg-gray-50">
                <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />
                <p className="text-base pl-3 text-gray-700">Compose</p>
            </div>

            <SidebarOption Icon={InboxIcon} title="Inbox" selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" selected={false}/>
            <SidebarOption Icon={ClockIcon} title="Snoozed" selected={false}/>
            <SidebarOption Icon={MdLabel} title="Important" selected={false}/> 
            <SidebarOption Icon={PaperAirplaneIcon} title="Sent" selected={false}/>
            <SidebarOption Icon={DocumentTextIcon} title="Draft" selected={false}/>
            <SidebarOption Icon={TrashIcon} title="Deleted Messages" selected={false}/>
            <SidebarOption Icon={TagIcon} title="Notes" selected={false}/>
            <SidebarOption Icon={ChevronDownIcon} title="More" selected={false}/>

            <p className="mt-1 mb-2 border-t-2 pt-3 pr-3 pb-0 pl-9 font-medium">Meet</p>
            <SidebarOption Icon={VideoCameraIcon} title="New meeting" selected={false} />
            <SidebarOption Icon={FaKeyboard} title="Join a meeting" selected={false} />
        </div>
    )
}

export default Sidebar
