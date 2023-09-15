import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faUmbrellaBeach, faPeopleRoof, faCake } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faPaw} size="3x" className="mb-3 dogFriendly"/>
            <h4 className='iconTitle'>Dog Friendly!</h4>
            <p> We're proud to be dog-friendly! With a spacious outdoor seating area and a cozy indoor section, there's room for everyone, including your furry friends. 
              Plus, you can find dog friendly treats and home-made doggy ice cream!
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faUmbrellaBeach} size="3x" className="mb-3 route"/>
            <h4 className='iconTitle'>On the Beach</h4>
            <p>Situated just steps away from the picturesque Mappleton beach, our location is a true haven for all walkers (including dogs) seeking a delightful break during their coastal strolls!</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6" >
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faCake} size="3x" className="mb-3 cake" />
            <h4 className='iconTitle'>Fresh Cakes</h4>
            <p>We absolutely love baking, and we do it regularly to ensure there's always a wonderful variety of freshly made cakes, cookies and scones waiting for you.</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faPeopleRoof} size="3x" className="mb-3 people"/>
            <h4 className='iconTitle'>Family Ran</h4>
            <p>At The Old Post Office and Tearooms, we're a close-knit family team, and we'd love nothing more than for you to drop by and say hello!</p>
          </div>
        </div>
      </div>
      
      </div>
      <p className='contact-link-text'> Have a question? <a href='/contact'>Get in touch</a></p>


    </>
    
  )
}

export default HomePage