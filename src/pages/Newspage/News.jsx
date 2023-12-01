import React, { useState, useEffect } from "react";
import "./News.css";
import Header from "../../components/homepage/header/Header";
import Newsread from "../../components/newspage/newsread/Newsread";
import Toptagscard from "../../components/newspage/toptagscard/Toptagscard";
import Socialcard from "../../components/newspage/socialcard/Socialcard";
import Chatbox from "../../components/newspage/chatbox/Chatbox";
import Fullcomment from "../../components/newspage/fullcomment/Fullcomment";
import Featurednews from "../../components/newspage/featurednews/Featurednews";
import Footer from "../../components/newspage/footer/Footer";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const news_a = urlParams.get("news_a");
    axios
      .get(`https://api.soccergistonline.com/news_details.php?news_a=${news_a}`)
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-page">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Iterate over the news array and render Newsread component */}
          {news.map((article, index) => (
            <Newsread
              key={index}
              // Headtext1={article.title}
              imagge1={article.news_image}
              text1={article.news_tag}
              news_title={article.news_title}
              // ... other props
            />
          ))}
        </>
      )}
      <Toptagscard
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
      />
      <Socialcard />
      <Chatbox />
      <Fullcomment />
      <Featurednews />

      <Footer />
    </div>
  );
};

export default News;
