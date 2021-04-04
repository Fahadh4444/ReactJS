import React from "react"

import "./assests/CSS/style.css"

import Item from "./PortfolioItem"

const Portfolio = () => {
    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <Item dataTarget="#portfolioModal1" link="assets/img/portfolio/cabin.png" />
                    <Item dataTarget="#portfolioModal2" link="assets/img/portfolio/cake.png" />
                    <Item dataTarget="#portfolioModal3" link="assets/img/portfolio/circus.png" />
                    <Item dataTarget="#portfolioModal4" link="assets/img/portfolio/game.png" />
                    <Item dataTarget="#portfolioModal5" link="assets/img/portfolio/safe.png" />
                    <Item dataTarget="#portfolioModal6" link="assets/img/portfolio/submarine.png" />
                </div>
            </div>
        </section>
    );
};

export default Portfolio