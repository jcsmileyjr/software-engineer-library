import "./book.css";
import Details from "../../assets/details-library.png";
import Rating from "../rating/Rating";
import AddToFavorties from "../addToFavorites/AddToFavorites";
import EditBook from "../editBook/EditBook";
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

const Book = ({bookData}) => {
    return(
        <div className="book--container">
            <img className="book__detailIcon--style" src={Details} alt="Hover or click to display more options" />
            <div className="bookInformation--container">
                <p className="book__title--style">{bookData.title}</p>
                <hr />
                <p>{bookData.author}</p>
                <p>{bookData.date}</p>
                <p>{bookData.platform}</p>
                <p>{bookData.category}</p>
                <Rating rating={bookData.rating} />
            </div>
            <div className="detailsInformation--container">
                <p className="book__title--style">React Testing Library – Tutorial with JavaScript Code Examples</p>
                <AddToFavorties bookID={bookData.bookID} />
                <EditBook />
                <Rating rating={bookData.rating} />
                
            </div>
        </div>
    )
}

export default Book;