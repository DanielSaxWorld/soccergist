import React from "react";
import "./videoz.css";
import { Link } from "react-router-dom";

const Videos = ({
  Head,
  img1,
  img2,
  img3,
  bttn1,
  bttn2,
  img4,
  img5,
  Heading,
  para,
  txt1,
  txt2,
  news_a,
}) => {
  return (
    <div>
      <h1 className="Top-Heading">{Head}</h1>
      <div className="Messi-card">
        <img
          src={`https://soccergistonline.com/admin/app/images/${img1}`}
          className="Messi-main-img"
        />
        <img src={img2} className="Messi-iconplay" />
        <img src={img3} className="Messi-btn" />
        <div className="Messi-card-details">
          <div className="Messi-btns">
            <button className="Messi-btn1">{bttn1}</button>
            <button className="Messi-btn2">{bttn2}</button>
          </div>
          <h1>
            <Link className="Messi-card-text" to={`/news?news_a=${news_a}`}>
              {Heading}
            </Link>
          </h1>
          <p className="Messi-card-text1">{para}</p>
          <div className="Messi-comments">
            <div className="Messi-comments1">
              <img src={img4} />
              <p>{txt1}</p>
            </div>
            <div className="Messi-comments2">
              <img src={img5} />
              <p>{txt2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
