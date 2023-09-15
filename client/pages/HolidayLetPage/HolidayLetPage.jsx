import React from 'react';
import './HolidayLetPage.css';

const HolidayLetPage = () => {

  return (
    <>
      <div className="about">
        <h1>Sea View Bungalow</h1>
        <div className='service-text'>
            <p>Our holiday let is a spacious, 3 bedroom bungalow that can sleep up to 6 people. <br/>
            It is located in the village of Mappleton, just a few steps away from the beach. <br/>
            The property is dog friendly, and has a large, enclosed garden. <br/>
            It is available to rent all year round, for short breaks or longer stays. <br/>
            <a href='https://www.booking.com/hotel/gb/seaview-bungalow-hornsea.en-gb.html' target='blank__'>To Booking.com</a>
            </p>
                    <p className='contact-link-text'> Have a question? <a href='/contact'>Get in touch</a></p>
        </div>
      </div>

    </>
  );
};

export default HolidayLetPage;
