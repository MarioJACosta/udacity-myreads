import Book from "./Book";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const BookList = ({books, shelf, isLoading}) => {
    return (
        <ol className="books-grid">
            {
                isLoading ?
                    <Spinner/>
                    :
                    books.map((book, index) => (
                        book.shelf === (shelf && shelf.id) &&
                        <li key={index}>
                            <Book book={book}/>
                        </li>
                    ))}

        </ol>
    )
};

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
}

export default BookList;
