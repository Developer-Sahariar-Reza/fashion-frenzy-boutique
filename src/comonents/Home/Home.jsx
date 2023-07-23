import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import home from "../../assets/Animations/Home.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Step into Style, Embrace the Frenzy!</h2>
      <p>
        Discover a world of unparalleled fashion at Fashion Frenzy Boutique.
        Unleash your inner trendsetter as you explore our curated collection of
        chic and unique clothing, designed to elevate your style game. From
        timeless classics to cutting-edge trends, embrace the frenzy and express
        your individuality with every ensemble.
      </p>
      <div className="home-anime">
        <Lottie animationData={home} loop={true}></Lottie>
      </div>
      <div className="home-buttons-container">
        <Link className="home-btn" to="/shop">
          Shop Now
        </Link>
        <Link className="home-btn" to="/about">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
