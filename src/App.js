// import logo from '../src/logo.png';
// import reactLogo from '../src/react-logo.png';

// import github from '../src/redes-sociais/github.png';
// import linkedin from '../src/redes-sociais/linkedin.png';
// import './App.css';

// // Conhecido como JSX
// function App() {
//   return (
//     <div className="App">
//       <header className="header">
//         <img src={logo} alt="logo" />
//         <nav className="navbar">
//           <a href="#inicio">INÍCIO</a>
//           <a href="#sobre">SOBRE</a>
//           <a href="#projetos">PROJETOS</a>
//           <a href="#habilidades">HABILIDADES</a>
//         </nav>
//       </header>
//       {/* INICIO */}
//       <div className="sec-inicio" id="#inicio">
//         <div className="text-inicio">
//           <h2 className="cor-verde"> 
//             Olá 👋, meu nome é
//           </h2>
//           <div className="name">
//             <h1 className="first-name">
//               <span className="letra-cor">G</span>
//               <span className="letra-cor">E</span>
//               <span className="letra-cor">R</span>
//               <span className="letra-cor">A</span>
//               <span className="letra-cor">L</span>
//               <span className="letra-cor">D</span>
//               <span className="letra-cor">O</span>
//             </h1>
//             <h1 className="last-name">
//               <span className="letra-cor">J</span>
//               <span className="letra-cor">Ú</span>
//               <span className="letra-cor">N</span>
//               <span className="letra-cor">I</span>
//               <span className="letra-cor">O</span>
//               <span className="letra-cor-fixa">R</span>
//             </h1>
//           </div>
//           <div>
//             <h3 className="escrevendo-cargo cor-verde">
//               <span className="cor-verde">&gt;</span> Desenvolvedor WEB <span className="cor-verde cursor">|</span>
//             </h3>
//           </div>
//           <div className="redes-sociais">
//             <a href="https://www.linkedin.com/in/gerald0juni0r/" target="_blank" rel="noreferrer"  className="rede-social">
//             <img src={linkedin}  alt="linkedin" />
//             </a>
//             <a href="https://github.com/Gerald0Juni0r" target="_blank" rel="noreferrer" className="rede-social">
//               <img src={github}  alt="github" />
//             </a>
//           </div>
//         </div>
//         <div className="App-logo">
//           <img src={reactLogo}  alt="react-logo" />
//         </div>
//       </div>
//       {/* SOBRE */}
//       <div className="sec-sobre" id="#sobre">
//         Sobre mim
//       </div>
//       {/* PROJETOS */}
//       <div className="sec-projetos" id="#projetos">
//         meus projetos
//       </div>
//       {/* HABILIDADES */}
//       <div className="sec-habilidades" id="#habilidades">
//         habilidades técnicas
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import logo from "../src/logo.png";
import reactLogo from "../src/react-logo.png";
import github from "../src/redes-sociais/github.png";
import linkedin from "../src/redes-sociais/linkedin.png";
import setup from "../src/img/setup.png";
import "./App.css";

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("sobre");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Ativa quando 50% da seção estiver visível
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
          <div>
            <h3 className="escrevendo-cargo cor-verde">
              <span className="cor-verde">&gt;</span> Desenvolvedor WEB{" "}
              <span className="cor-verde cursor">|</span>
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
        <div className="App-logo">
          <img src={reactLogo} alt="react-logo" />
        </div>
      </div>

      {/* SOBRE */}
      <div className="sec-sobre" id="sobre">
        <div>
        <img src={setup} alt="setup" />
        </div>
        <div className="sec-sobre-text">
          <div className="sec-sobre-h2">
            <h2 className="cor-verde">SOBRE</h2><h2>MIM</h2>
          </div>
          <div className="sec-sobre-p">
            <p>
            Olá, eu sou Geraldo Júnior, desenvolvedor de software full-stack.
            </p>
            <p>
              Blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá 
            </p>
            <p>
              Busco atuar na área de TI, contribuindo com minhas habilidades e competências na condição de colaborador efetivo ou temporário.
            </p>
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
