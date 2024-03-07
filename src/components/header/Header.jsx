import React, { useState } from 'react';
import Container from '../container/Container';

import './Header.scss';

const MENU_ITEMS = [
  { label: 'Home', link: '#' },
  { label: 'Products', link: '#offers' },
  {
    label: 'Cart',
    link: '#cart',
    icon: '/images/cart.svg',
    iconHover: '/images/cart-hover.svg',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
                <li
                  key={index}
                  className='header__menu-item'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.icon ? (
                    <a href={item.link}>
                      <img
                        className='header__nav-link'
                        src={
                          hoveredIndex === index ? item.iconHover : item.icon
                        }
                        alt='Icon'
                      />
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
              {!isMenuOpen ? (
                <>
                  <div className='header__burger-line'></div>
                  <div className='header__burger-line'></div>
                  <div className='header__burger-line'></div>
                </>
              ) : (
                <div className='header__cross'>
                  <div className='header__cross-line'></div>
                  <div className='header__cross-line'></div>
                </div>
              )}
            </div>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
