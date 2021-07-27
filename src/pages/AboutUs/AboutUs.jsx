import React from 'react';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import window from '../../images/graphics/Window.png';
import { motion } from 'framer-motion';
import './aboutUs.scss';

function AboutUs() {
  return (
    <motion.div className="aboutUs_section">
      <Header />
      <div className="aboutUs_main">
        <h1>O nás</h1>
        <div>
          <img src={window} alt="" />
        </div>
      </div>{' '}
      <Navbar />
    </motion.div>
  );
}

export default AboutUs;
