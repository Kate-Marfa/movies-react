import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./app";
import ThemeContext from "./ThemeContext";
import TvShowRedirect from "./TvShowRedirect";


function Router() {
 const { isLight } = useContext(ThemeContext);
    const navItemStyle = {
    color: isLight ? "#000000" : "#ccc",
  };
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul className="navList">
          <li>
            <Link to="/" className="navItem" style={navItemStyle}>
              Favorite Movies
            </Link>
          </li>
          <li>
            <Link
              to="/top-rated-movies"
              className="navItem"
              style={navItemStyle}
            >
              Top Rated Movies
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="navItem" style={navItemStyle}>
              TV Shows
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/top-rated-movies" element={<App />} />
        <Route path="/tv-shows" element={<TvShowRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
