import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import Logo from './assets/imagesEtLogo/images/logo1.png';



function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); 
  const [showInfoSubMenu, setShowInfoSubMenu] = useState(false);
  

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveItem = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  };

  const toggleInfoSubMenu = () => { // Définition de toggleInfoSubMenu
    setShowInfoSubMenu(!showInfoSubMenu);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSubMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowInfoSubMenu(false);
    }
  };

  return (
    <div>
      
      <Navbar className="bgYellow px-5" expand="lg" id="navbar">
      <Link to="/">
  <img src={Logo} alt="logo" id="logo" style={{ width: '285px', height: '100px' }} />
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="position-relative">
            <Link to="/" className="nav-link">
            <h1 className="h6 pink mt-3" style={{ fontWeight: 600 }}>Accueil</h1>
            </Link>
            <Link to="/concerts" className="nav-link">
              <h1 className="h6 pink mt-3" style={{ fontWeight: 600 }}>Concert & Programmation</h1>
            </Link>
            <Dropdown show={showInfoSubMenu} onToggle={toggleInfoSubMenu}>
  <Dropdown.Toggle id="infoDropdown" as={Nav.Link}>
  <Link to="/infos" className="nav-link" onClick={handleClose}>
  <h1 className="h6 pink mt-2" style={{ fontWeight: 600 }}>Informations et FAQ</h1>
</Link>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {/* Sections spécifiques du sous-menu */}
    <Dropdown.Item onClick={() => handleSubMenuClick('section1')}>
      Transport
    </Dropdown.Item>
    <Dropdown.Item onClick={() => handleSubMenuClick('section2')}>
      Logement
    </Dropdown.Item>
    <Dropdown.Item onClick={() => handleSubMenuClick('section3')}>
      Restauration et Bar
    </Dropdown.Item>
    <Dropdown.Item onClick={() => handleSubMenuClick('section4')}>
      Accessibilité
    </Dropdown.Item>
    <Dropdown.Item onClick={() => handleSubMenuClick('section5')}>
      Infos vente
    </Dropdown.Item>
    <Dropdown.Item onClick={() => handleSubMenuClick('section6')}>
      FAQ
    </Dropdown.Item>
    {/* Ajoutez d'autres éléments de menu déroulant comme nécessaire */}
  </Dropdown.Menu>
</Dropdown>
            <Link to="/partners" className="nav-link">
              <h1 className="h6 pink mt-3 "style={{ fontWeight: 600 }}>Nos partenaires</h1>
            </Link>
            <Link to="/billetterie" className="nav-link">
              <h1 className="h6 pink mt-3"style={{ fontWeight: 600 }}>Billetterie</h1>
            </Link>
            <Link to="/myMap" className="nav-link">
              <h1 className="h6 pink mt-3"style={{ fontWeight: 600 }}>Carte interactive</h1>
              
            </Link>
            
          </Nav>
          
        </Navbar.Collapse>
        
      </Navbar>
      <div>
      <AudioPlayer />
      </div>
      {/*<Modal show={isCartOpen} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
          Fermer
          </button>
        </Modal.Footer>
        </Modal> */}
    </div>
  );
}

export default Header;