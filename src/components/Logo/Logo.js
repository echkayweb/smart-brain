import React from "react";
import Tilty from "react-tilty";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="Tilt br-2 shadow-2"
        max = { 55 }
        style={{ height: 150, width: 150 }}
      >
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} alt="Logo" src={brain} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
