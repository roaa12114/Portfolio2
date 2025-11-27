import React from "react";
import "./rightSidebar.css";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const sections = ["", "about", "skills", "projects", "contact"];

const RightSidebar = ({ activeIndex, setActiveIndex }) => {
  
  const navigate = useNavigate();

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "short" });
  const year = today.getFullYear();

    const goToSection = (index) => {
    setActiveIndex(index);
    navigate(`/${sections[index]}`);
  };

  const handleUp = () => {
    if (activeIndex > 0) {
      goToSection(activeIndex - 1);
    }
  };

  const handleDown = () => {
    if (activeIndex < sections.length - 1) {
      goToSection(activeIndex + 1);
    }
  };

  return (
    <div className="timeline-card">

      <div className="date-container">
        <div className="day">{day}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>

      <div className="line"></div>

      <div className="actions">
        <button className="circle-btn" onClick={handleUp}>&#x2191;</button>
        <button className="circle-btn" onClick={handleDown}>&#x2193;</button>

        
      </div>

    </div>
  );
};

export default RightSidebar;
