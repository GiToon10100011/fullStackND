import React from "react";
import SectionTitle from "../components/SectionTitle";
import PortfolioSwiper from "../components/PortfolioSwiper";

const Portfolio = () => {
  return (
    <div className="main portfolio">
      <div className="content-inner">
        <SectionTitle title="portfolio" subTitle="my portfolio" />
        <div className="portfolio-swiper-container">
          <PortfolioSwiper />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
