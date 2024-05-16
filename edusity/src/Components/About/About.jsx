import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tommorrows leaders today </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          reiciendis cupiditate voluptatem totam harum praesentium voluptates
          eaque aliquam. Minus modi dignissimos aperiam earum obcaecati,
          voluptas tenetur libero architecto fugiat accusantium. Magni excepturi
          deserunt delectus repudiandae rem veniam iure atque provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          reiciendis cupiditate voluptatem totam harum praesentium voluptates
          eaque aliquam. Minus modi dignissimos aperiam earum obcaecati,
          voluptas tenetur libero architecto fugiat accusantium. Magni excepturi
          deserunt delectus repudiandae rem veniam iure atque provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          reiciendis cupiditate voluptatem totam harum praesentium voluptates
          eaque aliquam. Minus modi dignissimos aperiam earum obcaecati,
          voluptas tenetur libero architecto fugiat accusantium. Magni excepturi
          deserunt delectus repudiandae rem veniam iure atque provident.
        </p>
      </div>
    </div>
  );
};

export default About;
