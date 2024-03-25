import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewCards/NewsCards";



const App = () => {
const [newsArticles, setNewsArticles] = useState([]); 

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles)

        }
      },
    });
  }, []);


  return (
    <div>
    <h1>Alan AI News Application</h1>
    <NewsCards  articles={newsArticles} />
    </div>
  );
};

export default App;
