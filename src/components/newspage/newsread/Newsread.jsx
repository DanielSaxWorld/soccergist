import React from "react";
import "./Newsread.css";

const Newsread = ({
  // Headtext1,
  imagge1,
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
  news_title,
}) => {
  return (
    <div className="news-read-house">
      <div className="head-text-1">
        <h2>{news_title}</h2>
      </div>
      <div className="tags-house">
        <div className="tags-house-1">
          <img className="img-newsread"
            src={`https://soccergistonline.com/admin/app/images/${imagge1}`}
            alt=""
          />
          {text1}
        </div>
        <div className="tags-house-2">
          <img src={image2} />
          <p>{text2}</p>
        </div>
        <div className="elips-house">
          <div className="elips-house-2">
            <img src={image3} alt="" />
            <img src={image5} alt="" />
            <img src={image7} alt="" />
            <img src={image9} alt="" />
            <img src={image11} alt="" />
          </div>
          <div className="elips-house-1">
            <img src={image4} alt="" />
            <img src={image6} alt="" />
            <img src={image8} alt="" />
            <img src={image10} alt="" />
            <img src={image12} alt="" />
          </div>
        </div>
      </div>
      <img src={image13} alt="" className="news-read-image" />
      <div className="news-read-house-btn">
        <button className="news-read-btn">Transfers</button>
        <button className="news-read-btn">Latest</button>
        <button className="news-read-btn">Bayern</button>
        <button className="news-read-btn">Spurs</button>
      </div>
      <div className="news-read-text-1">
        <div>
          <h2 className="news-read-text-2">{Headtext2}</h2>
        </div>
        <div>
          <p className="news-read-text-3">{Paragraph1}</p>
        </div>
      </div>
      <img className="news-read-img" src={image14} />
      <p className="news-read-text-5">{Paragraph2}</p>
    </div>
  );
};

export default Newsread;
