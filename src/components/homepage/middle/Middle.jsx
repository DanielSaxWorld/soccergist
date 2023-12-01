import React from "react";
import { Link } from "react-router-dom";
import "./Middle.css";

const Middle = ({
  image1,
  button1,
  button2,
  news_link,
  news_id,
  image4,
  news_a,
  image5,
  Header,
  text1,
  text2,
}) => {
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch news data from your PHP script
  //   axios
  //     .get("https://api.soccergistonline.com/news.php")
  //     .then((response) => {
  //       setNews(response.data);
  //       setLoading(false);
  //     })

  //     .catch((error) => {
  //       console.error("Error fetching news data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="Middle-main-card">
      <img
        src={`https://soccergistonline.com/admin/app/images/${image1}`}
        className="main-img1"
      />
      <div className="card-details">
        <div className="btnz">
          <button className="btnz1">{button1}</button>
          <button className="btnz1">{button1}</button>
        </div>
        <Link to={`/news?news_a=${news_a}`}>
          <h1 className="card-text1">{Header}</h1>
        </Link>
        <div className="commentz">
          <div className="commentz1">
            <img src={image4} />
            <p>{text1}</p>
          </div>
          <div className="commentz2">
            <img src={image5} />
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
