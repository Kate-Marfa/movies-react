import React from "react";
import RateSwitch from "./RateSwitch";

class MovieItem extends React.Component {
  render() {
    const { title, poster, overview, popularity } = this.props.movie;
    return (
      <div className="movie-item">
        <div className="movie-details">
          <h2>{title}</h2>
          <p>{overview}</p>
          <RateSwitch popularity={popularity} />
        </div>
        <img src={poster} alt="title" />
      </div>
    );
  }
}

export default MovieItem;
