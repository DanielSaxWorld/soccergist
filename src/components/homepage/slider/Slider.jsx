import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
const Slider = ({
  image1,
  button1,
  button2,
  Header,
  image4,
  text1,
  image5,
  text2,
  news_a,
}) => {
  return (
    <div>
      <div>
        <div className="card-house">
          <div className="transfer-card">
            <img
              className="transfer-img"
              src={`https://soccergistonline.com/admin/app/images/${image1}`}
            />
            <div className="btn-house">
              <button className="transfer-btn1">{button1}</button>
              <button className="transfer-btn2">{button2}</button>
            </div>
            <h1>
              <Link className="transfer-header" to={`/news?news_a=${news_a}`}>
                {Header}
              </Link>
            </h1>
            <div className="transfer-info">
              <div className="comment-time">
                <img src={image4} />
                <p>{text1}</p>
              </div>
              <div className="comment">
                <img src={image5} />
                <p>{text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
