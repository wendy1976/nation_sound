import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Carousel } from 'react-bootstrap';


// Composant pour créer le slider (Carousel)
function CarouselComponent() {
  return (
    <Carousel>
      
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={require("./assets/imagesEtLogo/images/slide1.webp")} 
          alt="First slide"
          fetchpriority="high"
          
        />
        <Carousel.Caption>
          {/* Image du slide 1 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
      <img
        className="d-block img-fluid"
        src={require("./assets/imagesEtLogo/images/slide2.webp")}
        alt="Second slide"
        fetchpriority="low"
      />
        <Carousel.Caption>
          {/* Image du slide 2 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={require("./assets/imagesEtLogo/images/slide3.webp")}
          alt="Third slide"
          fetchpriority="low"
        />
        <Carousel.Caption>
          {/* Image du slide 3 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={require("./assets/imagesEtLogo/images/slide4.webp")}
          alt="Fourth slide"
          fetchpriority="low"
        />
        <Carousel.Caption>
          {/* Image du slide 4 */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
 