import "./mobileTools.css";
import ToolsButton from "../toolsButton/ToolsButton";

const MobileTools = ({viewList}) => {
    const test = () => {
        console.log("testing")
    }

    return(
        <section className="mobileTools--container">
            <ToolsButton title="Add a book" imageType="add" action={test}  />
            <ToolsButton title="View List" imageType="list" action={viewList} />
            <ToolsButton title="Sort" imageType="sort" action={test} />
        </section>
    )
}

export default MobileTools;