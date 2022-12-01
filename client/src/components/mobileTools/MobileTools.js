import "./mobileTools.css";
import ToolsButton from "../toolsButton/ToolsButton";

const MobileTools = () => {
    return(
        <section className="mobileTools--container">
            <ToolsButton title="Add a book" imageType="add" />
            <ToolsButton title="View List" imageType="list" />
            <ToolsButton title="Sort" imageType="sort" />
        </section>
    )
}

export default MobileTools;