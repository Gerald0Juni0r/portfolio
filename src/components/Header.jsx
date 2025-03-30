import { useState, useEffect } from "react";
import logogd from "/src/assets/img/logo.png";
import "./Header.css";

function Header() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const aboutSection = document.getElementById("sobre");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${isAboutVisible ? "navbar-alterada" : ""}`}>
      <a href="#inicio" className="logo">
        <img src={logogd} alt="logo" style={{ height: '40px' }} />
      </a>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>SOBRE</a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)}>PROJETOS</a>
          </li>
          <li>
            <a href="#habilidades" onClick={() => setIsMenuOpen(false)}>HABILIDADES</a>
          </li>
        </ul>
      </nav>

      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;