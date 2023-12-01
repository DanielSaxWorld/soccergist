import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import Header from "../../components/homepage/header/Header";
import Frame from "../../components/homepage/frame/Frame";
import Kane from "../../components/homepage/kane/Kane";
import Side from "../../components/homepage/side/Side";
import Middle from "../../components/homepage/middle/Middle";
import Videoz from "../../components/homepage/videoz/Videoz";
import AdditionalV from "../../components/homepage/additionalV/AdditionalV";
import Slider from "../../components/homepage/slider/Slider";
import Yellow from "../../components/homepage/yellow/Yellow";
import Culture from "../../components/homepage/culture/Culture";
import Footer from "../../components/homepage/footer/Footer";

const Homepage = () => {
  const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news.php")
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const [news1, setNews1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news1.php")
      .then((response) => {
        setNews1(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const [news2, setNews2] = useState([]);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news2.php")
      .then((response) => {
        setNews2(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const [news3, setNews3] = useState([]);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news3.php")
      .then((response) => {
        setNews3(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const [news4, setNews4] = useState([]);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news4.php")
      .then((response) => {
        setNews4(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const [news6, setNews6] = useState([]);

  useEffect(() => {
    // Fetch news data from your PHP script
    axios
      .get("https://api.soccergistonline.com/news6.php")
      .then((response) => {
        setNews6(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home-full-page">
      <Header />
      <Frame />
      {/* Iterate over the news array and render Newsread component */}
      {news1.map((article, index) => (
        <Kane
          key={index}
          image1={article.news_image}
          button1={article.news_tag}
          button2={article.news_tag}
          Header={article.news_title}
          news_a={article.news_a}
          paragraph="Spurs chairman Daniel Levy has reportedly been instructed to issue the forward with a contract ultimatum, which could open the door for the Red Devils"
          image4="./icontime.svg"
          text1="20 minutes ago"
          image5="./iconcomment.svg"
          text2="16"
        />
      ))}
      <div className="all-cards">
        {/* <Side
          word="Quick Links"
          img="./Line2.png"
          word1="Our Twitter Spaces (Sundays)"
          image="./twitter.svg"
          word2="League Competitions"
          word3="European Competitions"
          word4="Fixtures and Results"
          word5="Football Culture"
          word6="Kits Bazaar"
          word7="Cart and Pre - 0rder"
          word8="Polls"
          word9="Quizzes"
        /> */}

        {/* <Side
          word="Top Tags"
          img="./Line2.png"
          word1="Transfers"
          word2="Breaking News"
          word3="Stories"
          word4="Latest News"
          word5="Opinion and Analysis"
          word6="Top Videos"
          word7="Player Lifestyles"
          word8="Rumours"
          word9="FPL Updates"
        /> */}

        {/* Iterate over the news array and render Newsread component */}
        {news2.map((article, index) => (
          <Side
            key={index}
            word="Trending"
            img="./Line2.png"
            word1={article.news_title}
            word2={article.news_title}
            word3={article.news_title}
            word4={article.news_title}
            news_a={article.news_a}
            word5="The Dramatic Fall of senegalese Sadio Mane"
            word6="Liverpool captain says goodbyes ahead of Al Ettifaq move under Steven Gerrard"
            word7="Erik ten Hag: Man Utd have made progress in striker pursuit."
          />
        ))}
        <div className="special-card">
          <h3 className="txt1">Connect with us</h3>
          <img className="img1" src="./Line2.png" />

          <a
            href="https://www.facebook.com/soccergistOnline?mibextid=rS40aB7S9Ucbxw6v"
            className="special-text1"
          >
            <img src="./facebook.svg" />
            <p>Facebook</p>
          </a>
          <a
            href="https://instagram.com/soccergistonlineig?igshid=M2RkZGJiMzhjOQ=="
            className="special-text1"
          >
            <img src="./instagram.svg" />
            <p>Instagram</p>
          </a>
          <a
            href="https://twitter.com/SoccerGistTweet"
            className="special-text1"
          >
            <img src="./twitter.svg" />
            <p>Twitter</p>
          </a>
          <a href="" className="special-text1">
            <img src="./Vector.svg" />
            <p>Whatsapp</p>
          </a>
          <a href="Soccergistonline@gmail" className="special-text1">
            <img src="gmail.svg" />
            <p>Soccergistonline@gmail</p>
          </a>
          <p className="special-text1">
            <img src="youtube.svg" />
            <p>Youtube</p>
          </p>
        </div>
      </div>
      <div className="middle-card">
        <div className="card1">
          {/* Iterate over the news array and render Newsread component */}
          {news4.map((article, index) => (
            <Middle
              key={index}
              // Headtext1={article.title}
              image1={article.news_image}
              button1={article.news_tag}
              Header={article.news_title}
              news_a={article.news_a}
              news_id={article.news_id}
              // ... other props
            />
          ))}
        </div>
      </div>

      {/* Iterate over the news array and render Newsread component */}
      {news1.map((article, index) => (
        <Videoz
          key={index}
          Head="Top Videos"
          img1={article.news_image}
          img2="./iconplay.png"
          img3="./Messibtn.png"
          bttn1={article.news_tag}
          bttn2={article.news_tag}
          Heading={article.news_title}
          para="The seven-time Ballon d'Or winner made the perfect start to life in the United States with a stunning stoppage-time strike."
          img4="./icontime.svg"
          txt1="56 minutes ago"
          img5="./iconcomment.svg"
          txt2="322"
          news_a={article.news_a}
        />
      ))}

      <div className="Additional2">
        {/* Iterate over the news array and render Newsread component */}
        {news2.map((article, index) => (
          <AdditionalV
            key={index}
            Head="Top Videos"
            img1={article.news_image}
            img2="./iconplay.png"
            img3="./Messibtn.png"
            bttn1={article.news_tag}
            bttn2={article.news_tag}
            Heading={article.news_title}
            img4="./icontime.svg"
            txt1="56 minutes ago"
            img5="./iconcomment.svg"
            txt2="322"
            news_a={article.news_a}
          />
        ))}
      </div>
      <div>
        <div className="all-tranfer-cards">
          <Swiper
            // slidesPerView={2}
            speed={100}
            loop={true}
            touchRatio={1.5}
            spaceBetween={50}
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
                slidesPerView: 3.2,
              },
              1334: {
                width: 1512,
                slidesPerView: 4,
              },
            }}
          >
            <SliderButtons />
            <SwiperSlide>
              <div className="new-slide">
                {/* Iterate over the news array and render Newsread component */}
                {news6.map((article, index) => (
                  <Slider
                    key={index}
                    image1={article.news_image}
                    button1={article.news_tag}
                    button2={article.news_tag}
                    Header={article.news_title}
                    image4="./icontime.svg"
                    text1="20 minutes ago"
                    image5="./iconcomment.svg"
                    text2="16"
                    news_a={article.news_a}
                  />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Yellow />
        <div className="All-culture-cards">
          {/* Iterate over the news array and render Newsread component */}
          {news2.map((article, index) => (
            <Culture
              key={index}
              Header1="Football Culture"
              image1={article.news_image}
              button1={article.news_tag}
              button2={article.news_tag}
              Header={article.news_title}
              news_a={article.news_a}
              paragraph="The seven-time Ballon d'Or winner made the perfect start to life in the United States with a stunning stoppage-time strike."
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      {/* <button className="left-btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="right-btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button> */}
    </div>
  );
};
