import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Image from './assets/imagesEtLogo/images/pass.jpg';

const Billetterie = () => {
  const [passes, setPasses] = useState([]);
  const [panier, setPanier] = useState({});
  const [message, setMessage] = useState('');
  const [afficherPanier, setAfficherPanier] = useState(false); // Nouvel état pour afficher/masquer le panier

  useEffect(() => {
    const fetchPasses = async () => {
      try {
        const response = await fetch('/jsonapi/node/pass');
        if (!response.ok) {
          throw new Error(`Réponse non réussie: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Données de passes avant transformation:', data);

        if (Array.isArray(data.data)) {
          const passesExtraits = data.data.map((item) => item.attributes);
          console.log('Données de passes après transformation:', passesExtraits);
          setPasses(passesExtraits);
        } else {
          console.error('Les données de passes ne sont pas un tableau.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des passes', error);
      }
    };

    fetchPasses();
  }, []);

  const ajouterAuPanier = (pass) => {
    setPanier((prevPanier) => {
      const newPanier = { ...prevPanier };
      const titre = pass.field_titre.value;
  
      if (newPanier[titre]) {
        // Si le produit existe, augmenter la quantité
        newPanier[titre].quantite += 1;
      } else {
        // Si le produit n'existe pas, l'ajouter au panier avec une quantité de 1
        newPanier[titre] = { ...pass, quantite: 1 };
      }

      console.log('Panier après ajout :', newPanier);

      // Afficher le message pop-up
      setMessage(`${pass.field_titre.value} a été ajouté au panier`);
      // Cacher le message après 20 secondes
      setTimeout(() => {
      setMessage('');
    }, 5000);

      return newPanier;
    });
  };


  const togglePanier = () => {
    setAfficherPanier(!afficherPanier);
  };

  const supprimerDuPanier = (pass) => {
    setPanier((prevPanier) => {
      const newPanier = { ...prevPanier };
  
      if (newPanier[pass.field_titre.value]) {
        // Si le produit existe, diminuer la quantité
        newPanier[pass.field_titre.value].quantite -= 1;
  
        // Si la quantité atteint zéro, supprimer le produit du panier
        if (newPanier[pass.field_titre.value].quantite === 0) {
          delete newPanier[pass.field_titre.value];
        }
      }
  
      return newPanier;
    });
  };

  const reinitialiserPanier = () => {
    setPanier({});
  };

  const calculerTotal = () => {
    // Somme des prix des produits multipliés par leur quantité
    return Object.values(panier).reduce((total, item) => total + item.field_price_pass * item.quantite, 0);
  };

  const fermerPanier = () => {
    setAfficherPanier(false);
  };

  return (
    <Layout>
      <div className="navbar">
        {/* Ajouter un bouton ou un lien pour afficher/masquer le panier */}
        <button className="panier-button" onClick={togglePanier}>
        <FontAwesomeIcon icon={faShoppingCart} /> Panier
        </button>
      </div>
      {/* Afficher le panier s'il est visible */}
      {afficherPanier && (
  <div>
    <div className="overlay" onClick={fermerPanier}></div>
    <div className="panier">
      <h2>Panier</h2>
      <ul>
        {Object.values(panier).map((item) => (
          <li key={item.id}>
            {item.field_titre.value} - Quantité: {item.quantite} - Prix: {item.field_price_pass * item.quantite} €
            <button onClick={() => supprimerDuPanier(item)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculerTotal()} €</p>
      <button onClick={reinitialiserPanier}>Réinitialiser le panier</button>
      <button onClick={fermerPanier}>Fermer le panier</button>
    </div>
  </div>
)}
      {message && (
        <div className="popup">
          <p className='pink'>{message}</p>
        </div>
      )}
      <div className="container">
        <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5">Billetterie</h1>
        {passes.map((pass) => (
          <div key={pass.id} className="row border mb-4 p-3 bgYellow">
            <div className="col-md-3">
              <img src={Image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-9">
              <h3 className='pink'>{pass.field_titre.value}</h3>
              <p dangerouslySetInnerHTML={{ __html: pass.field_information.value }}></p>
              <p>Prix: {pass.field_price_pass} €</p>
              <button onClick={() => ajouterAuPanier(pass)}>Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
     
    </Layout>
  );
};

export default Billetterie;




