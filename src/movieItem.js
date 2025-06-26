import React from "react";
import RateSwitch from "./RateSwitch";
import ThemeContext from "./ThemeContext";
import PopUp from "./PopUp";

class MovieItem extends React.Component {
  static contextType = ThemeContext;

  handlePosterClick = () => {
    const { onPopUpOpen, movie } = this.props;
    onPopUpOpen(movie.id);
  };
  render() {
    const { isLight } = this.context;
    const { movie, openPopUpId, onPopUpClose } = this.props;
    const {
      title,
      poster,
      overview,
      popularity,
      releaseDate,
      id: movieId,
    } = this.props.movie;

    const titleStyle = {
      color: isLight ? "#222" : "#F0f0f0",
    };

    const textStyle = {
      color: isLight ? "#555" : "#ccc",
    };

    const itemStyle = {
      backgroundColor: isLight ? "#F0f0f0" : "#222",
    };
    return (
      <div style={itemStyle} className="movie-item">
        <div className="movie-details">
          <h2 style={titleStyle}>{title}</h2>
          <p style={textStyle}>{overview}</p>
          <RateSwitch popularity={popularity} />
        </div>
        <img src={poster} alt="title" onClick={this.handlePosterClick} />
        {openPopUpId === movieId && (
          <PopUp releaseDate={releaseDate} onClose={onPopUpClose} />
        )}
      </div>
    );
  }
}

export default MovieItem;
