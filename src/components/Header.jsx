import { useState, useEffect } from "react";
import logo from "/src/assets/img/logo.png";
import "./Header.css";

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("sobre");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.05 } // Ativa quando 5% da seção estiver visível
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
      <header className={`header ${isAboutVisible ? "navbar-alterada" : ""}`}>
        <img src={logo} alt="logo" />
        <nav className="navbar">
          <a href="#inicio">INÍCIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#projetos">PROJETOS</a>
          <a href="#habilidades">HABILIDADES</a>
        </nav>
      </header>
  );
}

export default App;
