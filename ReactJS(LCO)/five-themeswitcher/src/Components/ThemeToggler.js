import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <button
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }}
        >
            <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </button>
    )
}

export default ThemeToggler;