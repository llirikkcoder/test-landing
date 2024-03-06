import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <img src='./images/rocket.svg' alt='rocket' />
        <div className='footer__text'>Exciting space adventure!</div>
      </div>
    </div>
  );
};

export default Footer;
