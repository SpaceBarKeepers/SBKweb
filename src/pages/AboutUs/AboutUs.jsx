import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import chairsAboutUs from '../../images/graphics/kreslastul1.png';
import textJSON from '../../texts.json';
import window from '../../images/graphics/Window.png';
import './aboutUs.scss';

const aboutUsVariants = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function AboutUs({ imageDetails, image }) {
  return (
    <motion.div
      variants={aboutUsVariants}
      initial="hidden"
      animate="visible"
      className="aboutUs_section"
    >
      <Header />
      <Navbar />
      <motion.h1 exit={{ opacity: 0 }} transition={transition}>
        O nás
      </motion.h1>
      <div className="graphics">
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="aboutUs_chairs"
          style={{ backgroundImage: `url(${chairsAboutUs})` }}
        ></motion.div>
        <div
          className="thumbnail"
          ref={image}
          style={{
            width: imageDetails.width,
            height: imageDetails.height,
          }}
        >
          <div className="frame aboutUs_window">
            <Link to="/onas/informace">
              <motion.img
                src={window}
                alt="okno"
                whileHover={{ scale: 1.1 }}
                transition={transition}
              />
              <div className="aboutUs_content">
                <h2>O nás</h2>
                <p>{textJSON.aboutUs.mainText}</p>
                <h3>Bára</h3>
                <p>{textJSON.aboutUs.bara}</p>
                <h3>Kája</h3>
                <p>{textJSON.aboutUs.karel}</p>
              </div>
            </Link>
          </div>
        </div>
        <motion.div></motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
