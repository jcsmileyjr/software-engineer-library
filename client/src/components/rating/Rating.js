import './rating.css';
import Star from '../../assets/icon-star.svg';

const Rating = ({rating}) => {
    const arrayOfStars = Array(rating.numberOfStars).fill(0);
    return (
        <div className="rating--container">
            <p>{rating.numberOfRating}</p>
            <div className="ratingStar--container">

                {
                    arrayOfStars.map((star, id) => (
                        <img src={Star} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default Rating;