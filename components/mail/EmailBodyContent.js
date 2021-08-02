function EmailBodyContent({data}) {
    const { title, time, subject, id, destination, description } = data

    return (
        <div className="pt-4 pl-16 ml-2.5 h-full">
            <p className="break-all email-bg-gray p-10 mr-6 h-screen">{description}</p>
        </div>
    )
}

export default EmailBodyContent
