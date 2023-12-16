// Importation des bibliothèques et composants nécessaires

import React, { useState } from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import Logo from './assets/imagesEtLogo/images/logo1.webp';

function Header() {
  // État pour contrôler la visibilité du sous-menu d'informations
  const [showInfoSubMenu, setShowInfoSubMenu] = useState(false);

  // Fonction pour basculer la visibilité du sous-menu d'informations
  const toggleInfoSubMenu = () => {
    setShowInfoSubMenu(!showInfoSubMenu);
  };

  // Fonction pour gérer le clic sur les éléments du sous-menu
  const handleSubMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowInfoSubMenu(false);
    }
  };

  return (
    <div>
      {/* Barre de navigation */}
      <Navbar className="bgYellow px-5" expand="lg" id="navbar">
        {/* Logo Nation Sound */}
        <Link to="/">
          <img src={Logo} alt="logo" id="logo" style={{ width: '285px', height: '90px' }} />
        </Link>
        {/* Bouton de bascule de la barre de navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Contenu de la barre de navigation */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="position-relative">
            {/* Lien vers la page d'accueil */}
            <Link to="/" className="nav-link">
              <h1 className="h6 pink mt-3" style={{ fontWeight: 600 }}>Accueil</h1>
            </Link>
            {/* Lien vers la page Concerts */}
            <Link to="/concerts" className="nav-link">
              <h1 className="h6 pink mt-3" style={{ fontWeight: 600 }}>Concerts & Programmation</h1>
            </Link>
            {/* Lien vers la page Billetterie */}
            <Link to="/billetterie" className="nav-link">
              <h1 className="h6 pink mt-3"style={{ fontWeight: 600 }}>Billetterie</h1>
            </Link>
            {/* Menu déroulant d'informations avec sous-menu */}
            <Dropdown show={showInfoSubMenu} onToggle={toggleInfoSubMenu}>
              <Dropdown.Toggle id="infoDropdown" as={Link} to="/infos" className="nav-link">
                <h1 className="h6 pink mt-3" style={{ fontWeight: 600 }}>Informations et FAQ</h1>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Sections du sous-menu */}
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
                {/* Ajoutez plus d'éléments de sous-menu si nécessaire */}
              </Dropdown.Menu>
            </Dropdown>
            {/* Lien vers la page Nos partenaires */}
            <Link to="/partners" className="nav-link">
              <h1 className="h6 pink mt-3 "style={{ fontWeight: 600 }}>Nos partenaires</h1>
            </Link>
            
            {/* Lien vers la page Carte interactive */}
            <Link to="/myMap" className="nav-link">
              <h1 className="h6 pink mt-3"style={{ fontWeight: 600 }}>Carte interactive</h1>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Composant AudioPlayer */}
      <div>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default Header;
 