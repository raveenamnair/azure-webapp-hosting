import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Inventory from './pages/Inventory';

function App() {
  return (
    
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path='/' element={<Home/>}/>     
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/raveena' element={<Profile/>} />
      <Route exact path='/inventory' element={<Inventory/>} />
      </Routes>
    </Router>
  );
}

export default App;