import React from "react";
import "../scss/Title.scss";

interface ISectionTitle {
  title: string;
  subTitle?: string;
}

const SectionTitle = ({ title, subTitle }: ISectionTitle) => {
  return (
    <div className="sectionTitle">
      <div className="titleBox">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
