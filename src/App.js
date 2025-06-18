import React from "react";
import MovieList from "./movieList";

class App extends React.Component {
  render() {
    return (
      <div className="movies-page">
        <h1 className="movies-h1">Favourite Movies</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
