import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./app";

function Router() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Favorite Movies</Link>
          </li>
          <li className="navItem">
            <Link to="/top-rated-movies">Top Rated Movies</Link>
          </li>
          <li className="navItem">
            <Link to="/tv-shows">TV Shows</Link>
          </li>
              </ul>
              </nav>
        <hr />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/top-rated-movies" element={<App />} />
          <Route path="/tv-shows" element={<App />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
