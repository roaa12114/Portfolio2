import React, { useState } from "react";
import { Outlet } from "react-router-dom"; 
import "./home.css";   
import LeftSidebar from "../components/leftSidebar";
import Hero from "../components/hero.jsx";
import RightSidebar from "../components/rightSidebar.jsx";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-wrapper">
      <div className="bg-gradient"></div>
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>
      

       {/* LAYOUT */}
      <div className="home-layout">

      <LeftSidebar 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex}
      />

      {/* هنا المحتوى بيتغير */}
      <div className="main-content">
        <Outlet />
      </div>

      <RightSidebar 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex}
      />
    </div>
    </div>
  );
};

export default Home;
