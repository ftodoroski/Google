import { useState, useEffect } from "react"
import { EmailsContext } from "../../components/mail/EmailsContext"
import Body from "../../components/mail/Body"
import Header from "../../components/mail/Header"
import Sidebar from "../../components/mail/Sidebar"
import firebase from "../../fire-config"

function inbox({data}) {
    const [emails, setEmails] = useState(data)
    
    return (
        <div className="h-screen">
            <Header />
            <div className="flex">
                    <Sidebar />
                <EmailsContext.Provider value={{ emails, setEmails }}>
                    <Body />
                </EmailsContext.Provider>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    let data = []
    try {
        const querySnapshot = await firebase.firestore().collection("emails").get()
        querySnapshot.forEach(doc => {
            data.push(JSON.parse(JSON.stringify({id: doc.id, ...doc.data()})))
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

export default inbox


// Serialization means in a JSON format 
//      The firestore db does not return JSON formatted data so just do JSON.parse(JSON.stringify(data))
//      Even thought i was pushing into an array the objs the getStaticProps method wanted JSON formated data
//      I think in the documents it said that the querySnapshot returns a document object its an object but not a JSON object

// Big Lesson is 
//      Learning how to read 3rd party documention which is a skill