import React from 'react';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import chairsAboutUs from '../../images/graphics/chairsaboutus.png';
import bara from '../../images/photos/bara.webp';
import kaja from '../../images/photos/kaja.webp';
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

function AboutUs() {
  return (
    <>
      <Navbar />
      <motion.div
        variants={aboutUsVariants}
        initial="hidden"
        animate="visible"
        className="aboutUs_section"
        exit="hidden"
      >
        <Header />
        <main>
          <motion.h1 exit={{ opacity: 0 }} transition={transition}>
            O nás
          </motion.h1>
          <p className="aboutUs_mainText">{textJSON.aboutUs.mainText}</p>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className="aboutUs_chairs"
            style={{ backgroundImage: `url(${chairsAboutUs})` }}
          />

          <div className="aboutUs_us">
            <div>
              <h3>Bára</h3>{' '}
              <div className="aboutUs_window">
                <img className="window_graphics" src={window} alt="okno" />
                <img
                  className="window_photo"
                  src={bara}
                  alt="fotografie Báry"
                />
              </div>
              <p className="aboutUs_text">{textJSON.aboutUs.bara}</p>
              <a className="aboutUs_web" href="https://baramaresova.com">
                baramaresova.com
              </a>
            </div>
            <div>
              <h3>Kája</h3>{' '}
              <div className="aboutUs_window">
                <img className="window_graphics" src={window} alt="okno" />
                <img
                  className="window_photo"
                  src={kaja}
                  alt="fotografie Káji"
                />
              </div>
              <p className="aboutUs_text">{textJSON.aboutUs.karel}</p>
            </div>
          </div>
        </main>
        {/*         <div className="graphics_rocket"></div>
         */}{' '}
      </motion.div>{' '}
    </>
  );
}

export default AboutUs;
