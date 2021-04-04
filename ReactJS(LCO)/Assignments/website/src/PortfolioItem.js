import React from "react"

import "./assests/CSS/style.css"

const PortfolioItem = ({ dataTarget, link }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={dataTarget}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={link} alt="" />
            </div>
        </div>
    );
};

export default PortfolioItem