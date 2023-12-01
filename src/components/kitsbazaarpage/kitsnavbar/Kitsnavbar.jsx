import React, { useState } from "react";
import "./Kitsnavbar.css";
import { Link } from "react-router-dom";

const Kitsnavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="kits-nav-house">
      <div className="nav-bar">
        <div className="profile">
          <img src="./profile.svg" />
          <p>Profile</p>
        </div>
        <Link to="/mycart">
          <div className="my-cart">
            <img src="./midcart.svg" />
            <p>My Cart</p>
          </div>
        </Link>
      </div>
      <div className="search">
        <input className="input" type="text" placeholder="Search" />
        {/* <img className="input-image" src="./search.svg" /> */}
      </div>
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="pay-btn-enable"
        type="submit"
      >
        <p>Sign up and Save 10%</p>
      </div>{" "}
      {isVisible && (
        <div className="popup-container-signup">
          <div className="signup-layout">
            <div className="signup-content">
              <div className="line-house">
                <img src="./signupline.svg" alt="" />
                <img src="./signupline2.svg" alt="" />
                <img src="./signupline2.svg" alt="" />
              </div>
              <div className="create-acct-house">
                <p className="create-text">Create your account</p>
                <p className="already-text">Already have an account?</p>
                <p className="signin-text">Sign in</p>
              </div>
              <p className="mail-txt">Email or Username</p>
              <input
                type="text"
                className="mail-input"
                placeholder="Enter email or Username"
              />
              <p className="pass-text">Password</p>
              <input
                type="text"
                className="pass-input"
                placeholder="Enter your password"
              />
              <p className="confirm-text">Confirm Password</p>
              <input
                type="text"
                className="confirm-input"
                placeholder="Renter your password"
              />
              <Link to="/profile">
                <button className="cont-btn">Continue</button>
              </Link>
              <button className="signup-btn">
                <img src="./googleicon.svg" /> Sign up with gmail
              </button>
              <button className="apple-btn">
                <img src="./iconapple.svg" /> Sign in with Apple
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="affiliate">
        <p>Become an Affiliate</p>
      </div>
    </div>
  );
};

export default Kitsnavbar;
