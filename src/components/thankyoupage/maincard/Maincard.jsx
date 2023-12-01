import React from "react";
import "./Maincard.css";

const Maincard = () => {
  return (
    <div>
      <div className="maincard-white-board">
        <div className="sub-card">
          <img className="maincard-img" src="./stylephone.svg" />
        </div>
        <div className="side-content">
          <p className="order-text-1">Order Summary</p>
          <p className="order-text-2">Order Code</p>
          <p className="order-text-3">Delivery Date</p>
          <p className="order-text-4">Your Order</p>
          <p className="order-text-5">Man Utd Shirt (3)</p>
          <p className="order-text-6">d543</p>
          <p className="order-text-7">02/08/23</p>
          <p className="order-text-8">#9,600</p>
        </div>
        <img src="./Line2.png" className="part-line" />
        <p className="total-text-1">Total</p>
        <p className="total-text-2">#28,000</p>
        <button className="pay-card-btn">Print Receipt</button>
        <p className="thanks-text-1">Thank You</p>
        <p className="thanks-text-2">Your order is on the way </p>
      </div>
    </div>
  );
};

export default Maincard;
