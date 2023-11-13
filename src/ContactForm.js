import React, { useState } from 'react';
import Layout from './Layout';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Validation du formulaire
        if (formData.fullName && formData.email && formData.subject && formData.message) {
            // Envoi des données du formulaire à un serveur
            console.log(formData);
            setFormSubmitted(true);
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    }

    return (
        <Layout>
            <div className="contact-form-container">
                {formSubmitted ? (
                    <p>Merci pour votre message! Nous vous répondrons dès que possible.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>Nom complet:</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Entrez votre nom complet" />
                        </div>
                        <div className="form-group">
                            <label>Adresse e-mail:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Entrez votre adresse e-mail" />
                        </div>
                        <div className="form-group">
                            <label>Objet:</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Entrez l'objet du message" />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Entrez votre message" />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                )}
            </div>
        </Layout>
    );
}

export default ContactForm;
