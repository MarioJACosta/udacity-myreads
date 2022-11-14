import BookShelf from "./BookShelf";
import OpenSearchButton from "./OpenSearchButton";
import PropTypes from "prop-types";
import React, {useCallback, useEffect, useState} from "react";
import * as BooksApi from "../utils/BooksAPI";

const ListBooks = ({shelves}) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getBooks = useCallback(async () => {
        const res = await BooksApi.getAll();
        setBooks(res);
        setIsLoading(false);
    }, [setBooks, setIsLoading]);


    useEffect(() => {
        getBooks();
    }, [getBooks]);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <OpenSearchButton/>
                <div>
                    {
                        shelves.map((shelf) => (
                            <BookShelf
                                key={shelf.id}
                                shelf={shelf}
                                books={books}
                                isLoading={isLoading}
                                updateBooks={getBooks}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

ListBooks.propTypes = {
    shelves: PropTypes.array.isRequired,
}

export default ListBooks;