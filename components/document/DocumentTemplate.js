function DocumentTemplate({title, subTitle, imgURL, url, Image}) {
    function subTitleSec() {
        return (
            <p className="text-[#5f6368] font-14 font-light tracking-wide pl-1 -mt-1">{subTitle}</p>
        )
    }

    return (
        <div className="mr-5">
            <div className="cursor-pointer relative h-52 w-40 mb-2.5 border rounded border-gray-300 hover:border-[#4c8bf5]">
                <Image src={imgURL} layout="fill" className="border rounded"/>
            </div>

            <p className="font-base tracking-wide pl-1">{title}</p>
            {subTitle && subTitleSec()}
        </div>
    )
}

export default DocumentTemplate
