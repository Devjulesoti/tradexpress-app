import React from "react";
import "../styles/getstarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="getstarted-section">
      <h3>Welcome</h3>
      <div className="option-div">
        <Link className="individual-get" to="/getstarted">
          Individual
        </Link>
        <Link className="business-get" to="/business">
          Business
        </Link>
      </div>
      <form action="" className="getstarted-form">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <input type="text" placeholder="Referral Code (optional)" />
      </form>
      <p className="tandc">
        By clicking the Sign Up button below, you agree to TradExpress{" "}
        <Link className="tc-text">terms and service</Link>
      </p>
      <Link className="login-btn" to="/verifymail">Sign Up</Link>
      <p className="account">
        Already have an account? <Link to='/login' className="click-text">Click here</Link>
      </p>
    </div>
  );
};

export default GetStarted;
