import React from "react";
import "./Orderfooter.css";

const Orderfooter = () => {
  return (
    <div>
      <div className="main-order-footer">
        <img className="Footer-bg-order" src="./Blue1.png" />
        <div className="Footer-socials-order">
          <h2 className="socials-order">Follow us on Socials</h2>
          <div className="social2-order">
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
          </div>
          <div className="social3-order">
            <img className="i-g-order" src="instagram3.png" alt="" />
            <img className="f-b-order" src="./facebook3.png" alt="" />
            <img className="t-w-order" src="twitter3.png" alt="" />
            <img className="y-b-order" src="youtube3.png" alt="" />
          </div>
          <div className="footer-mail-order">
            <h3 className="footer-mail1-order">Mail us on</h3>
            <p className="footer-mail2-order">Soccergistonline@gmail.com</p>
          </div>
          <div className="footer-inc-order">
            <img src="./circle.png" />
            <p>2023</p>
          </div>
        </div>
        <section className="Footer-trend-order">
          <h1 className="Footer-trend-link-order">Quick Links</h1>
          <p className="Footer-trend-league-order">League Competitions</p>
          <p className="Footer-trend-euro-order">European Competitons</p>
          <p className="Footer-trend-kits-order">Kits Bazaar</p>
          <p className="Footer-trend-pol-order">Polls</p>
        </section>
        <section className="Footer-trend1-order">
          <p className="Footer-trend1-use-order">Terms of Use</p>
          <p className="Footer-trend1-pri-order">Privacy Policies</p>
          <p className="Footer-trend1-us-order">Contact Us</p>
          <p className="Footer-trend1-play-order">Download Apps on Playstore</p>
        </section>
      </div>
    </div>
  );
};

export default Orderfooter;
