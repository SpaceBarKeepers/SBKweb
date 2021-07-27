import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import './whatWeDo.scss';

function WhatWeDo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="whatWeDo_section"
    >
      <Header />
      <Navbar />
      <h1>O nás</h1>
      <div className="wwd_bar"></div>
      {/* <div
        className="wwd_chairs"
        style={{ backgroundImage: `url(${blueChairs})` }}
      ></div> */}
      <div className="whatWeDo_purple"></div>
      <div className="whatWeDo_pink"></div>
    </motion.div>
  );
}

export default WhatWeDo;
