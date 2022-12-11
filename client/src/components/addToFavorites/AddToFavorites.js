import "./addToFavorites.css"
import Heart from '../../assets/heart.svg';

const AddToFavorties = ({bookID}) => {
    const updateUserLocalData = () => {
        //get the local data
        let localData = JSON.parse(localStorage.getItem("userSoftwareLibraryData"));

        // Check for the index of the book if it's already designated as a favorite.
        const ifBookAlreadyDesignatedFavorite = localData.favoriteBooks.findIndex(id => id === bookID);

        // If the index is already designated as a favorite, then remove. If not, then add as a favorite
        if(ifBookAlreadyDesignatedFavorite > -1){
            localData.favoriteBooks.splice(ifBookAlreadyDesignatedFavorite, 1);

        }else{
            localData.favoriteBooks = [...localData.favoriteBooks, bookID];
        }

        // save the updated data to local data
        localStorage.setItem("userSoftwareLibraryData", JSON.stringify(localData));

        // TODO: possible have to create a state in books that shows a heart if FAVE.

    }
    return (
        <div className="favoritie--container" onClick={() => updateUserLocalData()}>
            <img className="book__heartIcon--style" src={Heart} alt="" /> 
            <p>Add to Favorites</p>
        </div>
    )
}

export default AddToFavorties;