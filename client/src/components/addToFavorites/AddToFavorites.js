import "./addToFavorites.css"
import Heart from '../../assets/heart.svg';

const AddToFavorties = ({bookID, updateList, favorite}) => {
    return (
        <div className="favoritie--container" onClick={() => updateList(bookID)}>
            <img className="book__heartIcon--style" src={Heart} alt="" /> 
            {!favorite &&
                <p>Add to Favorites</p>
            }
            {favorite &&
                <p>Remove from Favorites</p>
            }
        </div>
    )
}

export default AddToFavorties;