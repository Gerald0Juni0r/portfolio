import { useState, useEffect } from "react";
import reactLogo from "/src/assets/img/react-logo.png";
import github from "/src/assets/img/redes-sociais/github.png";
import linkedin from "/src/assets/img/redes-sociais/linkedin.png";
import "./Home.css";

function Home() {
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
  return (
    <div className="sec-inicio" id="inicio">
        <div className="text-inicio">
            <h2 className="cor-verde mouse-event-none">Olá 👋, meu nome é</h2>
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
            <div className="escrevendo-cargo-div mouse-event-none">
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
        <div className="React-logo-div">
            <img className="React-logo" src={reactLogo} alt="react-logo" />
        </div>
    </div>
  );
}

export default Home;
