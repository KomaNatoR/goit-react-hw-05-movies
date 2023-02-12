import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import popApi from "components/API/popApi";

const Home = () => {
    const [state, setState] = useState([]);
    // const [id, setId] = useState('');
    // console.log("!!!");

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
        
        axios.get(URL).then(({ data }) => setState(data.results));
        axios.get(URL).then(({data})=>console.log(data.results));
        
    }, []);

    
    const popList = state.map(({id,original_title,original_name}) => (
        <li key={id}>
            <Link to={`/movie/${id}`}>{original_title??original_name}</Link>
        </li>
    ));
    return (
        <>
            <h2>Tranding today</h2>
            <ul>
               {popList} 
            </ul>
        </>
    );
};

export default Home;