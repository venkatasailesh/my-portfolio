import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <img src={require("../images/portfolio-2.png")} alt="Logo" />
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li className="menu-btn">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu-btn">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="menu-btn">
            <Link to="/skills" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="menu-btn">
            <Link to="/education" onClick={closeMenu}>
              Education
            </Link>
          </li>
          <li className="menu-btn">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};



export default Header;