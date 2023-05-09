import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

/* Register all pages here. This has nothing to do with navigation bar, just the existence of the page. */
root.render(
  <BrowserRouter>
    <App />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();