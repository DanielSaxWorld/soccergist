// Premierleaguekits.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Premierleaguekits.css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Topheader from "../../components/premierleaguekits/topheader/Topheader";
import Featuredshirts from "../../components/premierleaguekits/featuredshirts/Featuredshirts";
import Premierfooter from "../../components/premierleaguekits/premierfooter/Premierfooter";

// Premierleaguekits component
const Premierleaguekits = () => {
  const [items, setItems] = useState([]); // Change state name to "items"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const leagues_link = urlParams.get("leagues_link");

    axios
      .get(
        `https://www.api.soccergistonline.com/productsbyleagueshi.php?leagues_link=${leagues_link}`
      )
      .then((response) => {
        setItems(response.data); // Update state name to "items"
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

    // const [items, setItems] = useState([]); // Change state name to "items"
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const leagues_link = urlParams.get("leagues_link");

      axios
        .get(
          `https://www.api.soccergistonline.com/productsbyleaguecle.php?leagues_link=${leagues_link}`
        )
        .then((response) => {
          setItems(response.data); // Update state name to "items"
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching news data:", error);
          setLoading(false);
        });
    }, []);
  
     useEffect(() => {
       const urlParams = new URLSearchParams(window.location.search);
       const leagues_link = urlParams.get("leagues_link");

       axios
         .get(
          //  `https://www.api.soccergistonline.com/productsbyleaguesho.php?leagues_link=${leagues_link}`
         )
         .then((response) => {
           setItems(response.data); // Update state name to "items"
           setLoading(false);
         })
         .catch((error) => {
           console.error("Error fetching news data:", error);
           setLoading(false);
         });
     }, []);

  return (
    // Main container for the Premierleaguekits component
    <div className="premier-league-page">
      {/* Header component */}
      <Header />

      {/* Kitsnavbar component */}
      <Kitsnavbar />

      {/* Topheader component */}
      <Topheader />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Iterate over the items array and render Featuredshirts component */}
          {items.map(
            (
              item,
              index // Change variable name to "item"
            ) => (
              <Featuredshirts
                key={index}
                name={item.product_name}
                hoaw={item.hom_awa}
                price={item.product_price}
                name1={item.product_name}
                hoaw1={item.hom_awa}
                price1={item.product_price}
                name2={item.product_name}
                hoaw2={item.hom_awa}
                price2={item.product_price}
                imagi1={item.product_image}
                imagi2={item.product_image}
                imagi3={item.product_image}
                product_uin={item.product_uin}
              />
            )
          )}
        </>
      )}
      {/* Premierfooter component */}
      <Premierfooter />
    </div>
  );
};

export default Premierleaguekits;
