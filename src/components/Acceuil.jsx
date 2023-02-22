import React, { useState, useEffect, useRef } from "react";
import "./Acceuil.css";

function Acceuil() {
  const [trail, setTrail] = useState([]);
  const fondAnimRef = useRef(null);

  const handleMouseMove = (e) => {
    const fondAnimRect = fondAnimRef.current.getBoundingClientRect();
    const x = e.clientX - fondAnimRect.left;
    const y = e.clientY - fondAnimRect.top;
    const newTrail = [...trail, { x, y }];
    setTrail(newTrail.slice(-10));
  };

  useEffect(() => {
    const trailTimer = setInterval(() => {
      if (trail.length > 0) {
        setTrail(trail.slice(1));
      }
    }, 30);
    return () => clearInterval(trailTimer);
  }, [trail]);


  return (
    <div id="app">
      <div className="fond-anim" id="Acceuil" onMouseMove={handleMouseMove} ref={fondAnimRef}>
        <div className="conteneur">
          <h1>Erwan Griffon</h1>
          <p>Développeur Web React.js</p>
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
              <a className="twitter" href="https://twitter.com/ErwanDevWeb" target="_blank" rel="noopener noreferrer">
                <img src="" alt="Twitter"/>
              </a>
            </div>
          </div>
        </div>
        {trail.map((pos, index) => (
          <div className="trail" key={index} style={{top: pos.y, left: pos.x}}></div>
        ))}
      </div>
    </div>
  );
}

export default Acceuil;
