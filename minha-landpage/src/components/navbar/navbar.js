import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../logo/logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Logo />
        <span className="company-name">Proactive <span className="solutions">Solutions</span></span>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Inicio</a>
        <a href="#services" onClick={(e) => handleScroll(e, 'services')}>Serviços</a>
        <a href="#technology" onClick={(e) => handleScroll(e, 'technology')}>Tecnologias</a>
        <a href="#cases" onClick={(e) => handleScroll(e, 'cases')}>Casos</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contato</a>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
