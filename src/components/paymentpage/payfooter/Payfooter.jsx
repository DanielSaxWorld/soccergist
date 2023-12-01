import React from "react";
import "./Payfooter.css";

const Payfooter = () => {
  return (
    <div>
      <div className="main-pay-footer">
        <img className="Footer-bg-pay" src="./Blue1.png" />
        <div className="Footer-socials-pay">
          <h2 className="socials-pay">Follow us on Socials</h2>
          <div className="social2-pay">
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
          </div>
          <div className="social3-pay">
            <img className="i-g-pay" src="instagram3.png" alt="" />
            <img className="f-b-pay" src="./facebook3.png" alt="" />
            <img className="t-w-pay" src="twitter3.png" alt="" />
            <img className="y-b-pay" src="youtube3.png" alt="" />
          </div>
          <div className="footer-mail-pay">
            <h3 className="footer-mail1-pay">Mail us on</h3>
            <p className="footer-mail2-pay">Soccergistonline@gmail.com</p>
          </div>
          <div className="footer-inc-pay">
            <img src="./circle.png" />
            <p>2023</p>
          </div>
        </div>
        <section className="Footer-trend-pay">
          <h1 className="Footer-trend-link-pay">Quick Links</h1>
          <p className="Footer-trend-league-pay">League Competitions</p>
          <p className="Footer-trend-euro-pay">European Competitons</p>
          <p className="Footer-trend-kits-pay">Kits Bazaar</p>
          <p className="Footer-trend-pol-pay">Polls</p>
        </section>
        <section className="Footer-trend1-pay">
          <p className="Footer-trend1-use-pay">Terms of Use</p>
          <p className="Footer-trend1-pri-pay">Privacy Policies</p>
          <p className="Footer-trend1-us-pay">Contact Us</p>
          <p className="Footer-trend1-play-pay">Download Apps on Playstore</p>
        </section>
      </div>
    </div>
  );
};

export default Payfooter;
