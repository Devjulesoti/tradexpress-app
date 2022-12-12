import React from "react";
import { Link } from "react-router-dom";
import "../styles/instantbuy.css";

const Instantbuy = () => {
  return (
    <div className="instantbuy-section">
      <h3>Buy/Sell Instantly</h3>
      <div className="option-div">
        <Link className="buy" to="/instantbuy">
          Buy
        </Link>
        <Link className="sell" to="/instantsell">
          Sell
        </Link>
      </div>
      <form action="" className="buy-form">
        <p>Coin to Buy</p>
        <select name="" id="">
          <option value="btc">Bitcoin (BTC)</option>
          <option value="btc">Etherum (ETH)</option>
          <option value="btc">Koins (K)</option>
          <option value="btc">Shitcoin (SH)</option>
        </select>
        <p>Currency</p>
        <select name="" id="">
          <option value="naira">Naira (NGN)</option>
          <option value="dollars">Dollars (USDT)</option>
          <option value="euro">Euros (E)</option>
          <option value="cedis">Cedis (C)</option>
        </select>
        <p>Amount</p>
        <div className="amount">
          <label className="amt" htmlFor="amt">NGN</label>
          <input type="number" placeholder="3,000,000" />
        </div>
      </form>

      <Link className="login-btn" to="/verifymail">
        Continue
      </Link>
    </div>
  );
};

export default Instantbuy;
