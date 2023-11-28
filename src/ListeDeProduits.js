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

  const [filtresDate, setFiltresDate] = useState({
    "21 Juin 2024": false,
    "22 Juin 2024": false,
    "23 Juin 2024": false,
  });

  const [filtresScene, setFiltresScene] = useState({
    "Horizon Sonore": false,
    "Cybergroove": false,
    "Reggae Vibes Haven": false,
    "Guitares en fusion": false,
    "Terre d'Emeraude": false,
  });

  const [filtreOuvert, setFiltreOuvert] = useState(false);

  useEffect(() => {
    const url = new URL('https://promptia.fr/wp-json/wc/v3/products?_embed');
    url.searchParams.append('consumer_key', 'ck_e2c7c141b576494392f0d84d83daa63d792b71ff');
    url.searchParams.append('consumer_secret', 'cs_b5f92310248c73aaf7a70782cbb32ed19b761c0e');
    url.searchParams.append('per_page', 100);
    url.searchParams.append('page', 1);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          setProduits(data);
        }
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  const produitsFiltres = produits.filter((produit) => {
    const musiqueMatch =
      (filtresMusique.Pop && produit.categories.some(cat => cat.name === 'Pop')) ||
      (filtresMusique.Rock && produit.categories.some(cat => cat.name === 'Rock')) ||
      (filtresMusique.Reggae && produit.categories.some(cat => cat.name === 'Reggae')) ||
      (filtresMusique.Electro && produit.categories.some(cat => cat.name === 'Electro')) ||
      (filtresMusique.Celtique && produit.categories.some(cat => cat.name === 'Celtique'));

    const sceneMatch =
      (filtresScene["Horizon Sonore"] && produit.tags.some(tag => tag.name === "Scène \"Horizon Sonore\"")) ||
      (filtresScene["Cybergroove"] && produit.tags.some(tag => tag.name === "Scène \"Cybergroove\"")) ||
      (filtresScene["Reggae Vibes Haven"] && produit.tags.some(tag => tag.name === "Scène \"Reggae Vibes Haven\"")) ||
      (filtresScene["Guitares en fusion"] && produit.tags.some(tag => tag.name === "Scène \"Guitares en fusion\"")) ||
      (filtresScene["Terre d'Emeraude"] && produit.tags.some(tag => tag.name === "Scène \"Terre d'Emeraude\""));

    const dateMatch =
      (filtresDate["21 Juin 2024"] && produit.categories.some(cat => cat.name === "Le Vendredi 21 Juin 2024")) ||
      (filtresDate["22 Juin 2024"] && produit.categories.some(cat => cat.name === "Le Samedi 22 Juin 2024")) ||
      (filtresDate["23 Juin 2024"] && produit.categories.some(cat => cat.name === "Le Dimanche 23 Juin 2024"));

    return (
      (musiqueMatch || Object.values(filtresMusique).every(value => !value)) &&
      (dateMatch || Object.values(filtresDate).every(value => !value)) &&
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

  const handleCheckboxChangeDate = (dateConcert) => {
    setFiltresDate((prevFiltresDate) => ({
      ...prevFiltresDate,
      [dateConcert]: !prevFiltresDate[dateConcert],
    }));
  };

  const toggleFiltre = () => {
    setFiltreOuvert(!filtreOuvert);
  };

  const resetFilters = () => {
    setFiltresMusique({
      Pop: false,
      Rock: false,
      Reggae: false,
      Electro: false,
      Celtique: false,
    });

    setFiltresDate({
      "21 Juin 2024": false,
      "22 Juin 2024": false,
      "23 Juin 2024": false,
    });

    setFiltresScene({
      "Horizon Sonore": false,
      "Cybergroove": false,
      "Reggae Vibes Haven": false,
      "Guitares en fusion": false,
      "Terre d'Emeraude": false,
    });
  };

  return (
    <div className="list-container">
      <div className="sidebar">
        <button onClick={toggleFiltre}>
          {filtreOuvert ? "Fermer le filtre" : "Ouvrir le filtre"}
        </button>

        {filtreOuvert && (
          <div className="filtres-container">
            <div className="categorie-filtre">
              <label>Filtrer par musique:</label>
              <div className="checkboxes-container">
                {Object.keys(filtresMusique).map((styleMusique) => (
                  <label key={styleMusique}>
                    {styleMusique}
                    <input
                      type="checkbox"
                      checked={filtresMusique[styleMusique]}
                      onChange={() => handleCheckboxChange(styleMusique)}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="categorie-filtre">
              <label>Filtrer par date de concert:</label>
              <div className="checkboxes-container">
                {Object.keys(filtresDate).map((dateConcert) => (
                  <label key={dateConcert}>
                    {dateConcert}
                    <input
                      type="checkbox"
                      checked={filtresDate[dateConcert]}
                      onChange={() => handleCheckboxChangeDate(dateConcert)}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="categorie-filtre">
              <label>Filtrer par scène:</label>
              <div className="checkboxes-container">
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

            <button onClick={resetFilters}>Réinitialiser les filtres</button>
          </div>
        )}
      </div>

      <div className="cards-container">
  {produitsFiltres.map((produit, index) => {
    const image = produit.images.length > 0 ? produit.images[0].src : '';

    // Si le produit est un pass de festival, ne pas le rendre
    if (["PASS 1 JOUR", "PASS 2 JOURS", "PASS 3 JOURS"].includes(produit.name)) {
      return null;
    }

          return (
            <div key={index} className="card">
              <div className="music-note">🎵</div>
              <h2 className="pink">{produit.name}</h2>
              <img src={image} alt={produit.name} />
              {/* Vous devrez peut-être ajuster les champs ci-dessous en fonction de la structure réelle de vos données */}
              <p dangerouslySetInnerHTML={{ __html: produit.short_description }}></p>
              <p dangerouslySetInnerHTML={{ __html: produit.description }}></p>
              {/*<p className="fw-bold">{produit.categories.map(cat => cat.name).join(', ')}</p> */}
              {/* <p className="fw-bold">Prix du billet : {produit.price} €</p> */}
              {/* Vous devrez peut-être ajuster les champs ci-dessous en fonction de la structure réelle de vos données */}
              {/*<p className="fw-bold">Le {new Date(produit.date_created).toLocaleDateString('fr-FR')} à {new Date(produit.date_created).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(/:/g, 'h')}</p>*/}
              <p className="fw-bold">{produit.tags && produit.tags.length > 0 ? produit.tags.map(tag => tag.name).join(', ') : 'Non spécifié'}</p>
              <button className='bouton-billetterie'>
                <Link to="/billetterie" className="lien-bouton white">
                  Voir les Pass sur la billetterie
                </Link>
              </button>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListeDeProduits;


 
