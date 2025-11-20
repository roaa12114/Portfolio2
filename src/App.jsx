import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import Home from './pages/home.jsx';
import About from "./pages/about.jsx";
import Hero from "./components/hero.jsx"; 

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
