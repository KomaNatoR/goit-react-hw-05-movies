import { NavLink } from "react-router-dom";

import { Header } from "./navbar.styled";

const Navbar = () => {
    return (
        <Header>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/movie'}>Movies</NavLink>
                </li>
            </ul>
        </Header>
    );
};

export default Navbar;