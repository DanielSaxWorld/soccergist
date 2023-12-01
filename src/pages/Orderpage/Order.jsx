import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";

import Header from "../../components/homepage/header/Header";
import Mycartnavbar from "../../components/mycartpage/mycartnavbar/Mycartnavbar";
import Itemcard from "../../components/orderpage/itemcard/Itemcard";
import Orderfooter from "../../components/orderpage/orderfooter/Orderfooter";
const Order = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product_uin = urlParams.get("product_uin");

    axios
      .get(
        `https://www.api.soccergistonline.com/product_details.php?product_uin=${product_uin}`
      )
      .then((response) => {
        setItems(response.data.items); // Update state name to "items"
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="order-page">
      <Header />
      <Mycartnavbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Iterate over the items array and render Itemcard component */}
          {items.map((item, index) => (
            <Itemcard key={item.id} imagi12={item.product_image} />
          ))}
        </>
      )}
      <Orderfooter />
    </div>
  );
};

export default Order;
