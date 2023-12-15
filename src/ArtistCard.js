import 'animate.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

function ArtistCard() {
  // État pour stocker la liste des produits
  const [produits, setProduits] = useState([]);

  // État pour gérer l'ouverture et la fermeture de la modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // État pour stocker les détails du produit sélectionné
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour ouvrir la modal et définir le produit sélectionné
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Vérifier si le tableau de produits est vide avant de déclencher la requête
    if (produits.length === 0) {
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
    }
  }, [produits]); // Ajouter produits comme dépendance pour éviter la boucle infinie

  const isWebPSupported = () => {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  return (
    <div className="cards-container">
      <div className="row">
        {produits.map((produit, index) => {
          // Si le produit est un pass de festival, ne pas le rendre
          if (["PASS 1 JOUR", "PASS 2 JOURS", "PASS 3 JOURS"].includes(produit.name)) {
            return null;
          }

          // Extraire l'image du produit
          const image = produit.images.length > 0 ? produit.images[0].src : '';
          const imageUrlWebP = `${image}.webp`;

          const supportsWebP = isWebPSupported();
          const imageUrlToDisplay = supportsWebP ? imageUrlWebP : image;

          // Styles personnalisés pour la modal
          const customStyles = {
            overlay: {
              backgroundColor: '#E6E16D'
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              borderRadius: '4px',
              padding: '20px',
              width: '80%', // 80% de la largeur de la fenêtre
              height: '80%', // 80% de la hauteur de la fenêtre
              maxWidth: '1100px', // Largeur maximale de 1100px
              maxHeight: '500px', // Hauteur maximale de 500px
              overflow: 'auto' // Ajoute des barres de défilement si le contenu dépasse la taille du modal
            }
          };

          return (
            <div key={index} className="col-md-6 mb-5 d-flex">
              <div className="artist-card bgWhite p-4 rounded-3 shadow-lg d-flex flex-column " style={{ border: '1px solid #ccc', height: '100%' }}>
                <div className="row animate__animated animate__swing animate__slow	2s animate__repeat-3">
                  <div className="col-12 col-md-5">
                    {/* Afficher l'image du produit */}
                    <img
                      src={imageUrlToDisplay} alt={produit.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    {/* Afficher le nom du produit */}
                    <h3 className='pink'>{produit.name}</h3>
                    {/* Afficher les tags du produit */}
                    <p className="fw-bold">{produit.tags && produit.tags.length > 0 ? produit.tags.map(tag => tag.name).join(', ') : 'Non spécifié'}</p>
                    {/* Bouton pour ouvrir la modal */}
                    <button onClick={() => openModal(produit)} className="">Voir +</button>

                    {/* Modal pour afficher les détails du produit sélectionné */}
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                      <h2 className="pink">{selectedProduct?.name}</h2>
                      {/* Afficher l'image du produit sélectionné avec des styles personnalisés */}
                      <img
                        src={selectedProduct?.images[0].src}
                        alt={selectedProduct?.name}
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      {/* Afficher la description courte du produit */}
                      <p dangerouslySetInnerHTML={{ __html: selectedProduct?.short_description }}></p>
                      {/* Afficher la description complète du produit */}
                      <p dangerouslySetInnerHTML={{ __html: selectedProduct?.description }}></p>
                      {/* Afficher les tags du produit sélectionné */}
                      <p className="fw-bold">{selectedProduct?.tags && selectedProduct?.tags.length > 0 ? selectedProduct?.tags.map(tag => tag.name).join(', ') : 'Non spécifié'}</p>
                      {/* Bouton pour fermer la modal */}
                      <button onClick={closeModal}>Fermer</button>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistCard;
 