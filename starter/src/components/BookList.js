import ListBooks from "./ListBooks";
import EmptyBooks from "./EmptyBooks";
import PropTypes from "prop-types";

const BookList = ({shelves, books, getBooks, isLoading}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {books.length > 0
                ? <ListBooks
                    shelves={shelves}
                    books={books}
                    getBooks={getBooks}
                    isLoading={isLoading}
                />
                : <EmptyBooks/>
            }
        </div>
    )
};

BookList.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array,
    getBooks: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default BookList;
