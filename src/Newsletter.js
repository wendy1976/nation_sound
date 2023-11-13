
import React, { useState } from 'react';
import Layout from './Layout';
import NewsletterForm from './NewsletterForm';

function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à votre serveur ici
  };

  return (
    <Layout>
    <div>
      <h1 className="text-center mb-4 pink">Inscription à la newsletter</h1>
      <NewsletterForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
    </Layout>
  );
}

export default Newsletter;