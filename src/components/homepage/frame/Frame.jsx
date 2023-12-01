import React from "react";
import Marquee from "react-fast-marquee";
import "./Frame.css";
const Frame = () => {
  return (
    <div>
      <img src="./Frame.png" className="img-frame" />
      <div className="headline-text">
        <h1 className="center-text1">
          Welcome to the Home of Soccer Enthusiasts!
        </h1>
        <p className="center-text2">
          Soccergistonline is a soccer platform that provides you with Football
          Updates and Gist!
        </p>
        <button className="center-btn">
          Install on Playstore
          <img src="./Ellipse.svg" />
          <img src="./icon-arrow.svg" className="center-arrow" />
        </button>
        <div className="latest-box">
          <h3 className="latest-text1">Latest News</h3>
          <div className="slider">
            <Marquee>
              <div className="slider-text text1">
                <span>
                  Tottenham striker's pursuit by Bayern Munich must be thwarted
                  by Man Utd.
                </span>

                <span>
                  Nottingham Forest sign Swedish from Manchester United on
                  five-year deal.
                </span>
              </div>
              <div className="slider-text text2">
                <span>
                  The Portuguese will likely need to raise his game in 2023-24
                  given the influx.
                </span>
                <span>
                  Man utd will loan out sancho in January after a cold war with
                  the manager.
                </span>
              </div>
            </Marquee>
          </div>
          <img src="./Line.png" className="line-text" />
          <img src="./blue.png" className="blue-box" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
