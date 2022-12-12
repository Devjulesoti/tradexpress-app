import React from "react";
import "../styles/footer.css";
import twitter from "../Images/twitter-icon.png";
import share from "../Images/share-icon.png";
import whatsapp from "../Images/whatsapp-icon.png";
import facebook from "../Images/faceboob-icon.png";
import copyright from '../Images/copyright-icon.png'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="con1">
        <h6>Products</h6>
        <p>Bitcoin</p>
        <p>Alt</p>
        <p>Flat</p>
        <p>Refill</p>
        <p>P2P</p>
      </div>
      <div className="con2">
        <h6>Learn</h6>
        <p>Blog</p>
        <p>Help Center</p>
      </div>
      <div className="con3">
        <h6>Contact</h6>
        <p>hello@tradexpress.com</p>
        <p>support@tradexpress.com</p>
        <div className="icon-div">
          <img src={twitter} alt="" />
          <img src={share} alt="" />
          <img src={whatsapp} alt="" />
          <img className="facebook-icon" src={facebook} alt="" />
        </div>
      </div>
      <div className="con4">
        <h6>Company</h6>
        <p>About Us</p>
        <p>Careers</p>
        <p>Rates</p>
        <p>Mobile</p>
      </div>
      <div className="con5">
        <h6>Legal</h6>
        <p>Privacy Policy</p>
        <p>Anti-Money Laundering</p>
        <p>Terms and Conditions</p>
      </div>
      
    </div>
    <div className="copyright">
      <img className="copy-icon" src={copyright} alt="" />
      <p>2022 designed by Egwu-oti Juliet for Tradexpress Technologies. All Right Reserved</p>
    </div>
    </div>
  );
};

export default footer;
