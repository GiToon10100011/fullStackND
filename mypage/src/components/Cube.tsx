import React from "react";
import sigong from "../images/sigong.png";
import "../scss/Cube.scss";

const Cube = () => {
  return (
    <div className="cube-wrap">
      <div className="cubes">
        <div
          className="cube front"
          style={{ backgroundImage: `url(${sigong})` }}
        >
          
        </div>
        <div
          className="cube left"
          style={{ backgroundImage: `url(${sigong})` }}
        >
        </div>
        <div className="cube top" style={{ backgroundImage: `url(${sigong})` }}>
        </div>
        <div
          className="cube right"
          style={{ backgroundImage: `url(${sigong})` }}
        >
        </div>
        <div
          className="cube bottom"
          style={{ backgroundImage: `url(${sigong})` }}
        >
        </div>
        <div
          className="cube back"
          style={{ backgroundImage: `url(${sigong})` }}
        >
        </div>
      </div>
    </div>
  );
};

export default Cube;
