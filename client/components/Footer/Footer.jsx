import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
    <p>© Copyright The Old Post Office and Tearooms {new Date().getFullYear()} | Service with a smile &#9749; | Website by <a className='anchor' href="https://www.ddicecream.co.uk" target='_blank'>Abbie Wills</a></p>
    </div>
    </footer> 
    );
}

export default Footer;
