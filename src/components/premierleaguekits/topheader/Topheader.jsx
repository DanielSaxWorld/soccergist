import React from "react";
import "./Topheader.css";

const Topheader = () => {
  return (
    <div className="top-text-house">
      <h1 className="top-text1">Premier League Kits</h1>
      <div className="shirts-text">
        <h3>Shirts</h3>
      </div>
      <div className="see-more-text">
        <p>See more shirts</p>
        <img src="./round.svg" alt="" />
        <img className="round-home" src="./Clip.svg" alt="" />
      </div>
    </div>
  );
};

export default Topheader;
