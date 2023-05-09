import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className='mainApp'>
        <h1>React App</h1>
          <ul >
              <li ><a><Link to="/">Home</Link></a></li>
              <li ><a><Link to="/profile">Profile</Link></a></li>
              <br/>
              <br/>
          </ul>
      </div>
  );
}

export default App;
