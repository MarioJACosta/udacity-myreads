import "./App.css";
import {useState} from "react";
import SearchBar from "./components/SearchBar";
import ListBooks from "./components/ListBooks";

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
    const [showSearchPage, setShowSearchPage] = useState(false);

    const toggleShowSearchPage = () => {
        setShowSearchPage(!showSearchPage)
    };

    return (
        <div className="app">
            {showSearchPage ? (
                <SearchBar toggleShowSearchPage={toggleShowSearchPage}/>
            ) : (
                <ListBooks shelves={shelves} toggleShowSearchPage={toggleShowSearchPage}/>
            )}
        </div>
    );
}

export default App;
