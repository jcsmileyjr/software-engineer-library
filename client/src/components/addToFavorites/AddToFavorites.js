import "./addToFavorites.css"
import Heart from '../../assets/heart.svg';

const AddToFavorties = () => {
    return (
        <div className="favoritie--container">
            <img className="book__heartIcon--style" src={Heart} alt="" /> 
            <p>Add to Favorites</p>
        </div>
    )
}

export default AddToFavorties;