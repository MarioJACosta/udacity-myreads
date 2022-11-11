import PropTypes from "prop-types";
import * as BooksApi from "../utils/BooksAPI"
import {useEffect, useState} from "react";
import BookList from "./BookList";

const SearchBar = ({toggleShowSearchPage}) => {
        const [query, setQuery] = useState("")
        const [searchedBooks, setSearchedBooks] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        const updateQuery = (query) => {
            setQuery(query.trim())
        }

        useEffect(() => {
            query !== "" ? searchBooks(query) : setSearchedBooks([])
        }, [query])

        const searchBooks = async (query) => {
            setIsLoading(true)
            let response = await BooksApi.search(query, 10);
            response.error ? setSearchedBooks([]) : setSearchedBooks(response);
            setIsLoading(false)
        };

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a
                        className="close-search"
                        onClick={() => toggleShowSearchPage()}
                    >
                        Close
                    </a>
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
                            <span>There are no books</span>
                            :
                            <BookList books={searchedBooks} isLoading={isLoading}/>
                    }
                </div>
            </div>
        )
    }
;

SearchBar.propTypes = {
    toggleShowSearchPage: PropTypes.func.isRequired,
}

export default SearchBar;