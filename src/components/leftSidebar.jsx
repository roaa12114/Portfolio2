import React from "react";
import "./leftSidebar.css";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/images/Untitled-1.jpg";
import { AiFillHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";

const links = [
  { name: "home", icon: <AiFillHome /> },
  { name: "about", icon: <AiOutlineUser /> },
  { name: "skills", icon: <GiSkills /> },
  { name: "projects", icon: <AiOutlineProject /> },
  { name: "contact", icon: <MdOutlineContactMail /> },
];

const LeftSidebar = ({ activeIndex, setActiveIndex }) => {

  const isHomeActive = activeIndex === 0;

  return (
    <div className={`left-sidebar ${isHomeActive ? "expanded" : ""}`}>
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImg} alt="profile" />
        </div>

        <h2 className="name">{isHomeActive ? "Roaa Ahmed" : ""}</h2>

        {isHomeActive && (
          <div className="download-btn">
            <button>Download CV</button>
          </div>
        )}
      </div>

      <nav className="nav-links">
        {links.map((link, index) => (
  <NavLink
    key={link.name}
    to={link.name === "home" ? "" : link.name}
    className={({ isActive }) =>
      `nav-item ${isActive ? "active" : ""}`
    }
    onClick={() => setActiveIndex(index)}
  >
    {link.icon}
    {activeIndex === index && <span>{link.name}</span>}
  </NavLink>
))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
