import React from 'react';
import './NotFoundPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div>
      <h1 className='notFoundTitle'>404 Not Found <FontAwesomeIcon icon={faBinoculars} size="3x" className="binoculas"/></h1>
      <p className='notFound'>Hmm it seems you are lost.
      <button className='homeButton' onClick={() => window.location.replace('/')}>Go Home</button>

</p>
      <img className='lost' src='https://media.istockphoto.com/id/499362501/photo/stranded.jpg?s=612x612&w=0&k=20&c=Cu1L2sHASX9qbPKb8SdlHzmDAFO5vGhTtiH9BerXvsE='></img>

    </div>
  );
};

export default NotFound;
