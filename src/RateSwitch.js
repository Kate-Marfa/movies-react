import React from "react";

class RateSwitch extends React.Component {
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
    const { popularity } = this.props;
    const { showRate } = this.state;

    return (
      <div className="movie-rate" onClick={this.toggleRate}>
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
