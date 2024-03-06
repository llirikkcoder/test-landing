import React from 'react';
import Container from '../Container';
import './Offers.scss';

const Card = ({ title, subtitle, buttonText }) => {
  return (
    <div className='hero__text-section'>
      <div className='hero__title'>{title}</div>
      <div className='hero__subtitle'>{subtitle}</div>
      <button className='hero__button hero__button--primary'>
        {buttonText}
      </button>
    </div>
  );
};

const Offers = () => {
  return (
    <div className='offers__wrap'>
      <Container>
        <h1 className='offers__title'>Offers</h1>
        <div className='offers'>
          <div className='offers__item offers__item--full-width offers__item--offer1'>
            {/* <Card title='Offer 1' subtitle='Subtitle' buttonText='Button' /> */}
          </div>
          <div className='offers__item offers__item--offer2'>
            <h2 className='offers__item-title'>Offer 2</h2>
          </div>
          <div className='offers__item offers__item--offer3'>
            <h2 className='offers__item-title'>Offer 3</h2>
          </div>
          <div className='offers__item offers__item--full-width offers__item--offer4'>
            <h2 className='offers__item-title'>Offer 4</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offers;
