import "../css/App.css";
import SearchBar from "./SearchBar";
import ListBooks from "./ListBooks";
import {Routes, Route} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import * as BooksApi from "../utils/BooksAPI";

const shelves = [
    {
        id: "currentlyReading",
        name: "Currently Read"
    },
    {
        id: "wantToRead",
        name: "Want to Read"
    },
    {
        id: "read",
        name: "Read"
    }
];

function App() {
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
        <Routes>
            <Route exact path="/" element={
                <ListBooks
                    shelves={shelves}
                    books={books}
                    isLoading={isLoading}
                    getBooks={getBooks}
                />
            }>
            </Route>
            <Route exact path="/search" element={<SearchBar books={books} updateBooks={getBooks}/>}> </Route>
        </Routes>
    )
}

export default App;
