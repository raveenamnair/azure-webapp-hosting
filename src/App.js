import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import Profile from './pages/Profile.js';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Test from './pages/Test';
import SignUp from './pages/SignUp';

function App() {
  return (
    
    <Router>
        <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/raveena' element={<Profile/>} />
        <Route exact path='/authentication' element={<Authentication/>} />
        <Route exact path='/scanning' element={<Test />} />
        <Route exact path='/signup' element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;