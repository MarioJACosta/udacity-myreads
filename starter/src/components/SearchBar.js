import * as BooksApi from "../utils/BooksAPI"
import {useCallback, useEffect, useState} from "react";
import BookList from "./BookList";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SearchBar = ({books, updateBooks}) => {
    const [query, setQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateQuery = (query) => {
        setQuery(query.trim());
    };

    const searchBooks = useCallback(async () => {
        setIsLoading(true);

        await BooksApi.search(query, 10)
            .then((response) => {
                if (response.error) {
                    setSearchedBooks([]);
                } else {
                    response.forEach((searchedBook) => {
                        searchedBook.shelf = 'none';
                        books.forEach((book) => {
                            if (book.id === searchedBook.id) {
                                searchedBook.shelf = book.shelf;
                            }
                        });
                    });
                    setSearchedBooks(response);
                }
            });
        setIsLoading(false);

    }, [setIsLoading, query, setSearchedBooks, books]);

    useEffect(() => {
        query !== "" ? searchBooks() : setSearchedBooks([]);
    }, [query, searchBooks, setSearchedBooks]);


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to="/"
                    className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                {
                    searchedBooks.length === 0 && query !== "" && !isLoading
                        ?
                        <div className='no-books'>
                            <p>Couldn't find any books for <i>{query}.</i></p>
                            <p>Please try again with a different query.</p>
                        </div>
                        :
                        <BookList books={searchedBooks} isLoading={isLoading} updateBooks={updateBooks}/>
                }
            </div>
        </div>
    )
};

SearchBar.propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default SearchBar;
