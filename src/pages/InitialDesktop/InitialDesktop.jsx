import React from 'react';
import { motion } from 'framer-motion';
import rocket from '../../images/graphics/RaketaNosign.png';
import './initialDesktop.scss';
import Navbar from '../../components/Navbar/Navbar';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const rocketVariants = {
  initial: { y: 0 },
  animate: {
    y: '60%',
    scale: 7,
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
      <div className="iDthumbnail">
        <motion.div
          className="iDframe"
          variants={rocketVariants}
          animate="animate"
          initial="initial"
        >
            <motion.img src={rocket} alt="okno" transition={transition} />
        </motion.div>
      </div>
    </motion.main>
  );
}

export default InitialDesktop;
