import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ad
          ratione nostrum unde ex tenetur labore quisquam sit quod. Ex animi
          reprehenderit numquam, voluptas eaque dolorum necessitatibus quibusdam
          saepe excepturi!
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
