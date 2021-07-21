import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import greenChairs from '../../images/graphics/greenChairs.svg';
import './references.scss';

function References() {
  return (
    <motion.div className="references_section">
      <Header />
      <h1>Reference</h1>
      <div className="references_bar"></div>
      <div
        className="references_chairs"
        style={{ backgroundImage: `url(${greenChairs})` }}
      ></div>
      <div className="references_purple"></div>
      <div className="references_pink"></div> 
      <Navbar />
    </motion.div>
  );
}

export default References;
