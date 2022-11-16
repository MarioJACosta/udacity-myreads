import BookShelf from "./BookShelf";
import OpenSearchButton from "./OpenSearchButton";
import PropTypes from "prop-types";

const ListBooks = ({shelves, books, getBooks, isLoading}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <OpenSearchButton/>
                <div>
                    {
                        shelves.map((shelf) => (
                            <BookShelf
                                key={shelf.id}
                                shelf={shelf}
                                books={books}
                                updateBooks={getBooks}
                                isLoading={isLoading}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

ListBooks.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    getBooks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default ListBooks;
