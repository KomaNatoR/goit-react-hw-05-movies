import { useState, useEffect } from "react";
import axios from "axios";

// import popApi from "components/API/popApi";
const KEY = '7456877804751c2ee672618d82b01711';
const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

const Home = () => {
    const [popArr, setPopArr] = useState([]);
    // console.log("!!!");

    useEffect(() => {
        axios.get(URL).then(({ data }) => setPopArr(data.results));
        axios.get(URL).then(({data})=>console.log(data.results));
    }, []);
    
    const popList = popArr.map(({id,original_title,original_name}) => (
        <li key={id}>
            <a href="backdrop_path">{original_title??original_name}</a>
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