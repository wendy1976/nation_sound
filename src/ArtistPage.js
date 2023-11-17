
// ArtistPage.js
import React, { useEffect, useState } from 'react';

function ArtistPage() {
  const [artistes, setArtistes] = useState([]);

  useEffect(() => {
    fetch('/jsonapi/node/artistes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.data) {
          const artistesExtraits = data.data.map(item => item.attributes);
          setArtistes(artistesExtraits);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <>
      <div className="cards-container">
        {artistes.map((artiste, index) => (
          <div key={index} className="card">
            <div className="music-note">🎵</div>
            <h2 className="pink">{artiste.title}</h2>
            
            <p dangerouslySetInnerHTML={{ __html: artiste.field_info.value }}></p>
            <p className="fw-bold">Musique: {artiste.field_musique_style.value}</p>
            {/* <p className="fw-bold">Prix du billet : {produit.field_price} €</p> */}
            {/* Assurez-vous d'ajouter la propriété .uri pour obtenir le chemin de l'image */}
            <img src={artiste.field_image_artiste} alt={artiste.title} />
            <img src={`http://localhost/drupal${artiste.field_image_artiste?.uri}`} alt={artiste.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ArtistPage;

