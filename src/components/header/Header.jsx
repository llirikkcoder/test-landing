import React, { useState } from 'react';
import Container from '../container/Container';

import './Header.scss';

const MENU_ITEMS = [
  { label: 'Home', link: '#' },
  { label: 'Products', link: '#' },
  { label: 'Cart', link: '#', icon: '/images/cart.svg' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <Container>
        <div className='header__wrap'>
          <img className='header__logo' src='/images/logo.svg' alt='Logo' />
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          >
            <ul className='header__menu'>
              {MENU_ITEMS.map((item, index) => (
                <li key={index} className='header__menu-item'>
                  {item.icon ? (
                    <a href={item.link}>
                      <img class='header__nav-link' src={item.icon} />
                    </a>
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
