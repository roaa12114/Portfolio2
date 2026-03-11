import React, { useState, useEffect } from "react";
import "./about.css";
import profileImg from "../assets/images/Untitled-1.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-wrapper ${isVisible ? "slide-in" : ""}`}>
      <div className="about-img-wrapper">
        <div className="about-img-frame">
          <div className="about-img">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="about-content">
        <h1
          onAnimationEnd={(e) => {
            if (e.animationName === "blink") {
              e.target.style.borderRight = "none";
            }
          }}
        >
          About me
        </h1>
        <div className="about-scroll">
          <p>
            I'm a Computer Science Engineering graduate from the University of
            Debrecen, Hungary, now based in Cairo, Egypt. I specialize in
            full-stack web development with a focus on building scalable,
            performant applications using the MERN stack — React, Node.js,
            Express, and MongoDB. My experience includes developing complete web
            products from authentication systems and REST APIs to interactive 3D
            product visualization. I've worked with cloud platforms including
            Microsoft Azure, and I hold the Azure Data Fundamentals
            certification. Beyond web development, my academic background spans
            computer networks, databases, IT security, and AI applications. I'm
            currently seeking my first full-time role where I can contribute,
            grow, and keep building things that matter.
          </p>

          <div className="about-details">
            <div>
              <span>Degree :</span> Bachelor
            </div>
            <div>
              <span>University :</span> University of Debrecen
            </div>
            <div>
              <span>City :</span> Cairo, EGYPT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
