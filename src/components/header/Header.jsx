import React, { useState } from 'react';
import Container from '../Container';

import './Header.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Products', link: '#' },
    { label: 'Cart', link: '#', icon: '/images/cart.svg' },
  ];

  return (
    <header className='header'>
      <Container>
        <div className='header__wrap'>
          <img className='header__logo' src='/images/logo.svg' alt='Logo' />
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          >
            <ul className='header__menu'>
              {menuItems.map((item, index) => (
                <li key={index} className='header__menu-item'>
                  {item.icon ? (
                    <img class='header__nav-link' src={item.icon} />
                  ) : (
                    <a href={item.link}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <button className='header__burger-menu' onClick={toggleMenu}>
            <div
              className={`header__burger ${
                isMenuOpen ? 'header__burger--open' : ''
              }`}
            >
              <div className='header__burger-line'></div>
              <div className='header__burger-line'></div>
              <div className='header__burger-line'></div>
            </div>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
