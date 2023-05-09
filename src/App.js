import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div >
      <h1>My React App</h1>
      <Link to="/">Home</Link> <br></br>
      <Link to='/profile'>Profile</Link>
    </div>
  );
}

export default App;
