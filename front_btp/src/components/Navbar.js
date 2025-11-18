import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Vision Opa Sarl</div>

        {/* Hamburger menu pour mobile */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
          <li><NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
          <li><NavLink to="/realisations" className={({ isActive }) => isActive ? "active" : ""}>Réalisations</NavLink></li>
          <li><NavLink to="/postuler" className={({ isActive }) => isActive ? "active" : ""}>Postuler</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
