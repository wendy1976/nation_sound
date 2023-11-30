import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PageProduit() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [afficherPopup, setAfficherPopup] = useState(false);

  useEffect(() => {
    const url = new URL(`https://promptia.fr/wp-json/wc/v3/products/${id}`);
    url.searchParams.append('consumer_key', 'ck_e2c7c141b576494392f0d84d83daa63d792b71ff');
    url.searchParams.append('consumer_secret', 'cs_b5f92310248c73aaf7a70782cbb32ed19b761c0e');

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          setProduit(data);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, [id]);

  const ouvrirPopup = () => {
    setAfficherPopup(true);
  };

  const fermerPopup = () => {
    setAfficherPopup(false);
  };

  if (!produit) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{produit.name}</h1>
      {/* Affichez ici les autres informations du produit... */}
      <button onClick={ouvrirPopup}>Voir les détails</button>
      {afficherPopup && (
        <div className="popup">
          <button onClick={fermerPopup}>Fermer</button>
          {/* Affichez ici les détails du produit... */}
        </div>
      )}
    </div>
  );
}

export default PageProduit;