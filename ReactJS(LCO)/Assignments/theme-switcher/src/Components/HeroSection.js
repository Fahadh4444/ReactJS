import React, { useContext } from "react";
import ThemeContext from "../Context/Context";
import AppTheme from "../themes";
import Button from "./TogglerButton";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: "center"
            }}>
            <h1>Context API theme toggler</h1>
            <p>This is Awesome</p>
            <Button border={currentTheme.border} />
        </div>
    )
}

export default HeroSection