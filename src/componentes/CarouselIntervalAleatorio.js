import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import CarouselImage from './CarouselImage';

function CarouselIntervalAleatorio({films}) {
 
  return (  
 
    <Carousel className="carouselContainer">
      {films.map((film) => (
        <Carousel.Item key={film.id} interval={1000}>
        <CarouselImage image={film.image} text={film.name} />
          <Carousel.Caption className="carousel-caption">
            <h3>{film.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselIntervalAleatorio;
