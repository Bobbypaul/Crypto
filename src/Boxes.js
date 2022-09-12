import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Boxes.css";

const Boxes = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(function () {
    let myArr = document.querySelectorAll(".big-box");
    let spans = document.querySelectorAll(".start-mining");
    Array.from(myArr).map(function (element, index, all) {
      Array.from(myArr)[0].addEventListener("click", function () {
        spans[0].style.display = "flex";
        spans[1].style.display = "none";
        spans[2].style.display = "none";
        Array.from(myArr)[1].classList.remove("blue-color");
        Array.from(myArr)[2].classList.remove("blue-color");
        Array.from(myArr)[0].classList.add("blue-color");
      });
      Array.from(myArr)[1].addEventListener("click", function () {
        spans[1].style.display = "flex";
        spans[0].style.display = "none";
        spans[2].style.display = "none";
        Array.from(myArr)[0].classList.remove("blue-color");
        Array.from(myArr)[2].classList.remove("blue-color");
        Array.from(myArr)[1].classList.add("blue-color");
      });
      Array.from(myArr)[2].addEventListener("click", function () {
        spans[2].style.display = "flex";
        spans[1].style.display = "none";
        spans[0].style.display = "none";
        Array.from(myArr)[0].classList.remove("blue-color");
        Array.from(myArr)[1].classList.remove("blue-color");
        Array.from(myArr)[2].classList.add("blue-color");
      });
    });
    gsap.from(".form-one", {
      scrollTrigger: {
        trigger: ".form-one",
        toggleActions: "restart reverse complete reverse",
        start: "top 80%",
      },
      scale: 0.5,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".trade", {
      scrollTrigger: {
        trigger: ".trade",
        toggleActions: "restart reverse complete reverse",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 3,
    });
  }, []);

  return (
    <div className="dif-con">
      <div>
        <form className="form-one">
          <div className="flex-boxes">
            <input type="text" placeholder="Enter your hash rate" />
            <select>
              <option>TH/s</option>
              <option>H/s</option>
              <option>KH/s</option>
              <option>MH/s</option>
              <option>GH/s</option>
            </select>
            <div className="register cal">Calculate</div>
          </div>
          <h2>ESTIMATED 24 HOUR REVENUE:</h2>
          <p className="num">
            0.055 130 59 ETH <span> ($1275)</span>
          </p>
          <p className="rev">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </form>
        <h2 className="trade">
          Trade Securely And Market The High Growth Cryptocurrencies.
        </h2>
        <div className="flex-boxes-two">
          <div className="big-box grey-color blue-color">
            <img
              className="box-icon"
              alt="bitcoin"
              src={require("./Images/bitcoin.png")}
            />
            <div className="text-con">
              <h2>Bitcoin</h2>
              <span>BTC</span>
            </div>
            <p className="parag">
              Digital currency in which a record of transactions is maintained
            </p>
            <div className="register flex">
              <span className="start-mining"> Start mining</span>
              <img
                alt="right"
                className="arrow"
                src={require("./Images/Arrow-Right.png")}
              />
            </div>
          </div>
          <div className="big-box grey-color">
            <img
              className="box-icon"
              alt="etherum"
              src={require("./Images/etherum.png")}
            />
            <div className="text-con">
              <h2>Ethereum</h2>
              <span>ETH</span>
            </div>
            <p className="parag">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
            <div className="register flex">
              <span className="start-mining"> Start mining</span>
              <img
                alt="right"
                className="arrow"
                src={require("./Images/Arrow-Right.png")}
              />
            </div>
          </div>
          <div className="big-box grey-color">
            <img
              className="box-icon"
              alt="lithium"
              src={require("./Images/lithium.png")}
            />
            <div className="text-con">
              <h2>Litecoin</h2>
              <span>LTC</span>
            </div>
            <p className="parag">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <div className="register flex">
              <span className="start-mining"> Start mining</span>
              <img
                alt="right"
                className="arrow"
                src={require("./Images/Arrow-Right.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
