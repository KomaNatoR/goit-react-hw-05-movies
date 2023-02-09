import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "components/modules/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
