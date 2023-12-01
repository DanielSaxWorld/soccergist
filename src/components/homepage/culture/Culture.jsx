import React from "react";
import "./Culture.css";
import { Link } from "react-router-dom";

const Culture = ({
  Header1,
  image1,
  button1,
  button2,
  Header,
  Paragraph,
  image4,
  text1,
  image5,
  text2,
  news_a,
}) => {
  return (
    <section>
      <div>
        <h1 className="culture-header">{Header1}</h1>
      </div>
      <div className="culture-card">
        <img
          className="culture-image"
          src={`https://soccergistonline.com/admin/app/images/${image1}`}
        />
        <div className="culture-text-house">
          {" "}
          <div className="culture-btns">
            <button className="culture-btn1">{button1}</button>
            <button className="culture-btn2">{button2}</button>
          </div>
          <div className="culture-comments hover">
            <h1>
              <Link className="culture-comment1" to={`/news?news_a=${news_a}`}>
                {Header}
              </Link>
            </h1>
          </div>
          <div className="culture-infos">
            <img src={image4} />
            <p className="culture-info1">{text1}</p>
            <img src={image5} />
            <p className="culture-info2">{text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
