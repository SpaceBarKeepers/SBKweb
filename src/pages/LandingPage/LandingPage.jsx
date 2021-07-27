import React from 'react';
import { Home } from '../../components/Home/Home.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { motion } from 'framer-motion';
import './landingPage.scss';

const homeVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { duration: 0.5, type: 'tween' } },
};

export const LandingPage = () => {
  return (
    <motion.div
      className="landingPage_div"
   /*    variants={homeVariants}
      inital="hidden"
      animate="visible"
      exit="hidden" */
    >
      <Header />
      {<Home />}{' '}
    </motion.div>
  );
};
