import React from "react";
import "./Thankyoufooter.css";

const Thankyoufooter = () => {
  return (
    <div>
      <div className="main-thanks-footer">
        <img className="Footer-bg-thanks" src="./Blue1.png" />
        <div className="Footer-socials-thanks">
          <h2 className="socials-thanks">Follow us on Socials</h2>
          <div className="social2-thanks">
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
            <img src="./Ellipse3.png" alt="" />
          </div>
          <div className="social3-thanks">
            <img className="i-g-thanks" src="instagram3.png" alt="" />
            <img className="f-b-thanks" src="./facebook3.png" alt="" />
            <img className="t-w-thanks" src="twitter3.png" alt="" />
            <img className="y-b-thanks" src="youtube3.png" alt="" />
          </div>
          <div className="footer-mail-thanks">
            <h3 className="footer-mail1-thanks">Mail us on</h3>
            <p className="footer-mail2-thanks">Soccergistonline@gmail.com</p>
          </div>
          <div className="footer-inc-thanks">
            <img src="./circle.png" />
            <p>2023</p>
          </div>
        </div>
        <section className="Footer-trend-thanks">
          <h1 className="Footer-trend-link-thanks">Quick Links</h1>
          <p className="Footer-trend-league-thanks">League Competitions</p>
          <p className="Footer-trend-euro-thanks">European Competitons</p>
          <p className="Footer-trend-kits-thanks">Kits Bazaar</p>
          <p className="Footer-trend-pol-thanks">Polls</p>
        </section>
        <section className="Footer-trend1-thanks">
          <p className="Footer-trend1-use-thanks">Terms of Use</p>
          <p className="Footer-trend1-pri-thanks">Privacy Policies</p>
          <p className="Footer-trend1-us-thanks">Contact Us</p>
          <p className="Footer-trend1-play-thanks">
            Download Apps on Playstore
          </p>
        </section>
      </div>
    </div>
  );
};

export default Thankyoufooter;
