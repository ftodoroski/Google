import React, { useState, useEffect, forwardRef, useRef} from "react"
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { useDocumentOnce } from "react-firebase-hooks/firestore"
import firebase from "../../fire-config"
import * as htmlToImage from 'html-to-image'

const Editor = dynamic(() => import("react-draft-wysiwyg").then(module => module.Editor),
    {
        ssr: false,
    }
)

const TextEditor =  () => {
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty())
    const [uPresent, setUPresent] = useState(true)
    const router = useRouter()
    const [ snapshot ] = useDocumentOnce(firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").doc(router.query.id))
    const ref = useRef(null)
    const [image, setImage] = useState()
    const { id } = router.query

    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            )
        }
    }, [snapshot])


    useEffect(() => {
        if (image) {
            firebase.storage().ref(`card-thumbnail/${`Thumbnail_` + id + `_.jpg`}`).putString(image.split(",")[1], "base64", { contentType: 'image/jpg' }).then(snapshot => {
                return snapshot.ref.getDownloadURL()
            }).then(downloadURL => {
                firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").doc(router.query.id).set({
                    thumbnail: downloadURL
                }, {
                    merge: true
                })
                .catch(err => {
                    console.log(err)
                })
            })
        }

    }, [image])

    useEffect(() => {
        if (ref.current) htmlToImage.toPng(ref.current).then((data) => setImage(data)).catch((err) => console.log("Something went wrong", err))

    }, [ref.current])

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)

        firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").doc(router.query.id).set({
            editorState: convertToRaw(editorState.getCurrentContent()), 
            modified: firebase.firestore.Timestamp.now()
        }, {
            merge: true
        })
    }

    return (
        <div className={`${uPresent ? "bg-[#f8f9fa]" : "bg-white"} min-h-screen pb-16`} ref={ref}>
            <Editor
                toolbarClassName="sticky top-0 z-50"
                editorClassName={`mt-6 p-10 bg-white max-w-4xl editor-h mx-auto ${uPresent && "border shadow-lg"}`}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}

export default TextEditor