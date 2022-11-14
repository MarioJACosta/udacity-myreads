import "../css/App.css";
import SearchBar from "./SearchBar";
import ListBooks from "./ListBooks";
import {Routes, Route} from "react-router-dom";

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
    return (
        <Routes>
            <Route exact path="/" element={<ListBooks shelves={shelves}/>}> </Route>
            <Route exact path="/search" element={<SearchBar/>}> </Route>
        </Routes>
    )
}

export default App;
