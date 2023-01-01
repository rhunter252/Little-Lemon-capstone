import { useState } from "react";
import { NavLink } from "react-router-dom";
import littlelemonlogo from "../../assets/Little Lemon Logo/Logo4.png";
import { FaBars } from "react-icons/fa";
import "./Nav.css";

function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={littlelemonlogo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
