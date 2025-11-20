import { useState } from 'react'
import React from 'react';
import './App.css'
import Home from './pages/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Home/>
      </div>
  )
}

export default App;
