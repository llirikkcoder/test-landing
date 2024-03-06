import React from 'react';
import Container from '../container/Container';
import OfferCard from './offer-card/OfferCard';
import ReadMore from '../read-more/ReadMore';

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
    title: 'Space is not just stars and planets',
    subtitle: 'Go on a space adventure',
    buttonText: 'Learn more',
    image: 'images/card-bg2.jpg',
  },
  {
    title: 'For those who dream of stars',
    subtitle: 'Our offer: make your dream come true',
    buttonText: 'Learn more',
    image: 'images/card-bg3.jpg',
  },
  {
    title: 'Fulfill your fantastic dreams',
    subtitle: 'Space has never been so close',
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
                  largerText={card.fullWidth}
                />
              </div>
            );
          })}
        </div>
        <h1 className='offers__title'>Embark on a space journey</h1>
        <ReadMore />
      </Container>
    </div>
  );
};

export default Offers;
