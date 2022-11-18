import PropTypes from "prop-types";
import BookListContent from "./BookListContent";

const BookShelf = ({shelf, books, updateBooks, isLoading}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>

            <div className="bookshelf-books">
                <BookListContent
                    shelf={shelf}
                    books={books}
                    updateBooks={updateBooks}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
};

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array,
    updateBooks: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default BookShelf;
