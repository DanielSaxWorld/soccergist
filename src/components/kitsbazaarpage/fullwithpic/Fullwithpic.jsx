import React from "react";
import "./Fullwithpic.css";
import { Link } from "react-router-dom";

const Fullwithpic = ({headtext, lowertext,leagues_link,}) => {
  return (
    <section>
      <div className="whole-section-1">
        <Link to={`/premierleaguekits?leagues_link=${leagues_link}`}>
          <div className="picture-1">
            <h1 className="full-h1">{headtext}</h1>
            <p className="small-h1">{lowertext}</p>
            <div className="card__inner-1">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        {/* <Link to="/laliga">
          <div className="picture-2">
            <h1 className="full-h2">Spanis League Kits</h1>
            <p className="small-h2">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-2">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        <Link to="/italian">
          <div className="picture-3">
            <h1 className="full-h3">Italian League Kits</h1>
            <p className="small-h3">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-3">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        <Link to="/german">
          <div className="picture-4">
            <h1 className="full-h4">German League Kits</h1>
            <p className="small-h4">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-4">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
      </div>

      <div className="whole-section-2">
        <Link to="/french">
          <div className="picture-5">
            <h1 className="full-h5">French League Kits</h1>
            <p className="small-h5">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-5">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        <Link to="/nigerian">
          <div className="picture-6">
            <h1 className="full-h6">Nigerian League Kits</h1>
            <p className="small-h6">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-6">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        <Link to="/national">
          <div className="picture-7">
            <h1 className="full-h7">International Football Kits</h1>
            <p className="small-h7">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-7">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link>
        <Link to="/otherkits">
          <div className="picture-8">
            <h1 className="full-h8">Other Kits</h1>
            <p className="small-h8">
              Check out Varieties of Premier league club kits and{" "}
            </p>
            <div className="card__inner-8">
              <img src="./liverpool.png" />
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default Fullwithpic;
