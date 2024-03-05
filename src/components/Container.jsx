import React from 'react';
import './Container.scss';

const Container = ({ children, backgroundColor }) => {
  // const containerStyle = {
  //   backgroundColor: backgroundColor,
  // };

  return (
    // <div style={containerStyle}>
    <div className='container'>{children}</div>
    // </div>
  );
};

export default Container;
