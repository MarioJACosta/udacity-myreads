import PropTypes from "prop-types";
import Menu from "./Menu";

const Book = ({shelf, book, updateBooks}) => {
    const style = {
        width: 128,
        height: 193,
    };

    if (book.imageLinks) {
        style.backgroundImage = `url(${book.imageLinks.thumbnail})`
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={style}
                />
                <Menu
                    shelf={shelf}
                    book={book}
                    updateBooks={updateBooks}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors.map((author, index) => (
                    <span key={index}>{(index ? ', ' : '') + author}</span>
                ))}
            </div>
        </div>
    )
};

Book.propTypes = {
    shelf: PropTypes.object,
    book: PropTypes.object.isRequired,
    updateBooks: PropTypes.func.isRequired,
}

export default Book;
