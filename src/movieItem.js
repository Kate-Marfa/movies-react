import React from "react";

class MovieItem extends React.Component {
  render() {
    const { title, poster, overview } = this.props.movie;
    return (
      <div className="movie-item">
        <div className="movie-details">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
        <img src={poster} alt="title" />
      </div>
    );
  }
}

export default MovieItem;
