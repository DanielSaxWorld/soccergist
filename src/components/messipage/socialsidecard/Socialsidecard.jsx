import React from "react";
import "./Socialsidecard.css";

const Socialsidecard = () => {
  return (
    <div className="social-side-card">
      <h3 className="tixt11">Connect with us</h3>
      <img className="imgi11" src="./Line2.png" />

      <p className="social-text11">
        <img src="./facebook.svg" />
        <p>Facebook</p>
      </p>
      <p className="social-text11">
        <img src="./instagram.svg" />
        <p>Instagram</p>
      </p>
      <p className="special-textt11">
        <img src="./twitter.svg" />
        <p>Twitter</p>
      </p>
      <p className="special-textt11">
        <img src="./Vector.svg" />
        <p>Whatsapp</p>
      </p>
      <p className="special-textt11">
        <img src="gmail.svg" />
        <p>Soccergistonline@gmail</p>
      </p>
      <p className="special-textt11">
        <img src="youtube.svg" />
        <p>Youtube</p>
      </p>
    </div>
  );
};

export default Socialsidecard;
