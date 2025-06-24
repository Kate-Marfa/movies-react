import React from "react";
import MovieList from "./movieList";
import ThemeButton from "./ThemeButton";
import ThemeContext from "./ThemeContext";

class App extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isLight } = this.context;

    const headerStyle = {
      color: isLight ? "#000" : "#fff",
    };

    return (
      <div className="movies-page">
        <h1 style={headerStyle} className="movies-h1">
          Favourite Movies
          <ThemeButton />
        </h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
