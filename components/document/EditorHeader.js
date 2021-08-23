import Icon from "@material-tailwind/react/Icon"
import 'material-icons/iconfont/material-icons.css';
import GoogleDocs from "../../public/GoogleDocs";
import { useRouter } from 'next/router'
import { useState,  useEffect } from "react"
import firebase from "../../fire-config"

function EditorHeader({ fileName, modified }) {
    const router = useRouter()
    const [nameOfFile, setNameOfFile] = useState(fileName)
    const [width, setWidth] = useState(fileName.length <= 17 ? fileName.length * 16 : fileName.length * 11)
    const [changed, setChanged] = useState(modified)

    useEffect(() => {
        firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").doc(`${router.query.id}`).update({
            fileName: nameOfFile
        })


    }, [nameOfFile])

    function handleTitleChange(e) {
        // useState is async
        setNameOfFile(e.target.value)

        if (nameOfFile.length <= 17 && e.key !== "Backspace") {
            setWidth(187)
        } else if (e.key === "Backspace" && nameOfFile.length > 17) {
            setWidth(width - 5)
        } else if (width < 400 && nameOfFile) {
            setWidth(width + 5)
        }
    }

    function lastTimeEditedTime() {
        const today = new Date()
        const lastChanged = new Date(modified.seconds * 1000)
        const daysPast = (today.getTime() - lastChanged.getTime()) / (1000 * 3600 * 24)
        
        if (daysPast < 1) {
            if (today.getHours() - lastChanged.getHours() < 1) {
                return `${Math.floor(today.getMinutes() - lastChanged.getMinutes())} minutes ago`
            } else {
                return `${Math.floor(today.getHours() - lastChanged.getHours())} hours ago`
            }
        } else {
            return `${daysPast} days ago`
        }

    }

    return (
        <header className="h-72px w-auto  bg-white flex items-center justify-between border-b-2">
            <div className="h-72px w-800px flex items-center ml-5">
                    <GoogleDocs onClick={() => router.push("/document")} className="cursor-pointer h-11 w-11 block mr-2"/>

                    <div className="mt-2.5">
                        <div className="h-8 w-auto flex">
                            <div className="mr-2">
                            <input 
                                value={nameOfFile} 
                                onChange={handleTitleChange} 
                                onKeyDown={handleTitleChange}
                                className="text-xl h-7 pl-2 pr-2 outline-none hover:border-2 rounded hover:rounded hover:border-gray-300 focus:focused-input bg-white"
                                style={{width: `${width}px`}}
                            />
                            </div>

                            <div className="cursor-pointer text-[#5f6368] h-8 w-8 mr-2 hover:rounded hover:bg-[#f1f3f4] bg-white flex justify-center pt-1">
                                <span className="material-icons-outlined pt-px" style={{fontSize: "20px"}}>
                                    star_outline
                                </span>
                            </div>

                            <div className="cursor-pointer text-[#5f6368] h-8 w-8 mr-2 hover:rounded hover:bg-[#f1f3f4] bg-white flex justify-center pt-1">
                                <span className="material-icons-outlined pt-px" style={{ fontSize: "20px" }}>
                                    drive_file_move
                                </span>
                            </div>

                            <div className="cursor-pointer text-[#5f6368] h-8 w-8 mr-2 hover:rounded hover:bg-[#f1f3f4] bg-white flex justify-center pt-1">
                                <span className="material-icons-outlined pt-px" style={{ fontSize: "20px" }}>
                                    cloud_done
                                </span>
                            </div>
                        </div>

                        <div className="h-8 w-auto -mt-1 bg-white flex items-center">
                            <div className="cursor-pointer text-[#202124] h-7 w-11 mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">File</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-11 mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Edit</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-view mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">View</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-insert mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Insert</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-format mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Format</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-tools mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Tools</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-addons mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Add-ons</span>
                            </div>

                            <div className="cursor-pointer text-[#202124] h-7 w-help mr-2 hover:bg-[#f1f3f4] hover:rounded text-center flex items-center justify-center pt-px">
                                <span className="block">Help</span>
                            </div>

                            {/* This has to be updated dynamically */}
                            <div className="cursor-pointer text-[#5f6368] h-7 w-last-edited text-center underline flex items-center justify-center pt-px">
                                <span className="block">{!changed ? "" : `Last edit was ${lastTimeEditedTime()}`}</span>
                            </div>
                        </div>
                    </div>
            </div>
                                            
            <div className="h-72px w-280px bg-white flex items-center justify-between mr-5">
                <div className="h-10 w-10 hover:rounded-full hover:bg-gray-100 pt-1 mr-1">
                    <div className="cursor-pointer text-[#5f6368] flex justify-center pt-1">
                        <span className="material-icons-outlined">
                            comment
                        </span>
                    </div>
                </div>

                <div className="w60-h40 bg-white rounded-full border-2 border-[#f1f3f4] hover:bg-[#f1f3f4] py-3 px-6 mr-1 flex items-center justify-center">
                    <div className="cursor-pointer text-[#4c8bf5] flex justify-center pl-1 pb-1">
                        <Icon name="ios_share" size="2xl" />
                    </div>
                    <div className="cursor-pointer text-[#4c8bf5] flex justify-center">
                        <Icon name="arrow_drop_down" size="2xl" />
                    </div>
                </div>

                <div className="cursor-pointer w90-h40 bg-[#1a73e8] rounded hover:doc-btn-box-shadow mr-1 flex items-center justify-center">
                    <div className="cursor-pointer mr-2 text-white flex justify-center text-lock-size">
                        <Icon name="lock" size="sm" />
                    </div>
                    <h4 className="text-white font-normal tracking-wide">Share</h4>
                </div>

                <div className="img-icon-header">
                    <img
                        loading="lazy"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQE1YQHKXzpCoA/profile-displayphoto-shrink_100_100/0/1602799196597?e=1634169600&v=beta&t=on6P8MDinUyGA_eLp8lTJcy8Wnbsva0plb_tRMd_VMg"
                        alt="Profile pic"
                        className="h-9 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </header>
    )
}

export default EditorHeader


// Header
//      - Set up the height
//      - Background Color
//      - Its also supposed to be sticky as well
// 

