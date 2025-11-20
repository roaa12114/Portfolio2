import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // لو عندك CSS عام

const root = ReactDOM.createRoot(document.getElementById('root'));

// عمل render للـ App داخل React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
