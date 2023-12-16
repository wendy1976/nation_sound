import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Composant pour créer le slider (Carousel)
function CarouselComponent() {
  return (
    <HelmetProvider>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <Helmet>
            <link rel="preload" as="image" href={require("./assets/imagesEtLogo/images/slide1.webp")} />
          </Helmet>
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
            width="1920"
            height="1080"
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
          />
          <Carousel.Caption>
            {/* Image du slide 4 */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </HelmetProvider>
  );
}

export default CarouselComponent;