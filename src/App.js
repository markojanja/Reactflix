import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Search from "./components/Search";
import MovieView from "./components/MovieView";
import ErrorPage from "./components/ErrorPage";
import Popular from "./components/Popular";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/popular" component={Popular} />
        <Route path="/search">
          <Search keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
