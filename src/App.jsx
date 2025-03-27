import { useState, useEffect } from "react";
import logo from "./assets/img/logo.png";
import reactLogo from "./assets/img/react-logo.png";
import github from "./assets/img/redes-sociais/github.png";
import linkedin from "./assets/img/redes-sociais/linkedin.png";
import setup from "./assets/img/setup.png";
import "./App.css";

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Desenvolvedor WEB";
  const typingSpeed = 150; // Velocidade em milissegundos por caractere

  // Parte lógica da animação de escrita
  useEffect(() => {
    let timer;
    if (typedText.length < fullText.length) {
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
    } else {
      // Opcional: Adicionar um delay antes de "apagar"
      setTimeout(() => {
        setTypedText(""); // Reinicia o texto para o loop
      }, 1500); // Espera 1.5 segundos antes de apagar
    }
    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [typedText]);

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
    <div className="App">
      <header className={`header ${isAboutVisible ? "navbar-alterada" : ""}`}>
        <img src={logo} alt="logo" />
        <nav className="navbar">
          <a href="#inicio">INÍCIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#projetos">PROJETOS</a>
          <a href="#habilidades">HABILIDADES</a>
        </nav>
      </header>

      {/* INICIO */}
      <div className="sec-inicio" id="inicio">
        <div className="text-inicio">
          <h2 className="cor-verde">Olá 👋, meu nome é</h2>
          <div className="name">
            <h1 className="first-name">
              <span className="letra-cor">G</span>
              <span className="letra-cor">E</span>
              <span className="letra-cor">R</span>
              <span className="letra-cor">A</span>
              <span className="letra-cor">L</span>
              <span className="letra-cor">D</span>
              <span className="letra-cor">O</span>
            </h1>
            <h1 className="last-name">
              <span className="letra-cor">J</span>
              <span className="letra-cor">Ú</span>
              <span className="letra-cor">N</span>
              <span className="letra-cor">I</span>
              <span className="letra-cor">O</span>
              <span className="letra-cor-fixa">R</span>
            </h1>
          </div>
          <div className="escrevendo-cargo-div">
            <span className="cor-verde">&gt;</span>
            <h3 className="escrevendo-cargo cor-verde">
              <span className="texto-animado cor-verde">Desenvolvedor WEB{"  "}</span>
            </h3>
          </div>
          <div className="redes-sociais">
            <a
              href="https://www.linkedin.com/in/gerald0juni0r/"
              target="_blank"
              rel="noreferrer"
              className="rede-social"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Gerald0Juni0r"
              target="_blank"
              rel="noreferrer"
              className="rede-social"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="React-logo">
          <img src={reactLogo} alt="react-logo" />
        </div>
      </div>

      {/* SOBRE */}
      <div className="sec-sobre" id="sobre">
        <div>
        <img className="sec-sobre-setup" src={setup} alt="setup" />
        </div>
        <div className="sec-sobre-text">
          <div className="sec-sobre-h2">
            <h2 className="cor-verde">SOBRE</h2><h2>MIM</h2>
          </div>
          <div className="sec-sobre-p">
            <p>
            Olá, eu sou Geraldo Júnior, desenvolvedor de software full-stack.
            
            Blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá 
            
            Busco atuar na área de TI, contribuindo com minhas habilidades e competências na condição de colaborador efetivo ou temporário.
            </p>
          </div>
          <div className="sec-sobre-formacao">
            <h3>Formação</h3>
            <p className="cor-verde">Ciência da Computação - <span>UNINASSAU</span></p>
            <p className="cor-verde">Programa Com.Dominio Digital 4.0 - <span>UCE</span></p>
          </div>
        </div>
        
      </div>

      {/* PROJETOS */}
      <div className="sec-projetos" id="projetos">
        meus projetos
      </div>

      {/* HABILIDADES */}
      <div className="sec-habilidades" id="habilidades">
        habilidades técnicas
      </div>
    </div>
  );
}

export default App;
