import React, { useState, useEffect } from "react";
import "./Kitsbazaar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import axios from "axios";
import "swiper/css/pagination";
import "swiper/css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Livescoreheader from "../../components/kitsbazaarpage/livescoreheader/Livescoreheader";
import Featuredkits from "../../components/kitsbazaarpage/featuredkits/Featuredkits";
import Htext from "../../components/kitsbazaarpage/htext/Htext";
import Fullwithpic from "../../components/kitsbazaarpage/fullwithpic/Fullwithpic";
import Footer from "../../components/kitsbazaarpage/kitsfooter/Kitsfooter";

const Kitsbazaar = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product_uin = urlParams.get("product_uin");
    axios
      .get(
        `https://api.soccergistonline.com/products.php?product_uin=${product_uin}`
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  console.log("Products:", products);

    const [leagues, setLeagues] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const leagues = urlParams.get("leagues");
      axios
        .get("https://api.soccergistonline.com/leagues.php")
        .then((response) => {
          setLeagues(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching news data:", error);
          setLoading(false);
        });
    }, []);
  return (
    <div className="kits-bazaar-page">
      <Header />
      <Kitsnavbar />
      <Livescoreheader />
      <div className="all-jersey-card">
        <Swiper
          speed={100}
          loop={true}
          touchRatio={1.5}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.4,
            },

            475: {
              width: 475,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2.3,
            },
            1024: {
              width: 1024,
              slidesPerView: 2.7,
            },
            1280: {
              width: 1280,
              slidesPerView: 4,
            },
            1334: {
              width: 1512,
              slidesPerView: 4.7,
            },
          }}
        >
          <SliderButtons />
          <SwiperSlide>
            {/* Iterate over the products array and render Featuredkits component */}
            <div className="featured-house">
              {products.map((product, index) => (
                <Featuredkits
                  key={index}
                  image1_id={product.product_image}
                  text2_id={product.product_name}
                  text1_id={product.hom_awa}
                  text3_id={product.product_price}
                  text4="Available Sizes"
                  text5="S"
                  text6="M"
                  text7="L"
                  text8="XL"
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Htext />
      {/* Iterate over the news array and render Newsread component */}
      {leagues.map((leagues, index) => (
        <Fullwithpic
          key={index}
          headtext={leagues.leagues}
          leagues_link={leagues.leagues_link}
          lowertext="Check out Varieties of Premier league club kits and"
        />
      ))}
      <Footer />
    </div>
  );
};

export default Kitsbazaar;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button className="left-btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="right-btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
