import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to="http://localhost:3000">
          <img src="http://localhost:3000/assets/logo.png" className="logoImg"></img>
           </Link>
            <div className="navItems">
              <button className="navButton">Register</button>  
            <button className="navButton">Login</button>  
            </div>
        </div>
    </div>
  )
}
