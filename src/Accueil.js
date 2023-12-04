import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ArtistCard from './ArtistCard';
import CarouselComponent from './CarouselComponent';
import FestivalCountdown from './FestivalCountdown';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import ServicesSection from './ServicesSection';
import miniCarteImage from './assets/imagesEtLogo/images/miniCarte.png';

function Accueil() {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Carousel Component */}
      <CarouselComponent />

      {/* Billetterie Button */}
      <div>
        <Link to="/billetterie" className="btn bgTurquoise h4 btn-lg orange" title="Voir la billetterie" id="laBilletterie">
          <strong>LA BILLETTERIE</strong>
        </Link>
      </div>

      {/* Artists Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center pink bold-title mb-5">Les Artistes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* ArtistCard Component */}
            <ArtistCard />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Newsletter and Interactive Map Section */}
      <div className="row mx-auto">
        {/* Newsletter Section */}
        <div className="col-12 col-md-4 ps-5 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className='pink fw-bold'>Inscrivez-vous à notre newsletter</Card.Title>
              <Card.Text>
                <p>Pour avoir toutes les dernières informations, abonnez-vous!</p>
                <Link to="/newsletter">
                  <Button className='bgPink bgNews'>S'abonner <MdEmail /></Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Interactive Map Section */}
        <div className="col-12 col-md-4 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className='pink fw-bold'>Carte Interactive</Card.Title>
              <Card.Text>
                <p>Découvrez le plan du festival sur la carte interactive.</p>
                <img
                  src={miniCarteImage}
                  alt="présentation de la carte interactive"
                  style={{ width: '100%', height: 'auto', maxWidth: '500px', display: 'block', margin: '0 auto' }}
                />
                <p>
                  Consultez la <a href="/myMap">carte interactive</a> pour plus de détails.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Festival Countdown Component */}
        <div className="col-12 col-md-4 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className='pink fw-bold'>Compte à rebours du Festival</Card.Title>
              <Card.Text>
                {/* Intégration du composant FestivalCountdown */}
                <FestivalCountdown />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Fin de la section */}
      
      {/* Footer Component */}
      <Footer />

      {/* ScrollToTopButton Component */}
      <ScrollToTopButton />
    </div>
  );
}

export default Accueil;
 