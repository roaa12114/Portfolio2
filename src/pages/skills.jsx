import React, { useEffect, useState } from "react";
import "./skills.css";
import skillsimg from "../assets/images/skills.jpg"
import { MdOpacity } from "react-icons/md";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   const wrapperStyle = {
    backgroundImage: `url(${skillsimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={`skills-wrapper ${isVisible ? "slide-in" : ""}`}
     style={wrapperStyle}
     >
      <div className="infographic-container">
        <div className="infographic-wrapper">
          <div className="center-circle">
            <div className="center-content">
              <h2 className="center-main">SKILLS</h2>
            </div>
          </div>

          {/* ARC + Dots + Connecting Lines */}
          <svg className="arc-svg" width="520" height="520" viewBox="0 0 520 520" fill="none">
            <path
              d="M120 420 A200 200 0 0 1 120 100"
              className="arc-path"
            />

            {/* DOTS */}
            <circle cx="120" cy="420" r="6" className="arc-dot" />
            <circle cx="120" cy="100" r="6" className="arc-dot" />
            </svg>

          <div className="items-wrapper">
            <InfoItem number="1" title="Languages" text="JavaScript, HTML5, CSS3, Java, Python, C, C#, SQL" />
            <InfoItem number="2" title="Frontend" text="React.js, Bootstrap, Tailwind CSS, Responsive Design, UI/UX, Three.js" />
            <InfoItem number="3" title="Backend" text="Node.js, Express.js, REST APIs, JWT, Firebase" />
            <InfoItem number="4" title="Databases" text="MongoDB, OracleSQL (Basic)" />
            <InfoItem number="5" title="Tools & Methods" text="Git, GitHub, Postman, VS Code, Azure, Agile, Trello" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ number, title, text }) => {
  return (
    <div className="info-item">
      <div className="title-row">
        <span className="info-number">{number}</span>
        <h4>{title}</h4>
      </div>
    <p>{text}</p>
    </div>
  );
};

export default Skills;
