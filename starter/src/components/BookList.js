import Book from "./Book";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const BookList = ({shelf, books, updateBooks, isLoading}) => {
    const getBooksInThisShelf = () => {
        if (shelf) {
            return books.filter((book) => (book.shelf === (shelf && shelf.id)));
        }

        return books;
    };

    return (
        <ol className="books-grid">
            {
                isLoading
                    ? <Spinner/>
                    : getBooksInThisShelf().map((book, index) => (
                        <li key={index}>
                            <Book
                                shelf={shelf}
                                book={book}
                                updateBooks={updateBooks}
                            />
                        </li>
                    ))
            }
        </ol>
    )
};

BookList.propTypes = {
    shelf: PropTypes.object,
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default BookList;
