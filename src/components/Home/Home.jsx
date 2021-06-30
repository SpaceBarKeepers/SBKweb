import React from 'react';
import barGraphics from '../../images/graphics/bar_mobile.png';
import Navbar from '../Navbar/Navbar';
import './home.scss';

export const Home = () => {
  return (
    <section className="homeSection">
      <img
        src={barGraphics}
        alt="bar and kosmonauts graphics"
        className="graphics_home"
      />
      <Navbar />
    </section>
  );
};
