import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">Salem G. | Developer</Link>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavClick}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleNavClick}>About</Link></li>
          <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={handleNavClick}>Services</Link></li>
          <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={handleNavClick}>Projects</Link></li>
          <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={handleNavClick}>Insights</Link></li>
          <li><Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} onClick={handleNavClick}>Resume</Link></li>
          <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleNavClick}>Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Header;