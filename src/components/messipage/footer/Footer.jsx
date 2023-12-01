import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="entire-footer">
      <img className="Footer-bg2" src="./Blue1.png" />
      <div className="footer-social-house">
        <h2 className="socials-2">Follow us on Socials</h2>
        <div className="social2-1">
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
        </div>
        <div className="social3-1">
          <img className="i-g-1" src="instagram3.png" alt="" />
          <img className="f-b-1" src="./facebook3.png" alt="" />
          <img className="t-w-1" src="twitter3.png" alt="" />
          <img className="y-b-1" src="youtube3.png" alt="" />
        </div>
        <div className="footer-mail-1">
          <h3 className="footer-mail1-1">Mail us on</h3>
          <p className="footer-mail2-2">Soccergistonline@gmail.com</p>
        </div>
        <div className="footer-inc-1">
          <img src="./circle.png" />
          <p>2023</p>
        </div>
      </div>
      <div className="Footer-trend-1">
        <h1 className="Footer-trend-link-1">Quick Links</h1>
        <p className="Footer-trend-league-1">League Competitions</p>
        <p className="Footer-trend-euro-1">European Competitons</p>
        <p className="Footer-trend-kits-1">Kits Bazaar</p>
        <p className="Footer-trend-pol-1">Polls</p>
      </div>
      <div className="Footer-trend1-1">
        <p className="Footer-trend1-use-1">Terms of Use</p>
        <p className="Footer-trend1-pri-1">Privacy Policies</p>
        <p className="Footer-trend1-us-1">Contact Us</p>
        <p className="Footer-trend1-play-1">Download Apps on Playstore</p>
      </div>
    </div>
  );
};

export default Footer;
