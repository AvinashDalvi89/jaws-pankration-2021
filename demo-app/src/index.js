import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BingMapsReact from "bingmaps-react";


const BUILD_ENV = process.env.REACT_APP_BING_MAP_KEY;
ReactDOM.render(
  
  <React.StrictMode>
    <BingMapsReact bingMapsKey={BUILD_ENV} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
