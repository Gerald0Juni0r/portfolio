import "./Hability.css";

import htmlIcon from "/src/assets/img/habilitys/html.png";
import cssIcon from "/src/assets/img/habilitys/css.png";
import javaScriptIcon from "/src/assets/img/habilitys/javascript.png";
import nodeIcon from "/src/assets/img/habilitys/nodejs.png";
import reactIcon from "/src/assets/img/habilitys/react.png";
import dockerIcon from "/src/assets/img/habilitys/docker.png";
import javaIcon from "/src/assets/img/habilitys/java.png";
import springBootIcon from "/src/assets/img/habilitys/springboot.png";
import pythonIcon from "/src/assets/img/habilitys/python.png";
import gitIcon from "/src/assets/img/habilitys/git.png";
import gitHubIcon from "/src/assets/img/habilitys/github.png";
import figmaIcon from "/src/assets/img/habilitys/figma.png";

function Habilidades() {
    const skills = [
        { nome: "HTML", icon: htmlIcon },
        { nome: "CSS", icon: cssIcon },
        { nome: "JavaScript", icon: javaScriptIcon },
        { nome: "Node JS", icon: nodeIcon },
        { nome: "React JS", icon: reactIcon },
        { nome: "Docker", icon: dockerIcon },
        { nome: "Java", icon: javaIcon },
        { nome: "Spring Boot", icon: springBootIcon },
        { nome: "Python", icon: pythonIcon },
        { nome: "Git", icon: gitIcon },
        { nome: "GitHub", icon: gitHubIcon },
        { nome: "Figma", icon: figmaIcon },
    ];

    return (
        <section className="sec-habilidades" id="habilidades">
            <h2 className="cor-verde">HABILIDADES <span>TÉCNICAS</span></h2>

            <div className="habilidades-grid">
                {skills.map((skill, index) => (
                    <div className="habilidade-container" key={index}>
                        <div className="habilidade-card card-dark"></div>
                        <div className="habilidade-card card-light">
                            <img src={skill.icon} alt={skill.nome} className="habilidade-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Habilidades;