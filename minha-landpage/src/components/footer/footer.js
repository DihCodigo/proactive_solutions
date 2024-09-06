import React from 'react';
import './footer.css';
import Logo from '../logo/logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <Logo />
          <span>Proactive Solutions</span>
        </div>
        <div className="footer-links">
          <a href="#about">Sobre Nós</a>
          <a href="#services">Serviços</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Proactive Solutions. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
