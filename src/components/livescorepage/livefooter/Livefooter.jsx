import React from "react";
import "./Livefooter.css";

const Livefooter = () => {
  return (
    <div>
      <div className="whole-footer-live">
        <img className="Footer-bg-live" src="./Blue1.png" />
        <div className="whole-content">
          <div className="Footer-socials-live">
            <h2 className="socials-live">Follow us on Socials</h2>
            <div className="social2-live">
              <img src="./Ellipse3.png" alt="" />
              <img src="./Ellipse3.png" alt="" />
              <img src="./Ellipse3.png" alt="" />
              <img src="./Ellipse3.png" alt="" />
            </div>
            <div className="social3-live">
              <img className="i-g-live" src="instagram3.png" alt="" />
              <img className="f-b-live" src="./facebook3.png" alt="" />
              <img className="t-w-live" src="twitter3.png" alt="" />
              <img className="y-b-live" src="youtube3.png" alt="" />
            </div>
            <div className="footer-mail-live">
              <h3 className="footer-mail1-live">Mail us on</h3>
              <p className="footer-mail2-live">Soccergistonline@gmail.com</p>
            </div>
            <div className="footer-inc-live">
              <img src="./circle.png" />
              <p>2023</p>
            </div>
          </div>
          <div className="Footer-trend-live">
            <h1 className="Footer-trend-link-live">Quick Links</h1>
            <p className="Footer-trend-league-live">League Competitions</p>
            <p className="Footer-trend-euro-live">European Competitons</p>
            <p className="Footer-trend-kits-live">Kits Bazaar</p>
            <p className="Footer-trend-pol-live">Polls</p>
          </div>
          <div className="Footer-trend1-live">
            <p className="Footer-trend1-use-live">Terms of Use</p>
            <p className="Footer-trend1-pri-live">Privacy Policies</p>
            <p className="Footer-trend1-us-live">Contact Us</p>
            <p className="Footer-trend1-play-live">
              Download Apps on Playstore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livefooter;
