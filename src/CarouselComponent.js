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
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide1.jpg")} 
          alt="First slide"
        />
        <Carousel.Caption>
          {/* Image du slide 1 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide2.jpg")} 
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* Image du slide 2 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* Image du slide 3 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide4.jpg")}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          {/* Image du slide 4 */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
 