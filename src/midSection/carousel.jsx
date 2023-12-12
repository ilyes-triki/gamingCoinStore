import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

import image1 from './ressources/pngfind.com-bucks-logo-png-1428776.png';
import image2 from './ressources/giftcards-img.d9c7f715.webp';
import image3 from './ressources/WoW_11.0_RevisedBoostImage_Bnet_HeaderDesktop_1600x500_B03.avif';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Slider {...settings} className="carousel">
      <div>
        <img
          src={image2}
          alt="Image 2"
          style={{
            width: '50%',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        />
        <div className="carousel-text">
          <h3>Sell & Buy Gift cards</h3>
          <p>Deals made easy all year round.</p>
          <button className="carou-btn">Sell or Purchase</button>
          <button className="carou-btn">Learn More</button>
        </div>
      </div>
      <div>
        <img
          src={image1}
          alt="Image 1"
          style={{
            width: '30%',

            position: 'absolute',
            top: '100px',
            right: '0',
          }}
        />
        <div className="carousel-text">
          <h3>Sell & Buy Vbucks and more</h3>
          <p>Deals made easy all year round.</p>
          <button className="carou-btn">Sell or Purchase</button>
          <button className="carou-btn">Learn More</button>
        </div>
      </div>

      <div>
        <img src={image3} alt="Image 3" style={{ width: '100%' }} />
        <div className="carousel-text">
          <h3>Sell & Buy WOW character boost</h3>
          <p>Deals made easy all year round.</p>
          <button className="carou-btn">Sell or Purchase</button>
          <button className="carou-btn">Learn More</button>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
