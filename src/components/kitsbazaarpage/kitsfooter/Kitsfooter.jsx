import React from "react";
import "./Kitsfooter.css";

const Kitsfooter = () => {
  return (
    <div className="whole-footer">
      <img className="Footer-bg-kits" src="./Blue1.png" />
      <div className="whole-content">
        <div className="Footer-socials-kits">
          <h2 className="socials-kits">Follow us on Socials</h2>
          <div className="social2-kits">
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
          </div>
          <div className="social3-kits">
            <img className="i-g-kits" src="instagram3.png" alt="" />
            <img className="f-b-kits" src="./facebook3.png" alt="" />
            <img className="t-w-kits" src="twitter3.png" alt="" />
            <img className="y-b-kits" src="youtube3.png" alt="" />
          </div>
          <div className="footer-mail-kits">
            <h3 className="footer-mail1-kits">Mail us on</h3>
            <p className="footer-mail2-kits">Soccergistonline@gmail.com</p>
          </div>
          <div className="footer-inc-kits">
            <img src="./circle.png" />
            <p>2023</p>
          </div>
        </div>
        <div className="Footer-trend-kits">
          <h1 className="Footer-trend-link-kits">Quick Links</h1>
          <p className="Footer-trend-league-kits">League Competitions</p>
          <p className="Footer-trend-euro-kits">European Competitons</p>
          <p className="Footer-trend-kits-kits">Kits Bazaar</p>
          <p className="Footer-trend-pol-kits">Polls</p>
        </div>
        <div className="Footer-trend1-kits">
          <p className="Footer-trend1-use-kits">Terms of Use</p>
          <p className="Footer-trend1-pri-kits">Privacy Policies</p>
          <p className="Footer-trend1-us-kits">Contact Us</p>
          <p className="Footer-trend1-play-kits">Download Apps on Playstore</p>
        </div>
      </div>
    </div>
  );
};

export default Kitsfooter;
