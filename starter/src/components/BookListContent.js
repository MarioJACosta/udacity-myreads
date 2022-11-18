import Book from "./Book";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import EmptyShelf from "./EmptyShelf";

const BookListContent = ({shelf, books, updateBooks, isLoading}) => {
    const getBooksInThisShelf = () => {
        if (shelf) {
            return books.filter((book) => (book.shelf === (shelf && shelf.id)));
        }
        return books;
    };

    const booksInShelf = getBooksInThisShelf();

    return (
        <ol className="books-grid">
            {
                isLoading
                    ? <Spinner/>
                    : booksInShelf.length > 0
                        ? booksInShelf.map((book, index) => (
                            <li key={index}>
                                <Book
                                    book={book}
                                    updateBooks={updateBooks}
                                />
                            </li>
                        ))
                        : <EmptyShelf/>
            }
        </ol>
    )
};

BookListContent.propTypes = {
    shelf: PropTypes.object,
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default BookListContent;
