import { NavLink } from "react-router-dom";

import { items } from "./items";

import { Header } from "./navbar.styled";

const Navbar = () => {
    const eles = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to}>{text}</NavLink>
        </li>)
    );

    return (
        <Header>
            <ul>
                {eles}
                {/* <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/movie'}>Movies</NavLink>
                </li> */}
            </ul>
        </Header>
    );
};

export default Navbar;