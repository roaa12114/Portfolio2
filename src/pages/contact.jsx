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
    <div className="contact-box"><FaLinkedin /> LinkedIn</div>
    <div className="contact-box"><MdEmail /> Email </div>
    <div className="contact-box"><FaPhoneAlt /> Phone</div>
    <div className="contact-box"><FaGithub /> GitHub</div>
  </div>

</div>

  );
};

export default Contact;
