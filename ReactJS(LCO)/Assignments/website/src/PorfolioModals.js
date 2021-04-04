import React from "react"

import "./assests/CSS/style.css"

import Modal from "./Modals"

const PorfolioModals = () => {
    return (
        <div>
            <Modal id="portfolioModal1" aria="portfolioModal1Label" id2="portfolioModal1Label" link="assets/img/portfolio/cabin.png" />
            <Modal id="portfolioModal2" aria="portfolioModal1Labe2" id2="portfolioModal1Labe2" link="assets/img/portfolio/cake.png" />
            <Modal id="portfolioModal3" aria="portfolioModal1Labe3" id2="portfolioModal1Labe3" link="assets/img/portfolio/circus.png" />
            <Modal id="portfolioModal4" aria="portfolioModal1Labe4" id2="portfolioModal1Labe4" link="assets/img/portfolio/game.png" />
            <Modal id="portfolioModal5" aria="portfolioModal1Labe5" id2="portfolioModal1Labe5" link="assets/img/portfolio/safe.png" />
            <Modal id="portfolioModal6" aria="portfolioModal1Labe6" id2="portfolioModal1Labe6" link="assets/img/portfolio/submarine.png" />
        </div>
    );
};

export default PorfolioModals