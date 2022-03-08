import { useState, useEffect } from "react";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import loading from "../images/loading-icon.svg";
import Card from "./Card";
import axios from "axios";

import "./CSS/newsfeed.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function NewsFeed() {
  const { category } = useParams();
  const [articles, setArticles] = useState([
    { title: "Hold on ,  content is loading...", image: loading },
  ]);

  useEffect(() => {
    axios
      .get(`https://inshot.herokuapp.com/v1/${category}`)
      .then((res) => {
        setArticles(res.data.data);
        
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container">
      <div className="ad">
        <p className="ad-text">
          For the best experience use <b> inshorts </b> app on your smartphon
        </p>
        <div className="app-links">
          <img src={playstore} alt="Playsote" />
          <img src={appstore} alt="Appstore" />
        </div>
      </div>
      <div className="news">
        {articles.length > 0 &&
          articles.map((item) => {
            return <Card key={item.title} article={item} />;
          })}
      </div>
    </div>
  );
}

export default NewsFeed;
