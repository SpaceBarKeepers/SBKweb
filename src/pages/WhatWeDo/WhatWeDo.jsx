import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import './whatWeDo.scss';
import { Menu } from '../../components/Menu/Menu';

const wwdVariants = {
  hidden: { y: '100vh' },
  visible: {
    y: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

function WhatWeDo() {
  return (
    <motion.div
      className="whatWeDo_section"
      variants={wwdVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header /> <Navbar />
      <h1>Co děláme</h1>
      <Menu />
    </motion.div>
  );
}

export default WhatWeDo;
