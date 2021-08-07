import Icon from "@material-tailwind/react/Icon"

function DocumentCard({title, imgUrl, lastOpened, Image}) {
    return (
        <div className="cursor-pointer mr-6 mb-10 doc-card bg-white border rounded border-gray-300 hover:border-[#4c8bf5]">
            <div className="relative h-64 w-full mb-1 rounded" style={{"background-image": `url(${imgUrl})`, }}></div>

            {/* For the title if it gets to long it needs to be cut and made with dots */}
            <div className="doc-card-info py-2.5 pl-2.5 pr-1 border-t border-gray-300">
                <h4 className="ml-1">{title}</h4>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="h-8 w-8">
                            <div className="text-[#4c8bf5] flex justify-center pt-1">
                                <Icon name="article" size="2xl" />
                            </div>
                        </div>
                        <p className="text-[#80868b] text-xs">{`Opened ${lastOpened.split(" ")[1]} ${lastOpened.split(" ")[2]}, ${lastOpened.split(" ")[3]}`}</p>
                    </div>

                     <div className="h-8 w-8 hover:hover-doc-info ml-4">
                        <div className="cursor-pointer text-[#5f6368] flex justify-center pt-1">
                            <Icon name="more_vert" size="2xl" />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DocumentCard
