import React from "react";
import "./Livescore.css";
import Header from "../../components/homepage/header/Header";
import Livematches from "../../components/livescorepage/livematches/Livematches";
import Livetabs from "../../components/livescorepage/livetabs/Livetabs";
import Livefooter from "../../components/livescorepage/livefooter/Livefooter";

const Livescore = () => {
  return (
    <div className="livescore-page">
      <Header />
      <Livematches />
      <Livetabs />
      <Livefooter />
    </div>
  );
};

export default Livescore;
