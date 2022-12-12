import React from "react";
import { Link } from "react-router-dom";
import rings from "../Images/Group 127.png";
import apple from "../Images/Group 68@2x.png";
import googleplay from "../Images/Group 69.png";
import "../styles/section1.css";

const Section1 = () => {
  return (
    <div>
      <div className="left-side">
        <div className="section1-text">
          <h1>Buy, sell and manage your Crypto on TradExpress. </h1>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN
          </p>
          <Link to="/getstarted" className="getstarted-btn">
            Get Started
          </Link>
          <div className="download-btn">
            <img src={apple} alt="" />

            <img src={googleplay} alt="" />
          </div>
        </div>
      </div>
      <div className="rings-bgrc">
        <img src={rings} alt="" />
      </div>
    </div>
  );
};

export default Section1;
