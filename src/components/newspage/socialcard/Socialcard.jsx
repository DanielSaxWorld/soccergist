import React from "react";
import "./Socialcard.css";

const Socialcard = () => {
  return (
    <div>
      <div className="social-card">
        <h3 className="tixt1">Connect with us</h3>
        <img className="imgi1" src="./Line2.png" />

        <p className="social-textt1">
          <img src="./facebook.svg" />
          <p>Facebook</p>
        </p>
        <p className="social-textt1">
          <img src="./instagram.svg" />
          <p>Instagram</p>
        </p>
        <p className="special-text1">
          <img src="./twitter.svg" />
          <p>Twitter</p>
        </p>
        <p className="special-text1">
          <img src="./Vector.svg" />
          <p>Whatsapp</p>
        </p>
        <p className="special-text1">
          <img src="gmail.svg" />
          <p>Soccergistonline@gmail</p>
        </p>
        <p className="special-text1">
          <img src="youtube.svg" />
          <p>Youtube</p>
        </p>
      </div>
    </div>
  );
};

export default Socialcard;
