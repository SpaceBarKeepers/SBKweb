import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import chairsAboutUs from '../../images/graphics/kreslastul1.png';
import window from '../../images/graphics/Window.png';
import './aboutUs.scss';

const aboutUsVariants = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

const windowVariants = {
  hover: {
    scale: 1.5,
    transition: {
      yoyo: 5,
      duration: 0.5,
    },
  },
};

function AboutUs() {
  const { push } = useHistory();
  return (
    <motion.div
      variants={aboutUsVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="aboutUs_section"
    >
      <Header />
      <Navbar />
      <h1>O nás</h1>
      <div className="aboutUs_bar"></div>
      <div
        className="aboutUs_chairs"
        style={{ backgroundImage: `url(${chairsAboutUs})` }}
      ></div>
      <motion.div
        className="aboutUs_window"
        style={{ backgroundImage: `url(${window})` }}
        variants={windowVariants}
        whileHover="hover"
        onClick={() => push('/onas/informace')}
      ></motion.div>
    </motion.div>
  );
}

export default AboutUs;
