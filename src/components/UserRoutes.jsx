import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/Movies/MovieDetails";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
                <Route path="/movie/:movieId/cast" element={<MovieDetails cast="true" />} />
                    <Route path="/movie/:movieId/reviews" element={<MovieDetails reviews="true" />} />
            
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default UserRoutes;