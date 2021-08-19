import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import chairsProjector from '../../images/graphics/Projector.png';
import screen from '../../images/graphics/Platno.png';
import light from '../../images/graphics/Light.png';
import './references.scss';

const referencesVariants = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

function References() {
  return (
    <motion.div
      variants={referencesVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="references_section"
    >
      <Header />      <Navbar />

      <h1>Reference</h1>
      <div className="references_bar"></div>
      <div>
        <img className="projectorScreen" src={screen} alt="" />
      </div>
      <div>
        <img className="projectorLight" src={light} alt="" />
      </div>
      <div
        className="references_chairs"
        style={{ backgroundImage: `url(${chairsProjector})` }}
      ></div>
    </motion.div>
  );
}

export default References;
