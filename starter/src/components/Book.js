import PropTypes from "prop-types";
import Menu from "./Menu";

const Book = ({book, updateBooks, shelf}) => {
    let style = {
        width: 128,
        height: 193,
    }

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
                    book={book}
                    updateBooks={updateBooks}
                    shelf={shelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;