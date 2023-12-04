import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from './assets/imagesEtLogo/images/logo2.png';

function Footer() {
  return (
    // Début du footer 1ère colonne avec la marque et un paragraphe
    <footer className="container-fluid bgYellow" id="mainFooter">
      <section className="row pt-4 gx-4 mb-4">
        {/* Première colonne */}
        <div className="col-12 col-md-4 col-lg-4">
          <div className="marque pe-5 me-5">
            <h2 className="h6 pink">Festival produit par:</h2>
            <img className="img-fluid w-50" src={logo} alt="Logo Live Events" />
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="col-12 col-md-4 col-lg-4">
          <div className="liens me-5 pe-4">
            <h2 className="h6 pink">Autres pages:</h2>
            <ul>
              <li><a href="/contactForm">Contact</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/faq">Faq</a></li>
              <li><a href="/legalNotice">Mentions Légales</a></li>
            </ul>
          </div>
        </div>

        {/* Troisième colonne */}
        <div className="col-12 col-md-4 col-lg-4">
          {/* Réseaux sociaux */}
          <div className="row">
            <div className="reseauxSociaux me-5 pe-4">
              <a className="facebook custom-icon-color me-4" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook">
                <FaFacebook style={{ fontSize: '50px' }} />
              </a>
              <a className="twitter custom-icon-color me-4" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter">
                <FaTwitter style={{ fontSize: '50px' }} />
              </a>
              <a className="instagram custom-icon-color " href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram">
                <FaInstagram style={{ fontSize: '50px' }} />
              </a>
            </div>
          </div>
          {/* Deuxième ligne des réseaux sociaux */}
          <div className="row">
            <div className="reseaux me-5 pe-4">
              <a className="youtube custom-icon-color me-4" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube">
                <FaYoutube style={{ fontSize: '50px' }} />
              </a>
              <a className="snapchat custom-icon-color me-4 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat">
                <FaSnapchat style={{ fontSize: '50px' }} />
              </a>
              <a className="linkedin custom-icon-color" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin">
                <FaLinkedin style={{ fontSize: '50px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
 