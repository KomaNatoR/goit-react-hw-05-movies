import { useState } from "react";
import axios from "axios";

import PostList from "components/modules/PostList/PostList";

const Movies = () => {
    const [value, setValue] = useState('');
    const [films, setFilms] = useState([]);

    // const [searcParams, setSearchParam] = useSearchParams;
    // const search = searcParams.get('query');

    const onSearch = (e) => {
        e.preventDefault();

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
        setValue(e.currentTarget.value);
        // setSearchParam({ search });
    };


    return (
        <>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onChange} />
                <button type="submit">Search</button>
            </form>

            {films.length > 0 && <PostList items={films} />}
        </>
    );
};

export default Movies;