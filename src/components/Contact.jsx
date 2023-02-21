import React from 'react';
import "./Contact.css";

function ContactForm() {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h2>Contactez-moi</h2>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" placeholder="Votre email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" placeholder="Votre message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
