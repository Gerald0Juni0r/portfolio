import setup from "/src/assets/img/setup.png";
const minhaFoto = new URL("/src/assets/img/MinhaFoto.JPG", import.meta.url).href;
import "./About.css";

function App() {
    return (    
        <div className="sec-sobre" id="sobre">
            <div className="esconder">
                <img className="sec-sobre-setup esconder" src={setup} alt="setup" />
            </div>
            <div className="sec-sobre-text">
                <div className="sec-sobre-h2 ubuntu-bold">
                    <h2 className="cor-verde">SOBRE <span>MIM</span></h2>
                </div>
                <div className="sec-sobre-p rosarivo-regular-italic">
                    <p>
                        Oi, eu sou Geraldo Júnior, desenvolvedor full-stack apaixonado por tecnologia e programação. Gosto de transformar ideias em código e estou sempre aprendendo algo novo para melhorar minhas habilidades.
                    </p>
                    <p className="sec-sobre-p-meio">
                        Já trabalhei em projetos que vão de sites simples a aplicações mais complexas, explorando diferentes tecnologias e buscando soluções eficientes. Minha motivação vem do desafio de criar algo útil e bem feito.
                    </p>
                    <p>
                        Atualmente, estou em busca de oportunidades na área de TI, onde eu possa contribuir, aprender e crescer profissionalmente. Se quiser saber mais sobre meu trabalho, dá uma olhada nos meus projetos ou entre em contato!
                    </p>
                </div>
                <div className="sec-sobre-formacao ubuntu-regular">
                    <h3>Formação</h3>
                    <p className="cor-verde">Ciência da Computação - <span>UNINASSAU</span></p>
                    <p className="cor-verde">Programa Com.Dominio Digital 4.0 - <span>UECE</span></p>
                </div>
                <img className="sec-sobre-minha-foto" src={minhaFoto} alt="Foto de Geraldo" />
            </div>
        </div>
      );
}

export default App;
