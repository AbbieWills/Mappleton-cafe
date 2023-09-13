import React from 'react';
import './Footer.css';
import lalizas from './lalizas.jpeg'


const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
       <a href='https://www.lalizas.com/' target='_blank'><img className="lalizas" src={lalizas} alt='lalizas-logo'/></a>
    <p>© Copyright Kemps Maritime Services Ltd {new Date().getFullYear()} | Serviced with care &#128295; | Website by <a className='anchor' href="https://www.ddicecream.co.uk" target='_blank'>Abbie Wills</a></p>
    </div>
    </footer> 
    );
}

export default Footer;
