import PropTypes from "prop-types";
import Menu from "./Menu";
import BookDetail from "./BookDetail";
import {useState} from "react";

const Book = ({shelf, book, updateBooks}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    onClick={handleOpen}
                />
                <BookDetail book={book} handleClose={handleClose} open={open}/>
                <Menu
                    shelf={shelf}
                    book={book}
                    updateBooks={updateBooks}
                />
            </div>
            <div className="book-title">{book.title}</div>
            {book.length > 0 &&
            <div className="book-authors">
                {book.authors.map((author, index) => (
                    <span key={index}>{(index ? ', ' : '') + author}</span>
                ))}
            </div>
            }
        </div>
    )
};

Book.propTypes = {
    shelf: PropTypes.object,
    book: PropTypes.object.isRequired,
    updateBooks: PropTypes.func.isRequired,
}

export default Book;
