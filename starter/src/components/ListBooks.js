import BookShelf from "./BookShelf";
import OpenSearchButton from "./OpenSearchButton";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import * as BooksApi from "../utils/BooksAPI";

const ListBooks = ({shelves, toggleShowSearchPage}) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksApi.getAll();
            setBooks(res);
            setIsLoading(false)
        };
        getBooks();
    }, []);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <OpenSearchButton toggleShowSearchPage={toggleShowSearchPage}/>
                <div>
                    {
                        shelves.map((shelf) => (
                            <BookShelf shelf={shelf} books={books} isLoading={isLoading} key={shelf.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

ListBooks.propTypes = {
    shelves: PropTypes.array.isRequired,
    toggleShowSearchPage: PropTypes.func.isRequired,
}

export default ListBooks;