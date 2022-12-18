import './rating.css';
import Star from '../../assets/icon-star.svg';

const Rating = ({rating}) => {
    const arrayOfStars = Array(rating.numberOfStars).fill(0);
    return (
        <div className="rating--container">
            <div className="ratingStar--container">
                <p className='ratingNumber--style'>{rating.numberOfRating}</p>

                {
                    arrayOfStars.map((star, id) => (
                        <img src={Star} alt="" key={id} />
                    ))
                }
            </div>
            <p className='ratingHint--container'><span className='ratingHint--style'>Click to add a STAR</span></p>
            
            
        </div>
    )
}

export default Rating;