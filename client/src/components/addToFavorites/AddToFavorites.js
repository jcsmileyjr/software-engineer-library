import "./addToFavorites.css"
import Heart from '../../assets/heart.svg';

const AddToFavorties = ({bookID, updateList}) => {
    return (
        <div className="favoritie--container" onClick={() => updateList(bookID)}>
            <img className="book__heartIcon--style" src={Heart} alt="" /> 
            <p>Add to Favorites</p>
        </div>
    )
}

export default AddToFavorties;