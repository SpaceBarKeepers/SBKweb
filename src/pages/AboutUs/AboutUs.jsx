import React from 'react';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import './aboutUs.scss';

function AboutUs() {
  return (
    <motion.div className="aboutUs_section">
      <Header />
      <div className="aboutUs_graphics" alt="spacebarkeepers grafika"></div>
      <div className="aboutUs_main">
        <h1>O nás</h1>
      </div>{' '}
      <Navbar />
    </motion.div>
  );
}

export default AboutUs;
