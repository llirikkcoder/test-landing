import React from 'react';
import './Offers.scss';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers__item offers__item--full-width'>
        <h2 className='offers__item-title'>Offer 1</h2>
      </div>
      <div className='offers__item'>
        <h2 className='offers__item-title'>Offer 2</h2>
      </div>
      <div className='offers__item'>
        <h2 className='offers__item-title'>Offer 3</h2>
      </div>
      <div className='offers__item offers__item--full-width'>
        <h2 className='offers__item-title'>Offer 4</h2>
      </div>
    </div>
  );
};

export default Offers;
