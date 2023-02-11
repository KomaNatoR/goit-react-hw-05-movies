import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Movies = () => {
    const [value, setValue] = useState('');
    const [films, setFilms] = useState([]);

    const onSearch = (e) => {
        e.preventDefault();
        console.dir(value);

        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${value}`;

        axios.get(URL).then(fetchFilms);
        // axios.get(URL).then(resp=>console.log(resp));
    };
    const fetchFilms = ({data}) => {
        // console.log(data.results);

        setFilms(data.results);
    };
    const onChange = (e) => {
        setValue(e.currentTarget.value)
    };

    const filmList=films.map(({id, original_title, original_name})=>(
        <li key={id}>
            <Link to={`/movie/${id}`}>{original_title??original_name}</Link>
        </li>
    ));
    return (
        <>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onChange} />
                <button type="submit">Search</button>
            </form>

            <ul>
                {filmList}
            </ul>
        </>
    );
};

export default Movies;