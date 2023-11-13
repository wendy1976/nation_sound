import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Carousel } from 'react-bootstrap';

//Création de mon slider
function CarouselComponent() {
    return (
      <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/slide1.jpg")} 
            alt="First slide"
        />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/slide2.jpg")} 
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/slide3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/slide4.jpg")}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default CarouselComponent;