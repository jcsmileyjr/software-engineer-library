import './editbook.css'
import EditPen from '../../assets/edit-pen.svg';

const EditBook = () => {
    return(
        <p className="editBook--container">
            <img className="book__editBookIcon--style" src={EditPen} alt="" /> 
            <span>Edit Book</span>
        </p>
    )
}

export default EditBook;