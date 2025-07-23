import React, { useContext } from "react";
import MovieList from "./movieList";
import ThemeButton from "./ThemeButton";
import ThemeContext from "./ThemeContext";

const App = () => {
  const { isLight } = useContext(ThemeContext);

  const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=b87819e8c1864d15916329ffb89f98e5`;

  const headerStyle = {
    color: isLight ? "#000" : "#fff",
  };
  return (
    <div className="movies-page">
      <h1 style={headerStyle} className="movies-h1">
        Favourite Movies
        <ThemeButton />
      </h1>
      <MovieList apiUrl={API_URL} />
    </div>
  );
};

export default App;
