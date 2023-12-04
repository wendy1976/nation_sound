import React, { useState } from 'react';
import Modal from 'react-modal';

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  // État pour gérer la visibilité de la fenêtre modale et la validation du panier
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartValidated, setIsCartValidated] = useState(false);
  const [quantities, setQuantities] = useState({});

  // Mettre à jour la quantité pour un article spécifique
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  // Supprimer un article du panier
  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  // Vider l'ensemble du panier
  const handleClearCart = () => {
    onClearCart();
    setQuantities({});
  };

  // Ouvrir la fenêtre modale
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCartValidated(false);
  };

  // Fermer la fenêtre modale
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCartValidated(false);
  };

  // Valider le panier
  const handleValidateCart = () => {
    setIsCartValidated(true);
  };

  // Calculer le prix total des articles dans le panier
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (quantities[item.id] || item.quantity) * parseFloat(item.field_price),
    0
  ).toFixed(2);

  return (
    <div>
      {/* Bouton pour ouvrir la fenêtre modale du panier */}
      <button onClick={handleOpenModal} className='me-3 bgGreen btn-sm' id='panierPopup'>
        {/* Votre bouton de panier */}
      </button>

      {/* Fenêtre modale pour afficher le contenu du panier */}
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div>
          {isCartValidated ? (
            // Afficher un message lorsque le panier est validé
            <h2 className='pink'>Votre panier a été validé avec succès !</h2>
          ) : (
            // Afficher les détails du panier
            <>
              <button onClick={handleCloseModal}><strong>X</strong></button>
              <h2>Panier</h2>
              <ul>
                {cartItems.map((item) => {
                  const itemQuantity = quantities[item.id] || item.quantity;
                  const itemTotal = (
                    parseFloat(item.field_price) * itemQuantity
                  ).toFixed(2);

                  return (
                    <li key={item.id}>
                      {/* Bouton pour supprimer un article du panier */}
                      <button onClick={() => handleRemoveItem(item.id)}><strong>X</strong></button>
                      {/* Afficher les détails du produit, ajuster selon les propriétés */}
                      <div>
                        <span><strong>{item.title}</strong></span>
                        <br />
                        <span className='black'><strong>Prix :</strong><strong> {item.field_price} €</strong></span>
                        <br />
                        <span className='black'><strong>Quantité :</strong><strong> {itemQuantity}</strong></span>
                        <br />
                        <span className='black'><strong>Total :</strong><strong> {itemTotal} €</strong></span>
                      </div>
                      {/* Champ pour mettre à jour la quantité d'article */}
                      <div>
                        <input
                          type="number"
                          value={itemQuantity}
                          min="1"
                          onChange={(e) =>
                            handleUpdateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
              {/* Afficher le prix total et des boutons pour gérer le panier */}
              <div>
                <h3 className='pink'>Total Prix : {totalPrice} €</h3>
                <button onClick={handleClearCart}>Réinitialiser le panier</button>
                <br/>
                <button onClick={handleValidateCart}>Valider le panier</button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
 