import React, { useState, useEffect } from "react";
import "./hero.css";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Express.js", color: "#ffffff" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Azure", color: "#0089D6" },
  { name: "REST APIs", color: "#FF6B6B" },
  { name: "Git", color: "#F05032" },
  { name: "JWT", color: "#d63aff" },
  { name: "Three.js", color: "#ffffff" },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`hero-card ${isVisible ? "slide-in" : ""}`}>
      <div className="left">
        <h1>I'm Roaa —</h1>
        <span className="role">
          A Computer Science Engineer who turns ideas into full-stack products.
        </span>
        <h2>Full Stack Developer</h2>
        <span className="tagline">
          Building scalable web applications with React, Node.js, and modern cloud technologies.
        </span>
      </div>

      <div className="right">
        <p className="stack-label">TECH STACK</p>
        <div className="badges-grid">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="badge"
              style={{ borderColor: tech.color, color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;