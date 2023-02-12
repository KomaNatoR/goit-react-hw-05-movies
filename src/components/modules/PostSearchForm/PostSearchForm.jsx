import { useState } from "react";

const PostSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search:"",
    });

    const hendleChange = ({target}) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };
    const hendleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ ...state });
        setState({
            search:"",
        });
    };

    return (
        <form onSubmit={hendleSubmit}>
            <input type="text" name="search" value={state.search} onChange={hendleChange} placeholder="Input movie" required />
            <button type="submit">Search</button>
        </form>
    );
};

export default PostSearchForm;