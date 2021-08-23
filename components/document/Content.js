import ContentHeader from "./ContentHeader"
import DocumentCard from "./DocumentCard"

function Content({cards}) {

    return (
        <main className="max-w-7xl mx-auto">
            <ContentHeader />

            <div className="flex flex-row flex-wrap justify-start mt-3">
                {cards.map(card => (
                    <DocumentCard key={card.id} id={card.id} fileName={card.fileName} thumbnail={card.thumbnail} created={card.created} modified={card.modified} />
                ))}
            </div>
        </main>
    )
}

export default Content
