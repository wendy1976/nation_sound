import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/imagesEtLogo/images/logo2.png';

function Footer() {
  return (
    <footer className="container-fluid bgYellow" id="mainFooter">
      <section className="row pt-4 gx-4 mb-4">
        {/* Première colonne avec le logo */}
        <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
          <div className="marque pe-5 me-5 text-center">
           
            <img className="img-fluid w-50" src={logo} alt="Logo Live Events" />
          </div>
        </div>

        {/* Deuxième colonne avec les liens */}
        <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
          <div className="liens me-5 pe-4">
          
            <ul>
              <li><Link to="/contactForm">Contact</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/faq">Faq</Link></li>
              <li><Link to="/legalNotice">Mentions Légales</Link></li>
            </ul>
          </div>
        </div>

        {/* Troisième colonne avec les réseaux sociaux sur deux lignes */}
        <div className="col-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="reseauxSociaux me-5 pe-4 text-center">
            {/* Icônes de réseaux sociaux sur une seule ligne sur les mobiles */}
            <div className="d-md-none mb-3">
              <a className="facebook custom-icon-color ms-5 me-2" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook">
                <FaFacebook style={{ fontSize: '30px' }} />
              </a>
              <a className="twitter custom-icon-color me-2" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter">
                <FaTwitter style={{ fontSize: '30px' }} />
              </a>
              <a className="instagram custom-icon-color me-2" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram">
                <FaInstagram style={{ fontSize: '30px' }} />
              </a>
              <a className="youtube custom-icon-color me-2" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube">
                <FaYoutube style={{ fontSize: '30px' }} />
              </a>
              <a className="snapchat custom-icon-color me-2 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat">
                <FaSnapchat style={{ fontSize: '30px' }} />
              </a>
              <a className="linkedin custom-icon-color me-1" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin">
                <FaLinkedin style={{ fontSize: '30px' }} />
              </a>
            </div>

            {/* Icônes de réseaux sociaux sur deux lignes sur les écrans plus grands */}
            <div className="d-none d-md-block">
              {/* Première ligne des réseaux sociaux */}
              <div className="mb-3">
                <a className="facebook custom-icon-color me-4" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook2">
                  <FaFacebook style={{ fontSize: '50px' }} />
                </a>
                <a className="twitter custom-icon-color me-4" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter2">
                  <FaTwitter style={{ fontSize: '50px' }} />
                </a>
                <a className="instagram custom-icon-color " href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram2">
                  <FaInstagram style={{ fontSize: '50px' }} />
                </a>
              </div>

              {/* Deuxième ligne des réseaux sociaux */}
              <div>
                <a className="youtube custom-icon-color me-4" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube2">
                  <FaYoutube style={{ fontSize: '50px' }} />
                </a>
                <a className="snapchat custom-icon-color me-4 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat2">
                  <FaSnapchat style={{ fontSize: '50px' }} />
                </a>
                <a className="linkedin custom-icon-color" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin2">
                  <FaLinkedin style={{ fontSize: '50px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="text-center small text-muted">©2023 Nation Sound. Tous droits réservés.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;