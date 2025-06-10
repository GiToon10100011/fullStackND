import React from "react";
import "./scss/title.scss";

const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="title-box">
      <h2 className="title">{title}</h2>
      <p className="sub-title">{subTitle}</p>
    </div>
  );
};

export default Title;
