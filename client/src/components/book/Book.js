import "./book.css";
import Details from "../../assets/details-library.png";
import Rating from "../rating/Rating";

const Book = () => {

    const testRating = {numberOfStars:3, numberOfRating: 144}
    return(
        <div className="book--container">
            <img className="book__detailIcon--style" src={Details} alt="Hover or click to display more options" />
            <div className="bookInformation--container">
                <p className="book__title--style">React Testing Library – Tutorial with JavaScript Code Examples</p>
                <hr />
                <p>Nathan Sebhastian</p>
                <p>MARCH 7, 2021</p>
                <p>www.freecodecamp.org</p>
                <p>Testing</p>
                <Rating rating={testRating} />
            </div>
            <div className="detailsInformation--container">
                <Rating rating={testRating} />
                Hello World
            </div>
        </div>
    )
}

export default Book;