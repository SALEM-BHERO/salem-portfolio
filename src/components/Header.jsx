import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkClass = "font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1";
  const inactiveLinkClass = "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm z-50">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface">
          Salem Gwashavanhu
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-gutter">
          <NavLink to="/" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? activeLinkClass : inactiveLinkClass}>
            Projects
          </NavLink>
          <Link to="/contact" className="px-6 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-full hover:bg-primary/90 transition-all duration-300 active:scale-95">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-margin-mobile py-4 flex flex-col gap-4">
          <Link to="/" className="font-label-md text-label-md text-on-surface-variant hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/projects" className="font-label-md text-label-md text-on-surface-variant hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="font-label-md text-label-md text-primary" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;