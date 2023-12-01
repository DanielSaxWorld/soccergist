import React from "react";
import "./Herosection.css";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div>
      <div className="hero-sec">
        <div className="your-list">
          <p className="blue-text">Your Cart List</p>
        </div>
        <div className="your-empty">
          <p className="black-text">Your cart list is empty</p>
        </div>
        <div className="empty-cart">
          <p className="empty-cart-text">
            There are no items in your shopping cart
          </p>
          <Link to="/kitsbazaar">
            <div className="see-more-text-cart">
              <p>See more shirts</p>
              <img src="./round.svg" alt="" />
              <img className="round-home" src="./Clip.svg" alt="" />
            </div>
          </Link>
        </div>
        <div className="see-more">
          Start Shopping
          <img src="./round.svg" />
          <img src="./Clip.svg" className="see-more-clip" />
        </div>
        <div className="invoice-card">
          <div className="your-card-list">
            <p className="incoming-order-text1">Incoming Order</p>
            <p className="incoming-order-text2">
              Thank you!! Your orders is on the way
            </p>
          </div>
          <div className="item1">
            <p className="item1-text">Item 1</p>
          </div>
          <div className="order-code">
            <p className="order-code-text1">Order Code</p>
          </div>
          <div className="order-code2">
            <p className="order-code-text2">d543</p>
          </div>

          <div className="delivery-date">
            <p className="delivery-title">Delivery Date</p>
            <p className="delivery-code">02/08/23</p>
          </div>
        </div>
      </div>
      <h1 className="you-may">You may also like</h1>

      <div className="you-may-cards">
        <div className="youmay-card">
          <img src="./whiteshorts.png" className="card-img" />
          <div className="text-price">
            <div className="text-price1">
              <div>
                <p>Liverpool 20/21</p>
              </div>
              <div className="home">
                <p>Home Jersey</p>
              </div>
            </div>
          </div>
          <div className="main-price">#10,000</div>
        </div>

        <div className="youmay-card-2">
          <img src="./whiteshorts.png" className="card-img-2" />
          <div className="text-price-2">
            <div className="text-price1-2">
              <div>
                <p>Liverpool 20/21</p>
              </div>
              <div className="home-2">
                <p>Home Jersey</p>
              </div>
            </div>
          </div>
          <div className="main-price-2">#10,000</div>
        </div>

        <div className="youmay-card-3">
          <img src="./whiteshorts.png" className="card-img-3" />
          <div className="text-price-3">
            <div className="text-price1-3">
              <div>
                <p>Liverpool 20/21</p>
              </div>
              <div className="home-3">
                <p>Home Jersey</p>
              </div>
            </div>
          </div>
          <div className="main-price-3">#10,000</div>
        </div>

        <div className="youmay-card-4">
          <img src="./whiteshorts.png" className="card-img-4" />
          <div className="text-price-4">
            <div className="text-price1-4">
              <div>
                <p>Liverpool 20/21</p>
              </div>
              <div className="home-4">
                <p>Home Jersey</p>
              </div>
            </div>
          </div>
          <div className="main-price-4">#10,000</div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
