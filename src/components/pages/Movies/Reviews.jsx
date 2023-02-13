import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();
    // console.log(movieId);

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
        
        axios.get(URL).then(({ data }) => setReviews(data.results));
        // axios.get(URL).then(({data})=>console.log(data.results));     
    });

    const reviewsList = reviews.map(({id, author, content}) => (
        <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
        </li>
    ))
    return (
        <ul>
            {reviewsList}
        </ul>
    );
};

export default Reviews;