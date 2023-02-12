import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

import Cast from "./Cast";
// import Re
import  image_template  from "../../../pict/image_template.jpg";

const MovieDetails = ({cast,reviews}) => {
    const { movieId } = useParams();    // const params = useParams(); так було!
    // console.log(movieId);            // console.log(params);
    const navigate = useNavigate(); // дозволяє перейти на попередню сторінку!
    const goBack = () => navigate(-1); // Можна вказати i конкретну напр.:("/movie")

    const [poster, setPoster] = useState([]);

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;
        
        axios.get(URL).then(({ data }) => setPoster(data));
        // axios.get(URL).then(({data})=>console.log(data));
    }, [movieId]);
    console.log(poster);

    const { original_title, poster_path, popularity, overview, genres=[] } = poster;
    const genresMap = genres.map(genr => genr.name).join(", ");
    return (
        <>
            <div>
                <button type="button" onClick={goBack}>Go back</button>

                <img src={poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:image_template} alt="#" width={240} />
                <h2>{original_title}</h2>
                <p>User Score: {Math.round(popularity)}%</p>
                <h3>Overviev</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresMap}</p>
            </div>

            <div>
                <h2>Additional information</h2>
                <ul>
                    <NavLink to={`/movie/${movieId}/cast`}><li>Cast</li></NavLink>
                    <NavLink to={`/movie/${movieId}/reviews`}><li>Reviews</li></NavLink>
                </ul>
            </div>

            {cast&&< Cast/>}
            {/* {reviews&&< Cast/>} */}
        </>
    )
};

export default MovieDetails;