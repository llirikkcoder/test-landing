import React from 'react';
import Button from '../../button/Button';
import './OfferCard.scss';

const OfferCard = ({ title, subtitle, buttonText, image }) => {
  return (
    <div className='offer-card'>
      <img src={image} alt={image} className='offer-card__background' />
      <div className='offer-card__content'>
        <div className='offer-card__title'>{title}</div>
        <div className='offer-card__subtitle'>{subtitle}</div>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default OfferCard;
