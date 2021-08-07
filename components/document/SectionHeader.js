import Icon from "@material-tailwind/react/Icon"
import { BsThreeDotsVertical } from "react-icons/bs"

function SectionHeader() {
    return (
        <div className="flex items-center justify-between pt-3.5">
            <div className="ml-4">
                <p className="doc-sec-hed-text-color text-lg">Start a new document</p>
            </div>
            <div className="flex items-center doc-sec-hed-text-color">
                <div className="pl-5 hover:doc-sec-hed-bg-color flex items-center rounded-lg">
                    <p className="mr-3">Template gallery</p>
                    <div className="mt-2 mr-2">
                        <Icon name="unfold_more" size="2xl" />
                    </div>
                </div>
                <div className="bord"></div>
                <div className="ml-2 cursor-pointer rounded-full hover:doc-sec-hed-bg-color">
                    <BsThreeDotsVertical className='p-2 w-9 h-9'/>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
