import axios from "axios";
import { useEffect, useState } from "react";

import  image_template  from "../../../pict/image_template.jpg";

const Cast = () => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const KEY = '7456877804751c2ee672618d82b01711';
        const URL = `https://api.themoviedb.org/3/movie/703451/credits?api_key=${KEY}&language=en-US`;
        
        axios.get(URL).then(({ data }) => setCast(data.cast));
        // axios.get(URL).then(({data})=>console.log('cast:',data.cast));
    }, []);

    const castList = cast.map(({name, profile_path}) => (
        <li key={name}>
            <p>{name}</p>
            <img src={profile_path?`https://image.tmdb.org/t/p/original${profile_path}`:image_template} alt="#" width={60} />
        </li>
    ));
    return (
        <ul>
            {castList}
        </ul>
    );
};

export default Cast;