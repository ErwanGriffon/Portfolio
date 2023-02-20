import React from "react";
import "./Acceuil.css";

function Acceuil() {
  return (
    <div className="fond-anim">
      <div className="conteneur">
        <h1>Erwan Griffon</h1>
        <p>Devellopeur Web React.js</p>
        <div className="Pres">
          <h2>Qui suis-je ?</h2>
          <p>En tant que développeur web React.js, je suis passionné par la création d'interfaces utilisateur performantes et modernes. Avec plusieurs années d'expérience dans le développement d'applications web, je suis capable de concevoir et de mettre en place des solutions qui répondent aux besoins spécifiques de chaque client. Mon expertise en React.js me permet de travailler de manière efficace avec les dernières technologies et de livrer des produits de qualité en respectant les délais impartis.</p>
          <div className="liens">
            <a className="linkedin" href="https://www.linkedin.com/in/erwangriffon/" target="_blank" rel="noopener noreferrer">
              <img src="" alt="LinkedIn"/>
            </a>
            <a className="malt" href="https://www.malt.fr/profile/erwangriffon" target="_blank" rel="noopener noreferrer">
              <img src="" alt="Malt"/>
              </a>
            <a className="github" href="https://github.com/ErwanGriffon" target="_blank" rel="noopener noreferrer">
              <img src="" alt="GitHub"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;