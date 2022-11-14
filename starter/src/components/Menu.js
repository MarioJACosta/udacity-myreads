import PropTypes from "prop-types";
import * as BooksApi from "../utils/BooksAPI";
import {useLocation, useNavigate} from "react-router-dom";

const Menu = ({book, updateBooks, shelf}) => {
    let location = useLocation();
    let navigate = useNavigate();

    const shelfID = shelf ? shelf.id : 'none'

    const handleChange = (event) => {
        let shelf = event.target.value;

        if (shelf !== "" || shelf !== 'none') {
            BooksApi.update(book, shelf).then(() => {
                if (location.pathname === '/search') {
                    navigate('/');
                    return;
                }
                updateBooks();
            })
        }
    };

    return (
        <div className="book-shelf-changer">
            <select value={shelfID} onChange={(event) => {
                handleChange(event)
            }}>
                <option value="move" disabled>
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