import React from "react";
import ThemeContext from "./ThemeContext";

export class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  //   constructor() {
  //   super();
  //   this.state = {
  //     isLight: true,
  //   };
  //   this.toggleTheme = this.toggleTheme.bind(this);
  // }
  // toggleTheme() {
  //   this.setState((prevState) => ({
  //     isLight: !prevState.isLight,
  //   }));

  render() {
    const { isLight, toggleTheme } = this.context;

    return (
      <button className="theme-button" onClick={toggleTheme}>
        {isLight ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#FFA726"
          >
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45-1.79l-1.8 1.79 1.42 1.42 1.79-1.8-1.41-1.41zM12 4V1h-1v3h1zm5 8a5 5 0 11-10 0 5 5 0 0110 0zm1 0h3v-1h-3v1zm-1.76 7.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM12 20v3h1v-3h-1zm-7.76-2.84l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM4 12H1v1h3v-1z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#90CAF9"
          >
            <path d="M12.74 2a9 9 0 008.96 10.1c.11 0 .21 0 .31-.01A9.004 9.004 0 0112 21a9 9 0 01.74-19z" />
          </svg>
        )}
      </button>
    );
  }
}

export default ThemeButton;
