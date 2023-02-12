import { Link } from "react-router-dom";

const PostList = ({items}) => {
    const eles = items.map(({id,original_title,original_name}) => (
        <li key={id}>
            <Link to={`/movie/${id}`}>{original_title??original_name}</Link>
        </li>
    ));

    return <ul>{eles}</ul>;
};
PostList.defaultProps = {
    items: [],
};

export default PostList;