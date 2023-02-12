import { useEffect, useState } from "react";
import axios from "axios";

import PostSearchForm from "components/modules/PostSearchForm/PostSearchForm";
import PostList from "components/modules/PostList/PostList";

const Movies = () => {
    const [filmName, setFilmName] = useState('');
    const [filmsArr, setFilmsArr] = useState([]);

    // const [searcParams, setSearchParam] = useSearchParams;
    // const search = searcParams.get('query');

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${filmName}`;

        axios.get(URL).then(fetchFilms);
        axios.get(URL).then(resp=>console.log(resp));    
    }, [filmName]);
    const fetchFilms = ({ data }) => setFilmsArr(data.results);

    const onSearch = ({search}) => setFilmName(search);
    


    return (
        <>
            {<PostSearchForm onSubmit={onSearch} />}

            {filmsArr.length > 0 && <PostList items={filmsArr} />}
        </>
    );
};

export default Movies;