import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import "./Graphs.css";
const Graphs = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(function () {
    gsap.from(".e", {
      scrollTrigger: {
        trigger: ".e",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      scale: 0,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".f", {
      scrollTrigger: {
        trigger: ".f",
        toggleActions: "restart reverse complete reverse",
      },
      y: 200,
      scale: 0,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".g", {
      scrollTrigger: {
        trigger: ".g",
        toggleActions: "restart none complete none",
      },
      y: 200,
      scale: 0,
      opacity: 0,
      duration: 3,
    });
    gsap.from(".start-mint", {
      scrollTrigger: {
        trigger: ".start-mint",
        toggleActions: "restart none complete none",
      },

      scale: 0,
      opacity: 0,
      duration: 3,
    });
  }, []);
  return (
    <div className="con more-space">
      <div className="graph-con">
        <h1>
          Market Sentiments, Portfolio, And Run The Infrastructure Of Your
          Choice
        </h1>
        <div className="flex-graph e">
          <article>
            <h2>Invest Smart</h2>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <div className="register">Learn More</div>
          </article>
          <img
            className="graphs"
            alt="chart"
            src={require("./Images/Chart-big.png")}
          />
        </div>
        <div className="flex-graph f">
          <article className="order">
            <h2>Detailed Statistics</h2>
            <p>
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <div className="register ">Learn More</div>
          </article>
          <img
            className="graphs"
            alt="chart"
            src={require("./Images/Statistic.png")}
          />
        </div>
        <div className="flex-graph g">
          <article>
            <h2>Grow Your Profit And Track Your Investments</h2>
            <p>
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <div className="register">Learn More</div>
          </article>
          <img
            className="graphs"
            alt="chart"
            src={require("./Images/Table.png")}
          />
        </div>
        <div className="start-mint">
          <div>
            <h2>Start Minting Now</h2>
            <p className="start-parag">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <input type="text " placeholder="Enter your email" />
          <div className="subscribe"> Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
