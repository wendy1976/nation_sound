import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ArtistCard from './ArtistCard';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';
import Header from './Header';
//import InteractiveMap from './InteractiveMap';


function Accueil() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <div>
        <Link to="/boutique" className="btn bgTurquoise h4 btn-lg orange" title="Voir la boutique" id="laBoutique">
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
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Joyful Notes"
              image="./assets/imagesEtLogo/images/Joyful_Notes.jpg"
              dateConcert="Vendredi 21 Juin 2024 à 16h"
              scene="Horizon Sonore"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Dark Chords"
              image="./assets/imagesEtLogo/images/Dark_Chords.jpg"
              dateConcert="Vendredi 21 Juin 2024 à 18h"
              scene="Guitares en fusion"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Echoes of Zion"
              image="./assets/imagesEtLogo/images/Echoes_of_Zion.jpg"
              dateConcert="Vendredi 21 Juin 2024 à 20h"
              scene="Reggae Vibes Haven"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Celtic Breeze"
              image="./assets/imagesEtLogo/images/Celtic_Breeze.jpg"
              dateConcert="Vendredi 21 Juin 2024 à 22h"
              scene="Terre d’Emeraude"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Neon Groove"
              image="./assets/imagesEtLogo/images/Neon_Groove.jpg"
              dateConcert="Vendredi 21 Juin 2024 à 00h"
              scene="Cybergroove"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Chloé Deschamps"
              image="./assets/imagesEtLogo/images/Chloe_Deschamps.jpg"
              dateConcert="Samedi 22 Juin 2024 à 16h"
              scene="Horizon Sonore"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Théo Sunshine"
              image="./assets/imagesEtLogo/images/Theo_Sunshine.jpg"
              dateConcert="Samedi 22 Juin 2024 à 18h"
              scene="Reggae Vibes Haven"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Mythical Storm"
              image="./assets/imagesEtLogo/images/Mythical_Storm.jpg"
              dateConcert="Samedi 22 Juin 2024 à 20h"
              scene="Terre d’Emeraude"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Guns and Glory"
              image="./assets/imagesEtLogo/images/Guns_and_Glory.jpg"
              dateConcert="Samedi 22 Juin 2024 à 22h"
              scene="Guitares en fusion"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="DJ ElectroFlow"
              image="./assets/imagesEtLogo/images/DJ_ElectroFlow.jpg"
              dateConcert="Samedi 22 Juin 2024 à 00h"
              scene="Cybergroove"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Léo Kingston"
              image="./assets/imagesEtLogo/images/Leo_Kingston.jpg"
              dateConcert="Dimanche 23 Juin 2024 à 16h"
              scene="Reggae Vibes Haven"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Robby Barlow & Lou"
              image="./assets/imagesEtLogo/images/Robby_Barlow_Lou.jpg"
              dateConcert="Dimanche 23 Juin 2024 à 18h"
              scene="Horizon Sonore"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Titanium"
              image="./assets/imagesEtLogo/images/Titanium.jpg"
              dateConcert="Dimanche 23 Juin 2024 à 20h"
              scene="Guitares en fusion"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Aline Garner"
              image="./assets/imagesEtLogo/images/Aline_Garner.jpg"
              dateConcert="Dimanche 23 Juin 2024 à 22h"
              scene="Horizon Sonore"
            />
          </div>
          <div className="col-12 col-md-6">
            <ArtistCard
              name="Laurent Miles"
              image="./assets/imagesEtLogo/images/Laurent_Miles.jpg"
              dateConcert="Dimanche 23 Juin 2024 à 00h"
              scene="Cybergroove"
            />
          </div>
        </div>
      </div>
      <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="newsletter-section">
            <h3>Inscrivez-vous à notre newsletter</h3>
            <form action="/subscribe" method="post">
              <input type="email" name="email" placeholder="Entrez votre adresse e-mail" required />
              <button type="submit">S'abonner <MdEmail /></button>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3>Carte Interactive</h3>
          <p>Découvrez les lieux de nos concerts sur la carte interactive.</p>
          <p>
            Consultez la <a href="/carte-interactive">carte interactive</a> pour plus de détails.
          </p>
          {/* Autres éléments de votre page */}
         
        </div>
      </div>
    </div>
     
      <Footer />
    </div>
  );
}

export default Accueil;
