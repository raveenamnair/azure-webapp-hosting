import { NavLink } from 'react-router-dom'
import './navbar.css'

const Basic = () => {
  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/inventory">Inventory</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Basic