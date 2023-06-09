import "./HeroImgStyles.css";

import React from "react";
import video1 from "../video/chessintro.mp4"
import IntroImg from "../assets/heroselfie.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        {/* <img className="into-img" src={IntroImg} alt="IntroImg" /> */}
        <video className="into-img" src={video1} autoPlay loop muted />
      </div>
      <div className="content">
          
          <img className="hero-selfie" src={IntroImg} alt="IntroImg" />
          <p>HI, I'm Jim.</p>
          <h1>iOS Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
