import Image from "next/image"
import ContentHeader from "./ContentHeader"
import DocumentCard from "./DocumentCard"

function Content() {
    const cards = [
        { id: 1, title: "Resume", imgUrl: "https://lh3.google.com/u/0/d/12UziurAICRSBYYTrdshrYdv4zuNxXv4QIabNhAZNuVw=w208-iv6", lastOpened: new Date().toString()},
        { id: 2, title: "Untitled document", imgUrl: "https://lh3.google.com/u/0/d/1phtZnH8x7upFqe32spP1mK9SKHzMGAjGPq361_cH5XE=w208-iv1", lastOpened: new Date().toString()},
        { id: 3, title: "Spiral Traversal", imgUrl: "https://lh3.google.com/u/0/d/1Il6_pIXLCS9WUuPlPY9X397yvUuNkkKxJsw1eSQxy1A=w208-iv16", lastOpened: new Date().toString()},
        { id: 4, title: "Move Element to End", imgUrl: "https://lh3.google.com/u/0/d/1phtZnH8x7upFqe32spP1mK9SKHzMGAjGPq361_cH5XE=w208-iv1", lastOpened: new Date().toString()},
        { id: 5, title: "Palindrom check", imgUrl: "https://lh3.google.com/u/0/d/1jPxFmOOHhnuEuwZ8O3R4mWvLzQ42tahFqsKst4ALCFk=w208-iv1", lastOpened: new Date().toString()},
        { id: 6, title: "Untitled document", imgUrl: "https://lh3.google.com/u/0/d/1jPxFmOOHhnuEuwZ8O3R4mWvLzQ42tahFqsKst4ALCFk=w208-iv1", lastOpened: new Date().toString()},
        { id: 7, title: "Resume", imgUrl: "https://lh3.google.com/u/0/d/1eKirumpmwDWTtKCJKn2HuoQ2NavEfR41whmTyaQcio4=w208-iv921", lastOpened: new Date().toString()},
        { id: 8, title: "Resume", imgUrl: "https://lh3.google.com/u/0/d/1oifpbMg1HmckHNpzIDQJ6ai0wtfklhdc69Jbd67MhHQ=w208-iv93", lastOpened: new Date().toString()},
        { id: 9, title: "Twilio Hatch", imgUrl: "https://lh3.google.com/u/0/d/1IES8uw9f4w9iCsIoArUioYB8ctVRR-TaA1Qu4YhcQ9U=w208-iv10", lastOpened: new Date().toString()},
        { id: 10, title: "Resume", imgUrl: "https://lh3.google.com/u/0/d/1L77Ffiho6-Trr8P50yj_iK-8t2T01Spo_wvyJXSuaUg=w208-iv16", lastOpened: new Date().toString()}
    ]

    return (
        <main className="max-w-7xl mx-auto">
            <ContentHeader />

            <div className="flex flex-row flex-wrap justify-between mt-3">
                {cards.map(card => (
                    <DocumentCard key={card.id} title={card.title} imgUrl={card.imgUrl} lastOpened={card.lastOpened} Image={Image} />
                ))}
            </div>
        </main>
    )
}

export default Content
