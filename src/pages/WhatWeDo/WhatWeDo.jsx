import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './whatWeDo.scss';
import { Menu } from '../../components/Menu/Menu';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

const wwdVariants = {
  hidden: { y: '100vh' },
  visible: {
    y: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

function WhatWeDo() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <motion.div
        className="whatWeDo_section"
        variants={wwdVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Header />
        <h1>Co děláme</h1>
        <Menu />
      </motion.div>
      <Footer />
    </>
  );
}

export default WhatWeDo;
