import React, { useEffect, useState } from "react";
import "./skills.css";

const skillsData = [
  {
    number: "01",
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "C", "C#", "SQL"],
  },
  {
    number: "02",
    title: "Frontend",
    items: ["React.js", "TypeScript", "Bootstrap", "Tailwind CSS", "Three.js", "Responsive Design", "UI/UX"],
  },
  {
    number: "03",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Firebase", "Microservices"],
  },
  {
    number: "04",
    title: "Databases",
    items: ["MongoDB", "OracleSQL", "MySQL"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "AWS (Basic)", "CI/CD", "Git", "GitHub", "Docker (Basic)"],
  },
  {
    number: "06",
    title: "Tools & Methods",
    items: ["Postman", "VS Code", "Agile/Scrum", "Trello", "System Design", "OOP"],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`skills-wrapper ${isVisible ? "slide-in" : ""}`}>
      <div className="skills-header">
        <h1 className="skills-title">SKILLS</h1>
        <p className="skills-subtitle">Technologies & tools I work with</p>
      </div>
      <div className="skills-grid">
        {skillsData.map((category, i) => (
          <div
            key={i}
            className="skill-card"
            style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
          >
            <div className="skill-card-header">
              <span className="skill-number">{category.number}</span>
              <h3 className="skill-category">{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.items.map((item, j) => (
                <span key={j} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;