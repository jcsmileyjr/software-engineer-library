import "./toolsButton.css";
import AddIcon from '../../assets/add-icon.png';
import ListIcon from '../../assets/list-icon.png';
import SortIcon from '../../assets/sort-icon.png';

const ToolsButton = ({title, imageType}) => {
    return(
        <button type="button" className="toolsButton--style">
            {imageType==="add" && 
                <img src={AddIcon} alt="Add icon" className="toolsButtonIcon--style" />
            }
            {imageType==="list" && 
                <img src={ListIcon} alt="List icon" className="toolsButtonIcon--style" />
            }
            {imageType==="sort" && 
                <img src={SortIcon} alt="Sort icon" className="toolsButtonIcon--style" />
            }
            {title}
        </button>
    )
}

export default ToolsButton;