import React from 'react';
import './Hero.scss';
import Container from '../container/Container';
import Button from '../button/Button';

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
            <Button text='Learn more' filled={true} />
          </div>
          <img className='hero__image' alt='hero' src='images/hero-earth.png' />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
