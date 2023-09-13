import React from 'react';
import './ServicesPage.css';
import hundered from './hundered.png'
import hundredfifty from './onefifty.png'
import twohundredseventyfive from './twosevenfive.png'


const ServicesPage = () => {

  return (
    <>
      <div className="about">
        <h1 className='servicing-title'>Pricing and Servicing</h1>
        <p className='pricing-intro'>At KempsMPS, we understand that quality service should also come with affordability. That's why we take pride in offering competitive pricing for all our life jacket servicing and maintenance services.</p>
        <div className='pricing'>
          <h2 className='pricing-heading'>Pricing</h2>
          <div className='price-list'>
              <strong>For Solas approved life jacket service:</strong> £20 (excluding the cost of any replaceable parts) <br/>
              <strong>For Non-Solas life jacket service:</strong> £15 (excluding the cost of any replaceable parts)
              <p className='repairs-text'>Please <a href='/contact'>contact us</a> for a quote regarding repairs</p>
          </div>
        </div>
        <h2 className='sizing-guidelines'>Finding The Right Jacket For You </h2>
        <p className='right-jacket-text'>Determining the ideal life jacket for your needs requires thoughtful consideration. Below is a helpful guide to assist you in making the right selection: </p>
          <p className='sizing-guidelines'> Sizing Guidelines: </p>
          <p className='sizing-text'>
          The majority of level 150 and level 275 inflatable life jackets are manufactured in a single size, typically designed for adults weighing over 40kg. However, it is crucial to refer to the manufacturer's specifications for the specific weight range accommodated by each life jacket model.<br/>
          <p className='understanding'> Understanding Life Jacket Standards: </p>
          All new life jackets sold in the UK and Europe must adhere to ISO 12402 standards.
          Life jackets produced prior to the introduction of ISO 12402 standards must meet the EN393 to EN399 standards. Deciphering ISO 12402:
          ISO 12402 establishes international standards for personal flotation devices, encompassing both life jackets and buoyancy aids.</p>
        <div className='row levels-section'>
          <h2 className='levels-title'>Exploring Life Jacket Levels </h2>
          <div className='individual'>
            <p className='levels'>Level 100:</p>
            <p className='levels-text'>
            This life jacket is suitable for calm, flat waters. It may not possess the capability to right an individual solely through its buoyancy force. Level 100 life jackets are typically non-SOLAS approved.</p> 
            <img className='lj-photo' src={hundered} alt="100-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 150:</p>
          <p className='levels-text'>
              The standard life jacket for use in coastal and offshore waters. Level 150 life jackets are designed to high standards and can effectively right an unconscious person based on buoyancy alone. Note that the thickness and weight of clothing worn may influence its performance.</p> 
            <img className='lj-photo' src={hundredfifty} alt="150-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 275+:</p>
          <p className='levels-text'>
            This life jacket is intended for rugged offshore conditions. Similar to the Level 150, it can right an unconscious person, even when wearing heavy clothing such as immersion suits.</p>
          <img className='lj-photo' src={twohundredseventyfive} alt="275-lf" />
          </div>
        </div>
        <p className='contact-link-text'> <a href='/contact'>Contact us</a> today to learn more about our services and how we can help you stay safe on the water.</p>
      </div>

    </>
  );
};


export default ServicesPage;
