import React from "react";
import "./Thankyou.css";
import Header from "../../components/homepage/header/Header";
import Mycartnavbar from "../../components/mycartpage/mycartnavbar/Mycartnavbar";
import Maincard from "../../components/thankyoupage/maincard/Maincard";
import Thankyoufooter from "../../components/thankyoupage/thankyoufooter/Thankyoufooter";

const Thankyou = () => {
  return (
    <div className="thankyou-page">
      <Header />
      <Mycartnavbar />
      <Maincard />
      <Thankyoufooter />
    </div>
  );
};

export default Thankyou;
