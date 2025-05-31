import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="main about">
      <div className="content-inner">
        <SectionTitle title="about" subTitle="about me" />
        <div>about 본문</div>
      </div>
    </div>
  );
};

export default About;
