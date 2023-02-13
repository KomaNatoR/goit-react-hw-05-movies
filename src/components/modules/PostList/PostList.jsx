import { Link, useLocation } from "react-router-dom";

const PostList = ({ items }) => {
    const location = useLocation();
    // console.log("PostList:",location);

    const eles = items.map(({id,original_title,original_name}) => (
        <li key={id}>
            <Link state={{from:location}} to={`/movie/${id}`}>{original_title??original_name}</Link>
        </li>
    ));

    return <ul>{eles}</ul>;
};
PostList.defaultProps = {
    items: [],
};

export default PostList;