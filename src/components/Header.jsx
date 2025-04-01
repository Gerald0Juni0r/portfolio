import { useState, useEffect } from "react";
import logogd from "/src/assets/img/logo.png";
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInicioClick = (e) => {
    e.preventDefault(); 
    setIsMenuOpen(false);

    // Rola suavemente pra o topo
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setIsScrolled(false);
    }, 500); 
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <a href="#inicio" className="logo">
        <img src={logogd} alt="logo" style={{ height: '40px' }} />
      </a>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={handleInicioClick}>INÍCIO</a></li>
          <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>SOBRE</a></li>
          <li><a href="#projetos" onClick={() => setIsMenuOpen(false)}>PROJETOS</a></li>
          <li><a href="#habilidades" onClick={() => setIsMenuOpen(false)}>HABILIDADES</a></li>
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
