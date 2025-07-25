import React, { useState, useEffect } from "react";
import MovieItem from "./movieItem";
import Pagination from "./Pagination";
import useFetchMovies from "./useFetchMovies";

function MovieList({ apiUrl }) {
  const [openPopUpId, setOpenPopUpId] = useState(null);

  const {
    data: movies,
    total: totalPages,
    currentPage,
    loading,
    error,
    changePage,
  } = useFetchMovies({ apiUrl });

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
        onPageChange={changePage}
      />
    </div>
  );
}

export default MovieList;
