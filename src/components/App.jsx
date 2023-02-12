// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "components/modules/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/Movies/MovieDetails";
// import Cast from "./pages/Movies/Cast";

export const App = () => {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/movie/:movieId/cast" element={<MovieDetails cast="true" />} />
            <Route path="/movie/:movieId/reviews" element={<MovieDetails reviews="true" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
