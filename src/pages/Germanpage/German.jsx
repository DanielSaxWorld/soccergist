import React from "react";
import "./German.css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Topheader from "../../components/premierleaguekits/topheader/Topheader";
import Featuredshirts from "../../components/premierleaguekits/featuredshirts/Featuredshirts";
import Premierfooter from "../../components/premierleaguekits/premierfooter/Premierfooter";

const German = () => {
  return (
    <div className="german-page">
      <Header />
      <Kitsnavbar />
      <Topheader />
      <Featuredshirts />
      <Premierfooter />
    </div>
  );
};

export default German;
