// BurgerMenu.js

import React from 'react';

const BurgerMenu = ({ isOpen }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'burger-menu--open' : ''}`}>
      <div className='burger-menu__line'></div>
      <div className='burger-menu__line'></div>
      <div className='burger-menu__line'></div>
    </div>
  );
};

export default BurgerMenu;
