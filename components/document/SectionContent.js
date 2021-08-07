import DocumentTemplate from "./DocumentTemplate"
import Image from "next/image"

function SectionContent() {
    return (
        <div className="flex justify-between mt-3">
            <DocumentTemplate title={"Blank"} subTitle={""} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Resume"} subTitle={"Coral"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/10bJALGfGJG8BrzBSmG6EznIq6-84l1TZkQ-HC8jO368_400.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Resume"} subTitle={"Serif"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Letter"} subTitle={"Spearmint"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/10e8_E36oj6_LuCRzckBFX_9oqbCHntmYB-jxB5U9gsw_400_2.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Project proposal"} subTitle={"Tropic"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Brochure"} subTitle={"Geometric"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/1TojfPV3jurwEV2RpmVqnCCCR4z9g2eQBZ40XTHPBqk8_400_3.png"} url={""} Image={Image}/>
            <DocumentTemplate title={"Report"} subTitle={"Luxe"} imgURL={"https://ssl.gstatic.com/docs/templates/thumbnails/1OLxGsoZ-q6o9MiMbWpY7FngEKzF94SS6fZXAwo-vorM_400_2.png"} url={""} Image={Image}/>
        </div>
    )
}

export default SectionContent


// - React is about what (reusable components)
// - Since we are using reusable components we can set the 
//   attributes we want in the components because they are all returned with a div

// Width 
//      container 
//          width: 80%;
// 
//      content
//          width: 100%;
// 
// 
// So the parent container has a width of 80% of the screen 
//      then the child will 100% of that 80% 
// 
// Check this on codebox 
// 
// 





