import Head from 'next/head'
import Header from '../../components/document/Header'
import Section from '../../components/document/Section'
import Content from '../../components/document/Content'
import { useState, useEffect, } from "react"
import firebase from "../../fire-config"

function Index({ data }) {
    const [cards, setCards] = useState(data)
    
    return (
        <div>
            <Head>
                <title>Google Docs</title>
                <meta name="description" content="Google like clone" />
                <link rel="icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" />
            </Head>

            <Header />
            <Section />
            <Content cards={cards}/>
        </div>
    )
}

export async function getStaticProps() {
    let data = []
    try {
        const querySnapshot = await firebase.firestore().collection("userDocs").doc("myfakemail@gmail.com").collection("documents").get()
        querySnapshot.forEach(doc => {
            data.push(JSON.parse(JSON.stringify({ id: doc.id, ...doc.data() })))
        })

    } catch (err) {
        console.log('Error getting documents: ', err)
    }

    return {
        props: {
            data: data
        }
    }
}

export default Index
