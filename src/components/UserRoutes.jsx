import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from "./pages/Home/Home";
// import Movies from "./pages/Movies/Movies";
// import MovieDetails from "./pages/Movies/MovieDetails";
// import Cast from "./pages/Movies/Cast";
// import Reviews from "./pages/Movies/Reviews";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/Movies/MovieDetails"));
const Cast = lazy(() => import("./pages/Movies/Cast"));
const Reviews = lazy(()=>import ("./pages/Movies/Reviews"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/movie" element={<Movies />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} >
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="cast" element={<Cast />} />
                    </Route>
                        
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;