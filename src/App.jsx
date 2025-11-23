import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import Home from './pages/home.jsx';
import About from "./pages/about.jsx";
import Hero from "./components/hero.jsx"; 
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import Skills from './pages/skills.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="skills" element={<Skills/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
