import React from "react";
import "./rightSidebar.css";
import { FiSettings } from "react-icons/fi";

const RightSidebar = ({ activeIndex, setActiveIndex }) => {
  
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "short" });
  const year = today.getFullYear();

  const handleUp = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleDown = () => {
    if (activeIndex < 4) setActiveIndex(activeIndex + 1);
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

        <div className="settings">
          <FiSettings size={22} />
        </div>
      </div>

    </div>
  );
};

export default RightSidebar;
