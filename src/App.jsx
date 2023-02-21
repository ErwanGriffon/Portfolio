import React from "react";
import Navbar from "./components/Navbar";
import Acceuil from "./components/Acceuil";
import Projets from "./components/Projets";
import CV from "./components/CV";
import Contact from "./components/Contact"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Acceuil />
      <div className="Projets-section">
        <Projets />
      </div>
      <CV />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;