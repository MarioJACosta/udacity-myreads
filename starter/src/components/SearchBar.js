import * as BooksApi from "../utils/BooksAPI"
import {useEffect, useState} from "react";
import BookList from "./BookList";
import {Link} from "react-router-dom";

const SearchBar = () => {
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
                        <BookList books={searchedBooks} isLoading={isLoading}/>
                }
            </div>
        </div>
    )
};

export default SearchBar;