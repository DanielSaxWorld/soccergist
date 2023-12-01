import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="profile-page">
      <div className="profile-white-board">
        <div className="profile-layout">
          <div className="line-home">
            <img clas src="./signupline.svg" alt="" />
            <img src="./signupline.svg" alt="" />
            <img src="./signupline2.svg" alt="" />
          </div>
          <p className="profile-text">Verify your email</p>
          <p className="profile-text-2">
            we prioritize the security of your account. As part of our
            verification process, a unique verification code will be sent to the
            email address you provided. To complete your registration, simply
            enter the code in the designated field on the sign-up screen.
          </p>
          <img src="./verification.svg" />
          <div className="input-house">
            <input type="text" className="input-code" />
            <div onClick={() => setIsVisible(!isVisible)} type="submit">
              <button className="input-btn">Verify Email</button>
            </div>{" "}
            {isVisible && (
              <div className="new-popup-container">
                <div className="new-popup-layout">
                  <div className="three-lines">
                    <img src="./signupline.svg" alt="" />
                    <img src="./signupline.svg" alt="" />
                    <img src="./signupline.svg" alt="" />
                  </div>
                  <p className="custom-text">Customize your Profile</p>
                  <p className="custom-text-2">
                    Take control of your journey by customizing your profile.
                    Choose a profile pictures that resonate whom you are.
                  </p>

                  <img className="oranj-pic" src="./default.png" alt="" />
                  <button className="change-btn">change Picture</button>
                  <div className="final-btn">
                    <button className="skip-btn">Skip</button>
                    <Link to="/kitsbazaar">
                      <button className="comt-btn">Continue</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <p className="input-text">Enter the code below</p>
            <p className="input-text-2">Didn't receive a mail? Resend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
