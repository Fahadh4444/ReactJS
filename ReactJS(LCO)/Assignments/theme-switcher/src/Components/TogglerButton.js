import React, { useContext } from "react";

import ThemeContext from "../Context/Context";

import AppTheme from "../themes";


const Button = (border) => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div>
            <p>{themeMode}</p>
            <button style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#FFF",
                border: `${border.border}`
            }}
                onClick={() => {
                    setThemeMode(themeMode === "light" ? "dark" : "light")
                }}
            >Click Me To change Theme</button>
        </div>
    )
}

export default Button