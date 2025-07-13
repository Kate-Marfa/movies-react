import React, { useState, useEffect } from "react";
import MovieItem from "./movieItem";
import Pagination from "./Pagination";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [openPopUpId, setOpenPopUpId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovies = (page) => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=b87819e8c1864d15916329ffb89f98e5`;
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        setCurrentPage(page);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при завантаженні:", error);
        setLoading(false);
        setError("Не вдалося завантажити фільм.");
      });
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const handlePageChange = (newPage) => {
    fetchMovies(newPage);
  };

  const handlePopUpOpen = (movieId) => {
    setOpenPopUpId(movieId);
  };

  const handlePopUpClose = () => {
    setOpenPopUpId(null);
  };

  if (loading) {
    return <p>loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={{
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            overview: movie.overview,
            popularity: movie.popularity,
            releaseDate: movie.release_date,
            id: movie.id,
          }}
          openPopUpId={openPopUpId}
          onPopUpOpen={handlePopUpOpen}
          onPopUpClose={handlePopUpClose}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MovieList;
