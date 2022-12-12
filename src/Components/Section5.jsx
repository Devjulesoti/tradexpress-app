import React from "react";
import apple from "../Images/Group 119.png";
import google from "../Images/Group 120.png";
import { Link } from "react-router-dom";
import "../styles/Section5.css";
const Section5 = () => {
  return (
    <div className="section5">
      <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
      <h5>Create your account for free and start trading today!</h5>
      <Link to="/getstarted" className="started-btn">Get Started</Link>
      <div className="download-btns">
        <Link>
          <img src={apple} alt="" />
        </Link>
        <Link>
          <img src={google} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Section5;
