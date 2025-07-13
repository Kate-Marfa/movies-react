import React, { useContext } from "react";
import RateSwitch from "./RateSwitch";
import ThemeContext from "./ThemeContext";
import PopUp from "./PopUp";

function MovieItem({ onPopUpOpen, onPopUpClose, movie, openPopUpId }) {
  const { isLight } = useContext(ThemeContext);
  const {
    title,
    poster,
    overview,
    popularity,
    releaseDate,
    id: movieId,
  } = movie;

  const handlePosterClick = () => {
    onPopUpOpen(movieId);
  };

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
      <img src={poster} alt="title" onClick={handlePosterClick} />
      {openPopUpId === movieId && (
        <PopUp releaseDate={releaseDate} onClose={onPopUpClose} />
      )}
    </div>
  );
}

export default MovieItem;
