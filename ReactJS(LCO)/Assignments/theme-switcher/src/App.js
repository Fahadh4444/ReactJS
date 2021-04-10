import React, { useState } from "react";
import ThemeContext from "./Context/Context";
import HeroSection from "./Components/HeroSection";
import AppTheme from "./themes";


const App = () => {
  const themeHook = useState("dark");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div style={{
        marginTop: "225px"
      }}>
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;