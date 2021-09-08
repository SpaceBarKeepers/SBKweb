import React from 'react';
import { Home } from '../../components/Home/Home.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { motion } from 'framer-motion';
import './landingPage.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const LandingPage = () => {
  return (
    <motion.div
      className="landingPage_div"
      exit={{ y: '-100' }}
      transition={transition}
    >
      <Header />
      <Home />
      <Navbar />
    </motion.div>
  );
};
