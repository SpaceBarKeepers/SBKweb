import React from 'react';
import { Header } from '../../components/Header/Header';
import graphics from '../../images/graphics/bar_mobile_nochairs.png';
import './aboutUs.scss';

function AboutUs() {
  return (
    <section className="aboutUs_section">
      <Header />
      <img
        className="aboutUs_graphics"
        src={graphics}
        alt="spacebarkeepers grafika"
      />
      <div className="aboutUs_main">
        <h1>O nás</h1>
      </div>
    </section>
  );
}

export default AboutUs;
