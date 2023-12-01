import React from "react";
import "./Featuredshirts.css";
import { Link } from "react-router-dom";

const Featuredshirts = ({
  name,
  name1,
  name2,
  hoaw,
  hoaw1,
  hoaw2,
  price,
  price1,
  price2,
  imagi1,
  imagi2,
  imagi3,
  product_uin,
}) => {
  return (
    <div className="featured-shirts-container">
      <div className="featured-house-1">
        <section>
          <Link to={`/order?product_uin=${product_uin}`}>
            <div className="featured-card-1">
              <img
                src={`https://soccergistonline.com/admin/app/images/${imagi2}`}
                className="featured-img-1"
              />
              <div className="featured-text-1"></div>
              <p className="tixt1-1">{name}</p>
              <p className="tixt2-1">{hoaw}</p>
              <p className="tixt3-1">{price}</p>
              <p className="tixt4-1">Available Size</p>
              <div className="yellow-text-house-1">
                <p className="yellow-text-1">S</p>
                <p className="yellow-text-1">M</p>
                <p className="yellow-text-1">L</p>
                <p className="yellow-text-1">XL</p>
              </div>
            </div>
          </Link>
        </section>
      </div>

      <div className="shorts-text">
        <p className="shorts-text-one">Shorts</p>
        <p className="shorts-text-two">
          See more shorts <img src="./round.svg" />
          <img src="./Clip.svg" className="round-btn" />
        </p>
      </div>
      <section>
        <div className="featured-house-3">
          <div className="featured-card-9">
            <img
              src={`https://soccergistonline.com/admin/app/images/${imagi1}`}
              className="featured-img-9"
            />
            <div className="featured-text-9"></div>
            <p className="tixt1-9">{name1}</p>
            <p className="tixt2-9">{hoaw1}</p>
            <p className="tixt3-9">{price1}</p>
            <p className="tixt4-9">Available Size</p>
            <div className="yellow-text-house-9">
              <p className="yellow-text-9">S</p>
              <p className="yellow-text-9">M</p>
              <p className="yellow-text-9">L</p>
              <p className="yellow-text-9">XL</p>
            </div>
          </div>
        </div>
      </section>
      <div className="shorts-text-1">
        <p className="shorts-text-one-1">Cleats and Accessories</p>
        <p className="shorts-text-two-1">
          See more Cleats and Accessories <img src="./round.svg" />
          <img src="./Clip.svg" className="round-btn-1" />
        </p>
      </div>
      <section>
        <div className="featured-house-4">
          <div className="featured-card-13">
            <img
              src={`https://soccergistonline.com/admin/app/images/${imagi3}`}
              className="featured-img-13"
            />
            <div className="featured-text-13"></div>
            <p className="tixt1-13">{name2}</p>
            <p className="tixt2-13">{hoaw2}</p>
            <p className="tixt3-13">{price2}</p>
            <p className="tixt4-13">Available Size</p>
            <div className="yellow-text-house-13">
              <p className="yellow-text-13">S</p>
              <p className="yellow-text-13">M</p>
              <p className="yellow-text-13">L</p>
              <p className="yellow-text-13">XL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuredshirts;
