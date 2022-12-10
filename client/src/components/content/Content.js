import "./content.css";
import Book from '../book/Book.js';

const Content = ({books}) => {
    console.log(books);
    return (
        <section className="content--container">
            {books.map( (book) => 
                <Book key={book.bookID} bookData={book} />
            )

            }
        </section>
    )
}

export default Content;