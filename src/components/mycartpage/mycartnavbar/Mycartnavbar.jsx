import React from "react";
import "./Mycartnavbar.css";
import { Link } from "react-router-dom";

const Mycartnavbar = () => {
  return (
    <div>
      <div className="kits-nav-house-cart">
        <div className="nav-bar-cart">
          <div className="profile-cart">
            <img src="./nino.svg" />
            <p>Profile</p>
          </div>
          <Link to="/mycart">
            <div className="my-cart-cart">
              <img src="./midcart.svg" />
              <p>My Cart</p>
            </div>
          </Link>
        </div>
        <div className="search-cart">
          <input className="input-cart" type="text" placeholder="Search" />
          {/* <img className="input-image" src="./search.svg" /> */}
        </div>
        <div className="enable-cart">
          <p>Sign up and Save 10%</p>
        </div>
        <div className="affiliate-cart">
          <p>Become an Affiliate</p>
        </div>
      </div>
    </div>
  );
};

export default Mycartnavbar;
