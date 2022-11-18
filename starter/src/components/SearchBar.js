import * as BooksApi from "../utils/BooksAPI"
import {useCallback, useEffect, useState} from "react";
import BookListContent from "./BookListContent";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import EmptySearch from "./EmptySearch";

const SearchBar = ({books, updateBooks}) => {
    const [query, setQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateQuery = (query) => {
        setQuery(query.trim());
    };

    const searchBooks = useCallback(async () => {
        setIsLoading(true);

        if (query !== "") {
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
        }
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
                        ? <EmptySearch query={query}/>
                        : <BookListContent books={searchedBooks} isLoading={isLoading} updateBooks={updateBooks}/>
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
