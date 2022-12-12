import React from "react";
import { Link } from "react-router-dom";
import "../styles/verifymail.css";
import emailpic from "../Images/Rectangle 26.png";

const Verifymail = () => {
  return (
    <div className="verifymail-section">
      <p className="first-text">You're Almost In!</p>
      <h4>Welcome Iretiayo</h4>
      <img src={emailpic} alt="" />
      <p className="second-text">
        An activation link has been sent to Ireti4tech@gmail.com Please click on
        the link to verify your email and activate your TradExpress account.
      </p>
      <Link className="login-btn" to="/getstarted">
        Sign Up
      </Link>
      <p className="account">
        Already have an account?{" "}
        <Link to="/login" className="click-text">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Verifymail;
