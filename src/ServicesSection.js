import { faCampground, faCocktail, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title pink">SERVICES</h2>
        <p className="text-center">Sur place, vous trouverez un camping, des points de restauration, ainsi que le bar du festival!</p>
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faCampground} size="3x" className='pink'/>
              <h3>Camping gratuit</h3>
              <p>Nous vous proposons sur place, un camping gratuit pour tous les festivaliers les nuits du 21, 22 et 23 Juin 2023! Ce camping vous offre plusieurs services.</p>
              <Link to="/infos/logement#section2" className="service-button">
                Voir le camping
              </Link>
            </div>
          </Col>

          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faUtensils} size="3x" className='pink'/>
              <h3>Restauration</h3>
              <p>Nous vous proposons également plein de points de restauration sur tout le festival, où vous trouverez tout ce qu'il faut pour faire saliver vos papilles!</p>
              <Link to="/infos/restauration-bar#section3" className="service-button">
                Voir les restaurants
              </Link>
            </div>
          </Col>

          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faCocktail} size="3x" className='pink'/>
              <h3>Le bar Nation Sound</h3>
              <p>Nous vous proposons l'immense bar du festival qui pourra étancher votre soif tout le long du festival, avec un grand choix de boissons!</p>
              <Link to="/infos/Restauration&Bar#section3" className="service-button">
                Voir le bar
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;





