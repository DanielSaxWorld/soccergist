import React from "react";
import "./Mycartfooter.css";

const Mycartfooter = () => {
  return (
    <div className="main-cart-footer">
      <img className="Footer-bg-cart" src="./Blue1.png" />
      <div className="Footer-socials-cart">
        <h2 className="socials-cart">Follow us on Socials</h2>
        <div className="social2-cart">
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
        </div>
        <div className="social3-cart">
          <img className="i-g-cart" src="instagram3.png" alt="" />
          <img className="f-b-cart" src="./facebook3.png" alt="" />
          <img className="t-w-cart" src="twitter3.png" alt="" />
          <img className="y-b-cart" src="youtube3.png" alt="" />
        </div>
        <div className="footer-mail-cart">
          <h3 className="footer-mail1-cart">Mail us on</h3>
          <p className="footer-mail2-cart">Soccergistonline@gmail.com</p>
        </div>
        <div className="footer-inc-cart">
          <img src="./circle.png" />
          <p>2023</p>
        </div>
      </div>
      <section className="Footer-trend-cart">
        <h1 className="Footer-trend-link-cart">Quick Links</h1>
        <p className="Footer-trend-league-cart">League Competitions</p>
        <p className="Footer-trend-euro-cart">European Competitons</p>
        <p className="Footer-trend-kits-cart">Kits Bazaar</p>
        <p className="Footer-trend-pol-cart">Polls</p>
      </section>
      <section className="Footer-trend1-cart">
        <p className="Footer-trend1-use-cart">Terms of Use</p>
        <p className="Footer-trend1-pri-cart">Privacy Policies</p>
        <p className="Footer-trend1-us-cart">Contact Us</p>
        <p className="Footer-trend1-play-cart">Download Apps on Playstore</p>
      </section>
    </div>
  );
};

export default Mycartfooter;
