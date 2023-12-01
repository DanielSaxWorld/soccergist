import React from "react";
import "./Nigerian.css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Featuredshirts from "../../components/premierleaguekits/featuredshirts/Featuredshirts";
import Premierfooter from "../../components/premierleaguekits/premierfooter/Premierfooter";
import Topheader from "../../components/premierleaguekits/topheader/Topheader";
const Nigerian = () => {
  return (
    <div className="nigerian-page">
      <Header />
      <Kitsnavbar />
      <Topheader />
      <Featuredshirts />
      <Premierfooter />
    </div>
  );
};

export default Nigerian;
