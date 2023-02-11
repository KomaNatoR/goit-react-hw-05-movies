import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const { movieId } = useParams();    // const params = useParams(); так було!
    // console.log(movieId);            // console.log(params);
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
                <button type="button">go back</button>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="#" width={240} />
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

        </>
    )
};

export default MovieDetails;