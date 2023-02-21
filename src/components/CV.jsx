import React from "react";
import "./CV.css";

function CV() {
  return (
    <div className="cv" id="CV">
      <div className="cv-container">
        <img className="cv-image" src={`${process.env.PUBLIC_URL}/images/cv.png`} alt="Mon CV" />
        <a href={`${process.env.PUBLIC_URL}/CV_Erwan_Griffon.pdf`} className="cv-button" download>Télécharger le CV</a>
      </div>
    </div>
  );
}

export default CV;