import React from 'react';
import { motion } from 'framer-motion';
import rocket from '../../images/graphics/RaketaNosign.webp';
import './initialDesktop.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const rocketVariants = {
  initial: { y: '-40%', x: '40%', scale: 0.1 },
  animate: {
    y: '-25%',
    x: '-8%',
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 2.5,
      ease: [0.33, 0.43, 0.53, 0.83],
    },
  },
};

function InitialDesktop() {
  return (
    <motion.main animate="animate" className="initialDesktop">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
          },
        }}
      >
        <Navbar />{' '}
      </motion.div>
      <Link to="/codelame">
        <motion.div
          className="frame"
          variants={rocketVariants}
          animate="animate"
          initial="initial"
        >
          <motion.img src={rocket} alt="okno" transition={transition} />
        </motion.div>
      </Link>
    </motion.main>
  );
}

export default InitialDesktop;
