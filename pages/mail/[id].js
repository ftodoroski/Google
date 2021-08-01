import { useRouter } from 'next/router'
import EmailHeader from '../../components/mail/EmailHeader'
import EmailBodyContent from '../../components/mail/EmailBodyContent'
import EmailHeaderDetails from '../../components/mail/EmailHeaderDetails'
import EmailSettings from '../../components/mail/EmailSettings'
import Header from "../../components/mail/Header"
import Sidebar from "../../components/mail/Sidebar"
import firebase from "../../fire-config"

function EmailDetails({data}) {
    const router = useRouter()
    const {title, time, subject, id, destination, description} = data

    console.log(data)
    
    return (
        <div className="h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow">              
                    <EmailSettings router={router}/>
                    <EmailHeader subject={subject}/>
                    <EmailHeaderDetails title={title} destination={destination} time={time}/>
                    <EmailBodyContent data={data}/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    let data = []
    let paths = []
    try {
        const querySnapshot = await firebase.firestore().collection("emails").get()
        querySnapshot.forEach(doc => {
            data.push(JSON.parse(JSON.stringify({ id: doc.id})))
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
    const querySnapshot = await firebase.firestore().collection("emails").doc(`${params.id}`).get()

    return {
        props: {
            data: { id: params.id, ...JSON.parse(JSON.stringify(querySnapshot.data())) }
        }
    }
}

export default EmailDetails
