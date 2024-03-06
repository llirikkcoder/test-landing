import React from 'react';
import './Offers.scss';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offer offer--full-width'>
        <h2 className='offer__title'>Offer 1</h2>
      </div>
      <div className='offer'>
        <h2 className='offer__title'>Offer 2</h2>
      </div>
      <div className='offer'>
        <h2 className='offer__title'>Offer 3</h2>
      </div>
      <div className='offer offer--full-width'>
        <h2 className='offer__title'>Offer 4</h2>
      </div>
    </div>
  );
};

export default Offers;
