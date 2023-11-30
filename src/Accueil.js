import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ArtistCard from './ArtistCard';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import ServicesSection from './ServicesSection';
import miniCarteImage from './assets/imagesEtLogo/images/miniCarte.png';


function Accueil() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <div>
        <Link to="/billetterie" className="btn bgTurquoise h4 btn-lg orange" title="Voir la billetterie" id="laBilletterie">
          <strong>LA BILLETTERIE</strong>
        </Link>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-12">
      <h2 className="text-center pink bold-title mb-5">Les Artistes</h2>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <ArtistCard/>
    </div>
  </div>
</div>
      <ServicesSection />
      <div>
      <div className="row">
        <div className="col-12 col-md-4 ps-5 ms-5">
          <div className="newsletter-section">
          <h3>Inscrivez-vous à notre newsletter</h3>
          <Link to="/newsletter">
            <button type="button">S'abonner <MdEmail /></button>
          </Link>
          </div>
        </div>
        <div className="col-12 col-md-7"style={{ textAlign: 'center' }} >
          <h3>Carte Interactive</h3>
          <p>Découvrez le plan du festival sur la carte interactive.</p>
          <img
                    src={miniCarteImage}
                    alt="présentation de la carte interactive"
                    style={{ maxWidth: '(20%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
          <p>
            Consultez la <a href="/myMap">carte interactive</a> pour plus de détails.
          </p>
          {/* Autres éléments de votre page */}
         
        </div>
      </div>
    </div>
     
      <Footer />
      {/* Ajoutez le bouton de retour en haut de la page */}
      <ScrollToTopButton />
    </div>
  );
}

export default Accueil;
