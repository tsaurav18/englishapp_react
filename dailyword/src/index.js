import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router
 

// } from "react-router-dom";
import Home from './Components/Home';
// import App from "./App"

const wordList = [{word:"abandon",meaning:"to leave,to give up"},
              {word:"abduction",meaning:"Kidnapping"},
              {word:"abstract", meaning:"Not concrete and realistic,not obviously related to everyday experience"},
              {word:"accumulate",meaning:"To build up a large amount of something"},
              {word:"accuracy",meaning:"Precision, exactness"},
              {word:"accuse",meaning:"To say that someone did something wrong (e.g., committed a crime)"},
              {word:"acquire",meaning:"To get something, usually something with sepcial value or meaning"},
              {word:"acquisition",meaning:"The act of taking possession of something"},
              {word:"adapt", meaning:"To adjust to the circumstance, to make suitable"},
              {word:"addictive",meaning:"Making something want it so much that the person feels ill without it"},
              {word:"adjacent", meaning:"Next to"},
              {word:"adjust",meaning:"To change, to get accustomed to something"},
              {word:"adolescent", meaning:"Characteristic of a teenager, not fully grown up"},
              {word:"advent",meaning:"The arrival of a notable person or thing"},
              {word:"adversely", meaning:"In a harmful way, negatively"},
              {word:"advocate", meaning:"To speak out in favor of something"},
              {word:"aesthetically",meaning:"In a way that relates to beauty ot appearance"},
              {word:"affection",meaning:"An emotional closeness or warmth"},
              {word:"affluence", meaning:"Wealth and the style of life that goes with it"}
                ]
  ReactDOM.render(
    <Home wordlist={wordList}/>,
    document.getElementById('root')
  );