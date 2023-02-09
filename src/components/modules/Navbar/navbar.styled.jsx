import styled from "@emotion/styled";

export const Header = styled.header`
    padding: 11px;

    background-color: darkolivegreen;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

    ul {
        display: flex;
        gap: 15px;
        list-style:none;

        li {
            padding:0;
        }
        a {
            padding:2px 5px;
            border: 0px solid red;
            border-radius: 3px;

            font-weight:500;
            font-size:22px;
            text-decoration: none;
            color: lightgray;

            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        a.active {
            // transform: scale(1.8);
            background-color: lightgray;
            color: darkolivegreen;
        }
    }

`;