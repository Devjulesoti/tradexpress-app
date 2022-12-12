import React from "react";
import "../styles/Section3.css";
import mobilePayment from "../Images/Character.png";
import investment from "../Images/amico.png";
import freelancer from "../Images/cuate.png";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useRef } from "react";

const Section3 = () => {
  const [button, setbutton] = useState("See Less");
  const sec3ref = useRef();
  let display = () => {
    if (sec3ref.current.classList.contains("active")) {
      sec3ref.current.classList.remove("active");
      setbutton("See Less");
    } else {
      sec3ref.current.classList.add("active");
      setbutton("See More");
    }
  };
  return (
    <div className="section3 container-fluid">
      <h5 className="text-center pt-5">
        Why do people get involved with Cryptocurrencies?
      </h5>
      <button onClick={display} className="my-4  display-btn">{button}</button>

      <div
        ref={sec3ref}
        className=" section3-divs container-fluid mb-3 py-3"
      >
        <div className="container bg-light ">
          <img src={mobilePayment} alt="" className=" pt-5 img-fluid" />
          <h6>Easy Mode of Payment</h6>
          <p>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.People can now easily
            send and receive money from anywhere in the world to purchase goods
            and pay for services.
          </p>
        </div>

        <div className="container bg-light">
          <img src={freelancer} alt="" className=" pt-5 img-fluid" />
          <h6>Financial Freedom</h6>
          <p className="text-center">
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>

        <div className="container bg-light ">
          <img src={investment} alt="" className=" pt-5 img-fluid" />
          <h6>Investment</h6>
          <p>
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
