import { useState } from "react";
import EmailListSection from "./EmailListSection";
import EmailListSettings from "./EmailListSettings";
import {
    InboxIcon,
    TagIcon,
    UsersIcon
} from "@heroicons/react/solid"
import emailData from "../../public/DummyEmailData"
import EmailRow from "./EmailRow";

function Body() {
    const [selectedAll, setSelectedAll] = useState(false);

    return (
        <div className="flex-grow">
            <EmailListSettings selectedAll={selectedAll} setSelectedAll={setSelectedAll}/>

            {/* <div className="overflow-scroll"> */}
                <div className="flex border-t-2 border-b-2">
                    <div className=" flex flex-grow-5 justify-start">
                        <EmailListSection Icon={InboxIcon} title="Primary" selected={true}/>
                        <EmailListSection Icon={UsersIcon} title="Social" selected={false}/>
                        <EmailListSection Icon={TagIcon} title="Promotions" selected={false}/>
                    </div>
                </div>

                {emailData.map(email => (
                    <EmailRow key={email.id} email={email} />
                ))}

            {/* </div> */}
        </div>
    )
}

export default Body
