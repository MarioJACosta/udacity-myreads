import PropTypes from "prop-types";
import * as BooksApi from "../utils/BooksAPI";
import {useNavigate} from "react-router-dom";

const options = [
    {
        id: 'move',
        value: 'Move to...',
        disable: true
    },
    {
        id: 'currentlyReading',
        value: 'Currently Reading',
        disable: false
    },
    {
        id: 'wantToRead',
        value: 'Want to Read',
        disable: false
    },
    {
        id: 'read',
        value: 'Read',
        disable: false
    },
    {
        id: 'none',
        value: 'None',
        disable: false
    }
];

const Menu = ({book, updateBooks}) => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        const shelf = event.target.value;

        if (shelf !== "" || shelf !== 'none') {
            BooksApi.update(book, shelf).then(() => {
                updateBooks();
                navigate('/');
            });
        }
    };

    return (
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => {
                handleChange(event)
            }}>
                {options.map((option, index) => (
                    <option key={index} value={option.id} disabled={option.disable}> {option.value}</option>
                ))}
            </select>
        </div>
    )
};

Menu.propTypes = {
    book: PropTypes.object.isRequired,
    updateBooks: PropTypes.func.isRequired,
}

export default Menu;
