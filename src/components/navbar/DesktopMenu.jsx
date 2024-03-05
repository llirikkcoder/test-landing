// DesktopMenu.js

import React from 'react';

const DesktopMenu = () => {
  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Products', link: '#' },
    { label: 'Cart', link: '#' },
  ];

  return (
    <nav className="header__nav">
      <ul className="header__menu">
        {menuItems.map((item, index) => (
          <li key={index} className="header__menu-item">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
