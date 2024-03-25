import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from "./styles";
import NewsCards from "./components/NewCards/NewsCards";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://blog.openreplay.com/assets/hero_Z2tCh0F.png"
          className={classes.alanLogo}
          alt="Logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
