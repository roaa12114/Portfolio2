import React, { useState, useEffect } from "react";
import "./hero.css";
import homimg from "../assets/images/image.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`hero-card ${isVisible ? "slide-in" : ""}`}>
      <div className="left">
        <h1>Hello , I’m Roaa</h1>
        <span className="role">WEB DESIGNER</span>
        <h2>Welcome to my World.</h2>
      </div>
      <div className="right">
        <img src={homimg} alt="devices" className="devices-img" />
      </div>
    </div>
  );
};

export default Hero;
