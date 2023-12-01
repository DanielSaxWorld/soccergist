import React from "react";
import "./Messireads.css";

const Messireads = ({
  Headtext1,
  image1,
  text1,
  image2,
  text2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  Headtext2,
  Paragraph1,
  image14,
  Paragraph2,
}) => {
  return (
    <div>
      {" "}
      <div className="news-read-house1">
        <div className="head-text-11">
          <h2>{Headtext1}</h2>
        </div>
        <div className="tags-house1">
          <div className="tags-house-11">
            <img src={image1} alt="" />
            <p>{text1}</p>
          </div>
          <div className="tags-house-21">
            <img src={image2} />
            <p>{text2}</p>
          </div>
          <div className="elips-house1">
            <div className="elips-house-21">
              <img src={image3} alt="" />
              <img src={image5} alt="" />
              <img src={image7} alt="" />
              <img src={image9} alt="" />
              <img src={image11} alt="" />
            </div>
            <div className="elips-house-11">
              <img src={image4} alt="" />
              <img src={image6} alt="" />
              <img src={image8} alt="" />
              <img src={image10} alt="" />
              <img src={image12} alt="" />
            </div>
          </div>
        </div>
        <img src={image13} alt="" className="news-read-image1" />
        <div className="news-read-house-btn1">
          <button className="news-read-btn1">Transfers</button>
          <button className="news-read-btn1">Latest</button>
          <button className="news-read-btn1">Bayern</button>
          <button className="news-read-btn1">Spurs</button>
        </div>
        <div className="news-read-text-11">
          <div>
            <h2 className="news-read-text-21">{Headtext2}</h2>
          </div>
          <div>
            <p className="news-read-text-31">{Paragraph1}</p>
          </div>
        </div>
        <img className="news-read-img1" src={image14} />
        <p className="news-read-text-51">{Paragraph2}</p>
      </div>
    </div>
  );
};

export default Messireads;
