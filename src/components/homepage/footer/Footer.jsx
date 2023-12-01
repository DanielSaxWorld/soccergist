import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <img className="Footer-bg" src="./Blue1.png" />
      <div className="Footer-socials">
        <h2 className="socials">Follow us on Socials</h2>
        <div className="social2">
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
        </div>
        <div className="social3">
          <a href="https://instagram.com/soccergistonlineig?igshid=M2RkZGJiMzhjOQ==">
            {" "}
            <img className="i-g" src="instagram3.png" alt="" />{" "}
          </a>
          <a href="https://www.facebook.com/soccergistOnline?mibextid=rS40aB7S9Ucbxw6v">
            <img className="f-b" src="./facebook3.png" alt="" />
          </a>
          <a href="https://twitter.com/SoccerGistTweet">
            <img className="t-w" src="twitter3.png" alt="" />
          </a>
          <a href="">
            <img className="y-b" src="youtube3.png" alt="" />
          </a>
        </div>
        <div className="footer-mail">
          <h3 className="footer-mail1">Mail us on</h3>
          <a href="Soccergistonline@gmail.com" className="footer-mail2">
            Soccergistonline@gmail.com
          </a>
        </div>
        <div className="footer-inc">
          <img src="./circle.png" />
          <p>2023</p>
        </div>
      </div>
      <div className="footer-social">
        <h1 className="text-one">Quick Links</h1>
        <p className="footer-home-text-1">League Competitions</p>
        <p className="footer-home-text-2">European Competitions</p>
        <Link to="/kitsbazaar" className="footer-home-text-3">
          <p>Kits Bazaar</p>
        </Link>
        <p className="footer-home-text-4">Polls</p>
      </div>
      <section className="Footer-trend1">
        <p className="Footer-trend1-use">Terms of Use</p>
        <p className="Footer-trend1-pri">Privacy Policies</p>
        <p className="Footer-trend1-us">Contact Us</p>
        <p className="Footer-trend1-play">Download Apps on Playstore</p>
      </section>
    </div>
  );
};

export default Footer;
