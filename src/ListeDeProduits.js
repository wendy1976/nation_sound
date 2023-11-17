import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListeDeProduits.css';

function ListeDeProduits() {
  const [produits, setProduits] = useState([]);
  const [filtresMusique, setFiltresMusique] = useState({
    Pop: false,
    Rock: false,
    Reggae: false,
    Electro: false,
    Celtique: false,
  });
  const [filtreDate, setFiltreDate] = useState(null);
  const [filtresScene, setFiltresScene] = useState({
    "Horizon Sonore": false,
    "Cybergroove": false,
    "Reggae Vibes Haven": false,
    "Guitares en fusion": false,
    "Terre d'Emeraude": false,
  });

  
  const [filtreOuvert, setFiltreOuvert] = useState(false);
  

  useEffect(() => {
    fetch('/jsonapi/node/produits')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.data) {
          const produitsExtraits = data.data.map(item => item.attributes);
          setProduits(produitsExtraits);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  const produitsFiltres = produits.filter((produit) => {
    

    const dateConcert = new Date(produit.field_date_du_concert).getTime();

    const musiqueMatch =
      (filtresMusique.Pop && produit.field_musique.value === 'Pop') ||
      (filtresMusique.Rock && produit.field_musique.value === 'Rock') ||
      (filtresMusique.Reggae && produit.field_musique.value === 'Reggae') ||
      (filtresMusique.Electro && produit.field_musique.value === 'Electro') ||
      (filtresMusique.Celtique && produit.field_musique.value === 'Celtique');

    const sceneMatch =
      (filtresScene["Horizon Sonore"] && produit.field_scene.value === "Horizon Sonore") ||
      (filtresScene["Cybergroove"] && produit.field_scene.value === "Cybergroove") ||
      (filtresScene["Reggae Vibes Haven"] && produit.field_scene.value === "Reggae Vibes Haven") ||
      (filtresScene["Guitares en fusion"] && produit.field_scene.value === "Guitares en fusion") ||
      (filtresScene["Terre d'Emeraude"] && produit.field_scene.value === "Terre d'Emeraude");

    return (
      
      (musiqueMatch || Object.values(filtresMusique).every(value => !value)) &&
      (filtreDate === null || new Date(produit.field_date_du_concert).toLocaleDateString('fr-FR') === new Date(filtreDate).toLocaleDateString('fr-FR')) &&
      (sceneMatch || Object.values(filtresScene).every(value => !value))
    );
  });

  const handleCheckboxChange = (styleMusique) => {
    setFiltresMusique((prevFiltresMusique) => ({
      ...prevFiltresMusique,
      [styleMusique]: !prevFiltresMusique[styleMusique],
    }));
  };

  const handleCheckboxChangeScene = (nomScene) => {
    setFiltresScene((prevFiltresScene) => ({
      ...prevFiltresScene,
      [nomScene]: !prevFiltresScene[nomScene],
    }));
  };

  const toggleFiltre = () => {
    setFiltreOuvert(!filtreOuvert);
  };

 
  return (
    <>
      <button onClick={toggleFiltre}>{filtreOuvert ? "Fermer le filtre" : "Ouvrir le filtre"}</button>

      {filtreOuvert && (
        <div className="filtres-container">
          

          <div>
            <label>Filtrer par musique:</label>
            <div>
              <label>
                Pop
                <input
                  type="checkbox"
                  checked={filtresMusique.Pop}
                  onChange={() => handleCheckboxChange('Pop')}
                />
              </label>
              <label>
                Rock
                <input
                  type="checkbox"
                  checked={filtresMusique.Rock}
                  onChange={() => handleCheckboxChange('Rock')}
                />
              </label>
              <label>
                Reggae
                <input
                  type="checkbox"
                  checked={filtresMusique.Reggae}
                  onChange={() => handleCheckboxChange('Reggae')}
                />
              </label>
              <label>
                Electro
                <input
                  type="checkbox"
                  checked={filtresMusique.Electro}
                  onChange={() => handleCheckboxChange('Electro')}
                />
              </label>
              <label>
                Celtique
                <input
                  type="checkbox"
                  checked={filtresMusique.Celtique}
                  onChange={() => handleCheckboxChange('Celtique')}
                />
              </label>
            </div>
          </div>

          <label htmlFor="filtreDate">Filtrer par date:</label>
          <input
            type="date"
            id="filtreDate"
            value={filtreDate || ''}
            onChange={(e) => setFiltreDate(e.target.value)}
          />

          <label>Filtrer par scène:</label>
          <div>
            {Object.keys(filtresScene).map((nomScene) => (
              <label key={nomScene}>
                {nomScene}
                <input
                  type="checkbox"
                  checked={filtresScene[nomScene]}
                  onChange={() => handleCheckboxChangeScene(nomScene)}
                />
              </label>
            ))}
          </div>
        </div>
      )}

    

      <div className="cards-container">
        {produitsFiltres.map((produit, index) => {
          const image = require(`./assets/imagesEtLogo/images/${produit.title.replace(/ /g, '_')}.jpg`).default;

          return (
            <div key={index} className="card">
              <div className="music-note">🎵</div>
              <h2 className="pink">{produit.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: produit.body.value }}></p>
              <h2 className="pink">{produit.field_name.value}</h2>
              <p dangerouslySetInnerHTML={{ __html: produit.field_description.value }}></p>
              <p className="fw-bold">Musique: {produit.field_musique.value}</p>
              {/* <p className="fw-bold">Prix du billet : {produit.field_price} €</p> */}
              <img src={image} alt={produit.title} />
              <img src={`http://localhost/drupal${produit.field_imageproduit}`} alt={produit.title} />
              <p className="fw-bold">Le {new Date(produit.field_date_du_concert).toLocaleDateString('fr-FR')} à {new Date(produit.field_date_du_concert).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(/:/g, 'h')}</p>
              <p className="fw-bold">Scène: {produit.field_scene.value}</p>
              <button>
                <Link to="/billetterie" className="lien-bouton white">
                  Voir les Pass sur la billetterie
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListeDeProduits;