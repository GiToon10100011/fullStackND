import React from "react";
import BigTitle from "../components/BigTitle";
import Cube from "../components/Cube";

const Main = () => {
  return (
    <div className="main index">
      <div className="content-inner">
        <BigTitle
          title="Hello"
          desTitle="My Name is"
          subTitle="Frontend Developer"
        />
        <Cube />
      </div>
    </div>
  );
};

export default Main;
