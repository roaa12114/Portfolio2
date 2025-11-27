import React, { useState, useEffect } from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactimg from "../assets/images/contact.jpg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`contact-card ${isVisible ? "slide-in" : ""}`}>

  <div className="contact-up">
    

    <div className="title-wrapper">
      <h1 className="get typing">GET</h1>
      <h1 className="touch typing">IN TOUCH</h1>
    </div>
    <div className="contact-image">
      <img src={contactimg} alt="contact" />
    </div>
  </div>

  <div className="contact-down">
    <a 
      href="https://www.linkedin.com/in/roaa-ahmed-566a82235/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-box"
    >
        <FaLinkedin /> LinkedIn
    </a>
    <a
    href="roaa12114@gmail.com"
    className="contact-box link-btn"
    >
      <MdEmail /> Email
    </a>
    <a
    href="tel:+201505822797"
    className="contact-box link-btn"
    >
      <FaPhoneAlt /> Phone
    </a>
    <a
    href="https://github.com/roaa12114"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-box link-btn"
    >
      <FaGithub /> GitHub
    </a>
  </div>

</div>

  );
};

export default Contact;
