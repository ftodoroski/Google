import SectionContent from "./SectionContent"
import SectionHeader from "./SectionHeader"

function Section() {
    return (
        <section className="document-section-bg-palette document-h">
            <div className="max-w-7xl mx-auto">
                <SectionHeader />
                <SectionContent />
            </div>
        </section>
    )
}

export default Section
