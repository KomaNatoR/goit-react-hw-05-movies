import { useState, useEffect } from "react";
import axios from "axios";

import PostList from "components/modules/PostList/PostList";

const Home = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
        
        axios.get(URL).then(({ data }) => setState(data.results));
        axios.get(URL).then(({data})=>console.log(data.results));
        
    }, []);

    
    return (
        <>
            <h2>Tranding today</h2>

            {state.length>0&&<PostList items={state} />}
        </>
    );
};

export default Home;