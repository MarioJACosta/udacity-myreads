import PropTypes from "prop-types";
import * as BooksApi from "../utils/BooksAPI";

const Menu = ({book}) => {
    const handleChange = (event) => {
        BooksApi.update(book, event.target.value)
    };

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => {
                handleChange(event)
            }}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading"> Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
};

Menu.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Menu;