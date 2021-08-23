import { useRouter } from 'next/router'
import firebase from "../../fire-config"

function DocumentTemplate({title, subTitle, imgURL, url, Image}) {
    const router = useRouter()

    async function handleNewDoc() {
        // Figure out the env variables are not working 

        await firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").add({
            fileName: "Untitled document",
            thumbnail: "", 
            created: firebase.firestore.Timestamp.now(), 
            modified: "", 
            // thumbnail: "https://firebasestorage.googleapis.com/v0/b/g-clone-1623594558880.appspot.com/o/card-thumbnail%2Fwhite-background.png?alt=media&token=cec2230b-f7fd-4d45-9f03-80c5bb08d2ee"
        }).then((docRef) => {
            console.log("Document written with ID", docRef.id)
            router.push(`${router.pathname}/${docRef.id}`)
        }).catch(err => {
            console.log(err)
        })
    }

    function subTitleSec() {
        return (
            <p className="text-[#5f6368] font-14 font-light tracking-wide pl-1 -mt-1">{subTitle}</p>
        )
    }

    return (
        <div className="mr-5" onClick={handleNewDoc}>
            <div className="cursor-pointer relative h-52 w-40 mb-2.5 border rounded border-gray-300 hover:border-[#4c8bf5]">
                <Image src={imgURL} layout="fill" className="border rounded"/>
            </div>

            <p className="font-base tracking-wide pl-1">{title}</p>
            {subTitle && subTitleSec()}
        </div>
    )
}

export default DocumentTemplate
