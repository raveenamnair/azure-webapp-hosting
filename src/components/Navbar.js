import { NavLink } from 'react-router-dom'
import './navbar.css'

const Basic = () => {
  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/scanning">Scan Receipt</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/authentication">Sign Up / Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Basic