import Icon from "@material-tailwind/react/Icon"
import { useRouter } from 'next/router'
import firebase from "../../fire-config"

function DocumentCard({id, fileName, thumbnail, editorState, modified, created }) {
    const router = useRouter()

    function parseTime(time) {
        // Return Format -> 'Mon Jul 26 2021 21:55:59 GMT-0400 (Eastern Daylight Time)'
        const t = new Date(time.seconds * 1000)
        return t.toString()
    }

    return (
        <div className="cursor-pointer mr-6 mb-6 doc-card bg-white border rounded border-gray-300 hover:border-[#4c8bf5]" onClick={() => router.push(`/document/${id}`)}>
            <div className="relative h-64 w-full mb-1 rounded" style={{ backgroundImage: `url(${thumbnail})`, backgroundRepeat: "no-repeat", backgroundSize: "170% 116%", backgroundPosition: "center", backgroundClip: "border-box"}}></div>

            {/* For the title if it gets to long it needs to be cut and made with dots - Havent implemented that yet */}
            <div className="doc-card-info py-2.5 pl-2.5 pr-1 border-t border-gray-300">
                <h4 className="ml-1">{fileName}</h4>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="h-8 w-8">
                            <div className="text-[#4c8bf5] flex justify-center pt-1">
                                <Icon name="article" size="2xl" />
                            </div>
                        </div>
                
                        <p className="text-[#80868b] text-xs">{modified ? `Opened ${parseTime(modified).split(" ")[1]} ${parseTime(modified).split(" ")[2]}, ${parseTime(modified).split(" ")[3]}` : `Opened ${parseTime(created).split(" ")[1]} ${parseTime(created).split(" ")[2]}, ${parseTime(created).split(" ")[3]}`}</p>
                    </div>

                     {/* <div className="h-8 w-8 hover:hover-doc-info ml-4" onClick={handleDelete}> */}
                     <div className="h-8 w-8 hover:hover-doc-info ml-4" >
                        <div className="cursor-pointer text-[#5f6368] flex justify-center pt-1">
                            <Icon name="more_vert" size="2xl" />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DocumentCard
