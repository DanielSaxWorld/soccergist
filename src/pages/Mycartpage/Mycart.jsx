import React from "react";
import "./Mycart.css";
import Header from "../../components/homepage/header/Header";
import Mycartnavbar from "../../components/mycartpage/mycartnavbar/Mycartnavbar";
import Herosection from "../../components/mycartpage/herosection/Herosection";
import Mycartfooter from "../../components/mycartpage/mycartfooter/Mycartfooter";
const Mycart = () => {
  return (
    <div className="my-cart-page">
      <Header />
      <Mycartnavbar />
      <Herosection />
      <Mycartfooter />
    </div>
  );
};

export default Mycart;
