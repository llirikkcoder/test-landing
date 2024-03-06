import React from 'react';
import Container from '../container/Container';
import OfferCard from './offer-card/OfferCard';

import './Offers.scss';

const CARDS_DATA = [
  {
    title: 'Move the borders of reality!',
    subtitle: "Go on a space adventure - it's possible with us!",
    buttonText: 'Learn more',
    image: 'images/card-bg1.jpg',
    fullWidth: true,
  },
  {
    title: 'Second Title',
    subtitle: 'Second Subtitle',
    buttonText: 'Learn more',
    image: 'images/card-bg2.jpg',
  },
  {
    title: 'Third Title',
    subtitle: 'Third Subtitle',
    buttonText: 'Learn more',
    image: 'images/card-bg3.jpg',
  },
  {
    title: 'Fourth Title',
    subtitle: 'Fourth Subtitle',
    buttonText: 'Learn more',
    image: 'images/card-bg4.jpg',
    fullWidth: true,
  },
];

const Offers = () => {
  return (
    <div className='offers__wrap'>
      <Container>
        <h1 className='offers__title'>Offers</h1>
        <div className='offers'>
          {CARDS_DATA.map((card, index) => {
            return (
              <div
                key={index}
                className={`offers__item ${
                  card.fullWidth ? 'offers__item--full-width' : ''
                }`}
              >
                <OfferCard
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  buttonText={card.buttonText}
                />
              </div>
            );
          })}
          ;
        </div>
      </Container>
    </div>
  );
};

export default Offers;
