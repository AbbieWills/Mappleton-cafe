import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faLocationDot, faShip, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from '../../components/Carousel/carousel.jsx';

const HomePage = () => {
  return (
    <>

      <div className="row intro-explain-container">
        <div className='intro'>
          <h1>The Old Post Office and Tearooms at Mappleton</h1>
          <h2><FontAwesomeIcon icon={faPaw} size="3x" className="paw-left"/>
                  We Are Dog Friendly!
              <FontAwesomeIcon icon={faPaw} size="3x" className="paw"/>

          </h2>
        </div>

          <ImageCarousel />
          <div>
            <p className='explain'>The Old Post Office and Tearooms is a family-run business that offers a wide range of high quality fresh products. <br/>
            We are located in the heart of Mappleton, a small village on the East Yorkshire coast. Serving a variety of hot and cold food and drinks.
            </p>
          </div>
      </div>

    <div className="features">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faPaw} size="3x" className="mb-3 ring"/>
            <h4 className='iconTitle'>Safety</h4>
            <p>Safety is our top priority. Whether you are a recreational boater, a fisherman,
          an adventure seeker or just part of the commerical sector, you can trust us to provide reliable and professional life jacket
          servicing. </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faLocationDot} size="3x" className="mb-3 route"/>
            <h4 className='iconTitle'>Ideal Location</h4>
            <p>Strategically situated in proximity to Hull, East Yorkshire. Our location has been carefully chosen to cater to a wide range of needs and preferences, making it the ideal destination for individuals seeking top-notch services and solutions!</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6" >
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faTruckFast} size="3x" className="mb-3 truck" />
            <h4 className='iconTitle' >Quick Turnaround</h4>
            <p>We provide precise and reliable estimates for the completion of your life jacket servicing. If you opt for our transportation service, you could have your life jacket returned within just one day from the date of service. Please be aware that if you require a same-day turnaround, kindly specify this in your inquiry, as we may accommodate such requests based on availability.</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faShip} size="3x" className="mb-3 ship"/>
            <h4 className='iconTitle'>Experienced</h4>
            <p>Coupled with years of industry experience, our team of experts is unwavering in their commitment to guaranteeing that your life jackets consistently adhere to the most stringent safety standards.</p>
          </div>
        </div>
      </div>
      
      </div>
      <p className='contact-link-text'> Have a question? <a href='/contact'>Get in touch</a></p>


    </>
    
  )
}

export default HomePage