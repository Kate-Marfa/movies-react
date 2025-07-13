import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";

function RateSwitch({ popularity }) {
  const [showRate, setShowRate] = useState(false);
  const { isLight } = useContext(ThemeContext);

  const toggleRate = () => {
    setShowRate((prev) => !prev);
  };

  const rateStyle = {
    backgroundColor: isLight ? "#ffffff" : "#ccc",
  };

  return (
    <div style={rateStyle} className="movie-rate" onClick={toggleRate}>
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

export default RateSwitch;
