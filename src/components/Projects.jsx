import "./Projects.css";


import setupProjects from "/src/assets/img/setup-projects.png";

import project01 from "/src/assets/img/Projects/projeto1.png";
import project02 from "/src/assets/img/Projects/projeto2.png";
import project03 from "/src/assets/img/Projects/projeto3.png";
import project04 from "/src/assets/img/Projects/projeto4.png";

const projects = [
    { id: 1, img: project01, link: "#Projects" },
    { id: 2, img: project02, link: "#Projects" },
    { id: 3, img: project03, link: "#Projects" },
    { id: 4, img: project04, link: "#Projects" },
];

function Projects() {
    return (
        <section className="sec-projects" id="projetos">
            <div className="sec-projects-img esconder">
                <img className="sec-projects-setup esconder" src={setupProjects} alt="setup" />
            </div>
            <div className="sec-projects-cont">
                <h2 className="sec-projects-h2 ubuntu-bold">MEUS <span className="cor-verde">PROJETOS</span></h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-item" key={project.id}>
                            <img src={project.img} alt={`Projeto ${project.id}`} />
                            <a href={project.link} className="ver-mais ubuntu-regular">Ver mais</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;