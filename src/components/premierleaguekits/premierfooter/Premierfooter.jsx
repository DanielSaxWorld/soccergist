import React from "react";
import "./Premierfooter.css";

const Premierfooter = () => {
  return (
    <div>
      <img className="Footer-bg-prem" src="./Blue1.png" />
      <div className="whole-content-prem">
        <div className="Footer-socials-prem">
          <h2 className="socials-prem">Follow us on Socials</h2>
          <div className="social2-prem">
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
          </div>
          <div className="social3-prem">
            <img className="i-g-prem" src="instagram3.png" alt="" />
            <img className="f-b-prem" src="./facebook3.png" alt="" />
            <img className="t-w-prem" src="twitter3.png" alt="" />
            <img className="y-b-prem" src="youtube3.png" alt="" />
          </div>
          <div className="footer-mail-prem">
            <h3 className="footer-mail1-prem">Mail us on</h3>
            <p className="footer-mail2-prem">Soccergistonline@gmail.com</p>
          </div>
          <div className="footer-inc-prem">
            <img src="./circle.png" />
            <p>2023</p>
          </div>
        </div>
        <div className="Footer-trend-prem">
          <h1 className="Footer-trend-link-prem">Quick Links</h1>
          <p className="Footer-trend-league-prem">League Competitions</p>
          <p className="Footer-trend-euro-prem">European Competitons</p>
          <p className="Footer-trend-kits-prem">Kits Bazaar</p>
          <p className="Footer-trend-pol-prem">Polls</p>
        </div>
        <div className="Footer-trend1-prem">
          <p className="Footer-trend1-use-prem">Terms of Use</p>
          <p className="Footer-trend1-pri-prem">Privacy Policies</p>
          <p className="Footer-trend1-us-prem">Contact Us</p>
          <p className="Footer-trend1-play-prem">Download Apps on Playstore</p>
        </div>
      </div>
    </div>
  );
};

export default Premierfooter;
