import Book from "./Book";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const BookList = ({books, shelf, isLoading, updateBooks}) => {
        const getBooksInThisShelf = () => {
            if (shelf) {
                return books.filter((book) => (book.shelf === (shelf && shelf.id)));
            }

            return books;
        }

        return (
            <ol className="books-grid">
                {
                    isLoading
                        ? <Spinner/>
                        : getBooksInThisShelf().map((book, index) => (
                            <li key={index}>
                                <Book
                                    book={book}
                                    updateBooks={updateBooks}
                                    shelf={shelf}
                                />
                            </li>
                        ))
                }
            </ol>
        )
    }
;

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
}

export default BookList;
