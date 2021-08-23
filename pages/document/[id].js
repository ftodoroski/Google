// import { useState, useEffect, useRef } from 'react'
import EditorHeader from "../../components/document/EditorHeader"
import TextEditor from "../../components/document/TextEditor"
import { useRouter } from 'next/router'
import firebase from "../../fire-config"

function DocumentEditor({ data }) {
    const router = useRouter()
    const { fileName, thumbnail, editorState, modified, created } = data

    return (
        <div>
            <EditorHeader fileName={fileName} modified={modified}/>
            <TextEditor />
        </div>
    )
}

export async function getStaticPaths() {
    let data = []
    let paths = []
    try {
        const querySnapshot = await firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").get()
        querySnapshot.forEach(doc => {
            data.push(JSON.parse(JSON.stringify({ id: doc.id })))
        })

        paths = data.map(doc => ({
            params: doc
        }))

    } catch (err) {
        console.log('Error getting documents: ', err)
    }

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const querySnapshot = await firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").doc(`${params.id}`).get()

    return {
        props: {
            data: { id: params.id, ...JSON.parse(JSON.stringify(querySnapshot.data())) }
        }
    }
}


export default DocumentEditor
