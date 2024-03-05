// MobileMenu.js

import React from 'react';

const MobileMenu = ({ isOpen }) => {
  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Products', link: '#' },
    { label: 'Cart', link: '#' },
  ];

  return (
    <nav
      className={`header__nav-mobile ${
        isOpen ? 'header__nav-mobile--open' : ''
      }`}
    >
      <ul className='header__menu-mobile'>
        {menuItems.map((item, index) => (
          <li key={index} className='header__menu-item-mobile'>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
