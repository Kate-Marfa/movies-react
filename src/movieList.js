import React from "react";
import MovieItem from "./movieItem";
import Pagination from "./Pagination";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      totalPages: 1,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies(1);
  }
  fetchMovies = (page) => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=b87819e8c1864d15916329ffb89f98e5`;
    this.setState({ loading: true });

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
          currentPage: page,
          totalPages: data.total_pages,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Помилка при завантаженні:", error);
        this.setState({
          loading: false,
          error: "Не вдалося завантажити фільм.",
        });
      });
  };

  handlePageChange = (newPage) => {
    this.fetchMovies(newPage);
  };

  render() {
    const { currentPage, totalPages, loading, error, movies } = this.state;

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
            }}
          />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default MovieList;
