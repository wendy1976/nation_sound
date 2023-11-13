import React, { useEffect, useState } from 'react';
import './ListeDeProduits.css'; // Importer votre fichier de style CSS

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

  const [filtrePrixMin, setFiltrePrixMin] = useState('');
  const [filtrePrixMax, setFiltrePrixMax] = useState('');

  // État pour suivre si le filtre est ouvert ou fermé
  const [filtreOuvert, setFiltreOuvert] = useState(false);

  useEffect(() => {
    fetch('/jsonapi/node/produits')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.data) {
          // Extraire les attributs de chaque produit
          const produitsExtraits = data.data.map(item => item.attributes);
          setProduits(produitsExtraits);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  // Filtrage des produits
  const produitsFiltres = produits.filter((produit) => {
    // Conditions de filtre pour le prix
    const prixMinCondition = filtrePrixMin === '' || produit.field_price >= Number(filtrePrixMin);
    const prixMaxCondition = filtrePrixMax === '' || produit.field_price <= Number(filtrePrixMax);

    // Condition de filtre pour la date
    const dateConcert = new Date(produit.field_date_du_concert).getTime(); // Convertir la date en millisecondes

    const musiqueMatch =
      (filtresMusique.Pop && produit.field_musique.value === 'Pop') ||
      (filtresMusique.Rock && produit.field_musique.value === 'Rock') ||
      (filtresMusique.Reggae && produit.field_musique.value === 'Reggae') ||
      (filtresMusique.Electro && produit.field_musique.value === 'Electro') ||
      (filtresMusique.Celtique && produit.field_musique.value === 'Celtique');

    // Filtrage par scène
    const sceneMatch =
      (filtresScene["Horizon Sonore"] && produit.field_scene.value === "Horizon Sonore") ||
      (filtresScene["Cybergroove"] && produit.field_scene.value === "Cybergroove") ||
      (filtresScene["Reggae Vibes Haven"] && produit.field_scene.value === "Reggae Vibes Haven") ||
      (filtresScene["Guitares en fusion"] && produit.field_scene.value === "Guitares en fusion") ||
      (filtresScene["Terre d'Emeraude"] && produit.field_scene.value === "Terre d'Emeraude");

    return (
      prixMinCondition &&
      prixMaxCondition &&
      (musiqueMatch || Object.values(filtresMusique).every(value => !value)) && // Si aucune case n'est cochée, on ne filtre pas par musique
      (filtreDate === null || new Date(produit.field_date_du_concert).toLocaleDateString('fr-FR') === new Date(filtreDate).toLocaleDateString('fr-FR')) &&
      (sceneMatch || Object.values(filtresScene).every(value => !value)) // Utiliser sceneMatch dans la condition de retour
    );
  });

  // Fonction pour gérer le changement d'état des cases à cocher de la musique
  const handleCheckboxChange = (styleMusique) => {
    setFiltresMusique((prevFiltresMusique) => ({
      ...prevFiltresMusique,
      [styleMusique]: !prevFiltresMusique[styleMusique],
    }));
  };

  // Fonction pour gérer le changement d'état des cases à cocher des scènes
  const handleCheckboxChangeScene = (nomScene) => {
    setFiltresScene((prevFiltresScene) => ({
      ...prevFiltresScene,
      [nomScene]: !prevFiltresScene[nomScene],
    }));
  };

  // Fonction pour gérer l'ouverture/fermeture du filtre
  const toggleFiltre = () => {
    setFiltreOuvert(!filtreOuvert);
  };

  return (
    <>
      {/* Bouton pour ouvrir/fermer le filtre */}
      <button onClick={toggleFiltre}>{filtreOuvert ? "Fermer le filtre" : "Ouvrir le filtre"}</button>

      {/* Filtres (affichés uniquement si filtreOuvert est true) */}
      {filtreOuvert && (
        <div className="filtres-container">
          <div>
            <label htmlFor="filtrePrixMin">Prix minimum:</label>
            <input
              type="number"
              id="filtrePrixMin"
              value={filtrePrixMin}
              onChange={(e) => setFiltrePrixMin(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="filtrePrixMax">Prix maximum:</label>
            <input
              type="number"
              id="filtrePrixMax"
              value={filtrePrixMax}
              onChange={(e) => setFiltrePrixMax(e.target.value)}
            />
          </div>

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

      {/* Liste des produits filtrés */}
      <div className="cards-container">
        {produitsFiltres.map((produit, index) => {
          // Importer l'image du produit
          const image = require(`./assets/imagesEtLogo/images/${produit.title.replace(/ /g, '_')}.jpg`).default;

          return (
            <div key={index} className="card">
              <div className="music-note">🎵</div>
              <h2 className="pink">{produit.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: produit.body.value }}></p>
              <h2 className="pink">{produit.field_name.value}</h2>
              <p dangerouslySetInnerHTML={{ __html: produit.field_description.value }}></p>
              <p className="fw-bold">Musique: {produit.field_musique.value}</p>
              <p className="fw-bold">Prix du billet : {produit.field_price} €</p>
              <img src={image} alt={produit.title} />
              <img src={`http://localhost/drupal${produit.field_imageproduit}`} alt={produit.title} />
              <p className="fw-bold">Le {new Date(produit.field_date_du_concert).toLocaleDateString('fr-FR')} à {new Date(produit.field_date_du_concert).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(/:/g, 'h')}</p>
              <p className="fw-bold">Scène: {produit.field_scene.value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListeDeProduits;
