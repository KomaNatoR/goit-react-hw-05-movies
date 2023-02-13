import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import PostSearchForm from "components/modules/PostSearchForm/PostSearchForm";
import PostList from "components/modules/PostList/PostList";

const Movies = () => {
    const [filmsArr, setFilmsArr] = useState([]);

    const [searchParams, setSearchParam] = useSearchParams();// searchParams це як стейт!
    const search = searchParams.get('query'); // тут пишеться назва параметру!
    // console.log(search);

    useEffect(() => {
        if (!search) return;
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${search}`;

        axios.get(URL).then(fetchFilms);
        axios.get(URL).then(resp=>console.log(resp));    
    }, [search]);
    const fetchFilms = ({ data }) => setFilmsArr(data.results);

    const onSearch = ({search}) => setSearchParam({query:search}); // встановлення searchParams, можна через кому декілька штук!
    

    return (
        <>
            {<PostSearchForm onSubmit={onSearch} />}

            {filmsArr.length > 0 && <PostList items={filmsArr} />}
        </>
    );
};

export default Movies;