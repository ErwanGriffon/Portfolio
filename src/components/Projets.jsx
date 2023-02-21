import React from "react";
import "./Projets.css";

function Projets() {
  const projets = [
    {
        id: 5,
        titre: "Mon Site",
        image: "/images/vitrine.jpg",
        description: "Ici se trouve le repository React.js contenant les fichiers de mon site web. N'hésitez pas à y jeter un coup d'œil pour voir tout ce qui a été utilisé dans sa construction.",
        codeSource: "https://github.com/ErwanGriffon/mon-site-vitrine",
    },
    {
        id: 4,
        titre: "SCSS Utility",
        image: "/images/css.jpg",
        description: "Ici, vous pouvez trouver mes fichiers les plus utiles, que j'utilise en développant des sites internets. Faites-vous plaisir et utilisez-les à votre guise.",
        codeSource: "https://github.com/ErwanGriffon/SCSS-Utility",
    },
    {
        id: 3,
        titre: "Kanap",
        image: "/images/kanap.jpg",
        description: "L'objectif est d'intégrer puis de dynamiser une page web avec des animations CSS en utilisant le préprocesseur Sass.",
        codeSource: "https://github.com/ErwanGriffon/Kanap-P4",
    },
    {
        id: 2,
        titre: "OhMyFood",
        image: "/images/ohmyfood.png",
        description: "L'objectif est d'intégrer puis de dynamiser une page web avec des animations CSS en utilisant le préprocesseur Sass.",
        codeSource: "https://github.com/ErwanGriffon/Ohmyfood-",
    },
    {
        id: 1,
        titre: "Reservia",
        image: "/images/reservia.png",
        description: "L'objectif est d'intégrer la maquette d'un site de planification de vacances nommé Reservia.",
        codeSource: "https://github.com/ErwanGriffon/Reservia",
    },
    // Ajouter d'autres projets ici...
  ];

  return (
    <div className="projets" id="Projets">
      <div className="projets-container">
        <h2>Mes projets</h2>
        {projets.map((projet) => (
          <div key={projet.id} className="project-card">
            <img src={projet.image} alt={projet.titre} />
            <div className="project-content">
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
              <a className="codeSource" href={projet.codeSource} target="_blank" rel="noopener noreferrer">
                Voir le code source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projets;
