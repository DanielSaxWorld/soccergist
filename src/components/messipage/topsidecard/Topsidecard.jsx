import React from "react";
import "./Topsidecard.css";

const Topsidecard = ({
  word,
  img,
  word1,
  word2,
  word3,
  word4,
  word5,
  word6,
  word7,
  word8,
  word9,
}) => {
  return (
    <div className="tag-card">
      <h3 className="txt1">{word}</h3>
      <img className="img1" src={img} />
      <div className="side-text">
        <p className="side-text2">{word1}</p>
        <p className="side-text2">{word2}</p>
        <p className="side-text2">{word3}</p>
        <p className="side-text2">{word4}</p>
        <p className="side-text2">{word5}</p>
        <p className="side-text2">{word6}</p>
        <p className="side-text2">{word7}</p>
        <p className="side-text2">{word8}</p>
        <p className="side-text2">{word9}</p>
      </div>
    </div>
  );
};

export default Topsidecard;
