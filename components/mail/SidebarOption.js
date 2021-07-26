function SidebarOption({ Icon, title, selected }) {
    return (
        <div className={`cursor-pointer mb-0 pt-0 pr-3 pb-0 pl-6 ${selected && title === "Inbox" && `bg-red-50 rounded-r-full text-red-600 font-semibold`} ${selected && title !== "Inbox" && `bg-gray-sel rounded-r-full font-semibold`} ${!selected && `hover:bg-gray-hov hover:rounded-r-full`} flex items-center group`}>
            <Icon className={`p-2 h-10 w-10 ${selected && title === "Inbox" && `text-red-600`} ${title === 'Sent' ? `origin-center transform rotate-90` : ''} text-gray-c-400`}/>
            <h3 className="flex-1 ml-3.5">{title}</h3>
        </div>
    )
}

export default SidebarOption


// Concentric - CSS

// A CSS property suggested ordering: starts outside the box model, moves inward.
// Look at the box model from the console -> margin - border - padding - content

// **Based on the box model ordering you want to style the classes for Tailwind