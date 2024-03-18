import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importation du SDK EmailJS

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi du message via EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        // Affichez un message de succès ou redirigez l'utilisateur vers une autre page si nécessaire
      }, (error) => {
        console.log(error.text);
        // Gérez les erreurs d'envoi
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} required />
      <input type="text" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Footer;
