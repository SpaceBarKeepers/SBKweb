import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import './whatWeDo.scss';

function WhatWeDo() {
  return (
    <motion.div className="whatWeDo_section">
      <Header />
      <Navbar />
      <h1>Co děláme</h1>
    </motion.div>
  );
}

export default WhatWeDo;
