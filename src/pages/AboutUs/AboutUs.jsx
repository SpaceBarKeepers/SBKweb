import React from 'react';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './aboutUs.scss';

function AboutUs() {
  return (
    <section className="aboutUs_section">
      <Header />
      <Navbar />
      <div className="aboutUs_graphics" alt="spacebarkeepers grafika"></div>
      <div className="aboutUs_main">
        <h1>O nás</h1>
      </div>
    </section>
  );
}

export default AboutUs;
