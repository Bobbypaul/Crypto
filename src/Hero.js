import "./Hero.css";
import { gsap } from "gsap";
import { useEffect } from "react";
const Hero = () => {
  useEffect(function () {
    gsap.from(".save, .illustration", {
      scale: 0,
      opacity: 0,
      duration: 3,
    });

    gsap.from("h1,p", {
      y: 200,
      opacity: 0,
      duration: 3,
    });

    gsap.from(".arrow", {
      x: -100,
      duration: 3,
    });
  }, []);
  return (
    <section className="con">
      <div className="flex-hero">
        <div>
          <div className="save-all-con">
            <div className="save">70% Save</div>
            <span>For the Black Friday weekends</span>
          </div>
          <h1>Fastest & Secure Platform To Invest In Crypto </h1>
          <p>
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <div className="try">
            Try for Free{" "}
            <img
              alt="right"
              className="arrow"
              src={require("./Images/Arrow-Right.png")}
            />
          </div>
        </div>
        <img
          src={require("./Images/Illustration.png")}
          alt="ill"
          className="illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
