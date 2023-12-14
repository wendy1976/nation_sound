import React from 'react';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Composant pour créer le slider (Carousel)
function CarouselComponent() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <LazyLoadImage
          effect="blur"
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide1.webp")} 
          alt="First slide"
        />
        <Carousel.Caption>
          {/* Image du slide 1 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <LazyLoadImage
          effect="blur"
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide2.webp")}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* Image du slide 2 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <LazyLoadImage
          effect="blur"
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide3.webp")}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* Image du slide 3 */}
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <LazyLoadImage
          effect="blur"
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide4.webp")}
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