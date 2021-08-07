import Icon from "@material-tailwind/react/Icon"
import ViewList from "../../public/ViewList"

function ContentHeader() {
    return (
        <div className="h-16 bg-white flex items-center justify-between mt-1">
            <div className="w-full h-full flex items-center">
                <h3 className="text-xl text-[#202124]">Recent documents</h3>
            </div>

            <div className="h-full w-full flex items-center justify-end">
                <div className="cursor-pointer text-base text-gray-700 h-6 w-40 mr-36 pl-2 hover:rounded hover:bg-gray-100 flex justify-center">
                    <h3 className="text-[#414549]">Owned by anyone</h3>
                    <Icon name="arrow_drop_down" size="2xl" />
                </div>

                <div className="flex mr-5">
                    <div className="h-9 w-9 hover:hover-effy">
                        <div className="cursor-pointer flex justify-center px6">
                            <ViewList />
                        </div>
                    </div>
                    <div className="h-9 w-9 hover:hover-effy ml-3">
                        <div className="cursor-pointer text-[#5f6368] flex justify-center px6">
                            <Icon name="sort_by_alpha" size="2xl" />
                        </div>
                    </div>
                    <div className="h-9 w-9 hover:hover-effy mr-1 ml-3">
                        <div className="cursor-pointer text-[#5f6368] flex justify-center px6">
                            <Icon name="folder_open" size="2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader

// Controll the height and width of elements 
//    - You want to set it to a certain size this way you have more control over that are
//    - I feel like this was a nice challenge where things were modularized to fix the problem