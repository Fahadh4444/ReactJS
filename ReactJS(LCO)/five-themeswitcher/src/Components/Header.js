import React from "react";
import ThemeContext from "../Context/ThemeContext";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
    return (
        <header>
            <h1>Theme Toggler</h1>
            <ThemeToggler />
        </header>

    );
};

export default Header;