import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './images/main1.svg'
import image2 from './images/main2.svg'
import image from './images/main.svg'
import './Main.css';

function Slide() {
  return (
    <Carousel className="Slide">
      <Carousel.Item>
        <a href="#Pluent Function">
        <img
          className="image.first"
          src={image1}
          alt="First slide"
        />
        </a>

      </Carousel.Item>
      <Carousel.Item>
      <a href="/lecture">
        <img
          className="image.second"
          src={image2}
          alt="Second slide"
        /></a>

        <Carousel.Caption>
          <p>배너 이미지를 클릭하면 강의를 볼 수 있어요.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image.third"
          src={image1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;