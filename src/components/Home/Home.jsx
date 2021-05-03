import React from 'react';
import barGraphics from '../../images/graphics/bar_mobile.png';
import './home.scss';

export const Home = () => {
  return (
    <img
      src={barGraphics}
      alt="bar and kosmonauts graphics"
      className="graphics_home"
    />
  );
};
