import React, { useState, useContext, use } from "react";
import ThemeContext, { isLight } from "./ThemeContext";
import ThemeButton from "./ThemeButton";
import MovieList from "./movieList";

const TopRatedMoviesPage = () => {
  const { isLight } = useContext(ThemeContext);

  const headerStyle = {
    color: isLight ? "#000" : "#fff",
  };
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=b87819e8c1864d15916329ffb89f98e5`;

  return (
    <div className="movies-page">
      <h1 style={headerStyle} className="movies-h1">
        Top Rated Movies
        <ThemeButton />
      </h1>
      <MovieList apiUrl={API_URL} />
    </div>
  );
};

export default TopRatedMoviesPage;
