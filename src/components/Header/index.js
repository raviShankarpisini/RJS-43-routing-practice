// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-bar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <p className="Nav-heading">Wave</p>
    </div>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
