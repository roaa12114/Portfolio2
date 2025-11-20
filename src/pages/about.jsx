import React, { useState, useEffect } from "react";
import "./about.css";
import profileImg from "../assets/images/Untitled-1.jpg"


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`about-wrapper ${isVisible ? "slide-in" : ""}`}>
        <div className="about-img-wrapper">
         <div className="about-img">
          <img src={profileImg} alt="Profile" />
        </div>
        </div>
        <div className="about-content">
          <h1>
            A short story about me , my mission,<br /> thinking and craft.
          </h1>
           <p>
            I'm a web designer who aware of the tiny moments in a persons life that reveal greater truths. Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est, ac.
          </p>

          <div className="about-details">
            <div>
              <span>Email :</span> roaa12114@gmail.com
            </div>
            <div>
              <span>Phone :</span> +201505822797
            </div>
            <div>
              <span>City :</span> Cairo, EGYPT
            </div>
          </div>
          <div className="about-meta">
            <span><b>Age :</b> 22</span>
            <span><b>Degree :</b> Bachelor</span>
          </div>
        </div>
      </div>
  );
};

export default About;
