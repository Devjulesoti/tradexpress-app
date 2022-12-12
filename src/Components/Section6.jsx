import React from "react";
import purple from "../Images/Union.png";
import quote from "../Images/Group 208.png";
import pic1 from '../Images/feed1.png'
import pic2 from '../Images/feed2.png'
import pic3 from '../Images/feed3.png'
import '../styles/Section6.css'

const Section6 = () => {
  return (
    <div className="section6">
      <h5>Customer’s Review</h5>
      <div className="section6-div">
        <div className="feedback-container">
        <div className="eachtop-div">
          <img className="purple" src={purple} alt="" />
          <img className="quote" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="eachbottom-div">
            <img src={pic1} alt="" />
            <div>
                <h6>Ireti</h6>
                <p> Nigeria</p>
            </div>
        </div>

        </div>
        <div className="feedback-container">
        <div className="eachtop-div">
          <img className="purple" src={purple} alt="" />
          <img className="quote" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="eachbottom-div">
            <img src={pic2} alt="" />
            <div>
                <h6>Bayo</h6>
                <p> USA</p>
            </div>
        </div>

        </div>
        <div className="feedback-container">
        <div className="eachtop-div">
          <img className="purple" src={purple} alt="" />
          <img className="quote" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="eachbottom-div">
            <img src={pic3} alt="" />
            <div className="bottom-text">
                <h6>Olagoke</h6>
                <p> Nigeria</p>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Section6;
