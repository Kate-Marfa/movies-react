import React from "react";
import ThemeContext from "./ThemeContext";

class RateSwitch extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      showRate: false,
    };
  }

  toggleRate = () => {
    this.setState((prevState) => ({
      showRate: !prevState.showRate,
    }));
  };

  render() {
    const { isLight } = this.context;
    const { popularity } = this.props;
    const { showRate } = this.state;

    const rateStyle = {
      backgroundColor: isLight ? "#ffffff" : "#ccc",
    };

    return (
      <div style={rateStyle} className="movie-rate" onClick={this.toggleRate}>
        {showRate ? (
          <>
            <span>Rate: {popularity}</span>
            <span className="right-text">Hide Rate</span>
          </>
        ) : (
          <span>Show Rate</span>
        )}
      </div>
    );
  }
}

export default RateSwitch;
