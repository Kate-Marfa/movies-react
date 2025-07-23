import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./app";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Favorite Movies</Link>
          </li>
          <li>
            <Link to="/top-rated-movies">Top Rated Movies</Link>
          </li>
          <li>
            <Link to="/tv-shows">TV Shows</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/top-rated-movies" element={<App />} />
          <Route path="/tv-shows" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
