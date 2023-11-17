import React, { useState } from 'react';
import Modal from 'react-modal';

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartValidated, setIsCartValidated] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handleClearCart = () => {
    onClearCart();
    setQuantities({});
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCartValidated(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCartValidated(false);
  };

  const handleValidateCart = () => {
    setIsCartValidated(true);
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (quantities[item.id] || item.quantity) * parseFloat(item.field_price),
    0
  ).toFixed(2);

  return (
    <div>
      <button onClick={handleOpenModal} className='me-3 bgGreen btn-sm' id='panierPopup'>
        {/* Votre bouton panier */}
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div>
          {isCartValidated ? (
            <h2 className='pink'>Votre panier a bien été validé!</h2>
          ) : (
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
                      <button onClick={() => handleRemoveItem(item.id)}><strong>X</strong></button>
                      {/* Afficher les détails du produit, ajuster selon vos propriétés */}
                      <div>
                        <span><strong>{item.title}</strong></span>
                        <br />
                        <span className='black'><strong>Prix :</strong><strong> {item.field_price} €</strong></span>
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
