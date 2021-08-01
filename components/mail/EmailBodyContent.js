function EmailBodyContent({data}) {
    const { title, time, subject, id, destination, description } = data

    return (
        <div className="pt-16 pl-16 ml-2.5 h-full">
            <p className="break-all email-bg-gray pr-20 pl-10 pt-10 mr-6 h-screen">{description}</p>
        </div>
    )
}

export default EmailBodyContent
