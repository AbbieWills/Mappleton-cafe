import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
// import jacket from './jacket.jpg';
// import jacket2 from './jacket2.jpg';


const ImageCarousel = () => {
  return (
    <div className="full-width-carousel-container">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3300}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      className="full-width-carousel"
    >
      <div>
        <img className='carousel-img' src="https://images.unsplash.com/photo-1465171550359-133629cbded9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80" alt="blue_background_jacket" />
      </div>
      <div>
        <img className='carousel-img' src="https://images.unsplash.com/photo-1561623497-3ab314e8f8a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="people_throwing" />
      </div>
      <div>
        <img  className='carousel-img' src="https://images.unsplash.com/photo-1520627226741-957359a3caab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="jackets_on_rail" />
      </div>
      <div>
        <img className='carousel-img' src='https://images.unsplash.com/photo-1583008584407-25bcb00b12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='less_jackets_on_rail' />
      </div>
      {/* <div>
        <img className='carousel-img' src={jacket} alt='jackets_on_ship_table' />
      </div>
      <div>
        <img className='carousel-img' src={jacket2} alt='jackets_on_ship_shelf' />
      </div> */}
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
