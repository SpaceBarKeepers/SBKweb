import React from 'react';
import { Home } from '../../components/Home/Home.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { motion } from 'framer-motion';
import './landingPage.scss';

export const LandingPage = () => {
  return (
    <motion.div className="landingPage_div">
      <Header />
      <Home />
    </motion.div>
  );
};
