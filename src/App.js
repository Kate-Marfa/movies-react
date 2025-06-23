import React from "react";
import MovieList from "./movieList";
import ThemeButton from "./ThemeButton";

class App extends React.Component {
  render() {
    return (
      <div className="movies-page">
        <h1 className="movies-h1">
          Favourite Movies
          <ThemeButton />
        </h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
