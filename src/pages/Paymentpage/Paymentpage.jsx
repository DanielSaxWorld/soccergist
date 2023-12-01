import React from "react";
import "./Paymentpage.css";
import Header from "../../components/homepage/header/Header";
import Mycartnavbar from "../../components/mycartpage/mycartnavbar/Mycartnavbar";
import Hero from "../../components/paymentpage/hero/Hero";
import Payfooter from "../../components/paymentpage/payfooter/Payfooter";

const Paymentpage = () => {
  return (
    <div className="payment-page">
      <Header />
      <Mycartnavbar />
      <Hero />
      <Payfooter />
    </div>
  );
};

export default Paymentpage;
