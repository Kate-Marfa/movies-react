import React from "react";
import RateSwitch from "./RateSwitch";
import ThemeContext from "./ThemeContext";

class MovieItem extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isLight } = this.context;
    const { title, poster, overview, popularity } = this.props.movie;

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
        <img src={poster} alt="title" />
      </div>
    );
  }
}

export default MovieItem;
