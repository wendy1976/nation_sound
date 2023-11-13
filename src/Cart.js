import React, { useState } from 'react';
import Modal from 'react-modal';

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du modal
  const [isCartValidated, setIsCartValidated] = useState(false); // État pour vérifier si le panier a été validé
  const [quantities, setQuantities] = useState({}); // État pour stocker les quantités de chaque produit

  // Fonction pour mettre à jour la quantité d'un produit
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };
  // Fonction pour supprimer un produit du panier
  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };
  // Fonction pour supprimer tous les éléments du panier
  const handleClearCart = () => {
    onClearCart();
    setQuantities({});
  };
//gestionnaire d'événement qui déclenche l'ouverture du modal du panier en mettant à jour les états isModalOpen et isCartValidated
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCartValidated(false);
  };
//gestionnaire d'événement qui déclenche le fermeture du modal du panier en mettant à jour les états isModalOpen et isCartValidated
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCartValidated(false);
  };
//gestionnaire d'événement qui déclenche la validation du panier en mettant à jour l'état isCartValidated pour indiquer que le panier a été validé.
  const handleValidateCart = () => {
    setIsCartValidated(true);
  };
//retourne le prix total calculé du panier, sous la forme d'une chaîne de caractères avec deux décimales.
  const totalPrice = cartItems.reduce(
    (total, item) => total + (quantities[item.id] || item.quantity) * item.price,
    0
  ).toFixed(2);

  return (
    <div>
      <button onClick={handleOpenModal} className='me-3 bgGreen btn-sm' id='panierPopup'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} >
        <div>
          {isCartValidated ? (
            <h2 className='pink'>Votre panier a bien été validé! </h2>
          ) : (
            <>
              <button onClick={handleCloseModal}> <strong>X</strong></button>
              <h2>Panier</h2>
              <ul>
                {cartItems.map((item) => {
                  const itemQuantity = quantities[item.id] || item.quantity;
                  const itemTotal = (item.price * itemQuantity).toFixed(2);

                  return (
                    <li key={item.id}>
                      <button onClick={() => handleRemoveItem(item.id)}><strong>X</strong></button>
                      <img src={item.image} alt={item.name} width="75" height="75" />
                      <div>
                        <span><strong>{item.name}</strong></span>
                        <br />
                        <span className='black'><strong>Prix :</strong><strong> {item.price} €</strong></span>
                        <br />
                        <span className='black'><strong>Quantité :</strong><strong> {itemQuantity}</strong></span>
                        <br />
                        <span className='black'><strong>Total :</strong><strong> {itemTotal} €</strong></span>
                        
                      </div>
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
              <div>
                <h3 className='pink'>Total Prix: {totalPrice} €</h3>
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
