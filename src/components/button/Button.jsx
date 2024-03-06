import React from 'react';
import './Button.scss';

const Button = ({ text, filled = false }) => {
  return (
    <button className={`button ${filled ? 'button--primary' : ''}`}>
      {text}
    </button>
  );
};

export default Button;
