import "./Reasons.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
const Reasons = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(function () {
    gsap.from(".a", {
      scrollTrigger: {
        trigger: ".a",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".b", {
      scrollTrigger: {
        trigger: ".b",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".c", {
      scrollTrigger: {
        trigger: ".c",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".d", {
      scrollTrigger: {
        trigger: ".d",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".second-article", {
      scrollTrigger: {
        trigger: ".second-article",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".sec-ill", {
      scrollTrigger: {
        trigger: ".sec-ill",
        toggleActions: "restart reverse complete reverse",
      },
      scale: 0,
      opacity: 0,
      duration: 3,
    });
  }, []);
  return (
    <div className="con more-padding">
      <div>
        <div className="circles-con">
          <div className="each-con a">
            <img
              alt="chart"
              className="circle-icon"
              src={require("./Images/chart.png")}
            />

            <div>
              <h2>$30B</h2>
              <p>Digital Currency Exchange</p>
            </div>
          </div>
          <div className="each-con b">
            <img
              alt="chart"
              className="circle-icon"
              src={require("./Images/avatar.png")}
            />
            <div>
              <h2>190+</h2>
              <p>Countries Around The World</p>
            </div>
          </div>
          <div className="each-con c">
            <img
              alt="chart"
              className="circle-icon"
              src={require("./Images/world.png")}
            />
            <div>
              <h2>$10M</h2>
              <p>Trusted Wallet Investors...</p>
            </div>
          </div>
        </div>

        <div className="flex-reasons">
          <article className="d">
            <h2>Why You Should Choose CHAPPO</h2>
            <p>
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <div className="register">Learn More</div>
          </article>
          <img
            className="sec-ill"
            alt="second-ill"
            src={require("./Images/second-Ill.png")}
          />
        </div>
        <article className="second-article">
          <h2>Check How Much You Can Earn With Us </h2>
          <p>
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Reasons;
