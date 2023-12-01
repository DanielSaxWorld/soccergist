import React, { useState } from "react";
import "./Itemcard.css";
import { Link } from "react-router-dom";

const Itemcard = ({ imagi12, }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
    return (
      <div>
        <div className="item-card">
          <img
            src={`https://soccergistonline.com/admin/app/images/${imagi12}`}
            className="item-card-img"
            alt="Product"
          />
        </div>
        <div className="item-des">
          <p className="item-code">item #m112</p>
          <h3 className="item-text">
            Men's Replica Addidas <br /> Manchester United Home <br /> Jersey
            23/24
          </h3>
        </div>
        <div className="price-off-list">
          <p className="price-off-1">#10,000</p>
          <p className="price-off-2">#9,600</p>
          <p className="price-off-3">(8% off)</p>
        </div>
        <p className="size">What is my Size</p>
        <form method="post" action="addtocart">
          <div className="clip-sizes">
            <input type="radio" name="size" id="S" value="S" />
            <label for="S" className="clip-sizes-1">
              S
            </label>
            <input type="radio" name="size" id="M" value="M" />
            <label for="M" className="clip-sizes-2">
              M
            </label>
            <input type="radio" name="size" id="L" value="L" />
            <label for="L" className="clip-sizes-3">
              L
            </label>
            <input type="radio" name="size" id="XXL" value="XXL" />
            <label for="XXL" className="clip-sizes-4">
              XXL
            </label>
            <input name="uin" hidden value="uin" />
          </div>
          <button name="addtocart"></button>
          <p className="count-text">Quantity</p>
          <>
            <div className="count">{count}</div>
            <img
              src="./PlusCircle.svg"
              className="count-add"
              type="button"
              onClick={() => setCount(count + 1)}
            />

            <img
              src="./MinusCircle.svg"
              className="count-minus"
              type="button"
              onClick={() => setCount(count - 1)}
            />
          </>
          <button className="custom-btn">Customize Kits</button>

          <div className="list-card">
            <p className="cart-list-1">Your Cart List</p>
            <p className="cart-list-2">Your cart list is empty</p>
            <p className="cart-list-3">
              There are no items in <br /> your shopping cart
            </p>
          </div>
          <div className="hero-list">
            <h1 className="you-may">You may also like</h1>

            <div>
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
          <div>
            <button
              className="add-to-cart-btn"
              onClick={() => setIsVisible(!isVisible)}
            >
              Add to Cart
            </button>

            {isVisible && (
              <div className="popup-content">
                <h2 className="popup-content-text-1">Your Cart List</h2>
                <div className="content-box">
                  <img src="./jerseysmall.png" />
                  <p className="utd-text-1">Man United Top </p>
                  <div className="manutd-textbox">
                    <p className="utd-text-2">#9,600</p>
                    <p className="utd-text-3">(3)</p>
                  </div>
                  <img src="./deletehash.svg" className="delete-btn" />
                  <img src="./Ellipsehash.svg" alt="" />
                </div>
                <div className="total-box">
                  <div className="total-box-2">
                    <p className="total-text-1">Total</p>
                    <p className="total-text-2">#28,000</p>
                  </div>
                </div>
                <Link to="/paymentpage">
                  <button className="popup-btn">Checkout</button>
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    );
};

export default Itemcard;
