import React from "react";
import MovieItem from "./movieItem";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const API_URL =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=b87819e8c1864d15916329ffb89f98e5";

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
  }

  render() {
    const { loading, error, movies } = this.state;

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
            }}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
