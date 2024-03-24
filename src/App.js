import React, { useEffect } from "react";
// import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {

  
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command }) => {
        if (command === "textCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>First Alan Project</h1>
    </div>
  );
};

export default App;
