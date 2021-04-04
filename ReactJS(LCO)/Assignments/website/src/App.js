import React from 'react'
import "./assests/CSS/style.css"

import Navbar from "./Navbar"
import Design from "./Design"
import Portfolio from "./Portfolio";
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import CopyRight from "./Copyright"
import PorfolioModals from "./PorfolioModals"

const App = () => {
    return (
        <div>
            <Navbar />
            <Design />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <CopyRight />
            <PorfolioModals />
        </div>
    );
};

export default App