import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
import outside from "./images/outside.png"
import frontCounter from "./images/front-counter.png"
import counter from "./images/counter.png"
import sweets from "./images/sweets2.png"
import mainSeating from "./images/large-seating.png"
import outdoorSeating from "./images/outdoor-seating.png"
import bothTables from "./images/bothTables.png"
import jams from "./images/jams.png"


const ImageCarousel = () => {
  return (
    <div className="full-width-carousel-container">
    <Carousel
      autoPlay={false}
      infiniteLoop={true}
      interval={3300}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      className="full-width-carousel"
    >
      <div>
        <img className='carousel-img' src={outside} alt="outsidePhoto" />
      </div>
      <div>
        <img className='carousel-img' src={frontCounter} alt="frontCounter" />
      </div>
      <div>
        <img className='carousel-img' src={counter} alt="counterPhoto" />
      </div>
      <div>
        <img className='carousel-img' src={sweets} alt="sweetsPhoto" />
      </div>
      <div>
        <img className='carousel-img' src={jams} alt="jamsAndCakes" />
      </div>
      <div>
        <img className='carousel-img' src={bothTables} alt="indoorTables" />
      </div>
      <div>
        <img className='carousel-img' src={mainSeating} alt="mainSteatingPhoto" />
      </div>
      <div>
        <img className='carousel-img' src={outdoorSeating} alt="OutdoorSeatingPhoto" />
      </div>

    </Carousel>
    </div>
  );
};

export default ImageCarousel;
