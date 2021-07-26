import Body from "../../components/mail/Body"
import Header from "../../components/mail/Header"
import Sidebar from "../../components/mail/Sidebar"

function inbox() {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default inbox
