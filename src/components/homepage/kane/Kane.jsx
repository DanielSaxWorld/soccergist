import React from "react";
import "./Kane.css";
import { Link } from "react-router-dom";

const Kane = ({
  image1,
  news_a,
  button1,
  button2,
  image4,
  image5,
  Header,
  paragraph,
  text1,
  text2,
}) => {
  return (
    <div>
      <div className="Harry-card">
        <img
          src={`https://soccergistonline.com/admin/app/images/${image1}`}
          className="main-img"
        />
        <div className="card-details">
          <div className="btns">
            <button className="btn1">{button1}</button>
            <button className="btn2">{button2}</button>
          </div>
          <h2>
            <Link className="card-text" to={`/news?news_a=${news_a}`}>
              {Header}
            </Link>
          </h2>
          <p className="card-text1">{paragraph}</p>
          <div className="comments">
            <div className="comments1">
              <img src={image4} />
              <p>{text1}</p>
            </div>
            <div className="comments2">
              <img src={image5} />
              <p>{text2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kane;
