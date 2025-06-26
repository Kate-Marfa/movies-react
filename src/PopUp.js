import React from "react";

export class PopUp extends React.Component {
  render() {
    const { releaseDate, onClose } = this.props;
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="popup-close" onClick={onClose}>
            x
          </button>
          <p>
            <strong>Release Date:</strong> {releaseDate}
          </p>
        </div>
      </div>
    );
  }
}

export default PopUp;
