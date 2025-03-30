import setup from "/src/assets/img/setup.png";
import "./About.css";

function App() {
  return (    
    <div className="sec-sobre" id="sobre">
        <div>
            <img className="sec-sobre-setup" src={setup} alt="setup" />
        </div>
        <div className="sec-sobre-text">
            <div className="sec-sobre-h2">
                <h2  className="cor-verde">SOBRE</h2><h2>MIM</h2>
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
  );
}

export default App;
