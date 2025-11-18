import React from 'react';
import Slider from 'react-slick';
import '../styles/CarouselRealisations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import btp from '../assets/images/btp.jpg';
import importe from '../assets/images/importe.jpg';
import transport from '../assets/images/transport.jpg';
import agri from '../assets/images/agri.jpg';


function CarouselRealisations() {
  const images = [
    btp,
    importe,
    transport,
    agri,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="carousel-realisations">
      <h2>Nos Réalisations</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Projet ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CarouselRealisations;
