import React, { useState, useEffect } from "react";
import "./skills.css";
import homimg from "../assets/images/image.png";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`skills-card ${isVisible ? "slide-in" : ""}`}>
      
    </div>
  );
};

export default Skills;
