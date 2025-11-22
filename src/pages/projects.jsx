import React, { useState, useEffect } from "react";
import "./projects.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projectsData = [
  {
    id: 1,
    title: "3D Furniture Website",
    desc: "An interactive e-commerce platform for furniture shopping, featuring 3D product visualization and a responsive user interface. Users can browse, view 3D models, and authenticate securely using JWT.",
    image: project1,
    viewLink: "https://3-d-furniture.vercel.app/",
    githubLink: "https://github.com/roaa12114/3D-Furniture"
  },
  {
    id: 2,
    title: "Sneakzone",
    desc: "A sneakers e-commerce website built with React and Firebase, featuring user authentication, real-time Firestore database, and cloud hosting. The design emphasizes responsiveness and scalability.",
    image: project2,
    viewLink: "https://sneakzone-c56f7.web.app/",
    githubLink: "https://github.com/roaa12114/sneakzone-ecommerce"
  },
  {
    id: 3,
    title: "Notes Web Application",
    desc: "A full-stack note-taking app that allows users to create, edit, and delete notes.",
    image: project3,
    viewLink: "#",
    githubLink: "https://github.com/roaa12114/Note-app"
  },
  {
    id: 4,
    title: "Chat Application",
    desc: "A real-time client–server chat app using multithreading and TCP sockets.",
    image: project4,
    viewLink: "#",
    githubLink: "https://github.com/roaa12114/Chat-application"
  },
  {
    id: 5,
    title: "Guess the Word Game",
    desc: "A browser-based guessing game built with modular JavaScript.",
    image: project5,
    viewLink: "https://guess-the-word-game-hangaroo-clone.vercel.app/",
    githubLink: "https://github.com/roaa12114/Guess-the-Word-Game---Hangaroo-Clone"
  },
  {
    id: 6,
    title: "Rock-Paper-Scissor Game",
    desc: "An interactive JavaScript-based mini-game with real-time score tracking.",
    image: project6,
    viewLink: "https://rock-paper-scissor-game-tawny-gamma.vercel.app/",
    githubLink: "https://github.com/roaa12114/Rock-Paper-Scissor-Game"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`projects-wrapper ${isVisible ? "slide-in" : ""}`}>
      <div className="bar">Projects I did before</div>

      <div className="cards">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>

            <div className="card-content">
              <p>{project.desc}</p>

              <div className="buttons-container">
                {project.viewLink === "#" ? (
                  <button
                    className="icon-btn"
                    onClick={() =>
                      alert(`🚧 The live demo for "${project.title}" is not available yet.`)
                    }
                  >
                    <FaArrowUpRightFromSquare />
                  </button>
                ) : (
                  <a
                    href={project.viewLink}
                    className="icon-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                )}

                <a
                  href={project.githubLink}
                  className="icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
