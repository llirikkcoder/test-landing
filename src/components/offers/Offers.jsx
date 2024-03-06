import React from 'react';
import Container from '../container/Container';
import OfferCard from './offer-card/OfferCard';

import './Offers.scss';

const CARDS_DATA = [
  {
    title: 'Move the borders of reality!',
    subtitle: "Go on a space adventure - it's possible with us!",
    buttonText: 'First Button',
  },
  {
    title: 'Second Title',
    subtitle: 'Second Subtitle',
    buttonText: 'Second Button',
  },
  {
    title: 'Third Title',
    subtitle: 'Third Subtitle',
    buttonText: 'Third Button',
  },
  {
    title: 'Fourth Title',
    subtitle: 'Fourth Subtitle',
    buttonText: 'Fourth Button',
  },
];

const Offers = () => {
  return (
    <div className='offers__wrap'>
      <Container>
        <h1 className='offers__title'>Offers</h1>
        <div className='offers'>
          <div className='offers__item offers__item--full-width'>
            <OfferCard
              image={'images/card-bg1.jpg'}
              title={CARDS_DATA[0].title}
              subtitle={CARDS_DATA[0].subtitle}
              buttonText={CARDS_DATA[0].buttonText}
            />
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
