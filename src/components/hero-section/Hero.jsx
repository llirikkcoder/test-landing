import React from 'react';
import './Hero.scss';
import Container from '../Container';

const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <div className='hero__wrap'>
          <div className='hero__text-section'>
            <div className='hero__title'>
              Discover the vast
              <br /> expanses of <span>space</span>
            </div>
            <div className='hero__subtitle'>
              Where the possibilities are <span>endless!</span>
            </div>
            <button className='hero__button hero__button--primary'>
              Learn more
            </button>
          </div>
          <img className='hero__image' alt='hero' src='images/hero-earth.png' />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
