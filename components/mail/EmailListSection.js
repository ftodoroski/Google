function EmailListSection({ Icon, title, selected }) {

    function returnColorForSection(title) {
        switch (title) {
            case "Primary":
                return 'text-red-600'
                break;
            case "Social":
                return 'google-text-blue'
                break;
            case "Promotions":
                return 'google-text-green'
                break;
            default: 
                return ''
        }
    }

    function returnColorForBackground(title) {
        switch (title) {
            case "Primary":
                return `bg-red-600`
                break;
            case "Social":
                return `google-bg-blue`
                break;
            case "Promotions":
                return `google-bg-green`
                break;
            default: 
                return ''
        }
    }

    return (
        <div className="cursor-pointer hover:bg-gray-hov-email-list-section">
            <div className={`group w-64 h-14 flex items-center`}>
                <Icon className={`ml-4 mr-4 p-2 h-10 w-10 text-gray-c-400 ${!selected && `group-hover:text-black`} ${selected && returnColorForSection(title)}`}/>
                <p className={`text-gray-email-list-section ${!selected && `group-hover:text-black`} ${selected && returnColorForSection(title)}`}>{title}</p>
            </div>

            <div className={`h-0.5 mx-2 rounded-t-sm ${selected && returnColorForBackground(title)}`}></div>
        </div>
    )
}

export default EmailListSection
