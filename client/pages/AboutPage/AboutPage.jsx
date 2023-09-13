import React from 'react';
import './AboutPage.css';

const AboutPage = () => {

  return (
    <>
      <div className="about">
        <h1>About Us</h1>
        <div className='service-text'>
          <div className='row'>
          <p className='col-sm-12 col-md-12 col-lg-9 harry-intro'> Hello, I am Harry, a 23 year old navigation officer currently serving on oil tankers, and proudly assuming the role of Director at Kemps Maritime Professional Services (KempsMPS). <br/><br/> My unwavering commitment revolves around the paramount importance of safety and its continuous enhancement within the maritime sector. Consequently, I have chosen to devote my time to ensuring that all life jackets serviced through KempsMPS adhere to the most stringent safety standards.
          <br/><br/> Our approach hinges on the pillars of quality assurance, comprehensive staff training, and the utilization of cutting-edge servicing equipment. </p> <img className="photoOfHarry" src='https://kcil.org.uk/wp-content/uploads/2020/01/awaiting-image-1-e1651572089627.jpg' alt='PhotoOfHarry'></img></div>
          <div className='why-choose'>
        <h2>Why Choose KempsMPS?</h2>
          <p>
          In an industry characterized by non-stop operations 24/7, 365 days a year, it is abundantly clear that efficiency and punctuality are of the essence. Regrettably, many approved service stations fail to align with the rigorous schedules inherent to the shipping sector. Moreover, securing an appointment for life jacket servicing with these stations can often entail waiting for weeks on end. <br/> <br/>It is my firm belief that such a situation is in dire need of change, and KempsMPS is committed to leading this transformation.
          KempsMPS understands the challenges posed by the shipping industry's demanding timelines, and we have taken decisive steps to address them. We operate round the clock to ensure the prompt collection and servicing of your life jackets. Additionally, we are committed to providing you with a realistic timeframe for the completion of the servicing process. Our aspiration is to deliver service of the highest safety standards with an expedited turnaround time.
                    <br/><br/> Leveraging my extensive experience in the maritime industry, I am determined to enhance the efficiency and safety of life jacket servicing. At KempsMPS, we blend maritime expertise with unwavering dedication to redefine industry standards and meet the evolving needs of our valued clients. </p>           </div>

          <p className='contact-link-text'><a className='contact-link' href='/contact'>Contact us</a> today to learn more about our services and how we can help you stay safe on the water.</p>
        </div>
      </div>

    </>
  );
};

export default AboutPage;
